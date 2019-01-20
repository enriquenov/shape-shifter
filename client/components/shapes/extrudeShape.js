import React from 'react'
import * as THREE from 'three'

const ExtrudeShape = props => {
  const {rotation, position} = props

  let length = 2
  let width = 1

  let shape = new THREE.Shape()
  shape.moveTo(0, 0)
  shape.lineTo(0, width)
  shape.lineTo(length, width)
  shape.lineTo(length, 0)
  shape.lineTo(0, 0)

  let extrudeSettings = {
    steps: 1,
    amount: 5,
    bevelEnabled: true,
    bevelThickness: 1,
    bevelSize: 0.5,
    bevelSegments: 1
  }

  return (
    <mesh rotation={rotation} position={position}>
      <extrudeGeometry shapes={[shape]} settings={extrudeSettings} />
      <meshPhongMaterial color={0xf0e68c} />
    </mesh>
  )
}

module.exports = ExtrudeShape
