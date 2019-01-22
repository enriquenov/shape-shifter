import React from 'react'
import React3 from 'react-three-renderer'
import * as THREE from 'three'

class Example2 extends React.Component {
  constructor(props) {
    super(props)
    this.cameraPosition = new THREE.Vector3(0, 0, 10)

    this.state = {
      cubeRotation: new THREE.Euler()
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
  }

  render() {
    const width = window.innerWidth
    const height = window.innerHeight - 122

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
            fov={50}
            aspect={width / height}
            near={0.5}
            far={2000}
            position={this.cameraPosition}
          />
          <mesh rotation={this.state.cubeRotation}>
            {/* <boxGeometry width={1} height={1} depth={3} /> */}
            <dodecahedronGeometry radius={2} />
            {/* <meshBasicMaterial color={0x00ff00} /> */}
            <meshLambertMaterial color={0xadff2f} />
          </mesh>

          <ambientLight intensity={0.6} />
          <pointLight
            color={0xffffff}
            distance={10000}
            position={new THREE.Vector3(3, 3, 3)}
          />
        </scene>
      </React3>
    )
  }
}

export default Example2
