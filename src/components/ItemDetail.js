import ItemCount from "./ItemCount"

const onAdd = (param) => {console.log("La cantidad comprada es " + param)}

const ItemDetail = ({products}) => {
    return(
<div className="card mb-3" style={{ maxwidth: '540px' }}> 
  <div className="row g-0">
    <div className="col-md-4 d-flex">
      <img src={products.thumbnail} className="img-fluid rounded-start flex-fill" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{products.title}</h5>
        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus eligendi, culpa incidunt ab nobis quis maiores saepe molestias odio perferendis nulla id doloremque dicta deserunt nesciunt quidem, rerum harum expedita.</p>
        <p className="card-text d-flex justify-content-center card-text1">{products.developer}</p>
        <p className="card-text d-flex justify-content-center card-text2">{products.genre}</p>
        <p className="card-text d-flex justify-content-center card-text3">${products.price}</p>
        <div className="d-flex justify-content-center"><ItemCount initial={1} stock={5} onAdd={onAdd}/></div>
      </div>
    </div>
  </div>
</div>
    )
}

export default ItemDetail;


