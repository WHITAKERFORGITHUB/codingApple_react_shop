import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail(props) {
  useEffect(() => {
      const timer = setTimeout(()=> {
        setBanner(false)
      }, 2000);
      return ()=> clearTimeout(timer)
  },[]);
  let [banner, setBanner] = useState(true);

  let { id } = useParams();
  let shoe = props.shoes.find((shoe) => shoe.id == id);
  return (
    <div className="container">
      {banner && <div className="alert alert-warning">2초이내 구매시 할인</div>}
      <div className="row">
        <div className="col-md-6">
          <img
            // src={`https://codingapple1.github.io/shop/shoes${props.shoes[id].id + 1}.jpg`}
            // src={`https://codingapple1.github.io/shop/shoes${parseInt(id)+1}.jpg`}
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{shoe.title}</h4>
          <p>{shoe.content}</p>
          <p>{shoe.price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
