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
            
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
            <Accordion.Header>what is context api?</Accordion.Header>
            <Accordion.Body>
             
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
            <Accordion.Header>What is useref hook in react?</Accordion.Header>
            <Accordion.Body>
            
            </Accordion.Body>
        </Accordion.Item>
    </Accordion>
        </div>
    );
};

export default Blog;