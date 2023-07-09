import axios from "axios";
import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

const Details = () => {
  const { identificador } = useParams();
  const [data, setData] = useState(null);

  const formatCurrency = (value) => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(`https://infracode-api.onrender.com/produtos/${identificador}`);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  }, [identificador]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const Card = ({ item }) => (
    <div className="d-flex justify-content-center" style={{marginTop:'25px'}}>
    <div className="col-lg-6 mb-4 border" style={{ marginBottom: '20px', backgroundColor:'#fff', paddingTop:'20px' }}>
      <Carousel interval={null}>
        {item.imagens.slice(0, 3).map((imagem, index) => (
          <Carousel.Item key={index}>
            <img src={imagem.url} className="d-block w-100" alt={`Imagem ${index}`} style={{ height: '250px' }} />
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="card-body">
        <h2 className="card-title">{item.nome}</h2>
        <p className="card-text">{item.descricao}</p>
        <div className="d-flex justify-content-between align-items-center">
          <p className="card-text">{formatCurrency(item.preco)}</p>
          <button className="btn btn-success">Adicionar</button>
        </div>
      </div>
    </div>
    </div>
  );

  const App = () => {
    return (
      <div className="app container d-flex justify-content-center align-items-center">
      <div className="row">
          {data ? (
            <Card item={data} />
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="app container">
        <div className="row">
          <App />
        </div>
      </div>
    </>
  );
};

export default Details;
