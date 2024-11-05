import { anchorizeBlock } from './anchorizeBlock'
import { StreamfieldBlockData } from '../interfaces'
export const anchorizeStreamfield = (blocks?: StreamfieldBlockData[], headingLevel = 'h2') => {
  if (blocks?.length) {
    // @ts-expect-error
    const filteredBlocks = []
    blocks.forEach((block) => {
      // @ts-expect-error
      filteredBlocks.push(anchorizeBlock(block, headingLevel))
    })
    // @ts-expect-error
    return filteredBlocks
  }
  return blocks
}
