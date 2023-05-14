import { useNavigate} from 'react-router-dom'

const Home = () => {
  let navigate = useNavigate();
  return (
    <div>
        <h5>Home </h5>
        <button onClick={() => navigate('/about')}>go to about</button>             
        <button onClick={() => navigate('/profile')}>go to profile</button>
        <button onClick={() => navigate('/data')}>go to data</button>       
        <button onClick={() => navigate(-1)}>go back</button>      
    </div>
  )
}

export default Home
