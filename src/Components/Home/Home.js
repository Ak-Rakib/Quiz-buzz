import React from 'react';
import Card from 'react-bootstrap/Card';
import { useLoaderData } from 'react-router-dom';
import './Home.css';
import QuizData from '../QuizData/QuizData';

const Home = () => {
    const quizData = useLoaderData().data;
    console.log(quizData)
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

        {
            quizData.map(quiz => <QuizData
                key={quiz.id}
                quiz = {quiz}
            ></QuizData>)
        }
        </div>
    );
};

export default Home;