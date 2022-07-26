import ItemCount from "./ItemCount"
import {useState} from 'react'
import { Link } from 'react-router-dom';

const ItemDetail = ({products}) => {
   const [itemCount, setItemCount] = useState(0)

   const onAdd = (param) => {
    alert("La cantidad comprada es " + param)
    setItemCount(param)  
  }

    return(
<div className="card mb-3" style={{ maxwidth: '540px' }}> 
  <div className="row g-0">
    <div className="col-md-4 d-flex">
      <img src={products.thumbnail} className="img-fluid rounded-start flex-fill"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{products.title}</h5>
        <p className="card-text">{products.detail}</p>
        <p className="card-text d-flex justify-content-center card-text1">{products.developer}</p>
        <p className="card-text d-flex justify-content-center card-text2">{products.genre}</p>
        <p className="card-text d-flex justify-content-center card-text3">${products.price}</p>
        <div className="d-flex justify-content-center">
          {itemCount == 0
          ?<ItemCount initial={itemCount} stock={5} onAdd={onAdd}/>
          :<Link to='/cart'><button type="button" className="btn btn-danger ms-2">Comprar</button></Link>}
          </div>
      </div>
    </div>
  </div>
</div>
    )
}

export default ItemDetail;


