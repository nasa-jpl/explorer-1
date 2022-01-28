/* Custom react component for rendering TOC of components
 * docs: https://storybook.js.org/docs/react/writing-docs/docs-page#custom-inline-rendering
 */

import React from 'react'
import { ReactDocsComponentItem } from './ReactDocsComponentItem'

export function ReactDocsComponentList(props) {
  return (
    <div className="reactdocs-content">
      {props.components.map(function (component, index) {
        return (
          <ReactDocsComponentItem
            key={index}
            heading={component.heading}
            description={component.description}
            storyId={component.storyId}
            canvasClass={component.canvasClass}
            fullWidth={component.fullWidth}
            fullCanvas={component.fullCanvas}
            hideCanvas={component.hideCanvas}
          />
        )
      })}
    </div>
  )
}
