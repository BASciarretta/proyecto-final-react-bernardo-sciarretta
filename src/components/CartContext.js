import {createContext, useState} from 'react';

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    const addToCart = (products, qty) =>{
        let item = cartList.find(item => item.id === products.id)
        if(item === undefined){
            setCartList([...cartList, {
                id: products.id,
                title: products.title,
                thumbnail: products.thumbnail,
                price: products.price,
                qty: qty
            }])
        } else {
            item.qty += qty
            setCartList([...cartList])
              }

    }

    const removeItem = (id) => {
      let newState = cartList.filter(products => products.id !== id)
      setCartList(newState)
    }

    const clear = () => {
    setCartList([])
    }

    const itemQty = () => {
      let qty = cartList.map(item => item.qty);
      return qty.reduce(((firstValue, actualValue) => firstValue + actualValue), 0);
    }

    return(
        <CartContext.Provider value={{cartList, addToCart, removeItem, clear, itemQty}}>
          {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;