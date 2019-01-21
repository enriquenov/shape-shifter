import React from 'react'

const Sun = props => {
  const {rotation, position} = props

  return (
    <mesh rotation={rotation} position={position}>
      <circleGeometry
        radius={2}
        segments={16}
        thetaStart={0}
        thetaLength={Math.PI * 2}
      />
      <meshPhongMaterial color={0xffff00} />
    </mesh>
  )
}

module.exports = Sun
