import React, {useState} from 'react'
import ItemList from "../components/ItemList"
import videojuegos from "../data/videojuegos.json"

const ItemListContainer = () => {

  const [productList, setProductList] = useState([])

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(videojuegos);
    }, 2000);
  });
  myPromise.then((res) => {
    setProductList(res)
  })

    return(
        <ItemList videojuegos={productList}/>
    );
}

export default ItemListContainer;