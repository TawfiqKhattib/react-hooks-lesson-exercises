import React, { useState } from 'react'

export default function Exercise1() {
  const [name, setname] = useState("");
  const [city, setcity] = useState("");
  const [country, setcountry] = useState("");

  const changeInputtxt=function(e){
    if(e.target.id==="name")
      {
        setname(e.target.value);
      }
    else if(e.target.id==="city"){
      setcity(e.target.value);
    } 
    else{
      setcountry(e.target.value)
    }
  }

  const countries = ['united states', 'china', 'united kingdom', 'australia']
  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 1</h4>
      <div className="exercise" id="ex-1">
        {/* your code here... */}
        <input id="name" placeholder="name" value={name} onChange={changeInputtxt}></input>
        <input id="city" placeholder="city" value={city} onChange={changeInputtxt}></input>
        <select value={country} onChange={changeInputtxt}>
          <option >German</option>
          <option >Israel</option>
          <option >France</option>
          <option >China</option>
          <option >Japan</option>
        </select>
      </div>
    </div>
  )
}