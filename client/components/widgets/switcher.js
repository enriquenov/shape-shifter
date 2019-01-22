import React from 'react'

export default class Switcher extends React.Component {
  render() {
    const {color, height, depth, width, handlerChange} = this.props
    const inputs = [
      {name: 'width', label: 'Width:', value: width},
      {name: 'height', label: 'Height:', value: height},
      {name: 'depth', label: 'Depth:', value: depth}
    ]

    return (
      <div className="switcher-container">
        <label className="color">Color: </label>
        <div className="select">
          <select onChange={e => handlerChange(e)} name="color" value={color}>
            <option value={0xf0e68c}>Yellow</option>
            <option value={0xff6347}>Red</option>
            <option value={0xaed6f1}>Blue</option>
            <option value={0x2ecc71}>Green</option>
            <option value={0xfbfcfc}>White</option>
            <option value={0xd5dbdb}>Grey</option>
            <option value={0x1c2833}>Black</option>
          </select>
        </div>

        {inputs.map(input => {
          return (
            <div key={input.name}>
              <label>{input.label}</label>
              <input
                className="slider is-fullwidth is-success"
                name={input.name}
                step={1}
                min={1}
                max={7}
                value={input.value}
                type="range"
                onChange={e => handlerChange(e)}
              />
            </div>
          )
        })}
      </div>
    )
  }
}
