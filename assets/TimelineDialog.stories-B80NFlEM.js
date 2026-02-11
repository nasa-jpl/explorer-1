import{T as n}from"./TimelineDialog-DQcGQviD.js";import"./iframe-G_CakBWE.js";import"./preload-helper-D6kgxu3v.js";import"./BlockDialog-I6WY49Lc.js";import"./IconClose-DT0Gbhoh.js";import"./BaseImage-B8pQH3NJ.js";import"./BaseImagePlaceholder-CDs8KjMy.js";import"./BaseLink-CcTNfetl.js";import"./theme-Bkca4b8i.js";import"./MixinAnimationCaret-D3tm0V1z.js";import"./IconCaret-te7yS8v9.js";import"./BlockText-CEIYzTfh.js";import"./BlockVideoEmbed-Bjs21j9g.js";import"./BaseImageCaption-zf3e7E-j.js";const w={title:"Components/WWW/TimelineDialog",component:n},o={name:"TimelineDialog",args:{data:{id:"7535b4d1-e803-49dd-ad06-8925912464af",heading:"First Rocket Tests by Founders of What Would Become the Jet Propulsion Laboratory",date:"1936-10-31",displayDate:"October 31, 1936",milestoneLabel:"CATEGORY LABEL",description:"Theodore von Kármán, the head of the Guggenheim Aeronautical Laboratory at Caltech, is overseeing pioneering work on rocket propulsion when a pair of young rocket enthusiasts, John W. Parsons and Edward S. Forman, come to him looking for help. Von Kármán connects them to some grad students, and on Halloween, a group goes out to the Arroyo Seco, a dry canyon wash at the foot of the San Gabriel Mountains on the northwest edge of Pasadena. The seven men -- Frank Malina, A.O. Smith, William Bollay, Carlos Wood, William Rockefeller, Parsons and Forman -- try four times to ignite a small rocket motor to gather thrust data, with only the last attempt succeeding (and setting fire to the outside of the motor, too).    ",milestoneLinkLabel:"Optional CTA Link",embed:null,milestoneLink:{externalLink:"https://mars.nasa.gov/insight/",page:null},image:{alt:"Fourth image",src:{height:400,url:"https://picsum.photos/800/400",width:800},srcSet:"https://picsum.photos/400/200 320w, https://picsum.photos/800/400 1024w"}},dialogBoxClass:"max-w-xl"},render:i=>({components:{TimelineDialog:n},setup(){return{args:i}},template:`<div style="min-height: 80vh">
    <button type="button" :data-a11y-dialog-show="args.data.id">Open the dialog</button>
    <TimelineDialog :data="args.data" :dialog-box-class="args.dialogBoxClass"></TimelineDialog>
  </div>`})};var t,e,a;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: 'TimelineDialog',
  args: {
    data: {
      id: '7535b4d1-e803-49dd-ad06-8925912464af',
      heading: 'First Rocket Tests by Founders of What Would Become the Jet Propulsion Laboratory',
      date: '1936-10-31',
      displayDate: 'October 31, 1936',
      milestoneLabel: 'CATEGORY LABEL',
      description: 'Theodore von Kármán, the head of the Guggenheim Aeronautical Laboratory at Caltech, is overseeing pioneering work on rocket propulsion when a pair of young rocket enthusiasts, John W. Parsons and Edward S. Forman, come to him looking for help. Von Kármán connects them to some grad students, and on Halloween, a group goes out to the Arroyo Seco, a dry canyon wash at the foot of the San Gabriel Mountains on the northwest edge of Pasadena. The seven men -- Frank Malina, A.O. Smith, William Bollay, Carlos Wood, William Rockefeller, Parsons and Forman -- try four times to ignite a small rocket motor to gather thrust data, with only the last attempt succeeding (and setting fire to the outside of the motor, too).    ',
      milestoneLinkLabel: 'Optional CTA Link',
      embed: null,
      milestoneLink: {
        externalLink: 'https://mars.nasa.gov/insight/',
        page: null
      },
      image: {
        alt: 'Fourth image',
        src: {
          height: 400,
          url: 'https://picsum.photos/800/400',
          width: 800
        },
        srcSet: 'https://picsum.photos/400/200 320w, https://picsum.photos/800/400 1024w'
      }
    },
    dialogBoxClass: 'max-w-xl'
  },
  render: args => ({
    components: {
      TimelineDialog
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div style="min-height: 80vh">
    <button type="button" :data-a11y-dialog-show="args.data.id">Open the dialog</button>
    <TimelineDialog :data="args.data" :dialog-box-class="args.dialogBoxClass"></TimelineDialog>
  </div>\`
  })
}`,...(a=(e=o.parameters)==null?void 0:e.docs)==null?void 0:a.source}}};const T=["BaseStory"];export{o as BaseStory,T as __namedExportsOrder,w as default};
