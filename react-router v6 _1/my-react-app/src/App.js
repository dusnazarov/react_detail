import React from "react"
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"
import  Home  from "./components/Home"
import Profile  from "./components/Profile"
import About from "./components/About"
import Error from "./components/Error"
import Layout from "./layout/Layout"
import { Data, dataLoader } from "./layout/Data"


// 1) ///////////////////////////////////////////////// 
// export default function App()  {

//     const router = createBrowserRouter(
//         createRoutesFromElements(
//             <Route path="/" element={<Layout />}>
//                 < Route index element={<Home />}/>
//                 < Route path="/profile" element={<Profile />}/>
//                 < Route path="/about" element={<About />} />                
//                 < Route path="/data" element={<Data />} loader={dataLoader} />                
//                 < Route path="/*" element={<Error />}/>                
//             </Route>
//         )
//     );
//     return (
//         <div>           
//             <RouterProvider router={router}/>                      
//         </div>
//     );
// };


// 2) /////////////////////////////////////////////////
// export default function App()  {

//     const router = createBrowserRouter(
//         createRoutesFromElements(
//             <Route path="/" element={<Layout />}>
//                 < Route index element={<Home />}/>
//                 < Route path="/profile" element={<Profile />}/>
//                 < Route path="/about" element={<About />}/>                
//                 < Route path="/data" element={<Data />} loader={dataLoader}/>                
//                 < Route path="/*" element={<Error />}/>                
//             </Route>
//         )
//     );
//     return (
//         <div>           
//             <RouterProvider router={router}/>                      
//         </div>
//     );
// };

// 3) /////////////////////////////////////////////////
export default function App()  {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Layout />}>
                < Route index element={<Home />}/>
                < Route path="/profile" element={<Profile />}>
                    < Route index path="/profile/:username" element={<Profile />}/>
                    {/* < Route index path=":username" element={<Profile />}/> */}
                    
                </Route>
                < Route path="/about" element={<About />} />                
                < Route path="/data" element={<Data />} loader={dataLoader} />                
                < Route path="/*" element={<Error />}/>                
            </Route>
        )
    );
    return (
        <div>           
            <RouterProvider router={router}/>                      
        </div>
    );
};





