import React from 'react'
import React3 from 'react-three-renderer'
import * as THREE from 'three'

class Example4 extends React.Component {
  constructor(props) {
    super(props)

    this.cameraPosition = new THREE.Vector3(0, 0, 40)

    this.state = {
      cubeRotation: new THREE.Euler()
    }

    this._onAnimate = () => {
      this.setState({
        cubeRotation: new THREE.Euler(
          this.state.cubeRotation.x + 0.02,
          this.state.cubeRotation.y + 0.01,
          3
        )
      })
    }
  }

  render() {
    const width = window.innerWidth // canvas width
    const height = window.innerHeight - 122 // canvas height

    return (
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
            fov={300}
            aspect={width / height}
            near={0.5}
            far={500}
            position={this.cameraPosition}
          />
          <mesh rotation={this.state.cubeRotation}>
            <sphereGeometry radius={8} widthSegments={32} heightSegments={32} />
            <meshLambertMaterial color={0xfa8072} />
          </mesh>

          <ambientLight intensity={0.6} />

          <pointLight
            color={0xffffff}
            distance={10000}
            position={new THREE.Vector3(1, 1, 1)}
          />
        </scene>
      </React3>
    )
  }
}

export default Example4
