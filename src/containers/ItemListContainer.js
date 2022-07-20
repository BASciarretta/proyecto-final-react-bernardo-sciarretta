import { useEffect, useState } from "react";
import { useParams } from "react-router"
import customFetch from "../utils/customFetch";
import ItemList from "../components/ItemList"
import products from "../data/products.json"

const ItemListContainer = () => {
  const [productList, setProductList] = useState([])
  const {id} = useParams();

  useEffect(() => {
    if (id === undefined) {
      customFetch(1, products)
      .then(result => setProductList(result))
      .catch(err => console.log(err))
    } else {
      customFetch(1, products.filter(item => item.categoryid === id))
      .then(result => setProductList(result))
      .catch(err => console.log(err))
    }

   }, [id])
    return(
        <ItemList products={productList}/>
    );
}

export default ItemListContainer;