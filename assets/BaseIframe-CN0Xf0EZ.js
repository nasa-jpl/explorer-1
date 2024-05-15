const r=({title:l,url:e,height:a})=>`
  <iframe
    loading="lazy"
    title="${l}"
    data-src="${e}"
    width="100%"
    ${a?`height="${a}"`:""}
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen="allowfullscreen"
    src="${e}"
  ></iframe>`;export{r as B};
