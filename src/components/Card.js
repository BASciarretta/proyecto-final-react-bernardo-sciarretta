import ItemCount from "./ItemCount"

const Card = (props) => {
return (
<>
<div className="col-lg-4 col-md-6 col-sm-12 p-2 d-flex justify-content-evenly">
<div className="card border border-dark" style={{ width: '18rem' }}>
    <img src={props.thumbnail} className="card-img-top"/>
      <div className="card-body">
        <h5 className="card-title d-flex justify-content-center">{props.title}</h5>
        <p className="card-text d-flex justify-content-center card-text1">{props.developer}</p>
        <p className="card-text d-flex justify-content-center card-text2">{props.genre}</p>
        <p className="card-text d-flex justify-content-center card-text3">${props.price}</p>
        <div className="d-flex justify-content-center">
        <ItemCount/>
        </div>
      </div>
    </div>
    </div>
</>  
 );
};

export default Card;