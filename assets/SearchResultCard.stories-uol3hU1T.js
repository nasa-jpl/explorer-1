import{S as T}from"./SearchResultCard-tzwPtX_1.js";const C={title:"Components/Cards/SearchResultCards",component:T,tags:["cards","search"],excludeStories:/.*Data$/},e={url:"/topics/placeholder-slug-1",type:"news",topic:"Moon",date:"May 22, 2018",title:"How engineers at NASA-JPL persevered to develop a ventilator",summary:"On April 30, the Food and Drug Administration approved VITAL for a ventilator Emergency Use Authorization. Developed in just 37 days by NASA's Jet Propulsion Laboratory in response to the coronavirus pandemic, VITAL (short for Ventilator Intervention Technology Accessible Locally) wouldn't replace current hospital ventilators, which can treat a broader range of medical issues.",image:{src:{url:"https://picsum.photos/490/490",width:490,height:490},alt:"Alt text"},headingLevel:"h3"},t={name:"SearchResultCard",args:e},a={args:{...e,featured:!0}},r={args:{...e,isEvents:!0,type:"Event",endDate:"2028-02-26",endTime:"12:00:00",startDate:"2028-02-26",startTime:"08:00:00",startDatetime:"2028-02-26T08:00:00-08:00",endDatetime:"2028-02-26T12:00:00-08:00",location:"On lab",compact:!1}},n={args:{...e,isPodcastSeason:!0,type:"Podcast",compact:!1}},s={globals:{theme:"ThemeEdu"},args:{...e,__typename:"EDUEventPage",pageType:"EDUEventPage",contentType:"EDUEventPage",topic:null,date:null,isEvents:!0,type:"Event",startDate:"2021-11-11",endDate:"2021-11-11",eventType:"Internship",startTime:"00:00:00-08:00",endTime:"23:59:59.999999-08:00",location:"Hybrid",targetAudience:"All ages",pageContentType:"edu_events_edueventpage"}};var o,c,d;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'SearchResultCard',
  args: SearchResultCardData
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var i,l,p;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    ...SearchResultCardData,
    featured: true
  }
}`,...(p=(l=a.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var u,m,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var h,v,E;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...SearchResultCardData,
    isPodcastSeason: true,
    type: 'Podcast',
    compact: false
  }
}`,...(E=(v=n.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var y,S,D;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(D=(S=s.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};const A=["SearchResultCardData","BaseStory","FeaturedResult","EventCard","PodcastEpisodeCard","EduEventCard"],R=Object.freeze(Object.defineProperty({__proto__:null,BaseStory:t,EduEventCard:s,EventCard:r,FeaturedResult:a,PodcastEpisodeCard:n,SearchResultCardData:e,__namedExportsOrder:A,default:C},Symbol.toStringTag,{value:"Module"}));export{R as S};
