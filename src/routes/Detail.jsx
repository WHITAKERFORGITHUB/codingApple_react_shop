import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

function Detail(props) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setBanner(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  let [banner, setBanner] = useState(true);
  let { id } = useParams();
  let shoe = props.shoes.find((shoe) => shoe.id == id);
  let [tab, setTab] = useState(0) // 버튼 탭 상태 (0,1,2) 3가지 케이스
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
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link onClick={()=> {setTab(0)}} eventKey="link0">버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={()=> {setTab(1)}} eventKey="link1">버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={()=> {setTab(2)}} eventKey="link2">버튼2</Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab}/>
    </div>
  );
}
function TabContent(props) {
  if(props.tab == 0) {
    return <h1>내용 0</h1>
  }
  if(props.tab == 1) {
    return <div>내용 1</div>
  }
  if(props.tab == 2) {
    return <div>내용 2</div>
  }

}

export default Detail;
