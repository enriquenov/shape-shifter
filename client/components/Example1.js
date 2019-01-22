import React from 'react'
import React3 from 'react-three-renderer'
import * as THREE from 'three'
import Switcher from './widgets/switcher'

class Example1 extends React.Component {
  constructor() {
    super()

    this.cameraPosition = new THREE.Vector3(0, 0, 10)

    this.state = {
      cubeRotation: new THREE.Euler(),
      width: 4,
      height: 4,
      depth: 4,
      color: 0xf0e68c
    }

    this._onAnimate = () => {
      this.setState({
        cubeRotation: new THREE.Euler(
          this.state.cubeRotation.x - 0.01,
          this.state.cubeRotation.y + 0.01,
          0
        ),
        cubePosition: new THREE.Vector3(0, 0, -5)
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
    const width = window.innerWidth // canvas width
    const height = window.innerHeight - 122 // canvas height

    return (
      <div>
        <Switcher
          handlerChange={this.handlerChange}
          width={this.state.width}
          height={this.state.height}
          depth={this.state.depth}
        />
        <React3
          mainCamera="camera" // this points to the perspectiveCamera which has the name set to "camera" below
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
            <mesh
              rotation={this.state.cubeRotation}
              position={this.state.cubePosition}
            >
              <boxGeometry
                width={this.state.width}
                height={this.state.height}
                depth={this.state.depth}
              />
              <meshLambertMaterial color={this.state.color} />
            </mesh>

            <ambientLight intensity={0.5} />

            <pointLight
              color={0xffffff}
              distance={10000}
              position={new THREE.Vector3(4, 3, 2)}
            />
          </scene>
        </React3>
      </div>
    )
  }
}

export default Example1
