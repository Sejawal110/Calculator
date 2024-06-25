import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function Input (props) {
    return (
        <div>
     <Container className='mt-5'>
     <Form.Control  style={{width: '280px', borderRadius: '0px', border: '1px solid black' }} readOnly size="lg" type="text" placeholder="Enter any value or number" value={props.value} />

     </Container>
        </div>
    )
}

export default Input;