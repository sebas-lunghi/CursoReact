import React from 'react';
import Card from 'react-bootstrap/Card';

const Cards = () => {
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://d3ugyf2ht6aenh.cloudfront.net/stores/605/358/products/010hb1-8bc12a2d5ff7c47cb316710318298394-640-0.png" /> 
        <Card.Body>
          <Card.Title>Remera Messi</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Color: Blanco</Card.Subtitle>
          <Card.Text>
            De algodon, sublimada, talles: desde S a XL
          </Card.Text>
          <Card.Link href="addtocart">Agregar al carrito</Card.Link>
          <Card.Link href="#">Referencia talles</Card.Link>
        </Card.Body>
      </Card>
    </>
  );
}

export default Cards;
