/* eslint-disable prettier/prettier */
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

  const hrefTo = (path) => {
    return new Promise((resolve) => {
      const { location } = document

      // Drop the `iframe.html` from the preview path
      const sbPath = location.pathname.replace(/iframe\.html$/, '')
      const url = `${location.origin + sbPath}?${Object.entries({ path })
        .map((item) => `${item[0]}=${item[1]}`)
        .join('&')}`

      parent.window.location = url
    })
  }
  const navigate = (path) => {
    hrefTo(path)
  }
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

    return (
      <div className={wrapperClass}>
        <div className={'reactdocs-container pr-5' + (props.fullWidth ? '' : ' lg:w-1/2')}>
          <h3 className="text-base tracking-tight font-medium mt-3 mb-3">
            <button
              className="sbdocs sbdocs-a font-medium"
              onClick={() => {
                navigate(props.path)
              }}
            >
              {props.heading}
            </button>
          </h3>
          <div>
            {props.customDescription ? (
              props.customDescription
            ) : props.meta ? (
              <Description of={props.meta} />
            ) : (
              ''
            )}
          </div>
        </div>

        <div className={canvasWrapperClass}>
          {props.hideCanvas ? (
            <button
              className="mt-6 p-6 flex justify-center shadow-sm border border-gray-light-mid rounded-md items-center"
              onClick={() => {
                navigate(props.path)
              }}
            >
              <div className="text-gray-mid">View component for details</div>
            </button>
          ) : (
            <Canvas
              className={props.canvasClass}
              meta={props.meta}
              of={props.meta.BaseStory}
            />
          )}
        </div>
      </div>
    )
  }
}
