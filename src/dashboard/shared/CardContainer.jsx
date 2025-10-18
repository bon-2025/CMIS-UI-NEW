import { Card } from 'react-bootstrap';

const CardContainer = ({children}) => {
    return (
        <Card className="shadow-sm mx-auto text-center" style={{ maxWidth: '750px' }}>
            <Card.Body>
                {children}
            </Card.Body>
        </Card>
    );
}

export default CardContainer;
