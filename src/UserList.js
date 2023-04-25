import axios from 'axios'
import React,{useState,useEffect} from 'react'

const UserList = () => {
    const [listofUser, setlistofUser] = useState([])
    useEffect(()=>{
        const fetch = async()=>{
            const data = await axios.get('https://jsonplaceholder.typicode.com/users') 
            setlistofUser(data.data)
        }
        fetch()
    },[])
    console.log(listofUser)
  return (
    <div className="users">
        {
            listofUser && listofUser.map(user=>(

                        <div className="card" key={user.id}>

                            <div className="cover-photo">
                                <h1>{user.username}</h1>
                            </div>

                            <h3 className="profile-name">{user.name}</h3>
                            <p className="about">{user.email}</p>
                            <p className="about">{user.phone}</p>
                            <p >{user.webiste}</p>

                            <div className="icons">
                                <i className="fa-brands fa-linkedin">{user.address.street}</i>
                                <i className="fa-brands fa-linkedin">{user.address.city}</i>
                            </div>

                        </div>
            ))
        }

    </div>
  )
}

export default UserList