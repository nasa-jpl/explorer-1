import YearTicker from './YearTicker.vue'

export default {
  title: 'WWW/Components/YearTicker',
  components: {
    YearTicker
  },
  excludeStories: /.*Data$/
}

// prettier-ignore
const demoYears = ['2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2006', '2005', '2004', '2002', '2000', '1998', '1997', '1995', '1993', '1991', '1990', '1989', '1986', '1983', '1979', '1978', '1975', '1974', '1971', '1966', '1965', '1964', '1963', '1962', '1959', '1958', '1956', '1947', '1944', '1943', '1939', '1936']

// templates
const YearTickerTemplate = (args) => ({
  props: Object.keys(args),
  components: { YearTicker },
  data() {
    return {
      demoYear: demoYears[0]
    }
  },
  mounted() {
    window.addEventListener('mousemove', this.updateYear, { passive: true })
  },
  beforeDestroy() {
    window.removeEventListener('mousemove', this.updateYear)
  },
  methods: {
    updateYear(e) {
      const index = Math.floor(e.clientY / demoYears.length)
      this.demoYear = String(demoYears[index])
    }
  },
  template: `<YearTicker :targetYear="demoYear"/>`
})

export const Default = YearTickerTemplate.bind({})
Default.storyName = 'YearTicker'
