import React from "react";
import Button from "../Button/Button";
import SuspenseList from "../SuspenseList/SuspenseList";
import Input from "../Pages/Form/Input/Input";
import "../Pages/Form/Form.css";
import UseFetch from "../Hooks/UseFetch/UseFetch";

const ChangeBook = ({ categories }) => {

  const [form, setForm] = React.useState({ name: "", description: "", image: "", category: "" });
  const [showErrors, setShowErrors] = React.useState(false);
  const [successMessage, setSuccessMessage] = React.useState("");
  const [dataBook, setDataBook] = React.useState([]); // Estado para armazenar os dados do livro

  const {loading, error, request } = UseFetch();
  const url = `https://book-ideal-api.onrender.com/books`;

  // Busca inicial de dados
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await request(url);
       //console.log("Dados recebidos da API:", response);
        setDataBook(response.json || []); // Atualiza o estado com os dados da API
      } catch (err) {
        console.error("Erro ao buscar dados:", err);
      }
    };
    fetchData();
  }, [request]);


  const handleUpdate = async (event) => {
    event.preventDefault();

    const { name, description, image, category } = form;
    const isValid = name && description && image && category;

    if (!isValid) {
      setShowErrors(true);
      return;
    }

    // Busca o ID do livro com base no nome informado
    const bookToUpdate = dataBook.find((book) => book.name.toLowerCase() === form.name.toLowerCase());
    if (!bookToUpdate) {
      setShowErrors({ name: "Livro não encontrado. Verifique o nome informado." });
      return;
    }

    const urlBook = `https://book-ideal-api.onrender.com/books/${bookToUpdate.id}`;

    const options = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    };

   
    try {
      const response = await request(urlBook, options);
      //console.log("Resposta da API:", response);

        if (response?.resp?.ok) {
          setSuccessMessage("Livro atualizado com sucesso!");
          setForm({ name: '', description: '', image: '', category: '' });
          setShowErrors(false);

          // Atualiza a lista de livros com os dados atualizados
          setDataBook((prevData) =>
            prevData.map((book) =>
              book.id === bookToUpdate.id ? { ...book, ...form } : book
            )
          );
        } else {
          throw new Error(
            `Erro ${response?.resp?.status || "desconhecido"}: ${
              response?.json?.message || "Erro desconhecido"
            }`
          );
        }
    } catch (err) {
      console.error("Erro ao atualizar livro:", err);
    }
    
  };

  return (
    <section className="form">
      <form onSubmit={handleUpdate}>
        <h2>Atualizar informações do livro</h2>
        <Input
          htmlFor="name"
          name="name"
          type="text"
          value={form.name}
          setValue={(value) => setForm({ ...form, name: value })}
          showError={showErrors}
          label="Nome"
          placeholder="Digite o nome do livro"
          requiredMessage='Por favor, preencha o campo Nome '
        />
        <Input
          htmlFor="description"
          name="description"
          type="text"
          value={form.description}
          setValue={(value) => setForm({ ...form, description: value })}
          showError={showErrors}
          label="Descrição"
          placeholder="Digite uma breve descrição"
          requiredMessage={ "Por favor, preencha o campo Descrição "}
        />
        <Input
          htmlFor="image"
          name="image"
          type="url"
          value={form.image}
          setValue={(value) => setForm({ ...form, image: value })}
          showError={showErrors}
          label="Imagem"
          placeholder="Digite uma URL de imagem"
          requiredMessage={ "Por favor, preencha o campo Imagem "}
        />
        <SuspenseList
          label="Categorias"
          options={categories}
          value={form.category}
          setValue={(value) => setForm({ ...form, category: value })}
        />
        {successMessage && <p className="success">{successMessage}</p>}
        {error && <p className="error">Erro ao enviar dados: {error.message}</p>}
        <Button disabled={loading}>{loading ? "Atualizando..." : "Atualizar Livro"}</Button>
      </form>
    </section>
  );
};

export default ChangeBook;
