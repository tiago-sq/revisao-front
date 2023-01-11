const BASE_URL = 'https://brasilapi.com.br/api';

const getStates = async () => {
  try {
    const request = await fetch(`${BASE_URL}/ibge/uf/v1`);
    if (!request.ok) {
      throw new Error(`[${request.statusText}] Ocorreu um erro durante a requisição`);
    }
    const response = await request.json();
    return response;
  } catch(e) {
    console.warn(e.message);
  }
}

const getCities = async (uf) => {
  try {
    const request = await fetch(`${BASE_URL}/ibge/municipios/v1/${uf}`);
    if (!request.ok) {
      throw new Error(`[${request.statusText}] Ocorreu um erro durante a requisição`);
    }
    const response = await request.json();
    return response;
  } catch(e) {
    console.warn(e.message);
  }
}

const getAddress = async (cep) => {
  try {
    const request = await fetch(`${BASE_URL}/cep/v2/${cep}`);
    if (!request.ok) {
      throw new Error(`[${request.statusText}] Ocorreu um erro durante a requisição`);
    }
    const response = await request.json();
    return response;
  } catch(e) {
    console.warn(e.message);
  }
}

export { getStates, getCities, getAddress };