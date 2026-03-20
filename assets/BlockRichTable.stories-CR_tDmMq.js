import{B as o}from"./BlockRichTable-6EqBe80T.js";import{a as e}from"./BlockImage.stories-Bqivj7QF.js";import"./iframe-DykQSSCG.js";import"./preload-helper-PPVm8Dsz.js";import"./BlockImage-DZwtZuf0.js";import"./theme-CBZiEs7X.js";import"./MixinFancybox-v_Rn1HnE.js";import"./IconExpand-DZvUbmjW.js";import"./BaseImage-DIBNPo_Y.js";import"./BaseImagePlaceholder-B0fEOkEA.js";import"./BaseImageCaption-DUOkqFKK.js";import"./BaseLink-BXTWC9Jv.js";import"./MixinAnimationCaret-DEpjYl9A.js";import"./IconCaret-BrQV7_Jh.js";import"./mixins-Bc9aeVQW.js";import"./useApi-j1E6pMaV-Clo2pbDT.js";import"./LayoutHelper-Bh4UUr2o.js";import"./BlockText-a2x_G67a.js";const I={title:"Components/Blocks/BlockRichTable",component:o,tags:["wagtail-blocks"],excludeStories:/.*Data$/},s={blockType:"RichTableBlock",tableCaption:"table caption",tableContent:{tableHead:[[{text:"1. Learn"},{text:"2. Learn why we study geology on Earth and other planets"},{text:"3. Read about it"},{text:"4. Another column"}]],tableBody:[[{...e,caption:"<p>My custom caption.</p>",displayCaption:!0,blockType:"ImageBlock"},{...e,blockType:"ImageBlock"},{...e,blockType:"ImageBlock"},{blockType:"CharBlock",value:"Geologists are scientists who study a planet's solid features, like soil, rocks, and minerals. There are all kinds of rocks and minerals that make up our planet – as well as the Moon, Mars, and other rocky worlds. By studying these features, we can learn more about how rocky worlds form and change over time."}],[{blockType:"CharBlock",value:"Geologists are scientists who study a planet's solid features, like soil, rocks, and minerals. There are all kinds of rocks and minerals that make up our planet – as well as the Moon, Mars, and other rocky worlds. By studying these features, we can learn more about how rocky worlds form and change over time."},{blockType:"CharBlock",value:"Geologists are scientists who study a planet's solid features, like soil, rocks, and minerals. There are all kinds of rocks and minerals that make up our planet – as well as the Moon, Mars, and other rocky worlds. By studying these features, we can learn more about how rocky worlds form and change over time."},{blockType:"CharBlock",value:"Geologists are scientists who study a planet's solid features, like soil, rocks, and minerals. There are all kinds of rocks and minerals that make up our planet – as well as the Moon, Mars, and other rocky worlds. By studying these features, we can learn more about how rocky worlds form and change over time."},{...e,blockType:"ImageBlock"}]]}},a={name:"BlockRichTable",args:{table:s}},t={args:{table:{blockType:"RichTableBlock",tableCaption:"Ut dapibus cursus quam, non dapibus diam pellentesque ac. Maecenas ultrices porta dui eget placerat. Curabitur ornare congue interdum.",tableContent:{tableHead:[[{text:"Image"},{text:"Type"},{text:"Description"}]],tableBody:[[{...e,caption:"<p>Custom ImageCaption</p>",displayCaption:!0,blockType:"ImageBlock"},{blockType:"CharBlock",value:"Internal"},{blockType:"RichTextBlock",value:`<p>Lorem ipsum <a href="/missions/test-mission/">dolor</a> sit amet, consectetur adipiscing elit. Quisque vitae justo quis justo malesuada molestie. Cras sed tincidunt dui.</p>
`}],[{...e,caption:"<p>Custom ImageCaption</p>",displayCaption:!0,blockType:"ImageBlock"},{blockType:"CharBlock",value:"External"},{blockType:"RichTextBlock",value:`<p>Morbi pretium, massa non convallis facilisis, lectus eros vulputate turpis, et imperdiet eros metus eu enim. Cras consequat iaculis leo eget auctor. Sed bibendum, nulla vel ultricies aliquam, augue mauris sagittis massa, nec malesuada massa justo id sem. In hac habitasse platea dictumst. Sed ullamcorper bibendum libero vitae pellentesque.</p>
`}],[{...e,caption:"<p>Custom ImageCaption</p>",displayCaption:!1,blockType:"ImageBlock"},{blockType:"CharBlock",value:"N/A"},{blockType:"RichTextBlock",value:`<p>Maecenas vel dapibus ligula, pretium <a href="#">dictum est</a>. Proin venenatis massa vulputate <strong>est rhoncus</strong>, sed ornare ex sagittis. Donec iaculis magna in rhoncus malesuada.</p>
`}],[{...e,caption:"<p>Custom ImageCaption</p>",displayCaption:!0,blockType:"ImageBlock"},{blockType:"CharBlock",value:"Internal"},{blockType:"RichTextBlock",value:`<p>Lorem ipsum <a href="/missions/test-mission/">dolor</a> sit amet, consectetur adipiscing elit. Quisque vitae justo quis justo malesuada molestie. Cras sed tincidunt dui.</p>
`}]]}}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'BlockRichTable',
  args: {
    table: BlockRichTableData
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    table: {
      blockType: 'RichTableBlock',
      tableCaption: 'Ut dapibus cursus quam, non dapibus diam pellentesque ac. Maecenas ultrices porta dui eget placerat. Curabitur ornare congue interdum.',
      tableContent: {
        tableHead: [[{
          text: 'Image'
        }, {
          text: 'Type'
        }, {
          text: 'Description'
        }]],
        tableBody: [[{
          ...BlockImageData,
          caption: '<p>Custom ImageCaption</p>',
          displayCaption: true,
          blockType: 'ImageBlock'
        }, {
          blockType: 'CharBlock',
          value: 'Internal'
        }, {
          blockType: 'RichTextBlock',
          value: '<p>Lorem ipsum <a href="/missions/test-mission/">dolor</a> sit amet, consectetur adipiscing elit. Quisque vitae justo quis justo malesuada molestie. Cras sed tincidunt dui.</p>\\n'
        }], [{
          ...BlockImageData,
          caption: '<p>Custom ImageCaption</p>',
          displayCaption: true,
          blockType: 'ImageBlock'
        }, {
          blockType: 'CharBlock',
          value: 'External'
        }, {
          blockType: 'RichTextBlock',
          value: '<p>Morbi pretium, massa non convallis facilisis, lectus eros vulputate turpis, et imperdiet eros metus eu enim. Cras consequat iaculis leo eget auctor. Sed bibendum, nulla vel ultricies aliquam, augue mauris sagittis massa, nec malesuada massa justo id sem. In hac habitasse platea dictumst. Sed ullamcorper bibendum libero vitae pellentesque.</p>\\n'
        }], [{
          ...BlockImageData,
          caption: '<p>Custom ImageCaption</p>',
          displayCaption: false,
          blockType: 'ImageBlock'
        }, {
          blockType: 'CharBlock',
          value: 'N/A'
        }, {
          blockType: 'RichTextBlock',
          value: '<p>Maecenas vel dapibus ligula, pretium <a href="#">dictum est</a>. Proin venenatis massa vulputate <strong>est rhoncus</strong>, sed ornare ex sagittis. Donec iaculis magna in rhoncus malesuada.</p>\\n'
        }], [{
          ...BlockImageData,
          caption: '<p>Custom ImageCaption</p>',
          displayCaption: true,
          blockType: 'ImageBlock'
        }, {
          blockType: 'CharBlock',
          value: 'Internal'
        }, {
          blockType: 'RichTextBlock',
          value: '<p>Lorem ipsum <a href="/missions/test-mission/">dolor</a> sit amet, consectetur adipiscing elit. Quisque vitae justo quis justo malesuada molestie. Cras sed tincidunt dui.</p>\\n'
        }]]
      }
    }
  }
}`,...t.parameters?.docs?.source}}};const f=["BlockRichTableData","BaseStory","MixedColumnWidths"];export{a as BaseStory,s as BlockRichTableData,t as MixedColumnWidths,f as __namedExportsOrder,I as default};
