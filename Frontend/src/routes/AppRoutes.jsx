import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Menu from "../components/Menu/Menu";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Banner/Index";
import Register from "../pages/Form/Form";
import Category from "../components/Category/Category";
import Emphasis from "../components/Emphasis/Emphasis";
import Detail from "../components/Emphasis/Detail/Detail";
import Search from "../pages/Search/Search";
import Loading from "../components/Loading/Loading";

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
                  {loading && <Loading /> }
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
                  {loading && <Loading />}
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
