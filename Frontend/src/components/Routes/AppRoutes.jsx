import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Menu from "../Menu/Menu";
import Footer from "../Footer/Footer";
import Banner from "../Banner/Index";
import Register from "../Pages/Form/Form";
import Category from "../Category/Category";
import Emphasis from "../Emphasis/Emphasis";
import Detail from "../Emphasis/Detail/Detail";
import Search from "../Pages/Search/Search";

const AppRoutes = ({
  categories,
  data,
  loading,
  error,
  handleColorCategory,
  addNewBook,
  deleteBook,
  addNewCategory,
  toggleFavorite,

}) => {
  return (
    <>
      <Menu />
      <main>
        <Routes>
          {/* Layout principal */}
          <Route
            path="/"
            element={
              <>
                {/* Renderiza a página ( contéudo das rotas filhas) */}
                <Outlet />
              </>
            }
          >
            {/* Rotas aninhadas */}
            <Route
              index
              element={
                <>
                  <Banner />
                  <Detail />
                  {loading && <p style={{ color: "#000" }}>Carregando...</p>}
                  {error && <span style={{ color: "red" }}>{error}</span>}
                  {!loading && data && (
                    <Emphasis
                      img={data.length > 0 ? data[data.length - 1].image : null}
                      title={data.length > 0 ? data[data.length - 1].name : "Nenhum livro disponível"}
                      description={
                        data.length > 0
                          ? data[data.length - 1].description
                          : "Adicione um livro para vê-lo em destaque."
                      }
                      categories={categories.map((item) => item.name)}
                      registerBook={addNewBook}
                      registerCategory={addNewCategory}
                      
                    />
                  )}
                  <h2 className="title">Recomenda Livros</h2>
                  {loading && <p style={{ color: "#000" }}>Carregando...</p>}
                  {error && <span style={{ color: "red" }}>{error}</span>}
                  {!loading &&
                    data &&
                    categories.map((category) => (
                      <Category
                        key={category.id}
                        category={category}
                        title={category.name}
                        book={data.filter((b) => b.category === category.name)}
                        deleteBook={deleteBook}
                        changeColorCategory={handleColorCategory}
                        toggleFavorite={toggleFavorite}
                      />
                    ))}
                </>
              }
            />
            <Route
              path="/cadastro"
              element={
                <Register
                  categories={categories.map((item) => item.name)}
                  registerBook={addNewBook}
                  registerCategory={addNewCategory}
                />
              }
            />
            <Route
              path="/buscar"
              element={
                <>
                  <Search
                    data={data}
                    deleteBook={deleteBook}
                    categories={categories}
                    loading={loading}
                    error={error}
                    handleColorCategory={handleColorCategory}
                    toggleFavorite={toggleFavorite}
                  />
                </>
              }
            />
          </Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default AppRoutes;
