import ItemCount from "./ItemCount"

const onAdd = (param) => {console.log("La cantidad comprada es " + param)}

const Item = ({products}) => {
    return(
<div className="col-lg-4 col-md-6 col-sm-12 p-2 d-flex justify-content-evenly">
<div className="card border border-dark" style={{ width: '18rem' }}>
    <img src={products.thumbnail} className="card-img-top"/>
    <div className="card-body">
        <h5 className="card-title d-flex justify-content-center">{products.title}</h5>
        <p className="card-text d-flex justify-content-center card-text1">{products.developer}</p>
        <p className="card-text d-flex justify-content-center card-text2">{products.genre}</p>
        <p className="card-text d-flex justify-content-center card-text3">${products.price}</p>
        <div className="d-flex justify-content-center"><ItemCount initial={1} stock={5} onAdd={onAdd}/></div>
      </div>
    </div>
    </div>
    )
}

export default Item;