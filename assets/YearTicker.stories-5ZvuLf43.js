import{Y as t}from"./YearTicker-CDXufN5y.js";import"./iframe-Cbo-gMoN.js";import"./preload-helper-PPVm8Dsz.js";const c={title:"Components/Utilities/YearTicker",component:t,excludeStories:/.*Data$/},r=["2019","2018","2017","2016","2015","2014","2013","2012","2011","2006","2005","2004","2002","2000","1998","1997","1995","1993","1991","1990","1989","1986","1983","1979","1978","1975","1974","1971","1966","1965","1964","1963","1962","1959","1958","1956","1947","1944","1943","1939","1936"],s=o=>({props:Object.keys(o),components:{YearTicker:t},data(){return{demoYear:r[0]}},mounted(){window.addEventListener("mousemove",this.updateYear,{passive:!0})},beforeDestroy(){window.removeEventListener("mousemove",this.updateYear)},methods:{updateYear(n){const a=Math.floor(n.clientY/r.length);this.demoYear=String(r[a])}},template:'<YearTicker :targetYear="demoYear"/>'}),e=s.bind({});e.storyName="YearTicker";e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
  props: Object.keys(args),
  components: {
    YearTicker
  },
  data() {
    return {
      demoYear: demoYears[0]
    };
  },
  mounted() {
    window.addEventListener('mousemove', this.updateYear, {
      passive: true
    });
  },
  beforeDestroy() {
    window.removeEventListener('mousemove', this.updateYear);
  },
  methods: {
    updateYear(e) {
      const index = Math.floor(e.clientY / demoYears.length);
      this.demoYear = String(demoYears[index]);
    }
  },
  template: \`<YearTicker :targetYear="demoYear"/>\`
})`,...e.parameters?.docs?.source}}};const Y=["BaseStory"];export{e as BaseStory,Y as __namedExportsOrder,c as default};
