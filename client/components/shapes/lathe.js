import React from 'react'
import * as THREE from 'three'

const Lathe = props => {
  const {rotation, position} = props

  let lathePoints = []

  for (let i = 0; i < 7; i++) {
    lathePoints.push(
      new THREE.Vector2(
        Math.sin(i * 0.2) * Math.sin(i * 0.1) * 2 + 5,
        (i - 5) * 2
      )
    )
  }

  return (
    <mesh rotation={rotation} position={position}>
      <latheGeometry points={lathePoints} segments={20} />
      <meshPhongMaterial color={0x32cd32} />
    </mesh>
  )
}

module.exports = Lathe
