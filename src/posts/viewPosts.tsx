import { useEffect, useState } from "react";
import {collection, getDocs} from "firebase/firestore"
import {db} from "../firebase/firebase"
const ViewPosts = () => {
    // The variable for usestate needs to have a declared type
    // so when we pull data for usestate, the variables can decide what type they need
    // we use type "any" here to clear any confusing errors
    // and we also use it in our html 
    const [posts, setPosts] = useState<any>([]);

    useEffect(() => {
        // Asynchronous Function from the API Promise. Promise = Binary Result of the API Call

        const postsCollectionRef = collection(db, "posts");
        const getUsers = async () => {
            // Logic from getting the users from FireBase
            const data = await getDocs(postsCollectionRef);
            console.log(data);

            // Error above, but we still write the skeleton code

           setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

        }
        getUsers();
    }, [])


    return <div className ="App"> 
    <input placeholder="Name ..." />
    {posts.map((post: any) => {
        return (
        <div>

            <div>
                {" Title:  "}
                <h1>{post.postTitle}</h1>
            </div>

            <div>
                {" Author: "}
                <h1>{post.author}</h1>
            </div>

            <div>
                {" Blog Post Text: "}
                <h1>{post.postText}</h1>
            </div>

        </div>
        
        );
    })}
    </div>
}

export default ViewPosts;