// 1) //////////////////////////////////////
// import React from 'react'
// import './styles/App.css'
// import Postitem from  './components/Postitem'

//  export default function App() {    
//     return (      
//         <Postitem/>        
//     );
// };


// 2) ///////////////////////////////////
// import React from 'react'
// import './styles/App.css'
// import Postitem from  './components/Postitem'

//  export default function App() {    
//     return (
  
//       <div className="contacts">
//         <Postitem               
//             id = "7"
//             email = "michael.lawson@reqres.in"
//             first_name = "Michael"
//             last_name = "Lawson"
//             avatar = "https://reqres.in/img/faces/7-image.jpg"
//         /> 
//         <Postitem               
//            id = "8"
//             email = "lindsay.ferguson@reqres.in"
//             first_name = "Lindsay"
//             last_name = "Ferguson"
//             avatar = "https://reqres.in/img/faces/8-image.jpg"
//         /> 
//         <Postitem               
//             id = "9"
//             email = "tobias.funke@reqres.in"
//             first_name = "Tobias"
//             last_name = "Funke"
//             avatar = "https://reqres.in/img/faces/9-image.jpg"
//         />
//         <Postitem               
//             id = "10"
//             email = "byron.fields@reqres.in"
//             first_name ="Byron"
//             last_name = "Fields"
//             avatar ="https://reqres.in/img/faces/10-image.jpg"
//         /> 
//         <Postitem               
//             id = "11"
//             email = "george.edwards@reqres.in"
//             first_name = "George"
//             last_name = "Edwards"
//             avatar = "https://reqres.in/img/faces/11-image.jpg"
//         /> 

//       </div>
     
//     );
// };


// 3) ///////////////////////////////////
// import React from 'react'
// import './styles/App.css'
// import Postitem from  './components/Postitem'

//  export default function App() {    
//     const user1 =  {
//         id: 7,
//         email: "michael.lawson@reqres.in",
//         first_name: "Michael",
//         last_name: "Lawson",
//         avatar: "https://reqres.in/img/faces/7-image.jpg"
//     }
//     const user2 =  {
//         id: 8,
//         email: "lindsay.ferguson@reqres.in",
//         first_name: "Lindsay",
//         last_name: "Ferguson",
//         avatar: "https://reqres.in/img/faces/8-image.jpg"
//     }
//     const user3 =  {
//         id: 9,
//         email: "tobias.funke@reqres.in",
//         first_name: "Tobias",
//         last_name: "Funke",
//         avatar: "https://reqres.in/img/faces/9-image.jpg"
//     }
//     const user4 =  {
//         id: 10,
//         email: "byron.fields@reqres.in",
//         first_name: "Byron",
//         last_name: "Fields",
//         avatar: "https://reqres.in/img/faces/10-image.jpg"
//     }
//     const user5 =  {
//         id: 11,
//         email: "george.edwards@reqres.in",
//         first_name: "George",
//         last_name: "Edwards",
//         avatar: "https://reqres.in/img/faces/11-image.jpg"
//     }

//     return (  
//       <div className="contacts">
//         <Postitem user={user1}/>
//         <Postitem user={user2}/>
//         <Postitem user={user3}/>       
//         <Postitem user={user4}/>       
//         <Postitem user={user5}/>       
//       </div>
     
//     );
// };

// 4) ////////////////////////////////////////////////////
// import React from 'react'
// import './styles/App.css'
// import PostitemMap from  './components/PostitemMap'


//  export default function App() {
//     const users = [
//         {
//             id: 7,
//             email: "michael.lawson@reqres.in",
//             first_name: "Michael",
//             last_name: "Lawson",
//             avatar: "https://reqres.in/img/faces/7-image.jpg"
//         },
//         {
//             id: 8,
//             email: "lindsay.ferguson@reqres.in",
//             first_name: "Lindsay",
//             last_name: "Ferguson",
//             avatar: "https://reqres.in/img/faces/8-image.jpg"
//         },
//         {
//             id: 9,
//             email: "tobias.funke@reqres.in",
//             first_name: "Tobias",
//             last_name: "Funke",
//             avatar: "https://reqres.in/img/faces/9-image.jpg"
//         },
//         {
//             id: 10,
//             email: "byron.fields@reqres.in",
//             first_name: "Byron",
//             last_name: "Fields",
//             avatar: "https://reqres.in/img/faces/10-image.jpg"
//         },
//         {
//             id: 11,
//             email: "george.edwards@reqres.in",
//             first_name: "George",
//             last_name: "Edwards",
//             avatar: "https://reqres.in/img/faces/11-image.jpg"
//         }        
        
//     ];

//     return (  
//       <div className="contacts">
//         <PostitemMap users={users}/>
//       </div>     
//     );
// };


// 5) //////////////// fetch data  ////////////////////////////////
// import './styles/App.css'
// import PostitemMap from "./components/PostitemMap";
// import load from "./users";
// import {useEffect, useState} from "react"


// function App() {
//     const [users, setUsers] = useState([]);
    
//     useEffect(() => {
//         load().then((data) => setUsers(data));
//     },[]);

//     return (
//       <div className="contacts">
//         <PostitemMap users={users} />
//       </div>
//     );
// };
// export default App;









