import Postitem from "./Postitem";

export default function PostitemMap(props) {
    return props.users.map((user) => {
        return <Postitem user={user}/>
    });
};

// export default function PostitemMap({ users }) {
//     return users.map((user) => {
//         return <Postitem user={user}/>
//     });
// };





