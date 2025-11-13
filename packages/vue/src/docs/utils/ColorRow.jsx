// .storybook/components/ColorRow.jsx

import React, { useState, useEffect, useRef } from 'react'

// Helper function to convert "rgb(r, g, b)" to "#RRGGBB"
const rgbToHex = (rgb) => {
  // Match the numbers in 'rgb(r, g, b)'
  const match = rgb.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/)
  if (!match) return rgb // Return original if not a standard rgb string

  // Convert each number (0-255) to a 2-digit hex string
  const toHex = (c) => ('0' + parseInt(c, 10).toString(16)).slice(-2)

  return `#${toHex(match[1])}${toHex(match[2])}${toHex(match[3])}`
}

export const ColorRow = ({ swatchClass, name, token }) => {
  const [copied, setCopied] = useState(false)
  // This state will hold the color we read from the DOM
  const [computedHex, setComputedHex] = useState('')

  // This ref gives us access to the swatch <div> element
  const swatchRef = useRef(null)

  // This effect runs after the component renders
  useEffect(() => {
    // We only run this if the ref is attached to an element
    if (swatchRef.current) {
      // 1. Get the computed style from the DOM element
      const style = window.getComputedStyle(swatchRef.current)
      const rgbColor = style.backgroundColor

      // 2. Convert the 'rgb(r, g, b)' string to a hex string
      setComputedHex(rgbToHex(rgbColor))
    }
  }, [swatchClass]) // Re-run if the class name changes

  const copyToClipboard = () => {
    if (!computedHex) return // Don't copy if we haven't read the color yet

    navigator.clipboard
      .writeText(computedHex)
      .then(() => {
        setCopied(true)
        // Reset the "Copied!" text after 2 seconds
        setTimeout(() => setCopied(false), 2000)
      })
      .catch((err) => {
        console.error('Failed to copy: ', err)
      })
  }

  return (
    <tr>
      {/* Column 1: The Swatch */}
      <td>
        <div
          ref={swatchRef}
          className={swatchClass}
          onClick={copyToClipboard}
          title={computedHex ? `Click to copy ${computedHex}` : 'Copy color'}
          style={{
            width: '100%',
            height: '30px',
            cursor: 'pointer'
          }}
        />
      </td>

      {/* Column 2: The Name */}
      <td>{name}</td>

      {/* Column 3: The Token */}
      <td>
        <code>{token}</code>
      </td>

      {/* Column 4: Feedback Text */}
      <td style={{ minWidth: '70px', textAlign: 'center' }}>
        {copied ? <strong>Copied!</strong> : ''}
      </td>
    </tr>
  )
}
