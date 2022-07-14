import Item from './Item'

const ItemList = ({videojuegos}) => {

    const Cards = () => {videojuegos.map(item => <Item key={item.id} products={item}/>)}

    return(
        <div>{Cards}</div>
    )
}

export default ItemList;