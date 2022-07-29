import { useEffect, useState } from "react";
import { useParams } from "react-router"
import customFetch from "../utils/customFetch";
import ItemDetail from "../components/ItemDetail";
import products from "../data/products.json"

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState([]);
    const {id} = useParams();

   useEffect(() => {
    if (id === undefined) {
        customFetch(1, products)
        .then(result => setProductDetail(result))
        .catch(err => console.log(err))
      } else {
        customFetch(1, products.filter((products) => products.id === id)[0])
        .then((result) => setProductDetail(result))
        .catch((err) => console.log(err))
      }
  
     }, [id])

    return(
        <ItemDetail products={productDetail}/>
    )
}

export default ItemDetailContainer;