import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Card from 'react-bootstrap/Card';


const RestaurantCard = (props) => {
    

return(
    <>
    
        <Card style={{ width: '18rem' }} key={props.rest.id}>
              <Card.Img variant="top" src={props.rest.image} />
             <Card.Body>
            <Card.Title>{props.rest.name}</Card.Title>
             <Card.Text>
             {props.rest.address}
             {props.rest.opening_hours}
             {props.rest.cuisine}
             </Card.Text>
            
            </Card.Body>
         </Card>
    
    </>
)


}

export default RestaurantCard