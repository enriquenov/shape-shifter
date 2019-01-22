import React from 'react'
import React3 from 'react-three-renderer'
import * as THREE from 'three'
import Switcher from './widgets/switcher2'

class Example5 extends React.Component {
  constructor(props) {
    super(props)
    this.cameraPosition = new THREE.Vector3(0, 0, 50)

    this.state = {
      knotRotation: new THREE.Euler(),
      radius: 8,
      tube: 2,
      tubularSegments: 75,
      radialSegments: 9,
      color: 0xbb8e4c
    }

    this._onAnimate = () => {
      this.setState({
        knotRotation: new THREE.Euler(
          this.state.knotRotation.x + 0.01,
          this.state.knotRotation.y + 0.01,
          5
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
    const {
      radius,
      tube,
      tubularSegments,
      radialSegments,
      knotRotation,
      color
    } = this.state

    return (
      <div>
        <Switcher
          radius={radius}
          tube={tube}
          tubularSegments={tubularSegments}
          radialSegments={radialSegments}
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
              near={0.1}
              far={1000}
              position={this.cameraPosition}
            />
            <mesh rotation={knotRotation}>
              <torusKnotGeometry
                radius={radius}
                tube={tube}
                tubularSegments={tubularSegments}
                radialSegments={radialSegments}
              />
              <meshLambertMaterial color={color} />
            </mesh>

            <ambientLight intensity={0.9} />
            <pointLight
              color={0xffffff}
              distance={10000}
              position={new THREE.Vector3(1, 1, 1)}
            />
          </scene>
        </React3>
      </div>
    )
  }
}

export default Example5
