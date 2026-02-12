import{T as h,M as p}from"./TheFooter.stories-CBtkT4sp.js";import{N as l,a as d,b as V}from"./NavMobile-C5IoNjIr.js";import"./iframe-C69I7rSe.js";import"./preload-helper-D6kgxu3v.js";import"./theme-BeEk14Gc.js";import"./mixins-Ba8c27U-.js";import"./IconExternal-DhXEVduI.js";import"./BaseLink-BASxgNXd.js";import"./MixinAnimationCaret-C-ci-QhN.js";import"./IconCaret-CNYMOuyq.js";import"./BaseButton-Bt41sbnG.js";import"./NavSocial-lNjNVPX_.js";import"./IconSocialTwitter-BWWsBc69.js";import"./IconSocialYoutube-DqZF8UMa.js";import"./IconSocialEmail-WvMwv19V.js";import"./LogoCaltech-DzSZROEg.js";import"./logo-tribrand-color-B4i39kPD.js";import"./logo-tribrand-white-3rkGjiM7.js";import"./logo-tribrand-outline-C3WvAwe9.js";import"./IconMenu-6sk5fK6R.js";import"./IconClose-DtIqpsxw.js";import"./NavLogoLinks-CIJe7OSv.js";import"./NavDropdownToggle-DYvOWAGL.js";import"./NavSecondaryDropdownContent-W2Urq7pz.js";import"./NavSearchForm-B3DfamEo.js";import"./SearchInput-18ZstVNA.js";import"./IconSearch-D02KQbtw.js";const de={title:"Navigation/Headers/WWW/NavMobile",component:l,tags:["navigation"],excludeStories:/.*Data$/,parameters:{viewMode:"canvas",docs:{description:{component:"View story directly for correct rendering."}}},globals:{viewport:{value:"mobile2",isRotated:!1},theme:"defaultTheme"}},c={mobileBreadcrumb:`{"/": [{"path": "http://www.jpl.nasa.gov/", "title": "Asteroid watch"}, {"path": "http://www.jpl.nasa.gov/", "title": "Asteroid fast facts"}, {"path": "http://www.jpl.nasa.gov/", "title": "Meteor shower viewing guide"}, {"path": "http://www.jpl.nasa.gov/", "title": "Yeoman's top 10"}, {"path": "http://www.jpl.nasa.gov/", "title": "Glossary of space rocks"}, {"path": "/robotics-at-jpl/", "title": "Robotics"}, {"path": "http://www.jpl.nasa.gov/", "title": "Apps"}, {"path": "/jpl-life/", "title": "JPL Life"}, {"path": "/stars-and-galaxies/", "title": "Stars and Galaxies"}, {"path": "/exoplanets/", "title": "Exoplanets"}, {"path": "/solar-system/", "title": "Solar System"}, {"path": "/asteroids/", "title": "Asteroids"}, {"path": "/comets/", "title": "Comets"}, {"path": "/technology/", "title": "Technology"}, {"path": "/mars/", "title": "Mars"}, {"path": "/earth/", "title": "Earth"}, {"path": "/climate-change/", "title": "Climate Change"}, {"path": "/earthquakes/", "title": "Earthquakes"}, {"path": "/weather/", "title": "Weather"}, {"path": "/robotics/", "title": "Robotics"}], "/missions/": [{"path": "/missions/", "title": "Current"}, {"path": "/missions/", "title": "Past"}, {"path": "/missions/", "title": "Future"}, {"path": "/missions/", "title": "Proposed"}, {"path": "/missions/", "title": "All"}], "/news/": [{"path": "/news/", "title": "All news"}, {"path": "/news/", "title": "Press kits"}, {"path": "/news/", "title": "Fact sheets"}, {"path": "/news/", "title": "Media Information"}, {"path": "/news/", "title": "JPL newsletter"}]}`,footerNavigation:h.footerNavigation,footerMoreFromJpl:h.footerMoreFromJpl},x=[{path:"/custom",title:"Secondary Nav"},{path:"/custom/placeholder-1",title:"First subpage"},{path:"/custom/placeholder-2",title:"Second subpage"},{path:"/custom/placeholder-3",title:"Third subpage"},{path:"/custom/placeholder-4",title:"Fourth subpage"}],U=[{path:"/go/test-site",title:"Test Go Site",children:[]},{path:"/go/test-site/has-children",title:"Has Children",children:[{path:"/go/test-site/has-children/level-3-no-children",title:"Lvl 3 No Children",children:[]},{path:"/go/test-site/has-children/level-3-has-children",title:"Lvl 3 Has Children",children:[{path:"/go/test-site/has-children/level-3-has-children/level-4-no-children-1",title:"Lvl 4 No Children 1",children:[]},{path:"/go/test-site/has-children/level-3-has-children/level-4-no-children-2",title:"Lvl 4 No Children 2",children:[]}]},{path:"/go/test-site/has-children/level-3-no-children",title:"Lvl 3 No Children",children:[]}]},{path:"/go/test-site/no-children-1",title:"No Children 1",children:[]},{path:"/go/test-site/no-children-2",title:"No Children 2",children:[]},{path:"/go/test-site/has-children",title:"Has Children",children:[{path:"/go/test-site/has-children/level-3-no-children",title:"Lvl 3 No Children",children:[]},{path:"/go/test-site/has-children/level-3-has-children",title:"Lvl 3 Has Children",children:[{path:"/go/test-site/has-children/level-3-has-children/level-4-no-children-1",title:"Lvl 4 No Children 1",children:[]},{path:"/go/test-site/has-children/level-3-has-children/level-4-no-children-2",title:"Lvl 4 No Children 2",children:[]}]},{path:"/go/test-site/has-children/level-3-no-children",title:"Lvl 3 No Children",children:[]}]}],t={name:"NavMobile",args:{data:c,headerVisible:!0,scrolledUp:!1,scrollTop:0},render:e=>({components:{NavMobile:l},setup(){return{args:e}},template:`<NavMobile
      v-bind="args"
    />`})},a={args:{data:c,headerVisible:!0,scrolledUp:!1,scrollTop:0,staticSecondaryData:x},render:e=>({components:{NavMobile:l},setup(){return{args:e}},template:`<NavMobile
      v-bind="args"
    />`})},r={args:{data:c,headerVisible:!0,scrolledUp:!1,scrollTop:0,staticSecondaryData:U},render:e=>({components:{NavMobile:l},setup(){return{args:e}},template:`<NavMobile
      v-bind="args"
    />`})},n={args:{data:p},render:e=>({components:{NavMobileDropdown:d},setup(){return{args:e}},template:`<NavMobileDropdown
      v-bind="args"
    />`})},o={args:{data:p},render:e=>({components:{NavMobileDropdown:d},setup(){return{args:e}},template:`<NavMobileDropdown
      v-bind="args"
      class="-active"
    />`})},s={args:{data:x},render:e=>({components:{NavMobileDropdown:d},setup(){return{args:e}},template:`<NavMobileDropdown
      v-bind="args"
    />`})},i={args:{data:p.links[0]},render:e=>({components:{NavMobileLink:V},setup(){return{args:e}},template:`<NavMobileLink
      v-bind="args"
    />`})};var m,v,g;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(g=(v=t.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var u,b,N;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(N=(b=a.parameters)==null?void 0:b.docs)==null?void 0:N.source}}};var w,M,D;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(D=(M=r.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var S,y,f;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(f=(y=n.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var L,C,T;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(T=(C=o.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var k,F,P;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(P=(F=s.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var j,A,W;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(W=(A=i.parameters)==null?void 0:A.docs)==null?void 0:W.source}}};const ce=["NavMobileData","BaseStory","WithSecondaryNav","WithTertiaryNav","Dropdown","DropdownActive","DropdownSecondary","Link"];export{t as BaseStory,n as Dropdown,o as DropdownActive,s as DropdownSecondary,i as Link,c as NavMobileData,a as WithSecondaryNav,r as WithTertiaryNav,ce as __namedExportsOrder,de as default};
