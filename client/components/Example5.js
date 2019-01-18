import React from 'react'
import React3 from 'react-three-renderer'
import * as THREE from 'three'

class Example5 extends React.Component {
  constructor(props) {
    super(props)

    //construct the position vector here, because if we use 'new' within render,
    // React will think that things have changed when they have not
    this.cameraPosition = new THREE.Vector3(0, 0, 100)

    this.state = {
      cubeRotation: new THREE.Euler()
    }

    this._onAnimate = () => {
      // we will get this callback every frame

      // pretend cubeRotation is immutable.
      // this helps with updates and pure rendering.
      // React will be sure that the rotation has now updated.
      this.setState({
        cubeRotation: new THREE.Euler(
          this.state.cubeRotation.x + 0.01,
          this.state.cubeRotation.y + 0.01,
          5
        )
      })
    }
  }

  render() {
    const width = window.innerWidth // canvas width
    const height = window.innerHeight - 130 // canvas height
    const type = this.props.type

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
            <torusKnotGeometry
              radius={10}
              tube={3}
              tubularSegments={100}
              radialSegments={16}
            />
            <meshLambertMaterial color={0xbb8e4c} />
          </mesh>

          <ambientLight intensity={0.8} />
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
