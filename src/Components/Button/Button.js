import Button from 'react-bootstrap/Button';
import './Button.css'

function btnHandler (props) {
    return (
        <div>
            <Button style={{width : '70px', height: '52px' , borderRadius: '0px', border: '1px solid black', backgroundColor: '#BACD92' }} onClick={props.onClick} variant="primary"> {props.text} </Button> {' '}
 
        </div>
    )
}
export default btnHandler;