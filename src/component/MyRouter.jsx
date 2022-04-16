import { Container, Nav, Navbar, NavItem } from "react-bootstrap"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Home from "../conteiner/Home"
import Universities from "../conteiner/Universities"
import Logo from "./Logo"

const MyRouter = () => {
  return (
    <BrowserRouter>
      <Logo></Logo>

      <Navbar bg="light" variant="light">
        <Container>
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              Գլխավոր
            </Link>
            <Link to="/allUniversities" className="nav-link">
              Համալսարաններ
            </Link>
            <Link to="/contactUs" className="nav-link">
              Կապ մեզ հետ
            </Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/allUniversities"
          element={<Universities></Universities>}
        ></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default MyRouter
