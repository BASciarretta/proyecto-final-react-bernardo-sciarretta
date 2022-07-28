import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
  const context = useContext(CartContext)
    return (
      <div className="container p-4">
        <div className="d-flex justify-content-end pb-4">
          <button onClick={context.clear} type="button" className="btn btn-danger ms-2">Eliminar todo</button>
        </div>
        {
          context.cartList.length > 0 && context.cartList.map(products => (
            <div className="card mb-3" style={{ maxwidth: '540px' }}> 
            <div className="row g-0">
              <div className="col-md-4 d-flex">
                <img src={products.thumbnail} className="img-fluid rounded-start flex-fill"/>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{products.title}</h5>
                  <p className="card-text d-flex justify-content-center card-text2">{products.qty} productos</p>
                  <p className="card-text d-flex justify-content-center card-text3">$ {products.price} c/u</p>
                  <div className="d-flex justify-content-center">
                  <button onClick={() => context.removeItem(products.id)} type="button" className="btn btn-danger ms-2">Eliminar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          ))
        }
</div>
    );
  };
  
  export default Cart;