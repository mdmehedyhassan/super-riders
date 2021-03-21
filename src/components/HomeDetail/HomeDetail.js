import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBiking, faTicketAlt, faUsers } from '@fortawesome/free-solid-svg-icons';


const HomeDetail = (props) => {
    const { name, image, price, capacity, ticket} = props.rider;
    const history = useHistory();
    const handleRiders = names =>{
        const url = `destination/${name}`;
        history.push(url)
    }
    return (
        <div>
            <Card onClick={handleRiders} className="mb-4 justify-content-center align-items-center shadow-lg rounded-3" style={{ width: '15rem' }}>
                <Card.Img className="p-5" variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Title>Price: ${price}</Card.Title>
                    <Card.Title>Capacity: <FontAwesomeIcon icon={faUsers} /> {capacity}</Card.Title>
                    <Card.Title>ticket: <FontAwesomeIcon icon={faTicketAlt} /> {ticket}</Card.Title>
                    <button className="btn btn-outline-success"><FontAwesomeIcon icon={faBiking} /> Riders</button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default HomeDetail;