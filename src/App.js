// import React, { Component } from 'react'
import React, { useState, useEffect } from 'react'

function App() {
  //   const [count, setCount] = useState(parseInt(props.startingCount))
  const [hue, setHue] = useState(125)
  const [sat, setSat] = useState(125)
  const [light, setLight] = useState(50)
  const [alpha, setAlpha] = useState()

  // Old Version
  // state = {
  //   Hue: 125,
  //   Sat: 125,
  //   Light: 50
  // }

  const HueSlider = event => {
    setHue(event.target.value)
    console.log(event.target.value)
    // this.setState({
    //   Hue: event.target.value
    // })
  }

  const SatSlider = event => {
    setSat(event.target.value)
    console.log(event.target.value)
    // this.setState({
    //   Sat: event.target.value
    // })
  }
  const LightSlider = event => {
    setLight(event.target.value)
    console.log(event.target.value)
    // this.setState({
    //   Light: event.target.value
    // })
  }
  const AlphaSlider = event => {
    setAlpha(event.target.value)
    console.log(event.target.value)
    // this.setState({
    //   Alpha: event.target.value
    // })
  }
  // replace Components did mount
  // useEffect(() => {
  //   getRandomColor()
  // })
  // old DidMount
  // componentDidMount = () => {
  //   this.getRandomColor()
  // }

  let getRandomColor = () => {
    setHue(Math.floor(Math.random() * 360))
    setSat(Math.floor(Math.random() * 100))
    setLight(Math.floor(Math.random() * 100))
    setAlpha(Math.random() * 100)
    // this.setState({
    //   Hue: Math.floor(Math.random() * 360),
    //   Sat: Math.floor(Math.random() * 100),
    //   Light: Math.floor(Math.random() * 100),
    //   Alpha: Math.random() * 100
    // })
  }

  // *****  Return *********

  return (
    <>
      <main
        class="MainContainer"
        style={{
          backgroundColor: `hsl(${hue}, ${sat}%, ${light}%,${alpha}%)`
        }}
      >
        <h1 class="MainTitle">Cool Color Picker</h1>
        <h2>Hue</h2>

        <div>
          <div className="HueNumber">
            <p>{hue}</p>
          </div>
          <input
            className="HueSlider"
            type="range"
            id="start"
            name="volume"
            min="0"
            max="255"
            step="1"
            // value="this.state.Hue"
            onChange={HueSlider}
          />

          <label for="volume" />
        </div>
        <h2>Saturation</h2>
        <div>
          <div className="SatNumber">
            <p>{sat}</p>
          </div>
          <input
            className="HueSlider"
            type="range"
            id="start"
            name="volume"
            min="0"
            max="255"
            step="1"
            onChange={SatSlider}
          />
        </div>

        <h2>Lightness</h2>
        <div>
          <div className="LightNumber">
            <p>{light}</p>
          </div>
          <input
            className="HueSlider"
            type="range"
            id="start"
            name="volume"
            min="0"
            max="100"
            step="1"
            onChange={LightSlider}
          />
        </div>
        <h2>Alpha</h2>
        <div>
          <div className="AlphaNumber">
            <p>{light}</p>
          </div>
          <input
            className="AlphaSlider"
            type="range"
            id="start"
            name="volume"
            min="0"
            max="100"
            step="1"
            onChange={AlphaSlider}
          />
        </div>
        <div className="MainButton">
          <button className="button" onClick={getRandomColor}>
            Click Me
          </button>
        </div>
      </main>
    </>
  )
}

export default App
