import React from 'react'

const Pyramid = props => {
  const {rotation, position} = props

  return (
    <mesh rotation={rotation} position={position}>
      <tetrahedronGeometry radius={3} detail={0} />
      <meshLambertMaterial color={0xee82ee} />
    </mesh>
  )
}

module.exports = Pyramid
