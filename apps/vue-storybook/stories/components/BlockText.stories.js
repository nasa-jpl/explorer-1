import BlockText, { variants } from '@explorer-1/vue/src/components/BlockText/BlockText.vue'

export default {
  title: 'Components/Blocks/BlockText',
  component: BlockText,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: Object.keys(variants)
    },
    text: { control: { type: 'text' } }
  }
}

export const Default = {
  name: 'BlockText',
  args: {
    variant: 'large',
    text: `<p>AVIRIS is the first full spectral range imaging spectrometer and dedicated to <a href="https://en.wikipedia.org/wiki/Remote_sensing" target="_blank">Earth Remote Measurement</a>. Test <a href="#">preventlongurlsfrombreakingoutofcontainerpreventlongurlsfrombreakingoutofcontainerpreventlongurlsfrombreakingoutofcontainerpreventlongurlsfrombreakingoutofcontainer</a>. It is a unique optical sensor that continues to deliver calibrated images of the upwelling spectral radiance in 224 contiguous spectral channels (bands) with wavelengths from 380 to 2510 nanometers. AVIRIS has been flown on four aircraft platforms: NASA's high altitude ER-2 jet, Twin Otter International's turboprop, Scaled Composites' Proteus, and NASA's WB-57. The ER-2 flies at approximately 20 km above sea level, at about 730 km/hr. The Twin Otter aircraft flies at 4km above ground level at 130km/hr. AVIRIS has flown North America including Alaska, Hawaii, Europe, Brazil, and Argentina.</p><p>The objective of the AVIRIS project is to support advanced NASA science and applications research.  AVIRIS uses imaging spectroscopy to detect, identify, measure, and monitor constituents and processes of the Earth's surface and atmosphere based on measured constituent absorption and scattering signatures. Science and applications research with AVIRIS data spans a wide range of discipline across the Earth system. </p><hr /><ul><li>Lorem ipsum dolor sit amet consectatur adipscing</li><li>Lorem ipsum dolor sit amet <strong>consectatur adipscing</strong></li><li>Lorem ipsum dolor sit amet consectatur adipscing</li></ul><p>Lorem ipsum dolor sit amet paragraph text</p><ol><li>Lorem ipsum dolor sit amet consectatur adipscing</li><li>Lorem ipsum dolor sit amet consectatur adipscing</li><li>Lorem ipsum dolor <strong>sit amet</strong> consectatur adipscing</li><li>Lorem <strong>ipsum dolor</strong> sit amet consectatur adipscing</li></ol><hr /><p>Lorem ipsum dolor sit amet consectatur adipscing</p>`
  }
}
