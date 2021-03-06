import { Navbar, Container, Form, FormControl, Button } from "react-bootstrap";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
// import { useHistory } from "react-router-dom";

function Header() {
  // const history = useHistory();
  // const routeHandler = () => {
  //   history.push("/");
  // };

  const loginHandler = () => {
    alert(" User Logged In!!!");
  };

  return (
    <Navbar className="navbar" variant="dark" fixed="top">
      <Container fluid>
        <Navbar.Brand className="brand" href="/">
          Enterprise Mobility Management
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <div className="d-flex">
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />

            <Button style={{ marginLeft: "3%" }} variant="outline-light">
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </Form>
          <Button
            style={{ marginLeft: "4%" }}
            variant="outline-light"
            onClick={loginHandler}
          >
            <FontAwesomeIcon icon={faUser} />
          </Button>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;
