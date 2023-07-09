import axios from "axios";
import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
  const { identificador } = useParams();
  const [data, setData] = useState(null);

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
    <div className="col-3" style={{ marginBottom: '20px' }}>
      <div className="card" style={{ height: '100%' }}>
        <div className="card-body">
          <h2 className="card-title">{item.nome}</h2>
          <p className="card-text">{item.descricao}</p>
          <p className="card-text">{item.preco}</p>
          <p className="card-text">{item.quantidade}</p>
        </div>
      </div>
    </div>
  );

  const App = () => {
    return (
      <div className="app container">
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
