import{T as o}from"./TheFooter.stories-CQAXTzL9.js";import{N as l}from"./NavMobile-DSddqSYm.js";import"./iframe-UYtirdi4.js";import"./preload-helper-PPVm8Dsz.js";import"./theme-BRik7gSk.js";import"./mixins-CenKgLpa.js";import"./useApi-o-nPpLEi-wlm0xV6x.js";import"./IconExternal-BL9uGUW2.js";import"./BaseLink-lmH6BWCB.js";import"./MixinAnimationCaret-DSrUC3op.js";import"./IconCaret-BIX7eFZP.js";import"./BaseButton-DbWpKeGD.js";import"./NavSocial-N-5Erp0g.js";import"./IconSocialTwitter-Bz4sbMPy.js";import"./IconSocialYoutube-jQOabLFr.js";import"./IconSocialEmail-Dua51Chw.js";import"./LogoCaltech-lAMU1NwR.js";import"./logo-tribrand-color-B4i39kPD.js";import"./logo-tribrand-white-3rkGjiM7.js";import"./logo-tribrand-outline-C3WvAwe9.js";import"./IconMenu-hWQjFCgo.js";import"./IconClose-BF_UAfMI.js";import"./NavLogoLinks-DJDH0WRw.js";import"./NavDropdownToggle-BbMzn3rw.js";import"./NavSecondaryDropdownContent-CG-LY-OG.js";import"./NavSearchForm-DpfygKnR.js";import"./SearchInput-D0QKyz7-.js";import"./IconSearch-Dkvcvb-K.js";const P={title:"Navigation/Headers/EDU/NavMobile",component:l,tags:["navigation"],excludeStories:/.*Data$/,parameters:{layout:"fullscreen",docs:{description:{component:`Doesn't look like EDU? Be sure to select "EDU Theme" in the toolbar dropdown.`}}},globals:{viewport:{value:"mobile2",isRotated:!1},theme:"ThemeEdu"}},i={mobileBreadcrumb:`{"/": [{"path": "http://www.jpl.nasa.gov/", "title": "Asteroid watch"}, {"path": "http://www.jpl.nasa.gov/", "title": "Asteroid fast facts"}, {"path": "http://www.jpl.nasa.gov/", "title": "Meteor shower viewing guide"}, {"path": "http://www.jpl.nasa.gov/", "title": "Yeoman's top 10"}, {"path": "http://www.jpl.nasa.gov/", "title": "Glossary of space rocks"}, {"path": "/robotics-at-jpl/", "title": "Robotics"}, {"path": "http://www.jpl.nasa.gov/", "title": "Apps"}, {"path": "/jpl-life/", "title": "JPL Life"}, {"path": "/stars-and-galaxies/", "title": "Stars and Galaxies"}, {"path": "/exoplanets/", "title": "Exoplanets"}, {"path": "/solar-system/", "title": "Solar System"}, {"path": "/asteroids/", "title": "Asteroids"}, {"path": "/comets/", "title": "Comets"}, {"path": "/technology/", "title": "Technology"}, {"path": "/mars/", "title": "Mars"}, {"path": "/earth/", "title": "Earth"}, {"path": "/climate-change/", "title": "Climate Change"}, {"path": "/earthquakes/", "title": "Earthquakes"}, {"path": "/weather/", "title": "Weather"}, {"path": "/robotics/", "title": "Robotics"}], "/missions/": [{"path": "/missions/", "title": "Current"}, {"path": "/missions/", "title": "Past"}, {"path": "/missions/", "title": "Future"}, {"path": "/missions/", "title": "Proposed"}, {"path": "/missions/", "title": "All"}], "/news/": [{"path": "/news/", "title": "All news"}, {"path": "/news/", "title": "Press kits"}, {"path": "/news/", "title": "Fact sheets"}, {"path": "/news/", "title": "Media Information"}, {"path": "/news/", "title": "JPL newsletter"}]}`,footerNavigation:o.footerNavigation,footerMoreFromJpl:o.footerMoreFromJpl},s=[{path:"/custom",title:"Secondary Nav"},{path:"/custom/placeholder-1",title:"First subpage"},{path:"/custom/placeholder-2",title:"Second subpage"},{path:"/custom/placeholder-3",title:"Third subpage"},{path:"/custom/placeholder-4",title:"Fourth subpage"}],n=[{path:"/go/test-site",title:"Test Go Site",children:[]},{path:"/go/test-site/has-children",title:"Has Children",children:[{path:"/go/test-site/has-children/level-3-no-children",title:"Lvl 3 No Children",children:[]},{path:"/go/test-site/has-children/level-3-has-children",title:"Lvl 3 Has Children",children:[{path:"/go/test-site/has-children/level-3-has-children/level-4-no-children-1",title:"Lvl 4 No Children 1",children:[]},{path:"/go/test-site/has-children/level-3-has-children/level-4-no-children-2",title:"Lvl 4 No Children 2",children:[]}]},{path:"/go/test-site/has-children/level-3-no-children",title:"Lvl 3 No Children",children:[]}]},{path:"/go/test-site/no-children-1",title:"No Children 1",children:[]},{path:"/go/test-site/no-children-2",title:"No Children 2",children:[]},{path:"/go/test-site/has-children",title:"Has Children",children:[{path:"/go/test-site/has-children/level-3-no-children",title:"Lvl 3 No Children",children:[]},{path:"/go/test-site/has-children/level-3-has-children",title:"Lvl 3 Has Children",children:[{path:"/go/test-site/has-children/level-3-has-children/level-4-no-children-1",title:"Lvl 4 No Children 1",children:[]},{path:"/go/test-site/has-children/level-3-has-children/level-4-no-children-2",title:"Lvl 4 No Children 2",children:[]}]},{path:"/go/test-site/has-children/level-3-no-children",title:"Lvl 3 No Children",children:[]}]}],t={name:"NavMobile",args:{data:i,headerVisible:!0,scrolledUp:!1,scrollTop:0},render:e=>({components:{NavMobile:l},setup(){return{args:e}},template:`<NavMobile
      v-bind="args"
    />`})},a={args:{data:i,headerVisible:!0,scrolledUp:!1,scrollTop:0,staticSecondaryData:s},render:e=>({components:{NavMobile:l},setup(){return{args:e}},template:`<NavMobile
      v-bind="args"
    />`})},r={args:{data:i,headerVisible:!0,scrolledUp:!1,scrollTop:0,staticSecondaryData:n},render:e=>({components:{NavMobile:l},setup(){return{args:e}},template:`<NavMobile
      v-bind="args"
    />`})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'NavMobile',
  args: {
    data: NavMobileData,
    headerVisible: true,
    scrolledUp: false,
    scrollTop: 0
  },
  render: args => ({
    components: {
      NavMobile
    },
    setup() {
      return {
        args
      };
    },
    template: \`<NavMobile
      v-bind="args"
    />\`
  })
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    data: NavMobileData,
    headerVisible: true,
    scrolledUp: false,
    scrollTop: 0,
    staticSecondaryData: NavMobileSecondaryNavData
  },
  render: args => ({
    components: {
      NavMobile
    },
    setup() {
      return {
        args
      };
    },
    template: \`<NavMobile
      v-bind="args"
    />\`
  })
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    data: NavMobileData,
    headerVisible: true,
    scrolledUp: false,
    scrollTop: 0,
    staticSecondaryData: NavMobileTertiaryNavData
  },
  render: args => ({
    components: {
      NavMobile
    },
    setup() {
      return {
        args
      };
    },
    template: \`<NavMobile
      v-bind="args"
    />\`
  })
}`,...r.parameters?.docs?.source}}};const W=["NavMobileData","BaseStory","WithSecondaryNav","WithTertiaryNav"];export{t as BaseStory,i as NavMobileData,a as WithSecondaryNav,r as WithTertiaryNav,W as __namedExportsOrder,P as default};
