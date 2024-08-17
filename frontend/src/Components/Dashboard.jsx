import axios from "axios";
import { useEffect, useState } from "react";

export const Dashboard = ()=>{
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/v1/auth/getUsers' , {
            headers:{
                Authorization:"Bearer "+localStorage.getItem("token")
            }
        })
        .then(response => setUsers(response.data))
        .catch(error => console.error('Error fetching users:', error));
    }, []);
    const name = localStorage.getItem("firstName");
    const returnName = ()=>{
        return name ? name : "Not logged in, Log in first to see the magic as this is a guarded page";
    }
    return(
        <div>
            <div>Current User:{returnName()}</div>
            <h1>Users</h1>
            {users.length ? (
                <ul>
                {users.map(user => (
                    <li key={user.username}>{user.username}</li>
                ))}
                </ul>
            ) : (
                <p>No users found.</p>
            )}
        </div>
    )
}