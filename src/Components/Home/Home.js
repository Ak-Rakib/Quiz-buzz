import React from 'react';
import Card from 'react-bootstrap/Card';
import './Home.css';

const Home = () => {
    return (
        <div>
        <Card>
            <Card.Img className='home-img' variant="top" src="/bg-img.jpg" />
            <Card.Body>
            <Card.Text className='text'>
            The more that you read, the more things you will know, the more that you learn, 
            the more places you’ll go.
            </Card.Text>
            </Card.Body>
        </Card>
        </div>
    );
};

export default Home;