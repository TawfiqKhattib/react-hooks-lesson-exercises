import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Exercise2() {
  // your code here
  const [users, setusers] = useState([]);

   useEffect(async () => {
    let usersa =await axios.get('https://randomuser.me/api/?results=5')
    usersa=usersa.data.results;
    usersa = usersa.map(user => {return {firstName : user.name.first, lastName : user.name.last, imgUrl : user.picture.medium} })
    setusers(usersa);
  },[])

  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 2</h4>
      <div className="exercise" id="ex-2">
        {/* your code here... */}
        {users.map((user,index) => 
            <div key={`t${index}`}>
             <div> <img src={user.imgUrl}></img> </div>
             <div>{user.firstName} {user.lastName}</div>
            </div>
          )}
       
      </div>
    </div>
  )
}