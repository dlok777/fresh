import test from "./data.js"

export default function Cart() {
  return (
    <div>
      <h4 className="title">장바구니</h4>
      <div className="cart-item">
        <p>상품명</p>
        <p>$40</p>
        <p>1개</p>
      </div>
      {test()}
      <CartItem />
    </div>
  )
}

function CartItem() {
  return (
    <div className="cart-item">
      <p>상품명</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  )
}