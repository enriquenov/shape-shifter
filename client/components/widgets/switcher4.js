import React from 'react'

const naming = str => {
  return `${str[0].toUpperCase()}${str.slice(1)}:`
}

export default class Switcher extends React.Component {
  render() {
    const {
      color,
      handlerChange,
      amount,
      bevelSegments,
      steps,
      bevelSize,
      bevelThickness
    } = this.props

    const inputs = [
      {name: 'amount', value: amount, min: 1, max: 30},
      {name: 'bevelSegments', value: bevelSegments, min: 1, max: 10},
      // {name: 'steps', value: steps, min: 1, max: 20},
      {name: 'bevelSize', value: bevelSize, min: 1, max: 15},
      {name: 'bevelThickness', value: bevelThickness, min: 1, max: 10}
    ]

    return (
      <div className="switcher-container">
        <label className="color">Color: </label>
        <div className="select">
          <select onChange={e => handlerChange(e)} name="color" value={color}>
            <option value={0xf0e68c}>Yellow</option>
            <option value={0xff6347}>Red</option>
            <option value={0x5dade2}>Blue</option>
            <option value={0x2ecc71}>Green</option>
            <option value={0xfbfcfc}>White</option>
            <option value={0xd5dbdb}>Grey</option>
            <option value={0x1c2833}>Black</option>
          </select>
        </div>

        {inputs.map(input => {
          return (
            <div key={input.name}>
              <label>{naming(input.name)}</label>
              <input
                className="slider is-fullwidth is-success"
                name={input.name}
                step={1}
                min={input.min}
                max={input.max}
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
