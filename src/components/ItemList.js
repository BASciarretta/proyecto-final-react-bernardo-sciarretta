import Item from './Item'

const ItemList = ({videojuegos}) => {
    return(
        <div className='row p-2'>
            {videojuegos.map((item) => (
            <Item key={item.id} products={item}/>
            ))}
        </div>
    )
}

export default ItemList;

