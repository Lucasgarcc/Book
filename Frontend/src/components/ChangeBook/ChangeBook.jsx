import React from "react";
import './ChangeBook.css';
import Input from "../Pages/Form/Input/Input";
import SuspenseList from "../SuspenseList/SuspenseList";
import Button from "../Button/Button";

const ChangeBook = ({ registerBook, categories }) => {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [image, setImage] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [showErrors, setShowErrors] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && description && category) {
      registerBook({ name, description, image, category });
      setName('');
      setDescription('');
      setImage('');
      setCategory('');
      setShowErrors(false);
    } else {
      setShowErrors(true);
    }
  };

  return (
    <section className="change-book">
      <form  onSubmit={handleSubmit}>
      <h2>Alterar os dados do livro</h2>
      <Input
        htmlFor="nome"
        name="nome"
        type="text"
        value={name}
        setValue={setName}
        showError={showErrors}
        label="Nome"
        placeholder="Digite o nome do livro"
        requiredMessage="Por favor, preencha o campo Nome"
      />
      <Input
        htmlFor="descrição"
        name="descrição"
        type="text"
        value={description}
        setValue={setDescription}
        showError={showErrors}
        label="Descrição"
        placeholder="Digite uma breve descrição"
        requiredMessage="Por favor, preencha o campo Descrição"
      />
      <Input
        htmlFor="imagem"
        name="imagem"
        type="url"
        value={image}
        setValue={setImage}
        label="Imagem"
        placeholder="Digite a URL da imagem"
      />
      <SuspenseList
        label="Categorias"
        options={categories}
        value={category}
        setValue={setCategory}
      />
      <Button>Salvar Alterações</Button>
      </form>
    </section>

  );
};

export default ChangeBook;
