import React, {useState} from 'react'

const ItemCount = () => {
    const [product, setProduct] = useState(1);
    const TakeOffProduct = () =>{
      if (product > 1) {
        setProduct(product - 1)
      }
    }
    const AddProduct = () =>{
      if (product < 5) {
        setProduct(product + 1)
      }
    }
  return (
  <>
  <button onClick={TakeOffProduct} type="button" className="btn btn-dark">-</button>
  <p className='ps-4 pe-4'>{product}</p>
  <button onClick={AddProduct} type="button" className="btn btn-dark">+</button>
  </>  
   );
  };

  export default ItemCount;

