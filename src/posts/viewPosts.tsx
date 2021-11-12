import { useEffect, useState } from "react";
import "./App.css";
import {collection, getDocs} from "firebase/firestore"
import {db} from "../firebase/firebase"
const viewPosts = () =>{
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Asynchronous Function from the API Promise. Promise = Binary Result of the API Call

        const postsCollectionRef = collection(db, "posts");
        const getUsers = async () => {
            // Logic from getting the users from FireBase
            const data = await getDocs(postsCollectionRef);
            console.log(data);

            // Error above, but we still write the skeleton code

           // setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

        }
        getUsers();
    }, [])


    return <div className ="App"> 
    <input placeholder="Name ..." />
    {users.map((user) => {
        return (
        <div>
            {" "}
            <h1>{user.name}</h1>
        </div>
        );
    })}
    </div>
}

export default viewPosts;