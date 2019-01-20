import React from 'react'
import React3 from 'react-three-renderer'
import * as THREE from 'three'

class Example5 extends React.Component {
  constructor(props) {
    super(props)

    //construct the position vector here, because if we use 'new' within render,
    // React will think that things have changed when they have not
    this.cameraPosition = new THREE.Vector3(0, 0, 50)

    this.state = {
      sphereRotation: new THREE.Euler(),
      cubeRotation: new THREE.Euler(),
      spherePosition: new THREE.Vector3(0, -60, 0),
      cubePosition: new THREE.Vector3(0, 5, 0),
      color: '0x32CD32'
    }

    this._onAnimate = () => {
      // we will get this callback every frame

      // pretend cubeRotation is immutable.
      // this helps with updates and pure rendering.
      // React will be sure that the rotation has now updated.
      this.setState({
        sphereRotation: new THREE.Euler(
          this.state.sphereRotation.x + 0.005,
          this.state.sphereRotation.y - 0.005,
          1
        ),
        cubeRotation: new THREE.Euler(
          this.state.cubeRotation.x,
          this.state.cubeRotation.y + 0.01,
          5
        )
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
          {/* BOX */}
          <mesh
            rotation={this.state.cubeRotation}
            position={this.state.cubePosition}
          >
            <boxGeometry width={5} height={5} depth={5} />
            <meshLambertMaterial color={0xffa07a} />
          </mesh>

          {/* SPHERE */}
          <mesh
            rotation={this.state.sphereRotation}
            position={this.state.spherePosition}
          >
            <sphereGeometry
              radius={60}
              widthSegments={20}
              heightSegments={20}
            />
            <meshPhongMaterial color={Number.parseInt(this.state.color, 16)} />
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

export default Example5
