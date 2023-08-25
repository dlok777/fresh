export default function Cart() {
  let 장바구니 = ['Tomatoes', 'Pasta'];
  return (
    <div>
      {addButton({ btnColor : 'blue'})}
      <h4 className="title">Cart</h4>
      {장바구니.map((item, i) => {
        return (
          CartItem(item)
        )
      })}
      
    </div>
  )
}

function addButton(props) {
  return (
    <button style={{ background : props.btnColor }}>버튼</button>
  )
}

function CartItem(props) {
  return (
    <div className="cart-item">
      <p>{props}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  )
}