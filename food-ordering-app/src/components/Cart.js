
const Cart = (props) => {
  return (
    <>
      <div className="cart-list">
        <h3>Your Order</h3>
        <ul>
          {props.cart.map((cartItem, index) => {
            return <li key={index}>{cartItem.name}</li>
          })}
        </ul>
      </div>
    </>
  )
}

export default Cart