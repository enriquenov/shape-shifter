import React from 'react'
import React3 from 'react-three-renderer'
import * as THREE from 'three'

class Example3 extends React.Component {
  constructor(props) {
    super(props)

    //construct the position vector here, because if we use 'new' within render,
    // React will think that things have changed when they have not
    this.cameraPosition = new THREE.Vector3(0, 0, 80)

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
          this.state.cubeRotation.y + 0.05,
          1
        )
      })
    }
  }

  render() {
    const width = window.innerWidth // canvas width
    const height = window.innerHeight - 130 // canvas height

    let x = 0
    let y = 0
    let heartShape = new THREE.Shape()

    heartShape.moveTo(x + 5, y + 5)
    heartShape.bezierCurveTo(x + 5, y + 5, x + 4, y, x, y)
    heartShape.bezierCurveTo(x - 6, y, x - 6, y + 7, x - 6, y + 7)
    heartShape.bezierCurveTo(x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19)
    heartShape.bezierCurveTo(x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7)
    heartShape.bezierCurveTo(x + 16, y + 7, x + 16, y, x + 10, y)
    heartShape.bezierCurveTo(x + 7, y, x + 5, y + 5, x + 5, y + 5)

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
            <shapeGeometry shapes={[heartShape]} />
            <meshLambertMaterial color={0xfa8072} />
          </mesh>

          <ambientLight intensity={0.8} />

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

export default Example3
