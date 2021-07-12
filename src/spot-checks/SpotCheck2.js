import React, { useState } from 'react'

export default function SpotCheck2() {
  // your code here
  let [isLoading, setIsLoading] = useState(true);
  let [lesson, setLesson] = useState({name : "", completed : false, started : false})

  const updateLesson =function(key){
      let lessonVal = { ...lesson };
      lessonVal[key]=true;
      setLesson(lessonVal);
  }
  return (
    <div className="ex-space">
      <h4 className="ex-title">Spot Check 2</h4>
      <div className="exercise" id="sc-2">
        {/* your code here... */}
        {isLoading ? <div> Page is loading... </div> : (
          <div>
              <p>{lesson.name}</p>
              <p>Lesson status: {lesson.completed ? 'Completed' : lesson.started ? 'In progress' : 'Not started'}</p>
              <button onClick={() => updateLesson('started')}>Begin Lesson</button>
              <button onClick={() => updateLesson('completed')}>Complete Lesson</button>
          </div>
        )}

      </div>
    </div>
  )
}