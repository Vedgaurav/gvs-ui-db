import 'bootstrap/dist/css/bootstrap.css'
const NavBar=()=> {
  return (
    <>
     
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">ISKCON Haldia Devotees Database</a>
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> */}
      <span className="navbar-toggler-icon"></span>
    {/* </button> */}
      {/* <Navbar bg="light" variant="light">
        
          <Navbar.Brand href="#home"><h1 className=''>ISKCON Haldia Devotees Database</h1></Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Connections</Nav.Link>
            <Nav.Link href="#pricing">Contributions</Nav.Link> */}
        {/*  </Nav>
      </Navbar> */}
      {/* <RegistrationProgressBar value={100/6}/> */}
      </div>
      </nav>
      
    </>
  );
}

export default NavBar;