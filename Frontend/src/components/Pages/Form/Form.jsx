import React from 'react';
import Button from '../../Button/Button';
import SuspenseList from '../../SuspenseList/SuspenseList';
import Input from './Input/Input';
import './Form.css';
import UseFetch from '../../Hooks/UseFetch/UseFetch';

const Form = ({ registerBook, categories, registerCategory }) => {
  const [form, setForm] = React.useState({
    name: '',
    description: '',
    image: '',
    category: '',
  });

  const [addCategory, setAddCategory] = React.useState('');
  const [addColorCategory, setAddColorCategory] = React.useState('');
  const [showErrors, setShowErrors] = React.useState(false);
  const [successMessage, setSuccessMessage] = React.useState('');

  const { request, loading, error } = UseFetch();
  const url = `https://book-ideal-api.onrender.com/books`;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const salveClick = async (event) => {
    event.preventDefault();

    const { name, description, image, category } = form;
    const isValid = name && description && category;

    if (isValid) {
      try {
        const newBook = { name, description, image, category };
        const options = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newBook),
        };

        // Usando o hook useFetch para enviar os dados
        const response = await request(url, options);

        if (response) {
          registerBook(newBook);
          setForm({ name: '', description: '', image: '', category: '' });
          setShowErrors(false);
          setSuccessMessage('Livro adicionado com sucesso!');
        }
      } catch (err) {
        console.error('Erro ao adicionar livro:', err);
      }
    } else {
      setShowErrors(true);
    }
  };

  const salveCategory = (event) => {
    event.preventDefault();

    if (addCategory && addColorCategory) {
      registerCategory({
        name: addCategory,
        color: addColorCategory,
      });

      setShowErrors(false);
      setAddCategory('');
      setAddColorCategory('');
    } else {
      setShowErrors(true);
    }
  };

  return (
    <section className="form">
      <form onSubmit={salveClick}>
        <div className="detail-form"></div>
        <h2>Preencha os dados para recomendar um livro</h2>
        <Input
          htmlFor="name"
          name="name"
          type="text"
          value={form.name}
          setValue={(value) => setForm({ ...form, name: value })}
          showError={showErrors}
          label="Nome"
          placeholder="Digite seu nome"
          requiredMessage="Por favor, preencha o campo Nome"
        />

        <Input
          htmlFor="description"
          name="description"
          type="text"
          value={form.description}
          setValue={(value) => setForm({ ...form, description: value })}
          showError={showErrors}
          label="Descrição"
          placeholder="Digite breve descrição"
          requiredMessage="Por favor, preencha o campo Descrição"
        />

        <Input
          htmlFor="image"
          name="image"
          type="url"
          value={form.image}
          setValue={(value) => setForm({ ...form, image: value })}
          label="Imagem"
          placeholder="Digite uma URL de imagem"
        />

        <SuspenseList
          label="Categorias"
          options={categories}
          value={form.category}
          setValue={(value) => setForm({ ...form, category: value })}
        />

        {successMessage && <p className="success">{successMessage}</p>}
        {error && <p className="error">Erro ao enviar dados: {error.message}</p>}

        <Button disabled={loading}>{loading ? 'Enviando...' : 'Adicionar Livro'}</Button>
      </form>

      <form onSubmit={salveCategory}>
        <h2>Preencha os dados de uma nova categoria de livros</h2>
        <Input
          htmlFor="team"
          name="team"
          type="text"
          value={addCategory}
          setValue={setAddCategory}
          showError={showErrors}
          label="Categoria"
          placeholder="Digite seu nome"
          requiredMessage="Por favor, preencha o campo Nome da Categoria"
        />

        <Input
          htmlFor="color"
          name="color"
          type="color"
          value={addColorCategory}
          setValue={setAddColorCategory}
          showError={showErrors}
          label="Cor"
          placeholder="Digite a cor do time"
          requiredMessage="Por favor, adicione a Cor da Categoria"
        />
        <Button>Adicionar</Button>
      </form>
    </section>
  );
};

export default Form;
