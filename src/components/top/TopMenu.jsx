import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from 'react-redux';


function TopMenu() {
  const { login } = useSelector((store) => store.auth);
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Messenger</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/login">Вход</Nav.Link>
            <Nav.Link href="/messages">Сообщения</Nav.Link>
          </Nav>
          <Nav className="justify-content-end">
          <Navbar.Toggle />
            <Navbar.Collapse>
             { login && <Navbar.Text>
                Login: <a href="#login">{login}</a>
              </Navbar.Text>}
              <NavDropdown title="Настройки" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Navbar.Collapse>
            </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default TopMenu;