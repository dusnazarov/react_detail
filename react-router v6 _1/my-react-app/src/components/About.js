
import {useNavigate} from 'react-router-dom'

const About = () => {

  let navigate = useNavigate();
  return (
    <div>
        <h5>About</h5>
        <button onClick={() => navigate('/')}>go to home</button>
        <button onClick={() => navigate(-1)}>go back</button>
      
    </div>
  );
};
export default About;
