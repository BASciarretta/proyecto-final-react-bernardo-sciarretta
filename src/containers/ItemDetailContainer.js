import { useEffect, useState } from "react";
import { useParams } from "react-router"
import customFetch from "../utils/customFetch";
import ItemDetail from "../components/ItemDetail";
import products from "../data/products.json"

const ItemDetailContainer = () => {
    const [productList, setProductList] = useState([]);
    const {id} = useParams();

   useEffect(() => {
    if (id === undefined) {
        customFetch(1, products)
        .then(result => setProductList(result))
        .catch(err => console.log(err))
      } else {
        customFetch(1, products.filter(item => item.item === id))
        .then(result => setProductList(result))
        .catch(err => console.log(err))
      }
  
     }, [id])

    return(
        <ItemDetail products={productList}/>
    )
}

export default ItemDetailContainer;