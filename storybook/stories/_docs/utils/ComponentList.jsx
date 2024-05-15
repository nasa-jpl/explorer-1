/* Custom react component for rendering TOC of components
 * docs: https://storybook.js.org/docs/react/writing-docs/docs-page#custom-inline-rendering
 */

import React from 'react'
import { ComponentItem } from './ComponentItem'

export function ComponentList(props) {
  return (
    <div className="reactdocs-content">
      {props.components.map((component, index) => {
        return <ComponentItem key={index} {...component} />
      })}
    </div>
  )
}
