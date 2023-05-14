
import { useLoaderData, useNavigate } from "react-router-dom";


export const Data = () => {    
    const data = useLoaderData();
    const navigation = useNavigate();
    let navigate = useNavigate();

    if (navigation.state === "loading"){
        return <h1>Loading ...</h1>
    }

    return (
        <div>
            <button onClick={() => navigate('/')}>go to home</button>      
            <button onClick={() => navigate(-1)}>go back</button> 
            <h5>{data.fileSizeBytes}</h5>                         
            <img src={data.url} alt="img"/>                   
        </div>
    )
};

export const dataLoader = async () => {
    const res = await fetch("https://random.dog/woof.json");   
    const dogData = await res.json();   
    return dogData;

};




