import React from 'react';
import Form from 'react-bootstrap/Form';
import './QuizDetails.css';
import { EyeIcon } from '@heroicons/react/24/solid'
import { ToastContainer } from 'react-bootstrap';
import { type } from '@testing-library/user-event/dist/type';



const QuizDetails = ({quiz, index}) => {
    const {question,options, correctAnswer} = quiz;
    // console.log(quiz);

    const eyeHandler = () => {
        if(correctAnswer){
            alert(correctAnswer);
        }
    }

    const radioHandler = ()=>{
        if(options === correctAnswer){
            console.log('Correct Answer');
        }
    }
    

    return (
          <div>
            <Form.Group className='container01'>
            <Form.Label>Quiz{index}: {question.slice(3,-4)}</Form.Label>
            <EyeIcon onClick={eyeHandler} className="heroIcon"/>
            <Form.Check className='label' type="radio" name={correctAnswer} onClick={radioHandler} label={options[0]} />
            <Form.Check className='label' type="radio" name={correctAnswer} onClick={radioHandler} label={options[1]} />
            <Form.Check className='label' type="radio" name={correctAnswer} onClick={radioHandler} label={options[2]} />
            <Form.Check className='label' type="radio" name={correctAnswer} onClick={radioHandler} label={options[3]} />
           </Form.Group>
          </div>
    );
};

export default QuizDetails;