import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from '../QuizDetails/QuizDetails';


const QuizDataDetails = () => {

    const quizDataDetails = useLoaderData().data.questions;
    // console.log(quizDataDetails)

    // const optionsData = useLoaderData().data.questions[0].options;
    // console.log(optionsData);

    return (
        <div>
           {
            quizDataDetails.map((quiz, index) => <QuizDetails
                key={quiz.id}
                quiz = {quiz}
                index = {index}
            ></QuizDetails>)
           }
        </div>
    );
};

export default QuizDataDetails;