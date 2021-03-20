import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBiking } from '@fortawesome/free-solid-svg-icons';


const HomeDetail = (props) => {
    const { name, image, price } = props.rider;
    const history = useHistory();
    const handleRiders = names =>{
        const url = `destination/${name}`;
        history.push(url)
    }
    return (
        <div>
            <Card onClick={handleRiders} className="m-3 justify-content-center align-items-center" style={{ width: '15rem' }}>
                <Card.Img className="p-5" variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Title>Price: ${price}</Card.Title>
                    <button className="btn btn-outline-success"><FontAwesomeIcon icon={faBiking} /> Riders</button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default HomeDetail;