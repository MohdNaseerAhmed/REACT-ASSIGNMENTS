

function Product(props) {
  return (
    <div className="card" padding="4px">
      <img src={props.prodObj.image}  width="180px" heigth="220px" className ="d-block mx-auto" alt="img not found"  />
      <div className="card-body">
        <p className="lead">
          {props.prodObj.title}
        </p>
        <p>Price:{props.prodObj.price}</p>
        <p>Category:{props.prodObj.category}</p>
      </div>
    </div>
  )
}

export default Product