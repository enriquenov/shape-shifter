import React from 'react'

const Sphere = props => {
  const {rotation, position} = props

  return (
    <mesh rotation={rotation} position={position}>
      <sphereGeometry radius={60} widthSegments={30} heightSegments={25} />
      <meshPhongMaterial color={0x32cd32} />
    </mesh>
  )
}

module.exports = Sphere
