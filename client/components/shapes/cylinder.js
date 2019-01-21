import React from 'react'

const Cylinder = props => {
  const {rotation, position} = props

  return (
    <mesh rotation={rotation} position={position}>
      <cylinderGeometry
        radiusTop={2}
        radiusBottom={2}
        height={5}
        radialSegments={10}
        heightSegments={16}
      />
      <meshLambertMaterial color={0xffa07a} />
    </mesh>
  )
}

module.exports = Cylinder
