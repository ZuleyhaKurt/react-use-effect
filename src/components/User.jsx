import { useEffect, useState} from "react";

const User = () => {
    const [user, setUser] = useState("")

    const getUser = () => {
        fetch("https://randomuser.me/api/")
        .then((res) => res.json())
        .then((data) => setUser(data));
    }
   
   useEffect(() => {
     getUser()
   
   }, [])
   
   console.log(user) 
  return (
      <div>
          <h1>NAME</h1>
          <img src="" alt="" />
          <p>email</p>
          <h5>DOB</h5>
          <button className="btn btn-danger" onClick={getUser}>Get User</button>
    </div>
  )
}

export default User