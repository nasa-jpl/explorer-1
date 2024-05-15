/* Custom react component for rendering TOC of components
 * docs: https://storybook.js.org/docs/react/writing-docs/docs-page#custom-inline-rendering
 */

import React from 'react'
import { Canvas, Description } from '@storybook/blocks'

export function ComponentItem(props) {
  /*
    props: {
      heading,      // required: heading for the card, usually component name
      meta,         // required: CSF exports (import * as Stories). CSF must have a Story export named "Default"
      customDescription, // optional: override the CSF component description
      canvasClass,  // optional: use sbdocs classes to adjust the height of the canvas
      fullWidth,    // optional: if the canvas should be full width as opposed to side-by-side
      fullCanvas,   // optional: if the canvas should be full bleed
      hideCanvas,   // optional: if the canvas should be hidden
    }
  */
  if (props.meta) {
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

    let linkUrl = undefined
    if (props.path) {
      linkUrl = '/?path=' + props.path
    }

    return (
      <div className={wrapperClass}>
        <div
          className={
            'reactdocs-container pr-5' + (props.fullWidth ? '' : ' lg:w-1/2')
          }
        >
          <h3 className="text-base tracking-tight font-medium mt-3 mb-3">
            <a className="sbdocs sbdocs-a font-medium" href={linkUrl}>
              {props.heading}
            </a>
          </h3>
          <p>
            {props.customDescription ? (
              props.customDescription
            ) : props.meta ? (
              <Description of={props.meta} />
            ) : (
              // props.meta.default.parameters.docs.description.component
              ''
            )}
          </p>
        </div>

        <div className={canvasWrapperClass}>
          {props.hideCanvas ? (
            <a
              href={linkUrl}
              className="mt-6 p-6 flex justify-center shadow-sm border border-gray-light-mid rounded-md items-center"
            >
              <div className="text-gray-mid">View component for details</div>
            </a>
          ) : (
            <Canvas
              className={props.canvasClass}
              meta={props.meta}
              of={props.meta.Default}
            />
          )}
        </div>
      </div>
    )
  }
}
