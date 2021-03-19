import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router';

const HomeDetail = (props) => {
    const { name, image, ridersId } = props.rider;
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
                </Card.Body>
            </Card>
        </div>
    );
};

export default HomeDetail;