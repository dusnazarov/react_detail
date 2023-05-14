
import { useNavigate, useParams } from 'react-router-dom'

const Profile = () => {

  let navigate = useNavigate();
  let { username } = useParams();
  return (
    <div>
        <h5>Profile for {username}</h5>             
        <button onClick={() => navigate('/')}>go to home</button>      
        <button onClick={() => navigate(-1)}>go back</button>      
    </div>
  )
}
export default Profile;

