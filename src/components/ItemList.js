import Item from './Item'
import ItemDetail from './ItemDetail';

const ItemList = ({videojuegos}) => {
    return(
        <div className='row p-2'>
            {videojuegos.map((item) => (
            <ItemDetail key={item.id} products={item}/>
            ))}
        </div>
    )
}

export default ItemList;

