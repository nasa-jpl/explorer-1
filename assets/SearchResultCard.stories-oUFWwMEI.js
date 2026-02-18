import{S as o}from"./SearchResultCard-DAjv5t6L.js";const c={title:"Components/Cards/SearchResultCards",component:o,tags:["cards","search"],excludeStories:/.*Data$/},e={url:"/topics/placeholder-slug-1",type:"news",topic:"Moon",date:"May 22, 2018",title:"How engineers at NASA-JPL persevered to develop a ventilator",summary:"On April 30, the Food and Drug Administration approved VITAL for a ventilator Emergency Use Authorization. Developed in just 37 days by NASA's Jet Propulsion Laboratory in response to the coronavirus pandemic, VITAL (short for Ventilator Intervention Technology Accessible Locally) wouldn't replace current hospital ventilators, which can treat a broader range of medical issues.",image:{src:{url:"https://picsum.photos/490/490",width:490,height:490},alt:"Alt text"},headingLevel:"h3"},t={name:"SearchResultCard",args:e},a={args:{...e,featured:!0}},r={args:{...e,isEvents:!0,type:"Event",endDate:"2028-02-26",endTime:"12:00:00",startDate:"2028-02-26",startTime:"08:00:00",startDatetime:"2028-02-26T08:00:00-08:00",endDatetime:"2028-02-26T12:00:00-08:00",location:"On lab",compact:!1}},n={args:{...e,isPodcastSeason:!0,type:"Podcast",compact:!1}},s={globals:{theme:"ThemeEdu"},args:{...e,__typename:"EDUEventPage",pageType:"EDUEventPage",contentType:"EDUEventPage",topic:null,date:null,isEvents:!0,type:"Event",startDate:"2021-11-11",endDate:"2021-11-11",eventType:"Internship",startTime:"00:00:00-08:00",endTime:"23:59:59.999999-08:00",location:"Hybrid",targetAudience:"All ages",pageContentType:"edu_events_edueventpage"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...SearchResultCardData,
    isPodcastSeason: true,
    type: 'Podcast',
    compact: false
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const d=["SearchResultCardData","BaseStory","FeaturedResult","EventCard","PodcastEpisodeCard","EduEventCard"],l=Object.freeze(Object.defineProperty({__proto__:null,BaseStory:t,EduEventCard:s,EventCard:r,FeaturedResult:a,PodcastEpisodeCard:n,SearchResultCardData:e,__namedExportsOrder:d,default:c},Symbol.toStringTag,{value:"Module"}));export{l as S};
