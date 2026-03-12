import{T as o}from"./TheFooter.stories-BSHKygZv.js";import{N as l}from"./NavMobile-BqsAkSZe.js";import"./iframe-DOEyXX_d.js";import"./preload-helper-PPVm8Dsz.js";import"./theme-DbcyZ10s.js";import"./mixins-BTp_epB9.js";import"./useApi-j1E6pMaV-aXXYAo4l.js";import"./IconExternal-Bbuw2gIr.js";import"./BaseLink-B8HKKSTO.js";import"./MixinAnimationCaret-vfKZGtGj.js";import"./IconCaret-DYMrV03w.js";import"./BaseButton-DMICpTGT.js";import"./NavSocial-DnOtozJ3.js";import"./IconSocialTwitter-_31j4A9s.js";import"./IconSocialYoutube-CoiTPRV5.js";import"./IconSocialEmail-BUmsmYKB.js";import"./LogoCaltech-DHdl9oh4.js";import"./logo-tribrand-color-B4i39kPD.js";import"./logo-tribrand-white-3rkGjiM7.js";import"./logo-tribrand-outline-C3WvAwe9.js";import"./IconMenu-BwF4rYdX.js";import"./IconClose-s4BIJSSn.js";import"./NavLogoLinks-D8sAVz98.js";import"./NavDropdownToggle-_uMKSWn5.js";import"./NavSecondaryDropdownContent-8Ox2r_z2.js";import"./NavSearchForm-24phEwwz.js";import"./SearchInput-rTDzOfDP.js";import"./IconSearch-CSkbE3X7.js";const P={title:"Navigation/Headers/EDU/NavMobile",component:l,tags:["navigation"],excludeStories:/.*Data$/,parameters:{layout:"fullscreen",docs:{description:{component:`Doesn't look like EDU? Be sure to select "EDU Theme" in the toolbar dropdown.`}}},globals:{viewport:{value:"mobile2",isRotated:!1},theme:"ThemeEdu"}},i={mobileBreadcrumb:`{"/": [{"path": "http://www.jpl.nasa.gov/", "title": "Asteroid watch"}, {"path": "http://www.jpl.nasa.gov/", "title": "Asteroid fast facts"}, {"path": "http://www.jpl.nasa.gov/", "title": "Meteor shower viewing guide"}, {"path": "http://www.jpl.nasa.gov/", "title": "Yeoman's top 10"}, {"path": "http://www.jpl.nasa.gov/", "title": "Glossary of space rocks"}, {"path": "/robotics-at-jpl/", "title": "Robotics"}, {"path": "http://www.jpl.nasa.gov/", "title": "Apps"}, {"path": "/jpl-life/", "title": "JPL Life"}, {"path": "/stars-and-galaxies/", "title": "Stars and Galaxies"}, {"path": "/exoplanets/", "title": "Exoplanets"}, {"path": "/solar-system/", "title": "Solar System"}, {"path": "/asteroids/", "title": "Asteroids"}, {"path": "/comets/", "title": "Comets"}, {"path": "/technology/", "title": "Technology"}, {"path": "/mars/", "title": "Mars"}, {"path": "/earth/", "title": "Earth"}, {"path": "/climate-change/", "title": "Climate Change"}, {"path": "/earthquakes/", "title": "Earthquakes"}, {"path": "/weather/", "title": "Weather"}, {"path": "/robotics/", "title": "Robotics"}], "/missions/": [{"path": "/missions/", "title": "Current"}, {"path": "/missions/", "title": "Past"}, {"path": "/missions/", "title": "Future"}, {"path": "/missions/", "title": "Proposed"}, {"path": "/missions/", "title": "All"}], "/news/": [{"path": "/news/", "title": "All news"}, {"path": "/news/", "title": "Press kits"}, {"path": "/news/", "title": "Fact sheets"}, {"path": "/news/", "title": "Media Information"}, {"path": "/news/", "title": "JPL newsletter"}]}`,footerNavigation:o.footerNavigation,footerMoreFromJpl:o.footerMoreFromJpl},s=[{path:"/custom",title:"Secondary Nav"},{path:"/custom/placeholder-1",title:"First subpage"},{path:"/custom/placeholder-2",title:"Second subpage"},{path:"/custom/placeholder-3",title:"Third subpage"},{path:"/custom/placeholder-4",title:"Fourth subpage"}],n=[{path:"/go/test-site",title:"Test Go Site",children:[]},{path:"/go/test-site/has-children",title:"Has Children",children:[{path:"/go/test-site/has-children/level-3-no-children",title:"Lvl 3 No Children",children:[]},{path:"/go/test-site/has-children/level-3-has-children",title:"Lvl 3 Has Children",children:[{path:"/go/test-site/has-children/level-3-has-children/level-4-no-children-1",title:"Lvl 4 No Children 1",children:[]},{path:"/go/test-site/has-children/level-3-has-children/level-4-no-children-2",title:"Lvl 4 No Children 2",children:[]}]},{path:"/go/test-site/has-children/level-3-no-children",title:"Lvl 3 No Children",children:[]}]},{path:"/go/test-site/no-children-1",title:"No Children 1",children:[]},{path:"/go/test-site/no-children-2",title:"No Children 2",children:[]},{path:"/go/test-site/has-children",title:"Has Children",children:[{path:"/go/test-site/has-children/level-3-no-children",title:"Lvl 3 No Children",children:[]},{path:"/go/test-site/has-children/level-3-has-children",title:"Lvl 3 Has Children",children:[{path:"/go/test-site/has-children/level-3-has-children/level-4-no-children-1",title:"Lvl 4 No Children 1",children:[]},{path:"/go/test-site/has-children/level-3-has-children/level-4-no-children-2",title:"Lvl 4 No Children 2",children:[]}]},{path:"/go/test-site/has-children/level-3-no-children",title:"Lvl 3 No Children",children:[]}]}],t={name:"NavMobile",args:{data:i,headerVisible:!0,scrolledUp:!1,scrollTop:0},render:e=>({components:{NavMobile:l},setup(){return{args:e}},template:`<NavMobile
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
