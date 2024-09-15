import SearchFilterGroup from './SearchFilterGroup.vue'

export default {
  title: 'Components/Search/SearchFilterGroup',
  component: SearchFilterGroup,
  excludeStories: /.*Data$/
}

// template
const SearchFilterGroupTemplate = (args) => ({
  props: Object.keys(args),
  components: { SearchFilterGroup },
  template: `<SearchFilterGroup
    :filter-by="filterBy"
    :buckets="buckets"
    :group-key="groupKey"
    :group-title="groupTitle"
    :truncate-filters="truncateFilters"
/>`
})

export const BaseStory = {
  name: 'Topic Filter',
  args: {
    filterBy: [],
    buckets: [
      { key: 'Solar System', doc_count: 3308 },
      { key: 'Earth', doc_count: 1179 },
      { key: 'Stars and Galaxies', doc_count: 979 },
      { key: 'Technology', doc_count: 480 }
    ],
    groupKey: 'topics',
    groupTitle: 'Topic',
    truncateFilters: false
  }
}
export const DateFilter = {
  args: {
    filterBy: [],
    buckets: [
      { key_as_string: '2021', key: 1609459200000, doc_count: 5 },
      { key_as_string: '2020', key: 1577836800000, doc_count: 231 },
      { key_as_string: '2019', key: 1546300800000, doc_count: 245 },
      { key_as_string: '2018', key: 1514764800000, doc_count: 276 },
      { key_as_string: '2017', key: 1483228800000, doc_count: 314 },
      { key_as_string: '2016', key: 1451606400000, doc_count: 311 },
      { key_as_string: '2015', key: 1420070400000, doc_count: 377 },
      { key_as_string: '2014', key: 1388534400000, doc_count: 418 },
      { key_as_string: '2013', key: 1356998400000, doc_count: 358 },
      { key_as_string: '2012', key: 1325376000000, doc_count: 389 },
      { key_as_string: '2011', key: 1293840000000, doc_count: 367 },
      { key_as_string: '2010', key: 1262304000000, doc_count: 389 },
      { key_as_string: '2009', key: 1230768000000, doc_count: 172 },
      { key_as_string: '2008', key: 1199145600000, doc_count: 227 }
    ],
    groupKey: 'results_by_year',
    groupTitle: 'Date',
    truncateFilters: true
  }
}
export const SubFilters = {
  decorators: [
    () => ({
      template: '<div id="storyRoot" class="md:w-1/2 lg:w-1/3"><story /></div>'
    })
  ],
  args: {
    filterBy: [],
    buckets: [
      { key: 'Solar System', doc_count: 3308 },
      { key: 'Earth', doc_count: 1179 },
      { key: 'Stars and Galaxies', doc_count: 979 },
      { key: 'Technology', doc_count: 480 }
    ],
    groupKey: 'topics',
    groupTitle: 'Topic',
    truncateFilters: false,
    subFilters: {
      solar_system: [
        {
          key: 'Sun',
          agg: 'solar_system_area',
          doc_count: 20
        },
        {
          key: 'Mercury',
          agg: 'solar_system_area',
          doc_count: 21
        },
        {
          key: 'Venus',
          agg: 'solar_system_area',
          doc_count: 22
        }
      ],
      earth: [
        {
          key: 'Sea Level',
          agg: 'solar_system_area',
          doc_count: 20
        },
        {
          key: 'Pollution',
          agg: 'solar_system_area',
          doc_count: 21
        },
        {
          key: 'Climate Change',
          agg: 'solar_system_area',
          doc_count: 22
        }
      ],
      stars_and_galaxies: [
        {
          key: 'Sea Level',
          agg: 'solar_system_area',
          doc_count: 20
        },
        {
          key: 'Pollution',
          agg: 'solar_system_area',
          doc_count: 21
        },
        {
          key: 'Climate Change',
          agg: 'solar_system_area',
          doc_count: 22
        }
      ],
      technology: [
        {
          key: 'Sea Level',
          agg: 'solar_system_area',
          doc_count: 20
        },
        {
          key: 'Pollution',
          agg: 'solar_system_area',
          doc_count: 21
        },
        {
          key: 'Climate Change',
          agg: 'solar_system_area',
          doc_count: 22
        }
      ]
    }
  }
}
