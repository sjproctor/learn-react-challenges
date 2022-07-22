
const MenuItems = (props) => {

  return (
    <div className="items">
      { props.items.map((item, index) => {
        return (
          <div className="item" key={index}>
            <p>{item.name}</p>
            <p>$ {item.price}</p>
            <button onClick={() => props.addItemToCart(item)}>Add to cart</button>
          </div>
        )
      })}
    </div>
  )
}

export default MenuItems