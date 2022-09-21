import { useState } from "react";
import { getAddressByCep } from "./FetchApi/FetchApi";

function App() {
  const[cep, setCep] = useState('');
  const[returnData, setReturnData] = useState({});

  const handleInputCep = ({target: { value } }) => {
    let data = value.replace("-",'')
    setCep(data)
  }
  const handleGetCep = async () => {
    if (cep === "") {
      alert("Por Favor digite seu CEP!")
      return;
    }

    const address = await getAddressByCep(cep);
    setReturnData(address)

    if (address.erro === "true") {
      alert("Cep inválido")
      setCep("")
    }
    
  }

  return (
    <div className="container">
      <h1>Digite o cep</h1>
      <form className="form-box">
        <div className="surch-box">
          <input className="input-cep"
            name="cep"
            onChange={ handleInputCep }
            placeholder="CEP:"
            type="text"
          />
          <button
            onClick={ handleGetCep }
            type="button"
          >
            Pesquisar
          </button>
        </div>
        <input
          placeholder="Endereço:"
          value={ returnData.logradouro }
        />
        <input
          placeholder="Número:"
          type="text"
        />
        <input
          placeholder="Bairro:"
          value={ returnData.bairro }
        />
        <input
          placeholder="Estado:"
          value={ returnData.localidade }
        />
        <input
          placeholder="UF:"
          value={ returnData.uf }
          />
      </form>
    </div>
  );
}

export default App;
