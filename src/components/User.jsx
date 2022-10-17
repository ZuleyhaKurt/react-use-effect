import { useEffect, useState} from "react";

const User = () => {
    const [user, setUser] = useState("")

    const getUser = () => {
        fetch("https://randomuser.me/api/")
        .then((res) => res.json())
        .then((data) => setUser(data));
    };
   
   useEffect(() => {
     getUser()
   
   }, [])
   
    console.log(user) 
    const {name, dob, email, picture } = user;
    console.log(name)
  return (
      <div>
          <h1>{name?.first}{ name?.last}</h1>
          <img  className="rounded-circle" src={picture?.large} alt="" />
          <p>{email}</p>
          <h5>{dob?.date}</h5>
          <button className="btn btn-danger" onClick={getUser}>Get User</button>
    </div>
  )
}

export default User