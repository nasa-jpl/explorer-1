import{B as o}from"./BlockRichTable-CSHTelZ1.js";import{a as e}from"./BlockImage.stories-6o-UBDbe.js";import"./iframe-BMO96iuk.js";import"./preload-helper-PPVm8Dsz.js";import"./BlockImage-IWhWxmkw.js";import"./theme-C4zQiDhS.js";import"./MixinFancybox-DrboF8M4.js";import"./IconExpand-CtOryEp4.js";import"./BaseImage-DnXr4oEj.js";import"./BaseImagePlaceholder-tESlx3md.js";import"./BaseImageCaption-29ooxOKv.js";import"./BaseLink-CjTGIJiA.js";import"./MixinAnimationCaret-XOUTBY6Y.js";import"./IconCaret-Be_Zch5B.js";import"./mixins-C6Dkq0hS.js";import"./useApi-j1E6pMaV-PWiyysiJ.js";import"./LayoutHelper-Bk8A8oBV.js";import"./BlockText-OFc_Y2cd.js";const I={title:"Components/Blocks/BlockRichTable",component:o,tags:["wagtail-blocks"],excludeStories:/.*Data$/},s={blockType:"RichTableBlock",tableCaption:"table caption",tableContent:{tableHead:[[{text:"1. Learn"},{text:"2. Learn why we study geology on Earth and other planets"},{text:"3. Read about it"},{text:"4. Another column"}]],tableBody:[[{...e,caption:"<p>My custom caption.</p>",displayCaption:!0,blockType:"ImageBlock"},{...e,blockType:"ImageBlock"},{...e,blockType:"ImageBlock"},{blockType:"CharBlock",value:"Geologists are scientists who study a planet's solid features, like soil, rocks, and minerals. There are all kinds of rocks and minerals that make up our planet – as well as the Moon, Mars, and other rocky worlds. By studying these features, we can learn more about how rocky worlds form and change over time."}],[{blockType:"CharBlock",value:"Geologists are scientists who study a planet's solid features, like soil, rocks, and minerals. There are all kinds of rocks and minerals that make up our planet – as well as the Moon, Mars, and other rocky worlds. By studying these features, we can learn more about how rocky worlds form and change over time."},{blockType:"CharBlock",value:"Geologists are scientists who study a planet's solid features, like soil, rocks, and minerals. There are all kinds of rocks and minerals that make up our planet – as well as the Moon, Mars, and other rocky worlds. By studying these features, we can learn more about how rocky worlds form and change over time."},{blockType:"CharBlock",value:"Geologists are scientists who study a planet's solid features, like soil, rocks, and minerals. There are all kinds of rocks and minerals that make up our planet – as well as the Moon, Mars, and other rocky worlds. By studying these features, we can learn more about how rocky worlds form and change over time."},{...e,blockType:"ImageBlock"}]]}},a={name:"BlockRichTable",args:{table:s}},t={args:{table:{blockType:"RichTableBlock",tableCaption:"Ut dapibus cursus quam, non dapibus diam pellentesque ac. Maecenas ultrices porta dui eget placerat. Curabitur ornare congue interdum.",tableContent:{tableHead:[[{text:"Image"},{text:"Type"},{text:"Description"}]],tableBody:[[{...e,caption:"<p>Custom ImageCaption</p>",displayCaption:!0,blockType:"ImageBlock"},{blockType:"CharBlock",value:"Internal"},{blockType:"RichTextBlock",value:`<p>Lorem ipsum <a href="/missions/test-mission/">dolor</a> sit amet, consectetur adipiscing elit. Quisque vitae justo quis justo malesuada molestie. Cras sed tincidunt dui.</p>
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
