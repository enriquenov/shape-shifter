import React from 'react'
import React3 from 'react-three-renderer'
import * as THREE from 'three'

class Example3 extends React.Component {
  constructor(props) {
    super(props)

    this.cameraPosition = new THREE.Vector3(0, 0, 40)

    this.state = {
      heartRot: new THREE.Euler(),
      heartPos: new THREE.Vector3(0, -8, 0)
    }

    this._onAnimate = () => {
      this.setState({
        heartRot: new THREE.Euler(0, this.state.heartRot.y + 0.02, 0)
      })
    }
  }

  render() {
    const width = window.innerWidth // canvas width
    const height = window.innerHeight - 122 // canvas height

    let x = 0
    let y = 0

    const extrudeSettings = {
      amount: 3,
      bevelEnabled: true,
      bevelSegments: 2,
      steps: 2,
      bevelSize: 1,
      bevelThickness: 1
    }

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
            fov={300}
            aspect={width / height}
            near={0.5}
            far={500}
            position={this.cameraPosition}
          />

          <mesh
            // 3d shape
            position={this.state.heartPos}
            rotation={this.state.heartRot}
          >
            <extrudeGeometry shapes={[heartShape]} settings={extrudeSettings} />
            <meshPhongMaterial color={0xe74c3c} />
          </mesh>

          <ambientLight intensity={0.7} />

          <pointLight
            color={0xffffff}
            distance={10000}
            position={new THREE.Vector3(3, 3, 3)}
          />

          <pointLight
            color={0xffffff}
            distance={10000}
            position={new THREE.Vector3(-1, -1, -1)}
          />
        </scene>
      </React3>
    )
  }
}

export default Example3
