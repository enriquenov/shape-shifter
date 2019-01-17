import React, {Component} from 'react'
import threeEntryPoint from './threejs/threeEntryPoint'
import '../../public/three.css'

export default class ThreeContainer extends Component {
  componentDidMount() {
    threeEntryPoint(this.threeRootElement)
  }

  render() {
    return (
      <div
        className="three"
        ref={element => (this.threeRootElement = element)}
      />
    )
  }
}
