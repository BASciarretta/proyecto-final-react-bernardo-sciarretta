import { useEffect, useState } from "react";
import { useParams } from "react-router"
import ItemDetail from "../components/ItemDetail";
import {productsCollection} from "../utils/firebaseConfig"
import { getDocs, query, where } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState([]);
    const {Id} = useParams();

    useEffect(() => {
      const detailFilter = query(productsCollection, where('id', '==', Id))
      
      getDocs(detailFilter)
        .then(res => setProductDetail(res.docs.data()))

    })
    return(
        <ItemDetail products={productDetail}/>
    )
}

export default ItemDetailContainer;