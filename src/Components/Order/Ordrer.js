import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCarts } from '../../Store/cartSlice'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { thumbImgUrl } from '../../Constants';

function Ordrer() {
  const price = useSelector(getAllCarts)
  console.log("price", price)

  return (
    <div>
      {price.map((ele) => {
        return (
          <div>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={thumbImgUrl + ele.product_image} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        )
      })}
    </div>
  )
}

export default Ordrer