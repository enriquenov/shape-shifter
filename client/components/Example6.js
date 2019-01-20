import React from 'react'
import React3 from 'react-three-renderer'
import * as THREE from 'three'
import Cube from './shapes/cube'
import Sphere from './shapes/sphere'
import ExtrudeShape from './shapes/extrudeShape'

class Example5 extends React.Component {
  constructor(props) {
    super(props)

    this.cameraPosition = new THREE.Vector3(0, 0, 50)

    this.state = {
      cubeRot: new THREE.Euler(),
      cubePos: new THREE.Vector3(20, 4, 0),
      sphereRot: new THREE.Euler(),
      spherePos: new THREE.Vector3(0, -60, 0),
      extrudeRot: new THREE.Euler(),
      extrudePos: new THREE.Vector3(-20, 4, 0)
    }

    this._onAnimate = () => {
      this.setState({
        cubeRot: new THREE.Euler(this.state.cubeRot.x - 0.02, 0, -2),
        extrudeRot: new THREE.Euler(
          this.state.extrudeRot.x + 0.01,
          this.state.extrudeRot.y + 0.01,
          0
        ),
        sphereRot: new THREE.Euler(this.state.sphereRot.x + 0.005, 0, 0)
      })
    }
  }

  render() {
    const width = window.innerWidth // canvas width
    const height = window.innerHeight - 130 // canvas height

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
            fov={30}
            aspect={width / height}
            near={1}
            far={10000}
            position={this.cameraPosition}
          />
          {/* CUBE SHAPE*/}
          <Cube rotation={this.state.cubeRot} position={this.state.cubePos} />

          {/* SPHERE SHAPE*/}
          <Sphere
            rotation={this.state.sphereRot}
            position={this.state.spherePos}
          />

          {/* EXTRUDE SHAPE */}
          <ExtrudeShape
            rotation={this.state.extrudeRot}
            position={this.state.extrudePos}
          />

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

export default Example5
