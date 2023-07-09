import axios from "axios";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import '../../css/Home.module.css';


const Home = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://infracode-api.onrender.com/produtos");
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const formatCurrency = (value) => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderCarouselItems = () => {
    if (!data || data.length === 0) {
      return null;
    }

    return data.map((item, index) => (
      <Carousel.Item key={index} >
        <img src={item.imagens[0].url} className="d-block w-100 carousel-image" alt={item.nome} style={{height:'400px'}}/>
        <Carousel.Caption>
          <h3>{item.nome}</h3>
          <p>{item.descricao}</p>
        </Carousel.Caption>
      </Carousel.Item>
    ));
  }

  const Card = ({ item }) => (
    <div className="col-3 mb-4">
      <div className="card" style={{ height: '100%' }}>
        <img src={item.imagens[0].url} className="card-img-top" alt={item.nome} style={{ width: '100%', height: '250px' }} />
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <h2 className="card-title" style={{ fontSize: '100%' }}>{item.nome}</h2>
            <p className="card-text">{item.descricao}</p>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <p className="card-text">{formatCurrency(item.preco)}</p>
            <Link to={`/detalhes/${item.id}`}>
              <button className="btn btn-success" style={{marginTop:'-20px'}}>Detalhes</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  const App = () => {
    return (
      <div className="app container">
        <div className="row">
          <div className="col-12 mb-4">
            <Carousel>
              {renderCarouselItems()}
            </Carousel>
          </div>
          <div className="col-12">
            <div className="row">
              {data?.map((item, index) => (
                <Card key={index} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="app container">
      <div className="row">
        <App />
      </div>
    </div>
  );
};

export default Home;
