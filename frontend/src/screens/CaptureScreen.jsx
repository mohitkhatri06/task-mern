import { Container, Card, Button } from 'react-bootstrap';
import VideoCapture from '../components/VideoCapture';
import ScreenCapture from '../components/ScreenCapture';

const CaptureScreen = () => {
   return (
      <>
         <div className=' py-3'>
            <Container className='d-flex justify-content-center'>
               <Card className='p-5 d-flex flex-column align-items-center hero-card bg-light w-75'>
                  <h3 className='title-head-capture'>Video capture</h3>
                  <VideoCapture />
               </Card>
            </Container>
         </div>
         <div className=' py-3'>
            <Container className='d-flex justify-content-center'>
               <Card className='p-5 d-flex flex-column align-items-center hero-card bg-light w-75'>
                  <h3 className='title-head-capture'>Screen capture</h3>

                  <ScreenCapture />
               </Card>
            </Container>
         </div>
      </>
   );
};

export default CaptureScreen;
