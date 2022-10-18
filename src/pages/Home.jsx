import AddTutorial from "./AddTutorial"
import TutorialList from "./TutorialList";
import axios from "axios"
import { useEffect, useState } from "react";
const Home = () => {
const [tutorials, setTutorials] = useState([])


const url="https://axios-example-cw.herokuapp.com/api/tutorials"

    const getTutorials = async () => {
        const { data } = await axios(url);
        console.log(data)
    }
    
    useEffect(() => {
        getTutorials();
    },[])
    
    
    return (
    <>
      <AddTutorial/>
      <TutorialList />
    </>
  );
};

export default Home;