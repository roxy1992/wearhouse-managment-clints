import React from 'react';
import { Card } from 'react-bootstrap';



const IconSection = () => {
    return (
        <Card>
            {/* <Card.Header>Quote</Card.Header> */}
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p>
                        {' '}
                        Daily updates need to be done daily.{' '}
                    </p>
                    <footer className="blockquote-footer">
                        Authority <cite title="Source Title">Mobile corner</cite>
                    </footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
};

export default IconSection;