import React, {useState , useEffect} from'react'
import axios from 'axios';

function UserList() {

    const [listOfUser,setListOfUser] = useState([]); 

    useEffect (() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            setListOfUser(res.data)
        })
        .catch(err=> {console.log(err)})
    } 
       ,[]);     
     return listOfUser
}
export default UserList 