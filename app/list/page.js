export default function List() {
  let 상품 = ['Tomatoes', 'Pasta', 'Coconut'];
  return (
    
    <div>
      <h4 className="title">상품 목록</h4>
      {
        상품.map((val, key) => {
          return (
            <div className="food" key={key}>
              <img src={`/food${key}.png`} className="food-img"></img>
              <h4>{val} $40</h4>
            </div>
          );
        })
      }
      
    </div>
  )
}
