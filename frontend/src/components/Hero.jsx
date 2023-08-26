import { Container, Card, Button } from 'react-bootstrap';

const Hero = () => {
   return (
      <div className=' py-5'>
         <Container className='d-flex justify-content-center'>
            <Card className='p-5 d-flex flex-column align-items-center hero-card bg-light w-75'>
               <h4 className='text-center mb-4'>MERN Authentication</h4>
               <p className='text-center mb-4'>
                  This is a MERN authentication that stores a JWT in an
                  HTTP-Only cookie. It also uses Redux Toolkit and the React
                  Bootstrap library. Below is the task to screen and video
                  capture.
               </p>
            </Card>
         </Container>
      </div>
   );
};

export default Hero;
