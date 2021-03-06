import React, { Component } from 'react'

class Hue extends Component {
  render() {
    return (
      <>
        <h2>Hue</h2>
        <div className="HueSlideContainer">
          <input
            type="range"
            min="1"
            max="100"
            value="50"
            class="slider"
            id="myRange"
          />
        </div>
        <div class="slidecontainer">
  <input type="range" min="1" max="100" value="50" class="slider" id="myRange">
  <p>Value: <span id="demo"></span></p>
</div>


<script>
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}
</script>

      </>
    )
  }
}

export default Hue
