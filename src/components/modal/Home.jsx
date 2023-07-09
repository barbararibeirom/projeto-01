import axios from "axios";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";


const Home = () => {

    const [data, setData] = useState(null);
    
    const fetchData = async() => {
      try {
          const response = await axios.get("https://infracode-api.onrender.com/produtos");
          setData(response.data);
      } catch (error) {
          
      }
  }

  
  const formatCurrency = (value) => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

    useEffect(( ) => {
      fetchData();   
    });
    
    function handleDetalhesClick(id) {
    console.log('https://infracode-api.onrender.com/produtos/', id);
  }

    function Card({ item }) {
    return (
      <div className="col-3" style={{ marginBottom: '20px' }}>
        <div className="card" style={{ height: '100%' }}>
          <img src={item.imagens[0].url} className="card-img-top" alt={item.nome} style={{ width: '100%', height: '250px' }} />
          <div className="card-body">
            <h2 className="card-title" style={{ fontSize: '100%' }}>{item.nome}</h2>
            <p className="card-text">{item.descricao}</p>
            <p className="card-text">{formatCurrency(item.preco)}</p>
            <Link to={`/detalhes/${item.id}`}> <button className="btn btn-secondary" onClick={() => handleDetalhesClick(item.id)}>Detalhes</button> </Link>
          </div>
        </div>
      </div>
    );
  }
      
    const App = () => {
        return (
            <div className="app container">
            <div className="row">
              {data?.map((item, index) => (
                <Card key={index} item={item} />
              ))}
            </div>
          </div>
        );
      };


    return (
        <>
        <div className="app conteiner">
            <div className="row">
                <App />
            </div>           
        </div>
        </>

    );
  };
  
  export default Home;