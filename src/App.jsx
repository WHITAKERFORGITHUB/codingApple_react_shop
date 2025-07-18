import { useState } from 'react';
import './App.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import bg from './bg.png';
import data from './data.js';
import { Link, Route, Routes, useNavigate, Outlet } from 'react-router-dom';
import Detail from './routes/Detail.jsx';

function App() {
  const [shoes, setShoes] = useState(data);
  let navigate = useNavigate()

  return (
    <>
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
              <Nav.Link onClick={()=>{navigate('/detail')}}>Detail</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div
                  className="main-bg"
                  style={{ backgroundImage: 'url(' + bg + ')' }}
                ></div>
                <div className="container">
                  <div className="row">
                    {shoes.map((shoe, i) => (
                      <Card shoes={shoes} i={i} key={shoe.id} />
                    ))}
                  </div>
                </div>
              </>
            }
          />
          <Route path="/detail/:id" element={ <Detail shoes={shoes}/> }/>
          <Route path="*" element={<div>This is 404 Page.</div>} />
          {/* 숙제 /evnet/one, /event/two nested route이용해서 만들기 */}
          <Route path="/event" element={<EventPage/>}>
            <Route path="one" element={<p>event/one</p>}/>
            <Route path="two" element={<p>event/two</p>}/>
          </Route>
        </Routes>
      </div>
    </>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img
        src={`https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`}
        width="80%"
      />
      <h4>{props.shoes[props.i].title}</h4>
      <p>{props.shoes[props.i].price}</p>
    </div>
  );
}
function EventPage() {
  return (
    <div>
      <h4>상우야 이거 Event 페이지야</h4>
      <Outlet></Outlet>
    </div>
  )
}
export default App;
