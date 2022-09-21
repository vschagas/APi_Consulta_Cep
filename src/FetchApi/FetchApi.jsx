export async function getAddressByCep(cep) {
  const result = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  const response = result.json();
  return response;
}