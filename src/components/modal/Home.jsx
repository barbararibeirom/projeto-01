import axios from "axios";
import { useEffect, useState } from 'react';


const Home = () => {

    const [data, setData] = useState(null);
    
    const fetchData = async() => {
      try {
          const response = await axios.get("https://infracode-api.onrender.com/produtos");
          setData(response.data);
          console.log(response);
      } catch (error) {
          
      }
  }

    useEffect(( ) => {
      fetchData();   
    });
    

    const Card = ({ item }) => (
        <div className="col-4">
          <div className="card">
            <img src={item.imagens[0].url} className="card-img-top" alt={item.nome} style={{width:'100%'}} />
            <div className="card-body">
              <h2 className="card-title">{item.nome}</h2>
              <p className="card-text">{item.descricao}</p>
              <p className="card-text">{item.preco}</p>
            </div>
          </div>
        </div>
      );
      
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