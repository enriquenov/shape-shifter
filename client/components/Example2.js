import React from 'react'
import React3 from 'react-three-renderer'
import * as THREE from 'three'
import Switcher from './widgets/switcher3'

class Example2 extends React.Component {
  constructor(props) {
    super(props)
    this.cameraPosition = new THREE.Vector3(0, 0, 10)

    this.state = {
      cubeRotation: new THREE.Euler(),
      radius: 2,
      color: 0xadff2f
    }

    this._onAnimate = () => {
      this.setState({
        cubeRotation: new THREE.Euler(
          this.state.cubeRotation.x + 0.02,
          this.state.cubeRotation.y + 0.03,
          0
        )
      })
    }

    this.handlerChange = this.handlerChange.bind(this)
  }

  handlerChange(event) {
    event.preventDefault()

    this.setState({
      [event.target.name]: Number(event.target.value)
    })
  }

  render() {
    const width = window.innerWidth
    const height = window.innerHeight - 122

    const {radius, color, cubeRotation} = this.state

    return (
      <div>
        <Switcher
          radius={radius}
          color={color}
          handlerChange={this.handlerChange}
        />
        <React3
          mainCamera="camera"
          width={width}
          height={height}
          clearColor={0x0c2340}
          alpha={true}
          clearAlpha={3}
          onAnimate={this._onAnimate}
        >
          <scene>
            <perspectiveCamera
              name="camera"
              fov={50}
              aspect={width / height}
              near={0.5}
              far={2000}
              position={this.cameraPosition}
            />
            <mesh rotation={cubeRotation}>
              <dodecahedronGeometry radius={radius} />
              <meshLambertMaterial color={color} />
            </mesh>

            <ambientLight intensity={0.6} />
            <pointLight
              color={0xffffff}
              distance={10000}
              position={new THREE.Vector3(3, 3, 3)}
            />
          </scene>
        </React3>
      </div>
    )
  }
}

export default Example2
