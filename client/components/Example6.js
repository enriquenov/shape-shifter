import React from 'react'
import React3 from 'react-three-renderer'
import * as THREE from 'three'
import Sphere from './shapes/sphere'
import Sun from './shapes/sun'
import ExtrudeShape from './shapes/extrudeShape'
import Cylinder from './shapes/cylinder'
import Cube from './shapes/cube'
import Pyramid from './shapes/pyramid'

class Example5 extends React.Component {
  constructor(props) {
    super(props)

    this.cameraPosition = new THREE.Vector3(0, 0, 50)

    this.state = {
      sphereRot: new THREE.Euler(),
      spherePos: new THREE.Vector3(0, -65, 0),
      sunRot: new THREE.Euler(),
      sunPos: new THREE.Vector3(23, 8, 0),
      cubeRot: new THREE.Euler(),
      cubePos: new THREE.Vector3(20, 0, 0),
      extrudeRot: new THREE.Euler(),
      extrudePos: new THREE.Vector3(-20, 0, 0),
      cylinderRot: new THREE.Euler(),
      cylinderPos: new THREE.Vector3(0, 3, 0),
      pyramidRot: new THREE.Euler(),
      pyramidPos: new THREE.Vector3(-10, 4, 0)
    }

    this._onAnimate = () => {
      this.setState({
        sphereRot: new THREE.Euler(this.state.sphereRot.x + 0.005, 0, 0),
        sunRot: new THREE.Euler(0, 0, this.state.sunRot.z - 0.015),
        cubeRot: new THREE.Euler(this.state.cubeRot.x - 0.02, 0, -2),
        extrudeRot: new THREE.Euler(
          this.state.extrudeRot.x + 0.01,
          this.state.extrudeRot.y + 0.01,
          this.state.extrudeRot.z - 0.03
        ),
        cylinderRot: new THREE.Euler(
          this.state.cylinderRot.x + 0.01,
          this.state.cylinderRot.y - 0.01,
          this.state.cylinderRot.z + 0.02
        ),
        pyramidRot: new THREE.Euler(
          this.state.pyramidRot.x - 0.01,
          this.state.pyramidRot.y + 0.01,
          0
        )
      })
    }
  }

  render() {
    const width = window.innerWidth
    const height = window.innerHeight - 130

    return (
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
            fov={30}
            aspect={width / height}
            near={1}
            far={10000}
            position={this.cameraPosition}
          />

          {/* SPHERE SHAPE*/}
          <Sphere
            rotation={this.state.sphereRot}
            position={this.state.spherePos}
          />

          {/* SUN */}
          <Sun rotation={this.state.sunRot} position={this.state.sunPos} />

          {/* CUBE SHAPE*/}
          <Cube rotation={this.state.cubeRot} position={this.state.cubePos} />

          {/* EXTRUDE SHAPE */}
          <ExtrudeShape
            rotation={this.state.extrudeRot}
            position={this.state.extrudePos}
          />

          {/* CYLINDER */}
          <Cylinder
            rotation={this.state.cylinderRot}
            position={this.state.cylinderPos}
          />

          {/* PYRAMID */}
          <Pyramid
            rotation={this.state.pyramidRot}
            position={this.state.pyramidPos}
          />

          {/* LIGHTING */}
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
