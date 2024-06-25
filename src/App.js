import { Container, Stack } from 'react-bootstrap';
import './App.css';
import Calculator from './Components/Calculator';

function App() {
  return (
    <Stack direction="horizontal" className="justify-content-center mt-5"  >
    <div className='app' >
       
    <Container>
      <Calculator/>
    </Container>
    
    </div>
    </Stack>
  );
}

export default App;
