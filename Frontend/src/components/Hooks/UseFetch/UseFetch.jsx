import React from "react";

const UseFetch = () => {
  // Estados
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const request = React.useCallback(async (url, options = {}) => {
    let resp = null; // Inicializa a variável resp
    let json = null; // Inicializa a variável json

    try {
      setLoading(true); // Inicia o estado de carregamento
      setError(null); // Limpa erros anteriores
      setData(null); // Limpa dados anteriores

      resp = await fetch(url, options); // Faz a requisição

      // Verifica se a resposta é válida
      if (!resp.ok) {
        throw new Error(`Fetch failed: ${resp.status} - ${resp.statusText}`);
      }

      json = await resp.json(); // Obtém a resposta em JSON
      setData(json); // Define os dados no estado

      return { resp, json }; // Retorna a resposta e os dados JSON
    } catch (error) {
      setError(error.message); // Define o erro no estado
      return { resp: null, json: null }; // Retorna valores nulos em caso de erro
    } finally {
      setLoading(false); // Finaliza o estado de carregamento
    }
  }, []);

  return { data, error, loading, request, setLoading }; // Retorna os parâmetros do hook
};

export default UseFetch;
