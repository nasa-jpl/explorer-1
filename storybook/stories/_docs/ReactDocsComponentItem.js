/* Custom react component for rendering TOC of components
 * docs: https://storybook.js.org/docs/react/writing-docs/docs-page#custom-inline-rendering
 */

import React from 'react'
import { Canvas, Story, Description } from '@storybook/addon-docs'
import LinkTo from '@storybook/addon-links/react'

export function ReactDocsComponentItem(props) {
  /*
    props: {
      heading,      // required: heading for the card, usually component name
      description,  // optional: short description of the component
      storyId,      // required: id of the story, usually the last part of the story URL
      canvasClass,  // optional: use sbdocs classes to adjust the height of the canvas
      fullWidth,    // optional: if the canvas should be full width as opposed to side-by-side
      fullCanvas,   // optional: if the canvas should be full bleed
      hideCanvas,   // optional: if the canvas should be hidden
    }
  */
  let wrapperClass = 'text-base'
  if (props.fullWidth) {
    if (props.fullCanvas) {
      wrapperClass += ' sbdocs-preview-full-width'
    }
  } else {
    wrapperClass += ' lg:flex items-start pt-3'
  }

  let canvasWrapperClass = ''
  if (props.fullWidth) {
    if (props.fullCanvas) {
      canvasWrapperClass += ' sbdocs-preview-full-width'
    }
  } else {
    canvasWrapperClass += ' lg:w-1/2'
  }

  return (
    <div className={wrapperClass}>
      <div
        className={
          'reactdocs-container pr-5' + (props.fullWidth ? '' : ' lg:w-1/2')
        }
      >
        <h3 className="text-base tracking-tight font-medium mt-3 mb-3">
          <LinkTo className="sbdocs sbdocs-a font-medium" kind={props.storyId}>
            {props.heading}
          </LinkTo>
        </h3>
        {props.description ? (
          <Description markdown={props.description} />
        ) : null}
      </div>

      <div className={canvasWrapperClass}>
        {props.hideCanvas ? (
          <LinkTo
            kind={props.storyId}
            className="mt-6 p-6 flex justify-center shadow-sm border border-gray-light-mid rounded-md items-center"
          >
            <div className="text-gray-mid">View component for details</div>
          </LinkTo>
        ) : (
          <Canvas className={props.canvasClass}>
            <Story id={props.storyId} />
          </Canvas>
        )}
      </div>
    </div>
  )
}
