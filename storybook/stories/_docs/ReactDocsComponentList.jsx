/* Custom react component for rendering TOC of components
 * docs: https://storybook.js.org/docs/react/writing-docs/docs-page#custom-inline-rendering
 */

import React from 'react'
import { ReactDocsComponentItem } from './ReactDocsComponentItem'

export function ReactDocsComponentList(props) {
  return (
    <div className="reactdocs-content">
      {props.components.map((component, index) => {
        return <ReactDocsComponentItem key={index} {...component} />
      })}
    </div>
  )
}
