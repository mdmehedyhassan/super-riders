import React from 'react';
import { Card } from 'react-bootstrap';

const HomeDetail = (props) => {
    const { name, image } = props.rider;
    return (
        <div>
            <Card  className="m-3 justify-content-center align-items-center" style={{ width: '15rem' }}>
                <Card.Img className="p-5" variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                </Card.Body>
            </Card>
        </div>
    );
};

export default HomeDetail;