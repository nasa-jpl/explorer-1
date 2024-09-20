import BlockText, { variants } from './BlockText.vue'

export default {
  title: 'Components/Blocks/BlockText',
  component: BlockText,
  tags: ['!autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: Object.keys(variants)
    },
    text: { control: { type: 'text' } }
  },
  decorators: [
    () => ({
      template: '<div class="lg:w-2/3 mx-auto"><story /></div>'
    })
  ],
  excludeStories: /.*Data$/
}

export const RichTextMediaData = `<p data-block-key="5f55p">Description for it.</p><div class="richtext-image fullwidth"><img alt="Perseverance Looks Back at &amp;#x27;Bright Angel&amp;#x27;" height="480" loading="lazy" src="https://picsum.photos/640/480" width="640">
  <div class="richtext-caption">
      <div class="caption">One of the navigation cameras aboard NASAs Perseverance Mars rover captured this view looking back at the Bright Angel area on July 30, 2024.</div>
      <span class="credit">Credit: NASA/JPL-Caltech</span>
      <a class="caption-link" href="#">Full Image Details</a>
  </div>
</div><p data-block-key="89jcq">More text and another image that&#x27;s full width (above)</p><p data-block-key="6jsp"></p><div class="richtext-image left"><img alt="Carbon Mapper Coalition&amp;#x27;s Tanager Satellite" height="336" loading="lazy" src="https://picsum.photos/640/336" width="640">
    <div class="richtext-caption">
        <div class="caption">This artists concept depicts one of the Carbon Mapper Coalitions Tanager satellites, the first of which launched on Aug. 16, 2024. Tanager-1 will use imaging spectrometer technology developed at JPL to measure greenhouse gas point-source emissions.</div>
        <span class="credit">Credit: Planet Labs PBC</span>
        <a class="caption-link" href="#">Full Image Details</a>
    </div>
</div>
<ul><li>Item one in the list</li><li>Aliquam erat volutpat. Nam et lorem purus. Pellentesque placerat, lorem eget ultrices bibendum, lorem dolor finibus metus, consectetur mattis lorem sapien id felis. Cras scelerisque lacus et tristique luctus.</li><li>Third item in the list</li></ul>
<p data-block-key="4409g">More text and something that&#x27;s <span="math-text">right-aligned</span>.</p><p data-block-key="bid36"></p><div class="richtext-image right"><img alt="Lecture Brings Galileo&amp;#x27;s Travels into Final Focus" height="350" loading="lazy" src="https://picsum.photos/640/350" width="640">
    <div class="richtext-caption">
        <div class="caption">Lecture Brings Galileo's Travels into Final Focus</div>
    </div>
</div>
<ol><li>Item one in the list</li><li>Aliquam erat volutpat. Nam et lorem purus. Pellentesque placerat, lorem eget ultrices bibendum, lorem dolor finibus metus, consectetur mattis lorem sapien id felis. Cras scelerisque lacus et tristique luctus.</li><li>Third item in the list</li></ol>
<p data-block-key="1f4rd"> Pellentesque euismod, metus et vehicula tincidunt, magna velit viverra enim, non efficitur elit enim ut ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum massa est, aliquam sed volutpat quis, tempor vitae felis. Quisque suscipit in purus non rhoncus. Vestibulum commodo gravida nibh. Quisque imperdiet lacus rhoncus malesuada elementum. Mauris tempor purus quis sollicitudin ornare. Suspendisse eget gravida neque. Etiam gravida, sapien ac condimentum placerat, tellus eros volutpat elit, non viverra lectus turpis ut lectus. Praesent varius porttitor eros eu efficitur. Etiam nec neque semper, facilisis leo non, tempor enim. Etiam a sodales lacus. Aenean a nibh ipsum.</p>
<ul><li>Item one in the list</li><li>Aliquam erat volutpat. Nam et lorem purus. Pellentesque placerat, lorem eget ultrices bibendum, lorem dolor finibus metus, consectetur mattis lorem sapien id felis. Cras scelerisque lacus et tristique luctus.</li><li>Third item in the list</li></ul>
<ol><li>Item one in the list</li><li>Aliquam erat volutpat. Nam et lorem purus. Pellentesque placerat, lorem eget ultrices bibendum, lorem dolor finibus metus, consectetur mattis lorem sapien id felis. Cras scelerisque lacus et tristique luctus.</li><li>Third item in the list</li></ol>
<p>Nunc molestie aliquet nunc, ut viverra risus elementum bibendum. Cras metus metus, sagittis sed ex at, rutrum dictum leo. Cras sodales, urna id aliquam scelerisque, neque sem venenatis justo, a feugiat lorem ligula molestie orci. Vestibulum in suscipit diam. Phasellus pulvinar quis diam ullamcorper sagittis. Praesent a risus leo. Etiam tempor dolor eu turpis laoreet fermentum. Sed turpis risus, interdum ut bibendum ut, ornare a augue. Donec condimentum odio non lectus efficitur sodales. Vivamus posuere ligula a eros molestie, semper porttitor augue interdum. Cras et facilisis ligula, nec malesuada velit. </p>`

export const BaseStory = {
  name: 'BlockText',
  args: {
    variant: 'large',
    text: `<p>AVIRIS is the first full spectral range imaging spectrometer and dedicated to <a href="https://en.wikipedia.org/wiki/Remote_sensing" target="_blank">Earth Remote Measurement</a>. Test <a href="#">preventlongurlsfrombreakingoutofcontainerpreventlongurlsfrombreakingoutofcontainerpreventlongurlsfrombreakingoutofcontainerpreventlongurlsfrombreakingoutofcontainer</a>. It is a unique optical sensor that continues to deliver calibrated images of the upwelling spectral radiance in 224 contiguous spectral channels (bands) with wavelengths from 380 to 2510 nanometers. AVIRIS has been flown on four aircraft platforms: NASA's high altitude ER-2 jet, Twin Otter International's turboprop, Scaled Composites' Proteus, and NASA's WB-57. The ER-2 flies at approximately 20 km above sea level, at about 730 km/hr. The Twin Otter aircraft flies at 4km above ground level at 130km/hr. AVIRIS has flown North America including Alaska, Hawaii, Europe, Brazil, and Argentina.</p><p>The objective of the AVIRIS project is to support advanced NASA science and applications research.  AVIRIS uses imaging spectroscopy to detect, identify, measure, and monitor constituents and processes of the Earth's surface and atmosphere based on measured constituent absorption and scattering signatures. Science and applications research with AVIRIS data spans a wide range of discipline across the Earth system. </p><hr /><ul><li>Lorem ipsum dolor sit amet consectatur adipscing</li><li>Lorem ipsum dolor sit amet <strong>consectatur adipscing</strong></li><li>Lorem ipsum dolor sit amet consectatur adipscing</li></ul><p>Lorem ipsum dolor sit amet paragraph text</p><ol><li>Lorem ipsum dolor sit amet consectatur adipscing</li><li>Lorem ipsum dolor sit amet consectatur adipscing</li><li>Lorem ipsum dolor <strong>sit amet</strong> consectatur adipscing</li><li>Lorem <strong>ipsum dolor</strong> sit amet consectatur adipscing</li></ol><hr /><p>Lorem ipsum dolor sit amet consectatur adipscing</p>`
  }
}

export const RichTextMedia = {
  args: {
    variant: 'large',
    text: RichTextMediaData
  }
}
export const SubsequentFloatingImages = {
  args: {
    variant: 'large',
    text: `<p data-block-key="5f55p">Description for it.</p><div class="richtext-image fullwidth"><img alt="Perseverance Looks Back at &amp;#x27;Bright Angel&amp;#x27;" height="480" loading="lazy" src="https://picsum.photos/640/480" width="640">
                <div class="richtext-caption">
                    <div class="caption">One of the navigation cameras aboard NASAs Perseverance Mars rover captured this view looking back at the Bright Angel area on July 30, 2024.</div>
                    <span class="credit">Credit: NASA/JPL-Caltech</span>
                    <a class="caption-link" href="#">Full Image Details</a>
                </div>
            </div><p data-block-key="89jcq">More text and another image that&#x27;s full width (above)</p><p data-block-key="6jsp"></p><div class="richtext-image right"><img alt="Carbon Mapper Coalition&amp;#x27;s Tanager Satellite" height="336" loading="lazy" src="https://picsum.photos/640/336" width="640">
                <div class="richtext-caption">
                    <div class="caption">This artists concept depicts one of the Carbon Mapper Coalitions Tanager satellites, the first of which launched on Aug. 16, 2024. Tanager-1 will use imaging spectrometer technology developed at JPL to measure greenhouse gas point-source emissions.</div>
                    <span class="credit">Credit: Planet Labs PBC</span>
                    <a class="caption-link" href="#">Full Image Details</a>
                </div>
            </div><p data-block-key="4409g">More text and something that&#x27;s right-aligned.</p><p data-block-key="bid36"></p><div class="richtext-image left"><img alt="Lecture Brings Galileo&amp;#x27;s Travels into Final Focus" height="350" loading="lazy" src="https://picsum.photos/640/350" width="640">
                <div class="richtext-caption">
                    <div class="caption">Lecture Brings Galileo's Travels into Final Focus</div>
                </div>
            </div><p data-block-key="4409g">More text and something that&#x27;s right-aligned.</p><p data-block-key="bid36"></p><div class="richtext-image right"><img alt="Lecture Brings Galileo&amp;#x27;s Travels into Final Focus" height="342" loading="lazy" src="https://picsum.photos/640/350" width="640">
                <div class="richtext-caption">
                    <div class="caption">Lecture Brings Galileo's Travels into Final Focus</div>
                </div>
            </div>
            <div class="richtext-image left"><img alt="Lecture Brings Galileo&amp;#x27;s Travels into Final Focus" height="354" loading="lazy" src="https://picsum.photos/640/320" width="640">
                <div class="richtext-caption">
                    <div class="caption">Lecture Brings Galileo's Travels into Final Focus</div>
                </div>
            </div>
            <div class="richtext-image left"><img alt="Lecture Brings Galileo&amp;#x27;s Travels into Final Focus" height="354" loading="lazy" src="https://picsum.photos/640/324" width="640">
                <div class="richtext-caption">
                    <div class="caption">Lecture Brings Galileo's Travels into Final Focus</div>
                </div>
            </div>
            </div><p data-block-key="1f4rd">More text and two subsequent left-aligned images</p>
                        <p data-block-key="1f4rd"> Pellentesque euismod, metus et vehicula tincidunt, magna velit viverra enim, non efficitur elit enim ut ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum massa est, aliquam sed volutpat quis, tempor vitae felis. Quisque suscipit in purus non rhoncus. Vestibulum commodo gravida nibh. Quisque imperdiet lacus rhoncus malesuada elementum. Mauris tempor purus quis sollicitudin ornare. Suspendisse eget gravida neque. Etiam gravida, sapien ac condimentum placerat, tellus eros volutpat elit, non viverra lectus turpis ut lectus. Praesent varius porttitor eros eu efficitur. Etiam nec neque semper, facilisis leo non, tempor enim. Etiam a sodales lacus. Aenean a nibh ipsum.</p>
<p>Nunc molestie aliquet nunc, ut viverra risus elementum bibendum. Cras metus metus, sagittis sed ex at, rutrum dictum leo. Cras sodales, urna id aliquam scelerisque, neque sem venenatis justo, a feugiat lorem ligula molestie orci. Vestibulum in suscipit diam. Phasellus pulvinar quis diam ullamcorper sagittis. Praesent a risus leo. Etiam tempor dolor eu turpis laoreet fermentum. Sed turpis risus, interdum ut bibendum ut, ornare a augue. Donec condimentum odio non lectus efficitur sodales. Vivamus posuere ligula a eros molestie, semper porttitor augue interdum. Cras et facilisis ligula, nec malesuada velit. </p>`
  }
}
