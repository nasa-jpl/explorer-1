import{Y as a}from"./YearTicker-BquobTFu.js";import"./iframe-CTVWvntx.js";import"./preload-helper-D6kgxu3v.js";const u={title:"Components/Utilities/YearTicker",component:a,excludeStories:/.*Data$/},r=["2019","2018","2017","2016","2015","2014","2013","2012","2011","2006","2005","2004","2002","2000","1998","1997","1995","1993","1991","1990","1989","1986","1983","1979","1978","1975","1974","1971","1966","1965","1964","1963","1962","1959","1958","1956","1947","1944","1943","1939","1936"],m=s=>({props:Object.keys(s),components:{YearTicker:a},data(){return{demoYear:r[0]}},mounted(){window.addEventListener("mousemove",this.updateYear,{passive:!0})},beforeDestroy(){window.removeEventListener("mousemove",this.updateYear)},methods:{updateYear(i){const d=Math.floor(i.clientY/r.length);this.demoYear=String(r[d])}},template:'<YearTicker :targetYear="demoYear"/>'}),e=m.bind({});e.storyName="YearTicker";var t,o,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
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
})`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const l=["BaseStory"];export{e as BaseStory,l as __namedExportsOrder,u as default};
