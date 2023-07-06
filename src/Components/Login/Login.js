import React from 'react'
import { Form,Col,Row,Container,Button } from 'react-bootstrap'
// import './Login.css'

const Login = () => {
  return (
    <Container>
        <Row className="login mt-4">    
          <Col className='registerform'>
            <h5 className='cart-modal-title fw-7 fs-15 font-manrope text-center'>Login</h5>
            <form>
              <Form.Group>
                <Form.Control type="text" id="name" className='rounded-0 my-2'
                  placeholder="Enter your your name" />
              </Form.Group>
              <Form.Group>
                <Form.Control type="password" id="password" className='rounded-0 my-2'
                  placeholder="Enter your  password" />
              </Form.Group>
              <div class="loginbutton">
                <Button type="submit" class=" w-100 btn btn-primary" >Login</Button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
  )
}

export default Login