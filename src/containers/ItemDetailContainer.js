import { useEffect, useState } from "react";
import customFetch from "../utils/customFetch";
import ItemDetail from "../components/ItemDetail";
import videojuegos from "../data/videojuegos.json";

const ItemDetailContainer = () => {
    const [productList, setProductList] = useState({});

   useEffect(() => {
    customFetch(1, videojuegos[0])
    .then(result => setProductList(result))
    .catch(err => console.log(err))
   }, [])

    return(
        <ItemDetail videojuegos={productList}/>
    )
}

export default ItemDetailContainer;