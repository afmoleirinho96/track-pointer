import React, { useState, useEffect, useCallback } from 'react'
import { roundToDecimal } from '../../utils/utils'
import debounce from 'lodash/debounce'

function MouseTracker () {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = useCallback(debounce((event: MouseEvent) => {
      setMousePosition({
        x: roundToDecimal(event.clientX / window.innerWidth * 100, 2),
        y: roundToDecimal(event.clientY / window.innerHeight * 100, 2)
      })
  }, 200), [])

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [handleMouseMove])

  return (
    <div>
      <h3>Current Coordinates:</h3>
      <h4 style={{ textAlign: 'center' }}> X: {mousePosition.x}%, Y: {mousePosition.y}%</h4>
    </div>
  )
}

export default MouseTracker
