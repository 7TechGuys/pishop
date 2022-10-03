import React, { useState } from 'react';
import {
  Route
} from "react-router-dom";
// import { Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container, NavDropdown, Form, Button } from 'react-bootstrap';
import SearchBox from './SearchBox';
import { logout } from '../actions/userActions'
// import SearchBox2 from './SearchBox2';

const Header = ({ history }) => {

  const [keyword, setKeyword] = useState(' ')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }


  const dispatch = useDispatch()

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }
  return (
    <>
      <header>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
          <Container>
            <LinkContainer to='/'>
              <Navbar.Brand>Raj | Shop</Navbar.Brand>
            </LinkContainer>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">


              <Nav className="ml-auto">
                <LinkContainer to='/cart'>
                  <Nav.Link><i className="fab fa-opencart"></i> Cart</Nav.Link>
                </LinkContainer>
                {userInfo ? (
                  <NavDropdown title={userInfo.name} id='username'>
                    <LinkContainer to='/profile'>
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>

                ) : (<LinkContainer to='/login'>
                  <Nav.Link><i className="fas fa-street-view"></i> Sign In</Nav.Link>
                </LinkContainer>
                )}

                {userInfo && userInfo.isAdmin && (
                  <NavDropdown title='Admin' id='adminmenu'>
                    <LinkContainer to='/admin/userlist'>
                      <NavDropdown.Item>Users</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/admin/productlist'>
                      <NavDropdown.Item>Product</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/admin/orderlist'>
                      <NavDropdown.Item>Orders</NavDropdown.Item>
                    </LinkContainer>

                  </NavDropdown>
                )}
              </Nav>
            </Navbar.Collapse>
            
            <Route component={({ history }) => <SearchBox history={history} />} />
                
            
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
