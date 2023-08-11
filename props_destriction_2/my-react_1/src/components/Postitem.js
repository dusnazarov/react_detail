// 1) ///////////////////////////////////////////
// export default function Postitem() {
//     return (
//         <div className="contacts">        
//             <div className="contact-card">
//                 <img src="https://reqres.in/img/faces/7-image.jpg" alt="michael"/>
//                 <h3>Michael Lawson </h3>
//                 <div className="info-group">
//                     <img src="./images/phone-icon.png" alt="phone" />                   
//                 </div>
//                 <div className="info-group">
//                     <img src="./images/mail-icon.png" alt="mail" />                    
//                     <p>michael.lawson@reqres.in</p>
//                 </div>
//             </div>
            
//             <div className="contact-card">
//                 <img src="https://reqres.in/img/faces/8-image.jpg" alt="lindy"/>
//                 <h3>Lindsay Ferguson</h3>
//                 <div className="info-group">
//                     <img src="./images/phone-icon.png" alt="phone" />                                     
                    
//                 </div>
//                 <div className="info-group">
//                     <img src="./images/mail-icon.png" alt="mail"/>                    
//                     <p>lindsay.ferguson@reqres.in</p>
//                 </div>
//             </div>
            
//             <div className="contact-card">
//                 <img src="https://reqres.in/img/faces/9-image.jpg" alt="tobias"/>
//                 <h3>Tobias Funke</h3>
//                 <div className="info-group">
//                     <img src="./images/phone-icon.png" alt="phone"/>                  
                    
//                 </div>
//                 <div className="info-group">
//                     <img src="./images/mail-icon.png" alt="mail" />                   
//                     <p>tobias.funke@reqres.in</p>
//                 </div>
//             </div>  
//             <div className="contact-card">
//                 <img src="https://reqres.in/img/faces/10-image.jpg" alt="byron"/>
//                 <h3>Byron Fields</h3>
//                 <div className="info-group">
//                     <img src="./images/phone-icon.png" alt="phone" />                
                    
//                 </div>
//                 <div className="info-group">
//                     <img src="./images/mail-icon.png" alt="mail"/>                   
//                     <p>byron.fields@reqres.in</p>
//                 </div>
//             </div>  
//             <div className="contact-card">
//                 <img src="https://reqres.in/img/faces/11-image.jpg" alt="george"/>
//                 <h3>George Edwards</h3>
//                 <div className="info-group">
//                     <img src="./images/phone-icon.png" alt="phone" />                   
                    
//                 </div>
//                 <div className="info-group">
//                     <img src="./images/mail-icon.png" alt="mail"/>                   
//                     <p>george.edwards@reqres.in</p>
//                 </div>
//             </div>           
//         </div>
//     );
// };

// 2) ////////////////////////////////////////

// ///////// props  ////////
// // export default function Postitem(props) {    
// //     return (       
// //         <div className="contact-card">
// //             <img src={props.avatar} alt="img"/>
// //             <h3>{props.first_name} {props.last_name}</h3>
// //             <div className="info-group">
// //                 <img src="./images/phone-icon.png" alt="phone" />
// //                 <p>{props.phone}</p>
// //             </div>
// //             <div className="info-group">
// //                 <img src="./images/mail-icon.png" alt="mail" />
// //                 <p>{props.email}</p>
// //             </div>
// //         </div> 
// //     )
// // };

// ///////// destriction    ////////
// export default function Postitem({first_name, last_name, avatar, phone, email}) {    
//     return (       
//         <div className="contact-card">
//             <img src={avatar} alt="img"/>
//             <h3>{first_name} {last_name}</h3>
//             <div className="info-group">
//                 <img src="./images/phone-icon.png" alt="phone" />
//                 <p>{phone}</p>
//             </div>
//             <div className="info-group">
//                 <img src="./images/mail-icon.png" alt="mail" />
//                 <p>{email}</p>
//             </div>
//         </div> 
//     )
// };


// 3), 4) and 5) ////////////////////////////////////////
///////////  props  ////////////////
// // export default function Postitem( props ) {    
// //     return (       
// //         <div className="contact-card">
// //             <img src={props.user.avatar} alt="img"/>
// //             <h3>{props.user.first_name} {props.user.last_name}</h3>
// //             <div className="info-group">
// //                 <img src="./images/phone-icon.png" alt="phone" />
// //                 <p>{props.user.phone}</p>
// //                 <p>12358478</p>
// //             </div>
// //             <div className="info-group">
// //                 <img src="./images/mail-icon.png" alt="mail" />
// //                 <p>{props.user.email}</p>
// //             </div>
// //         </div> 
// //     );
// // };


// ///////////  destriction  //////////////// 
export default function Postitem( { user } ) {    
    return (       
        <div className="contact-card">
            <img src={user.avatar} alt="img"/>
            <h3>{user.first_name} {user.last_name}</h3>
            <div className="info-group">
                <img src="./images/phone-icon.png" alt="phone" />
                <p>{user.phone}</p>
            </div>
            <div className="info-group">
                <img src="./images/mail-icon.png" alt="mail" />
                <p>{user.email}</p>
            </div>
        </div>
    );
};























