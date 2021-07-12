import React, { useState, useEffect } from 'react'

export default function SpotCheck3() {
  const [likes, setlike] = useState(0);

  useEffect(() => {
    document.title = `You have ${likes} likes`
  })
  const addLike = () =>{setlike(likes+1)} 
  return (
    <div className="ex-space">
      <h4 className="ex-title">Spot Check 3</h4>
      <div className="exercise" id="sc-3">
        {/* your code here... */}
        <p>My shoobi doobi post</p>
        <button onClick={addLike}>Like</button>
      </div>
    </div>
  )
}