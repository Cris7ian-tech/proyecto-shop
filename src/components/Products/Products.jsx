import { useContext } from "react";
import { dataContext } from "../../components/Context/DataContext";
import "./products.css"

const Products = () => {
  const { data } = useContext(dataContext);
  return data.map((product) => {
    return(

    <div className="products-card" key={product.id}>
      
      <div className="card-button">
        <img src={product.img}/>
        
        <div className="info-card">
        <h3>{product.title}</h3>
        <h4>${product.price}</h4>
        <button className="buy-button">buy</button>
        </div>
      
      </div>
    </div>
  )

})
}

export default Products