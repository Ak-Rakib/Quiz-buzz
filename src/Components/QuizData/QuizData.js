import React from 'react';
import './QuizData.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './QuizData.css'


const QuizData = ({quiz}) => {
    const {logo, name} = quiz;
    // console.log(quiz)
    return (
        <div>
     <Container fluid="md">
      <Row>
        <Col>
           <Card className='container' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={logo} />
                <Card.Body>
                <Card.Title style={{color: 'white'}}>{name}</Card.Title>
                <Button variant="primary">Quiz</Button>
                </Card.Body>
            </Card>
        </Col>
      </Row>
    </Container>
        </div>
    );
};

export default QuizData;