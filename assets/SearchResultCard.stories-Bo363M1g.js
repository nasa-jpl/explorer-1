import{S as i}from"./SearchResultCard-edkkkvM_.js";import{E as c}from"./2026-Explore-JPL-Site-Number-1-Missions-in-Flight-Cc-08o81.js";const d={title:"Components/Cards/SearchResultCards",component:i,tags:["cards","search"],excludeStories:/.*Data$/},e={url:"/topics/placeholder-slug-1",type:"news",topic:"Moon",date:"May 22, 2018",title:"How engineers at NASA-JPL persevered to develop a ventilator",summary:"On April 30, the Food and Drug Administration approved VITAL for a ventilator Emergency Use Authorization. Developed in just 37 days by NASA's Jet Propulsion Laboratory in response to the coronavirus pandemic, VITAL (short for Ventilator Intervention Technology Accessible Locally) wouldn't replace current hospital ventilators, which can treat a broader range of medical issues.",image:{src:{url:"https://picsum.photos/490/490",width:490,height:490},alt:"Alt text"},headingLevel:"h3"},t={name:"SearchResultCard",args:e},a={args:{...e,featured:!0}},r={args:{...e,isEvents:!0,type:"Event",endDate:"2028-02-26",endTime:"12:00:00",startDate:"2028-02-26",startTime:"08:00:00",startDatetime:"2028-02-26T08:00:00-08:00",endDatetime:"2028-02-26T12:00:00-08:00",location:"On lab",compact:!1}},s={args:{...e,isPodcastSeason:!0,type:"Podcast",compact:!1}},n={globals:{theme:"ThemeEdu"},args:{...e,__typename:"EDUEventPage",pageType:"EDUEventPage",contentType:"EDUEventPage",topic:null,date:null,isEvents:!0,type:"Event",startDate:"2021-11-11",endDate:"2021-11-11",eventType:"Internship",startTime:"00:00:00-08:00",endTime:"23:59:59.999999-08:00",location:"Hybrid",targetAudience:"All ages",pageContentType:"edu_events_edueventpage"}},o={args:{...e,theme:"Missions that Changed the World",isAttraction:!0,location:"Building 179, Highbay 1, Subfloor 204",locationIcon:c,wait:"45 minute wait",showMyList:!0,searchDescription:"This is the card description lorem ipsum dolor sit amet. Consectatur adipscing this is the card description. Lorem ipsum dolor sit amet."}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'SearchResultCard',
  args: SearchResultCardData
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...SearchResultCardData,
    featured: true
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...SearchResultCardData,
    isEvents: true,
    type: 'Event',
    endDate: '2028-02-26',
    endTime: '12:00:00',
    startDate: '2028-02-26',
    startTime: '08:00:00',
    startDatetime: '2028-02-26T08:00:00-08:00',
    endDatetime: '2028-02-26T12:00:00-08:00',
    location: 'On lab',
    compact: false
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...SearchResultCardData,
    isPodcastSeason: true,
    type: 'Podcast',
    compact: false
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'ThemeEdu'
  },
  args: {
    ...SearchResultCardData,
    __typename: 'EDUEventPage',
    pageType: 'EDUEventPage',
    contentType: 'EDUEventPage',
    topic: null,
    date: null,
    isEvents: true,
    type: 'Event',
    startDate: '2021-11-11',
    endDate: '2021-11-11',
    eventType: 'Internship',
    startTime: '00:00:00-08:00',
    endTime: '23:59:59.999999-08:00',
    location: 'Hybrid',
    targetAudience: 'All ages',
    pageContentType: 'edu_events_edueventpage'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...SearchResultCardData,
    theme: 'Missions that Changed the World',
    isAttraction: true,
    location: 'Building 179, Highbay 1, Subfloor 204',
    locationIcon: ExploreJplIconImage,
    wait: '45 minute wait',
    showMyList: true,
    searchDescription: 'This is the card description lorem ipsum dolor sit amet. Consectatur adipscing this is the card description. Lorem ipsum dolor sit amet.'
  }
}`,...o.parameters?.docs?.source}}};const l=["SearchResultCardData","BaseStory","FeaturedResult","EventCard","PodcastEpisodeCard","EduEventCard","AttractionCard"],m=Object.freeze(Object.defineProperty({__proto__:null,AttractionCard:o,BaseStory:t,EduEventCard:n,EventCard:r,FeaturedResult:a,PodcastEpisodeCard:s,SearchResultCardData:e,__namedExportsOrder:l,default:d},Symbol.toStringTag,{value:"Module"}));export{m as S};
