import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const RestaurantCard = (props) => {
    

return(
    <>
    
        <Card style={{ width: '18rem' }} key={props.rest.id}>
              <Card.Img variant="top" src="holder.js/100px180" />
             <Card.Body>
            <Card.Title>{props.rest.name}</Card.Title>
             <Card.Text>
             {props.rest.address}
             {props.rest.opening_hours}
             {props.rest.cuisine}
             </Card.Text>
            <Link to={'/Restaurant' + props.rest.id}>
             <Button variant="primary">Go somewhere</Button>
             </Link>
            </Card.Body>
         </Card>
    
    </>
)


}

export default RestaurantCard