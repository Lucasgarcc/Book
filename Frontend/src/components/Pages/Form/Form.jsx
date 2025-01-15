import React from 'react';
import Button from '../../Button/Button';
import SuspenseList from '../../SuspenseList/SuspenseList';
import Input from './Input/Input';
import './Form.css';

const Form = ({ registerBook, categories, registerCategory }) => {

  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [image, setImage] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [addCategory, setAddCategory] = React.useState('');
  const [addColorCategory, setAddColorCategory] = React.useState('');
  const [showErrors, setShowErrors] = React.useState(false);

  const salveClick = (event) => {
    event.preventDefault()
    const isValid = name && description && category;
    // Verifica se nome E posição estão preenchidos
    
    if (isValid) {
      registerBook({ name, description, image, category, addCategory});
      setName('');
      setDescription('');
      setImage('');
      setCategory('');
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
      })

      //Resetando os campos após adicionar o time
      setShowErrors(false);
      setAddCategory('');
      setAddColorCategory('');

    } else {
      setShowErrors(true);
    }
  }

  return (
    <section className="form">
   
      <form onSubmit={salveClick}>
      <div className='detail-form'></div>
        <h2>Preencha os dados para recomendar um livro</h2>
        <Input
          htmlFor="nome"
          name="nome"
          type="text"
          value={name}
          setValue={setName}
          showError={showErrors}
          label="Nome"
          placeholder="Digite seu nome"
          requiredMessage="Por favor, preencha o campo Nome "
        />

        <Input
          htmlFor="descrição"
          name="descrição"
          type="text"
          value={description}
          setValue={setDescription}
          showError={showErrors}
          label="Descrição"
          placeholder="Digite breve descrição"
          requiredMessage="Por favor, preencha o campo Descrição "
        />

        <Input
          htmlFor="imagem"
          name="imagem"
          type="url"
          label="Imagem"
          value={image}
          setValue={setImage}
          placeholder="Digite uma URL de imagem"
        />
        <SuspenseList label="Catégorias" options={categories} value={category} setValue={setCategory} />
        <Button>Criar Card</Button>
      </form>

      <form onSubmit={salveCategory}>
        <h2>Preencha os dados de uma nova cátegoria de livros</h2>
        <Input
          htmlFor="team"
          name="team"
          type="text"
          value={addCategory}
          setValue={setAddCategory}
          showError={showErrors}
          label= "Catégoria"
          placeholder="Digite seu nome"
          requiredMessage="Por favor, preencha o campo nome do Categoria "
        />

        <Input
          htmlFor="color"
          name="color"
          type="color"
          value={addColorCategory}
          setValue={setAddColorCategory}
          showError={showErrors}
          label="Color"
          placeholder="Digite a cor do time"
          requiredMessage="Por favor, adicione a Cor do Categoria "
        />
        <Button>Adicionar </Button>
      </form>
    </section>
  );
};

export default Form;