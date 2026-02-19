import{T as h,M as p}from"./TheFooter.stories-Cgcrzksw.js";import{N as l,a as d,b as v}from"./NavMobile-BxFbgUBQ.js";import"./iframe-Cbo-gMoN.js";import"./preload-helper-PPVm8Dsz.js";import"./theme-BQWoGd8-.js";import"./mixins-DFOhzVt7.js";import"./useApi-o-nPpLEi-G-KNyTFX.js";import"./IconExternal-C8Ethc5a.js";import"./BaseLink-C7mdSZaT.js";import"./MixinAnimationCaret-BKTqSsaA.js";import"./IconCaret-Rf9_wB61.js";import"./BaseButton-CFcHEwKv.js";import"./NavSocial-CrOm6K9-.js";import"./IconSocialTwitter-DEZrQ5dE.js";import"./IconSocialYoutube-CGh-sFzL.js";import"./IconSocialEmail-Bhj0Zb1x.js";import"./LogoCaltech-BPGL2Kge.js";import"./logo-tribrand-color-B4i39kPD.js";import"./logo-tribrand-white-3rkGjiM7.js";import"./logo-tribrand-outline-C3WvAwe9.js";import"./IconMenu-ZfshZn7y.js";import"./IconClose-BO1gWqBk.js";import"./NavLogoLinks-C69X9ndt.js";import"./NavDropdownToggle-Crc7GRzN.js";import"./NavSecondaryDropdownContent-c4sXnW9G.js";import"./NavSearchForm-mMFh3xdu.js";import"./SearchInput-FQZKZQup.js";import"./IconSearch-ggh3d7jY.js";const q={title:"Navigation/Headers/WWW/NavMobile",component:l,tags:["navigation"],excludeStories:/.*Data$/,parameters:{viewMode:"canvas",docs:{description:{component:"View story directly for correct rendering."}}},globals:{viewport:{value:"mobile2",isRotated:!1},theme:"defaultTheme"}},c={mobileBreadcrumb:`{"/": [{"path": "http://www.jpl.nasa.gov/", "title": "Asteroid watch"}, {"path": "http://www.jpl.nasa.gov/", "title": "Asteroid fast facts"}, {"path": "http://www.jpl.nasa.gov/", "title": "Meteor shower viewing guide"}, {"path": "http://www.jpl.nasa.gov/", "title": "Yeoman's top 10"}, {"path": "http://www.jpl.nasa.gov/", "title": "Glossary of space rocks"}, {"path": "/robotics-at-jpl/", "title": "Robotics"}, {"path": "http://www.jpl.nasa.gov/", "title": "Apps"}, {"path": "/jpl-life/", "title": "JPL Life"}, {"path": "/stars-and-galaxies/", "title": "Stars and Galaxies"}, {"path": "/exoplanets/", "title": "Exoplanets"}, {"path": "/solar-system/", "title": "Solar System"}, {"path": "/asteroids/", "title": "Asteroids"}, {"path": "/comets/", "title": "Comets"}, {"path": "/technology/", "title": "Technology"}, {"path": "/mars/", "title": "Mars"}, {"path": "/earth/", "title": "Earth"}, {"path": "/climate-change/", "title": "Climate Change"}, {"path": "/earthquakes/", "title": "Earthquakes"}, {"path": "/weather/", "title": "Weather"}, {"path": "/robotics/", "title": "Robotics"}], "/missions/": [{"path": "/missions/", "title": "Current"}, {"path": "/missions/", "title": "Past"}, {"path": "/missions/", "title": "Future"}, {"path": "/missions/", "title": "Proposed"}, {"path": "/missions/", "title": "All"}], "/news/": [{"path": "/news/", "title": "All news"}, {"path": "/news/", "title": "Press kits"}, {"path": "/news/", "title": "Fact sheets"}, {"path": "/news/", "title": "Media Information"}, {"path": "/news/", "title": "JPL newsletter"}]}`,footerNavigation:h.footerNavigation,footerMoreFromJpl:h.footerMoreFromJpl},m=[{path:"/custom",title:"Secondary Nav"},{path:"/custom/placeholder-1",title:"First subpage"},{path:"/custom/placeholder-2",title:"Second subpage"},{path:"/custom/placeholder-3",title:"Third subpage"},{path:"/custom/placeholder-4",title:"Fourth subpage"}],g=[{path:"/go/test-site",title:"Test Go Site",children:[]},{path:"/go/test-site/has-children",title:"Has Children",children:[{path:"/go/test-site/has-children/level-3-no-children",title:"Lvl 3 No Children",children:[]},{path:"/go/test-site/has-children/level-3-has-children",title:"Lvl 3 Has Children",children:[{path:"/go/test-site/has-children/level-3-has-children/level-4-no-children-1",title:"Lvl 4 No Children 1",children:[]},{path:"/go/test-site/has-children/level-3-has-children/level-4-no-children-2",title:"Lvl 4 No Children 2",children:[]}]},{path:"/go/test-site/has-children/level-3-no-children",title:"Lvl 3 No Children",children:[]}]},{path:"/go/test-site/no-children-1",title:"No Children 1",children:[]},{path:"/go/test-site/no-children-2",title:"No Children 2",children:[]},{path:"/go/test-site/has-children",title:"Has Children",children:[{path:"/go/test-site/has-children/level-3-no-children",title:"Lvl 3 No Children",children:[]},{path:"/go/test-site/has-children/level-3-has-children",title:"Lvl 3 Has Children",children:[{path:"/go/test-site/has-children/level-3-has-children/level-4-no-children-1",title:"Lvl 4 No Children 1",children:[]},{path:"/go/test-site/has-children/level-3-has-children/level-4-no-children-2",title:"Lvl 4 No Children 2",children:[]}]},{path:"/go/test-site/has-children/level-3-no-children",title:"Lvl 3 No Children",children:[]}]}],t={name:"NavMobile",args:{data:c,headerVisible:!0,scrolledUp:!1,scrollTop:0},render:e=>({components:{NavMobile:l},setup(){return{args:e}},template:`<NavMobile
      v-bind="args"
    />`})},a={args:{data:c,headerVisible:!0,scrolledUp:!1,scrollTop:0,staticSecondaryData:m},render:e=>({components:{NavMobile:l},setup(){return{args:e}},template:`<NavMobile
      v-bind="args"
    />`})},r={args:{data:c,headerVisible:!0,scrolledUp:!1,scrollTop:0,staticSecondaryData:g},render:e=>({components:{NavMobile:l},setup(){return{args:e}},template:`<NavMobile
      v-bind="args"
    />`})},n={args:{data:p},render:e=>({components:{NavMobileDropdown:d},setup(){return{args:e}},template:`<NavMobileDropdown
      v-bind="args"
    />`})},o={args:{data:p},render:e=>({components:{NavMobileDropdown:d},setup(){return{args:e}},template:`<NavMobileDropdown
      v-bind="args"
      class="-active"
    />`})},s={args:{data:m},render:e=>({components:{NavMobileDropdown:d},setup(){return{args:e}},template:`<NavMobileDropdown
      v-bind="args"
    />`})},i={args:{data:p.links[0]},render:e=>({components:{NavMobileLink:v},setup(){return{args:e}},template:`<NavMobileLink
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
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    data: MenuFooterPanelData
  },
  render: args => ({
    components: {
      NavMobileDropdown
    },
    setup() {
      return {
        args
      };
    },
    template: \`<NavMobileDropdown
      v-bind="args"
    />\`
  })
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    data: MenuFooterPanelData
  },
  render: args => ({
    components: {
      NavMobileDropdown
    },
    setup() {
      return {
        args
      };
    },
    template: \`<NavMobileDropdown
      v-bind="args"
      class="-active"
    />\`
  })
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    data: NavMobileSecondaryNavData
  },
  render: args => ({
    components: {
      NavMobileDropdown
    },
    setup() {
      return {
        args
      };
    },
    template: \`<NavMobileDropdown
      v-bind="args"
    />\`
  })
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    data: MenuFooterPanelData.links[0]
  },
  render: args => ({
    components: {
      NavMobileLink
    },
    setup() {
      return {
        args
      };
    },
    template: \`<NavMobileLink
      v-bind="args"
    />\`
  })
}`,...i.parameters?.docs?.source}}};const I=["NavMobileData","BaseStory","WithSecondaryNav","WithTertiaryNav","Dropdown","DropdownActive","DropdownSecondary","Link"];export{t as BaseStory,n as Dropdown,o as DropdownActive,s as DropdownSecondary,i as Link,c as NavMobileData,a as WithSecondaryNav,r as WithTertiaryNav,I as __namedExportsOrder,q as default};
