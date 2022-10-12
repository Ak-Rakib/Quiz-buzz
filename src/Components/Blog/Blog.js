import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './Blog.css';

const Blog = () => {
    return (
        <div>
            <h3 className='blog-header'>Quiz Related Information</h3>
    <Accordion className='blog-accordion' defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
            <Accordion.Header>What is react router Purpose?</Accordion.Header>
            <Accordion.Body>
            React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
            <Accordion.Header>what is context api?</Accordion.Header>
            <Accordion.Body>
            What is Context API? The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
            <Accordion.Header>What is useref hook in react?</Accordion.Header>
            <Accordion.Body>
            The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
            </Accordion.Body>
        </Accordion.Item>
    </Accordion>
        </div>
    );
};

export default Blog;