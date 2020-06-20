import React, { useRef, useEffect, useState } from 'react';
import { TweenLite, Power3 } from 'gsap'
import './App.css';

function App() {

  let circle = useRef(null)
  let circleRed = useRef(null)
  let circleBlue = useRef(null)

  const [expanded, setExpanded] = useState(false)

  const handleExpand = () => {
    TweenLite.to(circleRed, 1, { width: 200, height: 200})

  }

  const handleShrink = () => {
    TweenLite.to(circleRed, 1, { width: 75, height: 75})
  }

  const toggleSize = () => {
    setExpanded(expanded => !expanded)
    expanded ? handleExpand() : handleShrink()
  }

  useEffect(() => {
    //staggerFrom used to iterate through a list of tweens
    TweenLite.staggerFrom(
      [circle, circleRed, circleBlue],// target
      2, //duration
      {opacity: 0, x: 200, ease: Power3.easeOut}, //tween variables, x=horizontal motion
      .5 //delay per iteration
    )
  }, [])

  return (
    <div className="App">
      <div className='App-header'>
        <div className='circle-container'>
          <div ref={el => circle = el} className='circle'></div>
          <div onClick={toggleSize} ref={el => circleRed = el} className='circle red'></div>
          <div ref={el => circleBlue = el} className='circle blue'></div>
        </div>
      </div>
    </div>
  );
}

export default App;
