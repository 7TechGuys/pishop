import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Rating from './Rating';

const Product = ({ product }) => {
  return(
      
      <Card className='my-3 p-1 rounded raj-card text-center' >
            <Link to={`/product/${product._id}`}>
              <Card.Img src={product.image} variant='top' />
            </Link>

            <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Title as='div'>
                        <strong className='raj-card-title'>{product.name}</strong>
                    </Card.Title>
                </Link>
            
                <Card.Text as='div' className='raj-card-text'>
                    <Rating value={product.rating} 
                    text={`${product.numReviews} reviews`} />
                </Card.Text>

                <Link to={`/product/${product._id}`}>
                    <Card.Text as='h4' className='btn btn-outline-warning px-5 raj-card-title'>₹{product.price}</Card.Text>
                </Link>
            </Card.Body>

      </Card>
      
  );
};

export default Product;
