'use client'
import {useState} from "react";

export default function List() {
  let 상품 = ['Tomatoes', 'Pasta', 'Coconut'];
  let [수량, 수량변경] = useState([0, 0, 0]);
  return (
    
    <div>
      <h4 className="title">상품 목록</h4>
      {
        상품.map((product, i) => {
          return (
            <div className="food" key={i}>
              <img src={`/food${i}.png`} className="food-img"></img>
              <h4>{product} $40</h4>
              <span>{수량[i]}</span>
              <button style={ {marginLeft : "10px"} } onClick={()=>{ 
                let newArray= [...수량];
                newArray[i]++;
                수량변경(newArray);

                }}>+</button>

              <button style={ {marginLeft : "10px"} } onClick={()=>{ 
                let newArray= [...수량];
                newArray[i]--;
                수량변경(newArray);

                }}>-</button>
            </div>
          );
        })
      }
      
    </div>
  )
}
