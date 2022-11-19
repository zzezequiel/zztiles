import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import fetchData from '../../../../../api/Api'


const url = "http://localhost:4000/porcelanatos";

const Destacados = () => {

    const [destacados, setDestacados] = useState([])

    useEffect(() => {
       const response = async ()=> {
       const data = await fetchData(url);
       setDestacados(data);
   
       }
       response();
     }, [url])

     console.log(destacados);

  return (
    <div className='container'>
      <div className='row text-center'><h2>Destacados</h2></div>
        <div className='row mt-3'>
            {destacados? destacados.map((product, z) => (
                
                  <div className="col padding_leri shadow-sm rounded cont-product cont-all" key={z}>
                   
                    <Link to={`/detail-product/${product.id}`} className="product-box text-center link-off">
                      <figure><img className="product-img" src={product.img} alt="#"/></figure>
                      <div><h6 className='title-product text-center'>{product.title}</h6></div>
                      </Link>
                  </div>
                
            )) : "no destacados"}
        </div>
    </div>
  )
}

export default Destacados