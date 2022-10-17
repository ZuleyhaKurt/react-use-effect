//?===============================================
//?                USEEFFECT HOOK
//?===============================================
//! UseEffect Hook'u fonksiyonel componenler'te yan etkileri
//! (side effect) gerceklestirmek icin kullanilir.
//! componentDidMount,componentDidUpdate,ve componentWillUnmount
//! metotlarinin bir birlesimi gibi dusunulebilir.

import { useState, useEffect } from "react";

//! useEffect(() => {
//*   /* ComponentDidMount code */
//! }, []);

//! useEffect(() => {
//*   */ componentDidUpdate code */
//! }, [var1, var2]);

//! useEffect(() => {
//!   return () => {
//*     //* componentWillUnmount code */
//!   };
//! }, []);

//! useEffect(() => {
//*   //* componentDidMount code + componentDidUpdate code */

//!   return () => {
//*     //* componentWillUnmount code */
//!   };
//! }, [var1, var2]);

const UseEffectHook = () => {

const [count, setCount] = useState(0)

// useEffect(() => {
//     console.log("Mountig")
//     setTimeout(() => {
//          alert("Data fetched")
//      },3000)                        //?componentDidMount + componentDidUpdate

  
// }, [])                  //?Dependency Array
    
//     useEffect(() => {
//     console.log("Mountig+updating")
//     setTimeout(() => {
//          alert("Data fetched")
//      },1000)                        //?componentDidMount + componentDidUpdate

  
// }, [count])
    const fetchData = () => {
       console.log("Data Fetched")
   } 
    
  useEffect(() => {
      const timerId = setInterval(fetchData, 1000);
      console.log("Mounting")                     //?componentDidMount + componentDidUpdate
      return () => {
          clearInterval(timerId)
          console.log("Unmounting")
    }
      
    }, []) 
    

console.log("rendering")


    return (
       <div className="container text-center">
        <h1 className="text-danger">LIFECYCLE METHODS</h1>
        <h3>COUNT={count}</h3>
        <button className="btn btn-info" onClick={()=>setCount(count+1)}>
          INC
        </button>
        </div>
    );
};

export default UseEffectHook;