import React from 'react'
import * as THREE from 'three'

const Lathe = props => {
  const {rotation, position} = props

  let lathePoints = []

  for (let i = 0; i < 5; i++) {
    lathePoints.push(new THREE.Vector2(Math.sin(i * 0.1) + 1.8, i - 1))
  }

  return (
    <mesh rotation={rotation} position={position}>
      <latheGeometry points={lathePoints} segments={15} />
      <meshLambertMaterial
        color={0xf0f8ff}
        transparent={false}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

module.exports = Lathe
