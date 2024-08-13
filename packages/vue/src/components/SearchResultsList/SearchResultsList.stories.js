import SearchResultsList from './SearchResultsList.vue'

export default {
  title: 'Components/Search/SearchResultsList',
  component: SearchResultsList,
  decorators: [
    () => ({
      template: `<div id="storyDecorator" class="max-w-screen-xl"><story/></div>`
    })
  ],
  tags: ['!autodocs'],
  parameters: {
    html: {
      root: '#storyDecorator'
    }
  },
  excludeStories: /.*Data$/
}

export const SearchResultsListData = {
  took: 161,
  timed_out: false,
  hits: {
    total: { value: 10000, relation: 'gte' },
    max_score: null,
    hits: [
      {
        _index: 'wagtail__wagtailcore_page_qxic7dc',
        _type: '_doc',
        _id: '126893',
        _score: 27.498775,
        _source: {
          pk: '126893',
          content_type: ['missions.Mission', 'wagtailcore.Page'],
          title: 'Mars Odyssey',
          title_edgengrams: 'Mars Odyssey',
          title_filter: 'Mars Odyssey',
          id_filter: 126893,
          live_filter: true,
          owner_id_filter: null,
          content_type_id_filter: 28,
          path_filter: '0001000100020025',
          depth_filter: 4,
          locked_filter: false,
          show_in_menus_filter: false,
          first_published_at_filter: '2014-07-31T14:26:38+00:00',
          last_published_at_filter: '2021-12-21T19:51:06.579160+00:00',
          latest_revision_created_at_filter: '2021-12-21T19:51:06.425922+00:00',
          locale_id_filter: 1,
          translation_key_filter: '5330d600-bec5-4860-8a6f-4220aecb255f',
          missions_mission__thumbnail_image: {
            thumbnail_image: 'https://picsum.photos/512/288'
          },
          missions_mission__mission_target_labels_filter: ['Mars'],
          missions_mission__mission_type_labels_filter: ['Orbiter'],
          url: '/missions/mars-odyssey',
          missions_mission__summary:
            "With more than 20 years in orbit and counting, the 2001 Mars Odyssey spacecraft has spent more time in orbit around the Red Planet, collecting data on Mars' climate and geology, than any other spacecraft in history.",
          missions_mission__description: [
            "With more than 10 years in orbit and counting, the 2001 Mars Odyssey spacecraft has spent more time in orbit around the Red Planet, collecting data on Mars' climate and geology, than any other spacecraft in history. It also serves as a key communications relay for other Mars missions. In 2002, the orbiter's discovery of hydrogen just below the Martian surface prompted the creation of NASA's Phoenix Mars Lander mission, which in 2008 confirmed theories that the element was contained in frozen water in Mars' high-latitude regions."
          ],
          missions_mission__subtitle: 'Mars Odyssey',
          missions_mission__feature: [
            'Mars Odyssey',
            'Interactive 3D model of Mars Odyssey. View the full interactive experience at Eyes on the Solar System.',
            'https://eyes.nasa.gov/apps/orrery/#/sc_mars_odyssey?time=2021-09-29T21:34:32.182+00:00',
            '500'
          ],
          missions_mission__status_filter: 'current',
          missions_mission__label: 'Mission',
          topic_labels_filter: ['Mars'],
          publication_date_filter: '2001-04-07',
          display_date_filter: 'April 7, 2001',
          _edgengrams: ['Mars Odyssey', 'Mars Odyssey']
        },
        fields: { pk: ['126893'] },
        sort: [27.498775, '2001-04-07 00:00:00'],
        inner_hits: {
          latest: {
            hits: {
              total: { value: 1, relation: 'eq' },
              max_score: 27.498775,
              hits: [
                {
                  _index: 'wagtail__wagtailcore_page_qxic7dc',
                  _type: '_doc',
                  _id: '126893',
                  _score: 27.498775,
                  _source: {
                    pk: '126893',
                    content_type: ['missions.Mission', 'wagtailcore.Page'],
                    title: 'Mars Odyssey',
                    title_edgengrams: 'Mars Odyssey',
                    title_filter: 'Mars Odyssey',
                    id_filter: 126893,
                    live_filter: true,
                    owner_id_filter: null,
                    content_type_id_filter: 28,
                    path_filter: '0001000100020025',
                    depth_filter: 4,
                    locked_filter: false,
                    show_in_menus_filter: false,
                    first_published_at_filter: '2014-07-31T14:26:38+00:00',
                    last_published_at_filter: '2021-12-21T19:51:06.579160+00:00',
                    latest_revision_created_at_filter: '2021-12-21T19:51:06.425922+00:00',
                    locale_id_filter: 1,
                    translation_key_filter: '5330d600-bec5-4860-8a6f-4220aecb255f',
                    missions_mission__thumbnail_image: {
                      thumbnail_image: 'https://picsum.photos/512/288'
                    },
                    missions_mission__mission_target_labels_filter: ['Mars'],
                    missions_mission__mission_type_labels_filter: ['Orbiter'],
                    url: '/missions/mars-odyssey',
                    missions_mission__summary:
                      "With more than 20 years in orbit and counting, the 2001 Mars Odyssey spacecraft has spent more time in orbit around the Red Planet, collecting data on Mars' climate and geology, than any other spacecraft in history.",
                    missions_mission__description: [
                      "With more than 10 years in orbit and counting, the 2001 Mars Odyssey spacecraft has spent more time in orbit around the Red Planet, collecting data on Mars' climate and geology, than any other spacecraft in history. It also serves as a key communications relay for other Mars missions. In 2002, the orbiter's discovery of hydrogen just below the Martian surface prompted the creation of NASA's Phoenix Mars Lander mission, which in 2008 confirmed theories that the element was contained in frozen water in Mars' high-latitude regions."
                    ],
                    missions_mission__subtitle: 'Mars Odyssey',
                    missions_mission__feature: [
                      'Mars Odyssey',
                      'Interactive 3D model of Mars Odyssey. View the full interactive experience at Eyes on the Solar System.',
                      'https://eyes.nasa.gov/apps/orrery/#/sc_mars_odyssey?time=2021-09-29T21:34:32.182+00:00',
                      '500'
                    ],
                    missions_mission__status_filter: 'current',
                    missions_mission__label: 'Mission',
                    topic_labels_filter: ['Mars'],
                    publication_date_filter: '2001-04-07',
                    display_date_filter: 'April 7, 2001',
                    _edgengrams: ['Mars Odyssey', 'Mars Odyssey']
                  }
                }
              ]
            }
          }
        }
      },
      {
        _index: 'wagtail__wagtailcore_page_qxic7dc',
        _type: '_doc',
        _id: '126891',
        _score: 26.592674,
        _source: {
          pk: '126891',
          content_type: ['missions.Mission', 'wagtailcore.Page'],
          title: 'Mars Global Surveyor',
          title_edgengrams: 'Mars Global Surveyor',
          title_filter: 'Mars Global Surveyor',
          id_filter: 126891,
          live_filter: true,
          owner_id_filter: null,
          content_type_id_filter: 28,
          path_filter: '0001000100020023',
          depth_filter: 4,
          locked_filter: false,
          show_in_menus_filter: false,
          first_published_at_filter: '2014-10-15T14:49:27+00:00',
          last_published_at_filter: '2021-12-21T21:25:15.566061+00:00',
          latest_revision_created_at_filter: '2021-12-21T21:25:07.779973+00:00',
          locale_id_filter: 1,
          translation_key_filter: '50075567-bb01-4813-b91b-a7839818b63a',
          missions_mission__thumbnail_image: {
            thumbnail_image: 'https://picsum.photos/512/288'
          },
          missions_mission__mission_target_labels_filter: ['Mars'],
          missions_mission__mission_type_labels_filter: ['Orbiter'],
          url: '/missions/mars-global-surveyor',
          missions_mission__summary:
            'The Mars Global Surveyor orbiter, which operated on Mars for more than nine years, was designed to study the composition of Mars, map its topography and monitor weather patterns.',
          missions_mission__description: [
            'The Mars Global Surveyor orbiter, which operated on Mars for more than nine years, was designed to study the composition of Mars, map its topography and monitor weather patterns. The orbiter made a number of discoveries about the Red Planet, including evidence of liquid water at or near the Martian surface. Observations from the Mars Global Surveyor, especially its identifications of water-related minerals, were used to determine drive routes for the Mars Exploration Rover Opportunity in 2010.'
          ],
          missions_mission__subtitle: 'Mars Global Surveyor',
          missions_mission__feature: [],
          missions_mission__status_filter: 'past',
          missions_mission__label: 'Mission',
          topic_labels_filter: ['Mars'],
          publication_date_filter: '1996-11-07',
          display_date_filter: 'Nov. 7, 1996',
          _edgengrams: ['Mars Global Surveyor', 'Mars Global Surveyor']
        },
        fields: { pk: ['126891'] },
        sort: [26.592674, '1996-11-07 00:00:00'],
        inner_hits: {
          latest: {
            hits: {
              total: { value: 1, relation: 'eq' },
              max_score: 26.592674,
              hits: [
                {
                  _index: 'wagtail__wagtailcore_page_qxic7dc',
                  _type: '_doc',
                  _id: '126891',
                  _score: 26.592674,
                  _source: {
                    pk: '126891',
                    content_type: ['missions.Mission', 'wagtailcore.Page'],
                    title: 'Mars Global Surveyor',
                    title_edgengrams: 'Mars Global Surveyor',
                    title_filter: 'Mars Global Surveyor',
                    id_filter: 126891,
                    live_filter: true,
                    owner_id_filter: null,
                    content_type_id_filter: 28,
                    path_filter: '0001000100020023',
                    depth_filter: 4,
                    locked_filter: false,
                    show_in_menus_filter: false,
                    first_published_at_filter: '2014-10-15T14:49:27+00:00',
                    last_published_at_filter: '2021-12-21T21:25:15.566061+00:00',
                    latest_revision_created_at_filter: '2021-12-21T21:25:07.779973+00:00',
                    locale_id_filter: 1,
                    translation_key_filter: '50075567-bb01-4813-b91b-a7839818b63a',
                    missions_mission__thumbnail_image: {
                      thumbnail_image: 'https://picsum.photos/512/288'
                    },
                    missions_mission__mission_target_labels_filter: ['Mars'],
                    missions_mission__mission_type_labels_filter: ['Orbiter'],
                    url: '/missions/mars-global-surveyor',
                    missions_mission__summary:
                      'The Mars Global Surveyor orbiter, which operated on Mars for more than nine years, was designed to study the composition of Mars, map its topography and monitor weather patterns.',
                    missions_mission__description: [
                      'The Mars Global Surveyor orbiter, which operated on Mars for more than nine years, was designed to study the composition of Mars, map its topography and monitor weather patterns. The orbiter made a number of discoveries about the Red Planet, including evidence of liquid water at or near the Martian surface. Observations from the Mars Global Surveyor, especially its identifications of water-related minerals, were used to determine drive routes for the Mars Exploration Rover Opportunity in 2010.'
                    ],
                    missions_mission__subtitle: 'Mars Global Surveyor',
                    missions_mission__feature: [],
                    missions_mission__status_filter: 'past',
                    missions_mission__label: 'Mission',
                    topic_labels_filter: ['Mars'],
                    publication_date_filter: '1996-11-07',
                    display_date_filter: 'Nov. 7, 1996',
                    _edgengrams: ['Mars Global Surveyor', 'Mars Global Surveyor']
                  }
                }
              ]
            }
          }
        }
      },
      {
        _index: 'wagtail__wagtailcore_page_qxic7dc',
        _type: '_doc',
        _id: '126887',
        _score: 25.452345,
        _source: {
          pk: '126887',
          content_type: ['missions.Mission', 'wagtailcore.Page'],
          title: 'Mars Climate Orbiter',
          title_edgengrams: 'Mars Climate Orbiter',
          title_filter: 'Mars Climate Orbiter',
          id_filter: 126887,
          live_filter: true,
          owner_id_filter: null,
          content_type_id_filter: 28,
          path_filter: '000100010002001Z',
          depth_filter: 4,
          locked_filter: false,
          show_in_menus_filter: false,
          first_published_at_filter: '2014-07-31T14:26:38+00:00',
          last_published_at_filter: '2021-12-21T21:20:32.551892+00:00',
          latest_revision_created_at_filter: '2021-12-21T21:20:32.085145+00:00',
          locale_id_filter: 1,
          translation_key_filter: '8c264721-ea5e-46b6-8e5f-35cfa7956179',
          missions_mission__thumbnail_image: {
            thumbnail_image: 'https://picsum.photos/512/288'
          },
          missions_mission__mission_target_labels_filter: ['Mars'],
          missions_mission__mission_type_labels_filter: ['Orbiter'],
          url: '/missions/mars-climate-orbiter',
          missions_mission__summary:
            'Designed to study Mars from orbit and serve as a communications relay for the Mars Polar Lander and Deep Space probes, the Mars Climate Orbiter was unsuccessful due to a navigation error caused by a failure to translate English units to metric.',
          missions_mission__description: [
            "Designed to study Mars from orbit and serve as a communications relay for the Mars Polar Lander and Deep Space probes, the Mars Climate Orbiter was unsuccessful due to a navigation error caused by a failure to translate English units to metric. Last contact with the spacecraft was on September 23, 1999, 9 months after launch, and an investigation found that the spacecraft burned up in Mars' atmosphere."
          ],
          missions_mission__subtitle: 'Mars Climate Orbiter',
          missions_mission__feature: [],
          missions_mission__status_filter: 'past',
          missions_mission__label: 'Mission',
          topic_labels_filter: ['Mars'],
          publication_date_filter: '1998-12-11',
          display_date_filter: 'Dec. 11, 1998',
          _edgengrams: ['Mars Climate Orbiter', 'Mars Climate Orbiter']
        },
        fields: { pk: ['126887'] },
        sort: [25.452345, '1998-12-11 00:00:00'],
        inner_hits: {
          latest: {
            hits: {
              total: { value: 1, relation: 'eq' },
              max_score: 25.452345,
              hits: [
                {
                  _index: 'wagtail__wagtailcore_page_qxic7dc',
                  _type: '_doc',
                  _id: '126887',
                  _score: 25.452345,
                  _source: {
                    pk: '126887',
                    content_type: ['missions.Mission', 'wagtailcore.Page'],
                    title: 'Mars Climate Orbiter',
                    title_edgengrams: 'Mars Climate Orbiter',
                    title_filter: 'Mars Climate Orbiter',
                    id_filter: 126887,
                    live_filter: true,
                    owner_id_filter: null,
                    content_type_id_filter: 28,
                    path_filter: '000100010002001Z',
                    depth_filter: 4,
                    locked_filter: false,
                    show_in_menus_filter: false,
                    first_published_at_filter: '2014-07-31T14:26:38+00:00',
                    last_published_at_filter: '2021-12-21T21:20:32.551892+00:00',
                    latest_revision_created_at_filter: '2021-12-21T21:20:32.085145+00:00',
                    locale_id_filter: 1,
                    translation_key_filter: '8c264721-ea5e-46b6-8e5f-35cfa7956179',
                    missions_mission__thumbnail_image: {
                      thumbnail_image: 'https://picsum.photos/512/288'
                    },
                    missions_mission__mission_target_labels_filter: ['Mars'],
                    missions_mission__mission_type_labels_filter: ['Orbiter'],
                    url: '/missions/mars-climate-orbiter',
                    missions_mission__summary:
                      'Designed to study Mars from orbit and serve as a communications relay for the Mars Polar Lander and Deep Space probes, the Mars Climate Orbiter was unsuccessful due to a navigation error caused by a failure to translate English units to metric.',
                    missions_mission__description: [
                      "Designed to study Mars from orbit and serve as a communications relay for the Mars Polar Lander and Deep Space probes, the Mars Climate Orbiter was unsuccessful due to a navigation error caused by a failure to translate English units to metric. Last contact with the spacecraft was on September 23, 1999, 9 months after launch, and an investigation found that the spacecraft burned up in Mars' atmosphere."
                    ],
                    missions_mission__subtitle: 'Mars Climate Orbiter',
                    missions_mission__feature: [],
                    missions_mission__status_filter: 'past',
                    missions_mission__label: 'Mission',
                    topic_labels_filter: ['Mars'],
                    publication_date_filter: '1998-12-11',
                    display_date_filter: 'Dec. 11, 1998',
                    _edgengrams: ['Mars Climate Orbiter', 'Mars Climate Orbiter']
                  }
                }
              ]
            }
          }
        }
      },
      {
        _index: 'wagtail__wagtailcore_page_qxic7dc',
        _type: '_doc',
        _id: '126892',
        _score: 24.737144,
        _source: {
          pk: '126892',
          content_type: ['missions.Mission', 'wagtailcore.Page'],
          title: 'Mars Observer',
          title_edgengrams: 'Mars Observer',
          title_filter: 'Mars Observer',
          id_filter: 126892,
          live_filter: true,
          owner_id_filter: null,
          content_type_id_filter: 28,
          path_filter: '0001000100020024',
          depth_filter: 4,
          locked_filter: false,
          show_in_menus_filter: false,
          first_published_at_filter: '2014-07-31T14:26:38+00:00',
          last_published_at_filter: '2021-12-21T21:26:23.703379+00:00',
          latest_revision_created_at_filter: '2021-12-21T21:26:23.564149+00:00',
          locale_id_filter: 1,
          translation_key_filter: '8c9ccb64-62c2-4103-8d7e-26d773a60b6a',
          missions_mission__thumbnail_image: {
            thumbnail_image: 'https://picsum.photos/512/288'
          },
          missions_mission__mission_target_labels_filter: ['Mars'],
          missions_mission__mission_type_labels_filter: ['Orbiter'],
          url: '/missions/mars-observer',
          missions_mission__summary:
            'The Mars Observer was based on a commercial Earth-orbiting spacecraft and designed to study and take high-resolution photography of the Martian surface.',
          missions_mission__description: [
            "The Mars Observer was based on a commercial Earth-orbiting spacecraft and designed to study and take high-resolution photography of the Martian surface. In 1992, it was to be the United States' first mission to the Red Planet in 17 years. However, the mission ended prematurely on August 22, 1993 when contact with the spacecraft was lost just before it was to enter orbit around Mars."
          ],
          missions_mission__subtitle: 'Mars Observer',
          missions_mission__feature: [],
          missions_mission__status_filter: 'past',
          missions_mission__label: 'Mission',
          topic_labels_filter: ['Mars'],
          publication_date_filter: '1992-09-25',
          display_date_filter: 'Sept. 25, 1992',
          _edgengrams: ['Mars Observer', 'Mars Observer']
        },
        fields: { pk: ['126892'] },
        sort: [24.737144, '1992-09-25 00:00:00'],
        inner_hits: {
          latest: {
            hits: {
              total: { value: 1, relation: 'eq' },
              max_score: 24.737144,
              hits: [
                {
                  _index: 'wagtail__wagtailcore_page_qxic7dc',
                  _type: '_doc',
                  _id: '126892',
                  _score: 24.737144,
                  _source: {
                    pk: '126892',
                    content_type: ['missions.Mission', 'wagtailcore.Page'],
                    title: 'Mars Observer',
                    title_edgengrams: 'Mars Observer',
                    title_filter: 'Mars Observer',
                    id_filter: 126892,
                    live_filter: true,
                    owner_id_filter: null,
                    content_type_id_filter: 28,
                    path_filter: '0001000100020024',
                    depth_filter: 4,
                    locked_filter: false,
                    show_in_menus_filter: false,
                    first_published_at_filter: '2014-07-31T14:26:38+00:00',
                    last_published_at_filter: '2021-12-21T21:26:23.703379+00:00',
                    latest_revision_created_at_filter: '2021-12-21T21:26:23.564149+00:00',
                    locale_id_filter: 1,
                    translation_key_filter: '8c9ccb64-62c2-4103-8d7e-26d773a60b6a',
                    missions_mission__thumbnail_image: {
                      thumbnail_image: 'https://picsum.photos/512/288'
                    },
                    missions_mission__mission_target_labels_filter: ['Mars'],
                    missions_mission__mission_type_labels_filter: ['Orbiter'],
                    url: '/missions/mars-observer',
                    missions_mission__summary:
                      'The Mars Observer was based on a commercial Earth-orbiting spacecraft and designed to study and take high-resolution photography of the Martian surface.',
                    missions_mission__description: [
                      "The Mars Observer was based on a commercial Earth-orbiting spacecraft and designed to study and take high-resolution photography of the Martian surface. In 1992, it was to be the United States' first mission to the Red Planet in 17 years. However, the mission ended prematurely on August 22, 1993 when contact with the spacecraft was lost just before it was to enter orbit around Mars."
                    ],
                    missions_mission__subtitle: 'Mars Observer',
                    missions_mission__feature: [],
                    missions_mission__status_filter: 'past',
                    missions_mission__label: 'Mission',
                    topic_labels_filter: ['Mars'],
                    publication_date_filter: '1992-09-25',
                    display_date_filter: 'Sept. 25, 1992',
                    _edgengrams: ['Mars Observer', 'Mars Observer']
                  }
                }
              ]
            }
          }
        }
      },
      {
        _index: 'wagtail__wagtailcore_page_qxic7dc',
        _type: '_doc',
        _id: '126894',
        _score: 22.823849,
        _source: {
          pk: '126894',
          content_type: ['missions.Mission', 'wagtailcore.Page'],
          title: 'Mars Pathfinder / Sojourner Rover',
          title_edgengrams: 'Mars Pathfinder / Sojourner Rover',
          title_filter: 'Mars Pathfinder / Sojourner Rover',
          id_filter: 126894,
          live_filter: true,
          owner_id_filter: null,
          content_type_id_filter: 28,
          path_filter: '0001000100020026',
          depth_filter: 4,
          locked_filter: false,
          show_in_menus_filter: false,
          first_published_at_filter: '2014-07-31T14:26:38+00:00',
          last_published_at_filter: '2021-12-21T21:22:49.205964+00:00',
          latest_revision_created_at_filter: '2021-12-21T21:22:49.062312+00:00',
          locale_id_filter: 1,
          translation_key_filter: '6540f7a8-b084-4162-867f-5971dd5f82b0',
          missions_mission__thumbnail_image: {
            thumbnail_image: 'https://picsum.photos/512/288'
          },
          missions_mission__mission_target_labels_filter: ['Mars'],
          missions_mission__mission_type_labels_filter: ['Lander/Rover'],
          url: '/missions/mars-pathfinder-sojourner-rover',
          missions_mission__summary:
            'The Mars Pathfinder mission, designed to demonstrate a low-cost method for delivering a set of science instruments to the Red Planet, was the first wheeled vehicle to be used on any other planet in the solar system and served as the foundation for the Mars rovers of today.',
          missions_mission__description: [
            'The Mars Pathfinder mission, designed to demonstrate a low-cost method for delivering a set of science instruments to the Red Planet, was the first wheeled vehicle to be used on any other planet in the solar system and served as the foundation for the Mars rovers of today. The mission landed a rover -- Sojourner -- on the surface of Mars using an air bag landing system and innovative petal design, which have been used since in various incarnations to land other rovers on the Red Planet. Sojourner spent 83 days of a planned seven-day mission exploring the Martian terrain, snapping photographs and taking chemical, atmospheric and other measurements.'
          ],
          missions_mission__subtitle: 'Mars Pathfinder / Sojourner Rover',
          missions_mission__feature: [],
          missions_mission__status_filter: 'past',
          missions_mission__label: 'Mission',
          topic_labels_filter: ['Mars'],
          publication_date_filter: '1996-12-04',
          display_date_filter: 'Dec. 4, 1996',
          _edgengrams: ['Mars Pathfinder / Sojourner Rover', 'Mars Pathfinder / Sojourner Rover']
        },
        fields: { pk: ['126894'] },
        sort: [22.823849, '1996-12-04 00:00:00'],
        inner_hits: {
          latest: {
            hits: {
              total: { value: 1, relation: 'eq' },
              max_score: 22.823849,
              hits: [
                {
                  _index: 'wagtail__wagtailcore_page_qxic7dc',
                  _type: '_doc',
                  _id: '126894',
                  _score: 22.823849,
                  _source: {
                    pk: '126894',
                    content_type: ['missions.Mission', 'wagtailcore.Page'],
                    title: 'Mars Pathfinder / Sojourner Rover',
                    title_edgengrams: 'Mars Pathfinder / Sojourner Rover',
                    title_filter: 'Mars Pathfinder / Sojourner Rover',
                    id_filter: 126894,
                    live_filter: true,
                    owner_id_filter: null,
                    content_type_id_filter: 28,
                    path_filter: '0001000100020026',
                    depth_filter: 4,
                    locked_filter: false,
                    show_in_menus_filter: false,
                    first_published_at_filter: '2014-07-31T14:26:38+00:00',
                    last_published_at_filter: '2021-12-21T21:22:49.205964+00:00',
                    latest_revision_created_at_filter: '2021-12-21T21:22:49.062312+00:00',
                    locale_id_filter: 1,
                    translation_key_filter: '6540f7a8-b084-4162-867f-5971dd5f82b0',
                    missions_mission__thumbnail_image: {
                      thumbnail_image: 'https://picsum.photos/512/288'
                    },
                    missions_mission__mission_target_labels_filter: ['Mars'],
                    missions_mission__mission_type_labels_filter: ['Lander/Rover'],
                    url: '/missions/mars-pathfinder-sojourner-rover',
                    missions_mission__summary:
                      'The Mars Pathfinder mission, designed to demonstrate a low-cost method for delivering a set of science instruments to the Red Planet, was the first wheeled vehicle to be used on any other planet in the solar system and served as the foundation for the Mars rovers of today.',
                    missions_mission__description: [
                      'The Mars Pathfinder mission, designed to demonstrate a low-cost method for delivering a set of science instruments to the Red Planet, was the first wheeled vehicle to be used on any other planet in the solar system and served as the foundation for the Mars rovers of today. The mission landed a rover -- Sojourner -- on the surface of Mars using an air bag landing system and innovative petal design, which have been used since in various incarnations to land other rovers on the Red Planet. Sojourner spent 83 days of a planned seven-day mission exploring the Martian terrain, snapping photographs and taking chemical, atmospheric and other measurements.'
                    ],
                    missions_mission__subtitle: 'Mars Pathfinder / Sojourner Rover',
                    missions_mission__feature: [],
                    missions_mission__status_filter: 'past',
                    missions_mission__label: 'Mission',
                    topic_labels_filter: ['Mars'],
                    publication_date_filter: '1996-12-04',
                    display_date_filter: 'Dec. 4, 1996',
                    _edgengrams: [
                      'Mars Pathfinder / Sojourner Rover',
                      'Mars Pathfinder / Sojourner Rover'
                    ]
                  }
                }
              ]
            }
          }
        }
      },
      {
        _index: 'wagtail__wagtailcore_page_qxic7dc',
        _type: '_doc',
        _id: '126895',
        _score: 22.11137,
        _source: {
          pk: '126895',
          content_type: ['missions.Mission', 'wagtailcore.Page'],
          title: 'Mars Polar Lander / Deep Space 2',
          title_edgengrams: 'Mars Polar Lander / Deep Space 2',
          title_filter: 'Mars Polar Lander / Deep Space 2',
          id_filter: 126895,
          live_filter: true,
          owner_id_filter: null,
          content_type_id_filter: 28,
          path_filter: '0001000100020027',
          depth_filter: 4,
          locked_filter: false,
          show_in_menus_filter: false,
          first_published_at_filter: '2014-07-31T14:26:38+00:00',
          last_published_at_filter: '2021-12-21T19:52:56.261317+00:00',
          latest_revision_created_at_filter: '2021-12-21T19:52:56.131255+00:00',
          locale_id_filter: 1,
          translation_key_filter: 'e7dd859c-ffaa-4f32-bea3-049f6a1e7e31',
          missions_mission__thumbnail_image: {
            thumbnail_image: 'https://picsum.photos/512/288'
          },
          missions_mission__mission_target_labels_filter: ['Mars'],
          missions_mission__mission_type_labels_filter: ['Lander'],
          url: '/missions/mars-polar-lander-deep-space-2',
          missions_mission__summary:
            'Designed to dig for water ice on Mars with a robotic arm, the Mars Polar Lander would have been the first-ever spacecraft to land on a polar region of the Red Planet.',
          missions_mission__description: [
            'Designed to dig for water ice on Mars with a robotic arm, the Mars Polar Lander would have been the first-ever spacecraft to land on a polar region of the Red Planet. It carried two probes called Deep Space 2 that were designed to impact the Martian surface and test new technologies. Contact was lost with both the Mars Polar Lander and Deep Space 2 about a year after launch. An investigation found that it was mostly likely a false signal that the spacecraft had landed that shut down the main engines and caused the spacecraft to crash into the Martian surface.'
          ],
          missions_mission__subtitle: 'Mars Polar Lander / Deep Space 2',
          missions_mission__feature: [],
          missions_mission__status_filter: 'past',
          missions_mission__label: 'Mission',
          topic_labels_filter: ['Mars'],
          publication_date_filter: '1999-01-03',
          display_date_filter: 'Jan. 3, 1999',
          _edgengrams: ['Mars Polar Lander / Deep Space 2', 'Mars Polar Lander / Deep Space 2']
        },
        fields: { pk: ['126895'] },
        sort: [22.11137, '1999-01-03 00:00:00'],
        inner_hits: {
          latest: {
            hits: {
              total: { value: 1, relation: 'eq' },
              max_score: 22.11137,
              hits: [
                {
                  _index: 'wagtail__wagtailcore_page_qxic7dc',
                  _type: '_doc',
                  _id: '126895',
                  _score: 22.11137,
                  _source: {
                    pk: '126895',
                    content_type: ['missions.Mission', 'wagtailcore.Page'],
                    title: 'Mars Polar Lander / Deep Space 2',
                    title_edgengrams: 'Mars Polar Lander / Deep Space 2',
                    title_filter: 'Mars Polar Lander / Deep Space 2',
                    id_filter: 126895,
                    live_filter: true,
                    owner_id_filter: null,
                    content_type_id_filter: 28,
                    path_filter: '0001000100020027',
                    depth_filter: 4,
                    locked_filter: false,
                    show_in_menus_filter: false,
                    first_published_at_filter: '2014-07-31T14:26:38+00:00',
                    last_published_at_filter: '2021-12-21T19:52:56.261317+00:00',
                    latest_revision_created_at_filter: '2021-12-21T19:52:56.131255+00:00',
                    locale_id_filter: 1,
                    translation_key_filter: 'e7dd859c-ffaa-4f32-bea3-049f6a1e7e31',
                    missions_mission__thumbnail_image: {
                      thumbnail_image: 'https://picsum.photos/512/288'
                    },
                    missions_mission__mission_target_labels_filter: ['Mars'],
                    missions_mission__mission_type_labels_filter: ['Lander'],
                    url: '/missions/mars-polar-lander-deep-space-2',
                    missions_mission__summary:
                      'Designed to dig for water ice on Mars with a robotic arm, the Mars Polar Lander would have been the first-ever spacecraft to land on a polar region of the Red Planet.',
                    missions_mission__description: [
                      'Designed to dig for water ice on Mars with a robotic arm, the Mars Polar Lander would have been the first-ever spacecraft to land on a polar region of the Red Planet. It carried two probes called Deep Space 2 that were designed to impact the Martian surface and test new technologies. Contact was lost with both the Mars Polar Lander and Deep Space 2 about a year after launch. An investigation found that it was mostly likely a false signal that the spacecraft had landed that shut down the main engines and caused the spacecraft to crash into the Martian surface.'
                    ],
                    missions_mission__subtitle: 'Mars Polar Lander / Deep Space 2',
                    missions_mission__feature: [],
                    missions_mission__status_filter: 'past',
                    missions_mission__label: 'Mission',
                    topic_labels_filter: ['Mars'],
                    publication_date_filter: '1999-01-03',
                    display_date_filter: 'Jan. 3, 1999',
                    _edgengrams: [
                      'Mars Polar Lander / Deep Space 2',
                      'Mars Polar Lander / Deep Space 2'
                    ]
                  }
                }
              ]
            }
          }
        }
      },
      {
        _index: 'wagtail__wagtailcore_page_qxic7dc',
        _type: '_doc',
        _id: '126249',
        _score: 21.307503,
        _source: {
          pk: '126249',
          content_type: ['video_detail.VideoDetailPage', 'wagtailcore.Page'],
          title: "What's Up December 2007: Mars, Mars and more Mars",
          title_edgengrams: "What's Up December 2007: Mars, Mars and more Mars",
          title_filter: "What's Up December 2007: Mars, Mars and more Mars",
          id_filter: 126249,
          live_filter: true,
          owner_id_filter: null,
          content_type_id_filter: 90,
          path_filter: '00010001000700NL',
          depth_filter: 4,
          locked_filter: false,
          show_in_menus_filter: false,
          first_published_at_filter: '2007-12-13T08:00:00+00:00',
          last_published_at_filter: '2007-12-13T08:00:00+00:00',
          latest_revision_created_at_filter: '2007-12-13T08:00:00+00:00',
          locale_id_filter: 1,
          translation_key_filter: '7cc4a79f-1457-479c-8ced-64916df886f2',
          video_detail_videodetailpage__thumbnail_image: {
            thumbnail_image: 'https://picsum.photos/512/288'
          },
          url: '/videos/whats-up-december-2007-mars-mars-and-more-mars',
          video_detail_videodetailpage__summary:
            'Mars, Mars and more Mars. This month offers great views of the red planet, with or without a telescope.',
          video_detail_videodetailpage__body: [
            'Mars and Earth are at their closest this month so now is your best chance to see our planetary neighbor.'
          ],
          video_detail_videodetailpage__transcript: [
            "This is the best month to look at Mars because Mars is going to be closest to Earth. \nI'm Jane Houston Jones at NASA's Jet Propulsion Laboratory in Pasadena, California. \nEarth is a little closer to the sun so it orbits a little faster, and Mars is a littler farther away from the sun so it orbits a little bit slower. \nBut every two years or so we get really close to Mars \nAnd we have what's called opposition. \nThat means that Mars and the sun are on opposite sides of the Earth. \nIf you just step outside and look to the East, after the sun sets, you'll see a bright orange star-like object and that's Mars and it's brighter than anything else in the sky. There's nothing else brighter. \nSome of the features through a telescope will look sort of like a peachy color and kind of a dark gray color on some of the other features. \nTo see those colors you really will need a larger telescope but you'll still be able to see some contrast through the very smallest telescope. \nThe north polar area of Mars is really interesting and really worth looking at this month because Mars is just ending its winter and during the wintertime on Mars' north pole, there's a cloud that covers the ice caps. \nAs Mars finishes winter and begins spring, this polar cloud starts to dissipate and underneath the cloud is where the polar ice cap is. \nNow we're not sure if we'll be able to see it in December or not but you won't know without looking. \nThis month if you want to see the side of Mars where the rover Spirit is, look at the beginning and at the end of the month. \nAnd for Opportunity, you'll want to look at Mars on the 15 th. \nYou won't be able to see the rovers, even with a telescope but it's really nice to know where they are. \nBesides the rovers, there are several spacecraft that are orbiting the planet. \nMars Odyssey and Mars Reconnaissance Orbiter are just two of them. \nThe European Space Agency's Mars Express is also orbiting. \nThat's all for this month, I'm Jane Houston Jones."
          ],
          video_detail_videodetailpage__topic_id_filter: 63,
          video_detail_videodetailpage__label: 'Video',
          topic_labels_filter: ['Solar System'],
          publication_date_filter: '2007-12-13',
          _edgengrams: [
            "What's Up December 2007: Mars, Mars and more Mars",
            "What's Up December 2007: Mars, Mars and more Mars"
          ]
        },
        fields: { pk: ['126249'] },
        sort: [21.307503, '2007-12-13 00:00:00'],
        inner_hits: {
          latest: {
            hits: {
              total: { value: 1, relation: 'eq' },
              max_score: 21.307503,
              hits: [
                {
                  _index: 'wagtail__wagtailcore_page_qxic7dc',
                  _type: '_doc',
                  _id: '126249',
                  _score: 21.307503,
                  _source: {
                    pk: '126249',
                    content_type: ['video_detail.VideoDetailPage', 'wagtailcore.Page'],
                    title: "What's Up December 2007: Mars, Mars and more Mars",
                    title_edgengrams: "What's Up December 2007: Mars, Mars and more Mars",
                    title_filter: "What's Up December 2007: Mars, Mars and more Mars",
                    id_filter: 126249,
                    live_filter: true,
                    owner_id_filter: null,
                    content_type_id_filter: 90,
                    path_filter: '00010001000700NL',
                    depth_filter: 4,
                    locked_filter: false,
                    show_in_menus_filter: false,
                    first_published_at_filter: '2007-12-13T08:00:00+00:00',
                    last_published_at_filter: '2007-12-13T08:00:00+00:00',
                    latest_revision_created_at_filter: '2007-12-13T08:00:00+00:00',
                    locale_id_filter: 1,
                    translation_key_filter: '7cc4a79f-1457-479c-8ced-64916df886f2',
                    video_detail_videodetailpage__thumbnail_image: {
                      thumbnail_image: 'https://picsum.photos/512/288'
                    },
                    url: '/videos/whats-up-december-2007-mars-mars-and-more-mars',
                    video_detail_videodetailpage__summary:
                      'Mars, Mars and more Mars. This month offers great views of the red planet, with or without a telescope.',
                    video_detail_videodetailpage__body: [
                      'Mars and Earth are at their closest this month so now is your best chance to see our planetary neighbor.'
                    ],
                    video_detail_videodetailpage__transcript: [
                      "This is the best month to look at Mars because Mars is going to be closest to Earth. \nI'm Jane Houston Jones at NASA's Jet Propulsion Laboratory in Pasadena, California. \nEarth is a little closer to the sun so it orbits a little faster, and Mars is a littler farther away from the sun so it orbits a little bit slower. \nBut every two years or so we get really close to Mars \nAnd we have what's called opposition. \nThat means that Mars and the sun are on opposite sides of the Earth. \nIf you just step outside and look to the East, after the sun sets, you'll see a bright orange star-like object and that's Mars and it's brighter than anything else in the sky. There's nothing else brighter. \nSome of the features through a telescope will look sort of like a peachy color and kind of a dark gray color on some of the other features. \nTo see those colors you really will need a larger telescope but you'll still be able to see some contrast through the very smallest telescope. \nThe north polar area of Mars is really interesting and really worth looking at this month because Mars is just ending its winter and during the wintertime on Mars' north pole, there's a cloud that covers the ice caps. \nAs Mars finishes winter and begins spring, this polar cloud starts to dissipate and underneath the cloud is where the polar ice cap is. \nNow we're not sure if we'll be able to see it in December or not but you won't know without looking. \nThis month if you want to see the side of Mars where the rover Spirit is, look at the beginning and at the end of the month. \nAnd for Opportunity, you'll want to look at Mars on the 15 th. \nYou won't be able to see the rovers, even with a telescope but it's really nice to know where they are. \nBesides the rovers, there are several spacecraft that are orbiting the planet. \nMars Odyssey and Mars Reconnaissance Orbiter are just two of them. \nThe European Space Agency's Mars Express is also orbiting. \nThat's all for this month, I'm Jane Houston Jones."
                    ],
                    video_detail_videodetailpage__topic_id_filter: 63,
                    video_detail_videodetailpage__label: 'Video',
                    topic_labels_filter: ['Solar System'],
                    publication_date_filter: '2007-12-13',
                    _edgengrams: [
                      "What's Up December 2007: Mars, Mars and more Mars",
                      "What's Up December 2007: Mars, Mars and more Mars"
                    ]
                  }
                }
              ]
            }
          }
        }
      },
      {
        _index: 'wagtail__wagtailcore_page_qxic7dc',
        _type: '_doc',
        _id: '126897',
        _score: 20.624855,
        _source: {
          pk: '126897',
          content_type: ['missions.Mission', 'wagtailcore.Page'],
          title: 'Mars Sample Return',
          title_edgengrams: 'Mars Sample Return',
          title_filter: 'Mars Sample Return',
          id_filter: 126897,
          live_filter: true,
          owner_id_filter: null,
          content_type_id_filter: 28,
          path_filter: '0001000100020029',
          depth_filter: 4,
          locked_filter: false,
          show_in_menus_filter: false,
          first_published_at_filter: '2020-02-10T18:50:25+00:00',
          last_published_at_filter: '2023-06-09T21:09:00.919030+00:00',
          latest_revision_created_at_filter: '2023-06-22T19:58:38.332290+00:00',
          locale_id_filter: 1,
          translation_key_filter: 'f960c7d0-3182-48b9-8cf2-bd7652242098',
          missions_mission__thumbnail_image: {
            thumbnail_image: 'https://picsum.photos/512/288'
          },
          missions_mission__mission_target_labels_filter: ['Mars'],
          missions_mission__mission_type_labels_filter: ['Lander/Rover'],
          url: '/missions/mars-sample-return-msr',
          missions_mission__summary:
            'Mars Sample Return is a proposed mission to return samples from the surface of Mars to Earth.',
          missions_mission__description: [
            'Mars Sample Return is a proposed mission to return samples from the surface of Mars to Earth. The mission would use robotic systems and a Mars ascent rocket to collect and send samples of Martian rocks, soils and atmosphere to Earth for detailed chemical and physical analysis. The mission is being planned jointly with the European Space Agency.'
          ],
          missions_mission__subtitle: 'MSR',
          missions_mission__feature: [
            'The technology is ready, the team is experienced, and the scientifically-selected Mars samples are on the surface.',
            ''
          ],
          missions_mission__status_filter: 'proposed',
          missions_mission__label: 'Mission',
          topic_labels_filter: ['Mars'],
          publication_date_filter: '2020-02-10',
          display_date_filter: 'TBD',
          _edgengrams: ['Mars Sample Return', 'Mars Sample Return']
        },
        fields: { pk: ['126897'] },
        sort: [20.624855, '2020-02-10 00:00:00'],
        inner_hits: {
          latest: {
            hits: {
              total: { value: 1, relation: 'eq' },
              max_score: 20.624855,
              hits: [
                {
                  _index: 'wagtail__wagtailcore_page_qxic7dc',
                  _type: '_doc',
                  _id: '126897',
                  _score: 20.624855,
                  _source: {
                    pk: '126897',
                    content_type: ['missions.Mission', 'wagtailcore.Page'],
                    title: 'Mars Sample Return',
                    title_edgengrams: 'Mars Sample Return',
                    title_filter: 'Mars Sample Return',
                    id_filter: 126897,
                    live_filter: true,
                    owner_id_filter: null,
                    content_type_id_filter: 28,
                    path_filter: '0001000100020029',
                    depth_filter: 4,
                    locked_filter: false,
                    show_in_menus_filter: false,
                    first_published_at_filter: '2020-02-10T18:50:25+00:00',
                    last_published_at_filter: '2023-06-09T21:09:00.919030+00:00',
                    latest_revision_created_at_filter: '2023-06-22T19:58:38.332290+00:00',
                    locale_id_filter: 1,
                    translation_key_filter: 'f960c7d0-3182-48b9-8cf2-bd7652242098',
                    missions_mission__thumbnail_image: {
                      thumbnail_image: 'https://picsum.photos/512/288'
                    },
                    missions_mission__mission_target_labels_filter: ['Mars'],
                    missions_mission__mission_type_labels_filter: ['Lander/Rover'],
                    url: '/missions/mars-sample-return-msr',
                    missions_mission__summary:
                      'Mars Sample Return is a proposed mission to return samples from the surface of Mars to Earth.',
                    missions_mission__description: [
                      'Mars Sample Return is a proposed mission to return samples from the surface of Mars to Earth. The mission would use robotic systems and a Mars ascent rocket to collect and send samples of Martian rocks, soils and atmosphere to Earth for detailed chemical and physical analysis. The mission is being planned jointly with the European Space Agency.'
                    ],
                    missions_mission__subtitle: 'MSR',
                    missions_mission__feature: [
                      'The technology is ready, the team is experienced, and the scientifically-selected Mars samples are on the surface.',
                      ''
                    ],
                    missions_mission__status_filter: 'proposed',
                    missions_mission__label: 'Mission',
                    topic_labels_filter: ['Mars'],
                    publication_date_filter: '2020-02-10',
                    display_date_filter: 'TBD',
                    _edgengrams: ['Mars Sample Return', 'Mars Sample Return']
                  }
                }
              ]
            }
          }
        }
      },
      {
        _index: 'wagtail__wagtailcore_page_qxic7dc',
        _type: '_doc',
        _id: '126896',
        _score: 20.42417,
        _source: {
          pk: '126896',
          content_type: ['missions.Mission', 'wagtailcore.Page'],
          title: 'Mars Reconnaissance Orbiter',
          title_edgengrams: 'Mars Reconnaissance Orbiter',
          title_filter: 'Mars Reconnaissance Orbiter',
          id_filter: 126896,
          live_filter: true,
          owner_id_filter: null,
          content_type_id_filter: 28,
          path_filter: '0001000100020028',
          depth_filter: 4,
          locked_filter: false,
          show_in_menus_filter: false,
          first_published_at_filter: '2014-07-31T14:26:38+00:00',
          last_published_at_filter: '2021-12-21T20:07:18.990802+00:00',
          latest_revision_created_at_filter: '2021-12-21T20:07:18.818230+00:00',
          locale_id_filter: 1,
          translation_key_filter: '9cf5ff61-4580-4c03-95fa-7ee8ac109655',
          missions_mission__thumbnail_image: {
            thumbnail_image: 'https://picsum.photos/512/288'
          },
          missions_mission__mission_target_labels_filter: ['Mars'],
          missions_mission__mission_type_labels_filter: ['Orbiter'],
          url: '/missions/mars-reconnaissance-orbiter-mro',
          missions_mission__summary:
            "The Mars Reconnaissance Orbiter, or MRO, has studied the Red Planet's atmosphere and terrain from orbit since 2006 and also serves as a key data relay station for other Mars missions.",
          missions_mission__description: [
            "The Mars Reconnaissance Orbiter, or MRO, has studied the Red Planet's atmosphere and terrain from orbit since 2006 and also serves as a key data relay station for other Mars missions, including the Mars Exploration Rover Opportunity. Equipped with a powerful camera called HiRISE that has aided in a number of discoveries, the Mars Reconnaissance Orbiter has sent back thousands of stunning images of the Martian surface that are helping scientists learn more about Mars, including the history of water flows on or near the planet's surface."
          ],
          missions_mission__subtitle: 'MRO',
          missions_mission__feature: [
            'Mars Reconnaissance Orbiter',
            'Interactive 3D model of Mars Reconnaissance Orbiter. View the full interactive experience at Eyes on the Solar System.',
            'https://eyes.nasa.gov/apps/orrery/#/sc_mars_reconnaissance_orbiter?time=2020-11-17T23:54:511',
            '500'
          ],
          missions_mission__status_filter: 'current',
          missions_mission__label: 'Mission',
          topic_labels_filter: ['Mars'],
          publication_date_filter: '2005-08-12',
          display_date_filter: 'Aug. 12, 2005',
          _edgengrams: ['Mars Reconnaissance Orbiter', 'Mars Reconnaissance Orbiter']
        },
        fields: { pk: ['126896'] },
        sort: [20.42417, '2005-08-12 00:00:00'],
        inner_hits: {
          latest: {
            hits: {
              total: { value: 1, relation: 'eq' },
              max_score: 20.42417,
              hits: [
                {
                  _index: 'wagtail__wagtailcore_page_qxic7dc',
                  _type: '_doc',
                  _id: '126896',
                  _score: 20.42417,
                  _source: {
                    pk: '126896',
                    content_type: ['missions.Mission', 'wagtailcore.Page'],
                    title: 'Mars Reconnaissance Orbiter',
                    title_edgengrams: 'Mars Reconnaissance Orbiter',
                    title_filter: 'Mars Reconnaissance Orbiter',
                    id_filter: 126896,
                    live_filter: true,
                    owner_id_filter: null,
                    content_type_id_filter: 28,
                    path_filter: '0001000100020028',
                    depth_filter: 4,
                    locked_filter: false,
                    show_in_menus_filter: false,
                    first_published_at_filter: '2014-07-31T14:26:38+00:00',
                    last_published_at_filter: '2021-12-21T20:07:18.990802+00:00',
                    latest_revision_created_at_filter: '2021-12-21T20:07:18.818230+00:00',
                    locale_id_filter: 1,
                    translation_key_filter: '9cf5ff61-4580-4c03-95fa-7ee8ac109655',
                    missions_mission__thumbnail_image: {
                      thumbnail_image: 'https://picsum.photos/512/288'
                    },
                    missions_mission__mission_target_labels_filter: ['Mars'],
                    missions_mission__mission_type_labels_filter: ['Orbiter'],
                    url: '/missions/mars-reconnaissance-orbiter-mro',
                    missions_mission__summary:
                      "The Mars Reconnaissance Orbiter, or MRO, has studied the Red Planet's atmosphere and terrain from orbit since 2006 and also serves as a key data relay station for other Mars missions.",
                    missions_mission__description: [
                      "The Mars Reconnaissance Orbiter, or MRO, has studied the Red Planet's atmosphere and terrain from orbit since 2006 and also serves as a key data relay station for other Mars missions, including the Mars Exploration Rover Opportunity. Equipped with a powerful camera called HiRISE that has aided in a number of discoveries, the Mars Reconnaissance Orbiter has sent back thousands of stunning images of the Martian surface that are helping scientists learn more about Mars, including the history of water flows on or near the planet's surface."
                    ],
                    missions_mission__subtitle: 'MRO',
                    missions_mission__feature: [
                      'Mars Reconnaissance Orbiter',
                      'Interactive 3D model of Mars Reconnaissance Orbiter. View the full interactive experience at Eyes on the Solar System.',
                      'https://eyes.nasa.gov/apps/orrery/#/sc_mars_reconnaissance_orbiter?time=2020-11-17T23:54:511',
                      '500'
                    ],
                    missions_mission__status_filter: 'current',
                    missions_mission__label: 'Mission',
                    topic_labels_filter: ['Mars'],
                    publication_date_filter: '2005-08-12',
                    display_date_filter: 'Aug. 12, 2005',
                    _edgengrams: ['Mars Reconnaissance Orbiter', 'Mars Reconnaissance Orbiter']
                  }
                }
              ]
            }
          }
        }
      },
      {
        _index: 'wagtail__wagtailcore_page_qxic7dc',
        _type: '_doc',
        _id: '13117',
        _score: 20.240711,
        _source: {
          pk: '13117',
          content_type: ['news.News', 'wagtailcore.Page'],
          title: 'Mars Pathfinder Passes Global Surveyor on Its Way to Mars',
          title_edgengrams: 'Mars Pathfinder Passes Global Surveyor on Its Way to Mars',
          title_filter: 'Mars Pathfinder Passes Global Surveyor on Its Way to Mars',
          id_filter: 13117,
          live_filter: true,
          owner_id_filter: null,
          content_type_id_filter: 38,
          path_filter: '000100010003038E',
          depth_filter: 4,
          locked_filter: false,
          show_in_menus_filter: false,
          first_published_at_filter: '1997-03-14T08:00:00+00:00',
          last_published_at_filter: '2021-01-07T18:02:01.609368+00:00',
          latest_revision_created_at_filter: '2021-01-07T18:02:01.511699+00:00',
          locale_id_filter: 1,
          translation_key_filter: '5fd6635e-f633-4a32-88a4-8050333f58fb',
          news_news__author: null,
          news_news__thumbnail_image: {
            thumbnail_image: 'https://picsum.photos/512/288'
          },
          url: '/news/mars-pathfinder-passes-global-surveyor-on-its-way-to-mars',
          news_news__topper: [''],
          news_news__summary:
            "Like two ships passing in the night, NASA's Mars Pathfinder spacecraft will begin to overtake Mars Global Surveyor tonight, moving closer to Mars than its companion orbiter and closing in for the final four-month approach to the red planet.",
          news_news__body: [
            'Like two ships passing in the night, NASA\'s Mars Pathfinder spacecraft will begin to overtake Mars Global Surveyor tonight, moving closer to Mars than its companion orbiter and closing in for the final four-month approach to the red planet. Mars Pathfinder, a lander carrying a small rover and science instruments to Mars, has less than half of its total distance to complete now, said Dr. Robin Vaughan, Pathfinder navigation team member at NASA\'s Jet Propulsion Laboratory. The spacecraft will overtake Mars Global Surveyor at 0100 Universal Time on March 15 (5 p.m. Pacific Standard Time tonight, March 14). At the time of the event, Mars Pathfinder will be 43.7 million kilometers (27 million miles) from Earth and 69.7 million kilometers (43.2 million miles) from Mars. The spacecraft is more than halfway along its arcing flight path, on which it will have traveled a total of 497 million kilometers (309 million miles) by the time it reaches Mars. "Although Pathfinder was launched about a month after Mars Global Surveyor, it is traveling faster than Surveyor and is on a shorter flight path to the red planet," said Brian Muirhead, Pathfinder project manager at JPL. "Whereas Mars Global Surveyor will take 10 months to reach Mars, Pathfinder takes only seven months. Once we reach Mars, we dive directly into the Martian atmosphere. The descent will only take about four minutes, and we should be on the surface of Mars by about 10 a.m. Pacific time on July 4th." Pathfinder is on a different type of trajectory to Mars than Mars Global Surveyor. Called a "Type 1" trajectory, the spacecraft does not have to travel as far to intercept Mars. Mars Global Surveyor will log a total of 700 million kilometers (435 million miles) in its flight path toward the red planet. "The advantage to using a Type 1 trajectory is that you have to travel less than one-half of the way around the Sun to intercept Mars," Vaughan said. "So Pathfinder takes 212 days to reach Mars, while Mars Global Surveyor will spend 309 days to reach the planet." Mars Global Surveyor is on a "Type 2" trajectory, taking it more than 180 degrees around the Sun to intercept the planet. A major difference in this type of trajectory is that the spacecraft travels at a slower velocity with respect to the Sun. Subsequently, the craft requires less fuel to slow down at Mars than if it had followed Pathfinder\'s trajectory. For instance, Pathfinder is currently traveling at 27 kilometers per second (60,700 miles per hour), while Mars Global Surveyor is traveling at about 26.75 kilometers per second (59,800 miles per hour). "Less fuel translates into simpler, smaller spacecraft and less expense," said Glenn Cunningham, Mars Global Surveyor project manager. "Mars Global Surveyor also will employ a fairly new technique requiring very little fuel to drop down into its mapping orbit. The technique is called \'aerobraking,\' and takes advantage of the drag of the Martian atmosphere. As the spacecraft dips down into the top of the atmosphere at its closest point to the planet each orbit, the drag from the atmosphere on the spacecraft will reduce its orbital speed. This drops the altitude of the highest part of the orbit, changing it from the initial elliptical shape to the circular shape required for mapping the planet." Aerobraking was first demonstrated successfully with the Magellan spacecraft, which mapped the surface of cloud-covered Venus using a sophisticated radar-imaging system. Magellan aerobraked into the Venusian atmosphere in October 1994, sending back data about Venus\' thick sulfur and carbon dioxide-choked atmosphere until it burned up in the planet\'s sizzling temperatures. Mars Global Surveyor, however, will not dip so far into the much thinner Martian atmosphere that it would burn up. Pathfinder is scheduled to perform two more flight path corrections and, possibly, a fifth maneuver to keep it on course for landing on Mars on July 4. The last two maneuvers will occur near the end of the cruise phase, on May 7 and June 24, when the spacecraft is close to Mars. If necessary, a fifth maneuver will be executed just a few hours before entry into the Martian atmosphere on July 4. Mars Global Surveyor will perform its second trajectory correction maneuver on March 20. Engineers are continuing to explore possible ways of freeing a broken damper arm that is wedged in the joint of one of the solar arrays, so that the panel locks in place. The Mars Pathfinder and Mars Global Surveyor missions are managed by the Jet Propulsion Laboratory for NASA\'s Office of Space Science, Washington, D.C. Pathfinder is the second in NASA\'s Discovery program of low-cost spacecraft designed to carry out highly focused science goals. Mars Global Surveyor is the first spacecraft in a decade-long program of robotic exploration, called the Mars Surveyor Program. 818-354-5011'
          ],
          news_news__release_number: '1997-9722',
          news_news__get_topic_titles_filter: 'Solar System\nMars',
          news_news__label: 'News',
          topic_labels_filter: ['Solar System', 'Mars'],
          publication_date_filter: '1997-03-14',
          release_number_filter: '1997-9722',
          _edgengrams: [
            'Mars Pathfinder Passes Global Surveyor on Its Way to Mars',
            'Mars Pathfinder Passes Global Surveyor on Its Way to Mars'
          ]
        },
        fields: { pk: ['13117'] },
        sort: [20.240711, '1997-03-14_1997-9722'],
        inner_hits: {
          latest: {
            hits: {
              total: { value: 1, relation: 'eq' },
              max_score: 20.240711,
              hits: [
                {
                  _index: 'wagtail__wagtailcore_page_qxic7dc',
                  _type: '_doc',
                  _id: '13117',
                  _score: 20.240711,
                  _source: {
                    pk: '13117',
                    content_type: ['news.News', 'wagtailcore.Page'],
                    title: 'Mars Pathfinder Passes Global Surveyor on Its Way to Mars',
                    title_edgengrams: 'Mars Pathfinder Passes Global Surveyor on Its Way to Mars',
                    title_filter: 'Mars Pathfinder Passes Global Surveyor on Its Way to Mars',
                    id_filter: 13117,
                    live_filter: true,
                    owner_id_filter: null,
                    content_type_id_filter: 38,
                    path_filter: '000100010003038E',
                    depth_filter: 4,
                    locked_filter: false,
                    show_in_menus_filter: false,
                    first_published_at_filter: '1997-03-14T08:00:00+00:00',
                    last_published_at_filter: '2021-01-07T18:02:01.609368+00:00',
                    latest_revision_created_at_filter: '2021-01-07T18:02:01.511699+00:00',
                    locale_id_filter: 1,
                    translation_key_filter: '5fd6635e-f633-4a32-88a4-8050333f58fb',
                    news_news__author: null,
                    news_news__thumbnail_image: {
                      thumbnail_image: 'https://picsum.photos/512/288'
                    },
                    url: '/news/mars-pathfinder-passes-global-surveyor-on-its-way-to-mars',
                    news_news__topper: [''],
                    news_news__summary:
                      "Like two ships passing in the night, NASA's Mars Pathfinder spacecraft will begin to overtake Mars Global Surveyor tonight, moving closer to Mars than its companion orbiter and closing in for the final four-month approach to the red planet.",
                    news_news__body: [
                      'Like two ships passing in the night, NASA\'s Mars Pathfinder spacecraft will begin to overtake Mars Global Surveyor tonight, moving closer to Mars than its companion orbiter and closing in for the final four-month approach to the red planet. Mars Pathfinder, a lander carrying a small rover and science instruments to Mars, has less than half of its total distance to complete now, said Dr. Robin Vaughan, Pathfinder navigation team member at NASA\'s Jet Propulsion Laboratory. The spacecraft will overtake Mars Global Surveyor at 0100 Universal Time on March 15 (5 p.m. Pacific Standard Time tonight, March 14). At the time of the event, Mars Pathfinder will be 43.7 million kilometers (27 million miles) from Earth and 69.7 million kilometers (43.2 million miles) from Mars. The spacecraft is more than halfway along its arcing flight path, on which it will have traveled a total of 497 million kilometers (309 million miles) by the time it reaches Mars. "Although Pathfinder was launched about a month after Mars Global Surveyor, it is traveling faster than Surveyor and is on a shorter flight path to the red planet," said Brian Muirhead, Pathfinder project manager at JPL. "Whereas Mars Global Surveyor will take 10 months to reach Mars, Pathfinder takes only seven months. Once we reach Mars, we dive directly into the Martian atmosphere. The descent will only take about four minutes, and we should be on the surface of Mars by about 10 a.m. Pacific time on July 4th." Pathfinder is on a different type of trajectory to Mars than Mars Global Surveyor. Called a "Type 1" trajectory, the spacecraft does not have to travel as far to intercept Mars. Mars Global Surveyor will log a total of 700 million kilometers (435 million miles) in its flight path toward the red planet. "The advantage to using a Type 1 trajectory is that you have to travel less than one-half of the way around the Sun to intercept Mars," Vaughan said. "So Pathfinder takes 212 days to reach Mars, while Mars Global Surveyor will spend 309 days to reach the planet." Mars Global Surveyor is on a "Type 2" trajectory, taking it more than 180 degrees around the Sun to intercept the planet. A major difference in this type of trajectory is that the spacecraft travels at a slower velocity with respect to the Sun. Subsequently, the craft requires less fuel to slow down at Mars than if it had followed Pathfinder\'s trajectory. For instance, Pathfinder is currently traveling at 27 kilometers per second (60,700 miles per hour), while Mars Global Surveyor is traveling at about 26.75 kilometers per second (59,800 miles per hour). "Less fuel translates into simpler, smaller spacecraft and less expense," said Glenn Cunningham, Mars Global Surveyor project manager. "Mars Global Surveyor also will employ a fairly new technique requiring very little fuel to drop down into its mapping orbit. The technique is called \'aerobraking,\' and takes advantage of the drag of the Martian atmosphere. As the spacecraft dips down into the top of the atmosphere at its closest point to the planet each orbit, the drag from the atmosphere on the spacecraft will reduce its orbital speed. This drops the altitude of the highest part of the orbit, changing it from the initial elliptical shape to the circular shape required for mapping the planet." Aerobraking was first demonstrated successfully with the Magellan spacecraft, which mapped the surface of cloud-covered Venus using a sophisticated radar-imaging system. Magellan aerobraked into the Venusian atmosphere in October 1994, sending back data about Venus\' thick sulfur and carbon dioxide-choked atmosphere until it burned up in the planet\'s sizzling temperatures. Mars Global Surveyor, however, will not dip so far into the much thinner Martian atmosphere that it would burn up. Pathfinder is scheduled to perform two more flight path corrections and, possibly, a fifth maneuver to keep it on course for landing on Mars on July 4. The last two maneuvers will occur near the end of the cruise phase, on May 7 and June 24, when the spacecraft is close to Mars. If necessary, a fifth maneuver will be executed just a few hours before entry into the Martian atmosphere on July 4. Mars Global Surveyor will perform its second trajectory correction maneuver on March 20. Engineers are continuing to explore possible ways of freeing a broken damper arm that is wedged in the joint of one of the solar arrays, so that the panel locks in place. The Mars Pathfinder and Mars Global Surveyor missions are managed by the Jet Propulsion Laboratory for NASA\'s Office of Space Science, Washington, D.C. Pathfinder is the second in NASA\'s Discovery program of low-cost spacecraft designed to carry out highly focused science goals. Mars Global Surveyor is the first spacecraft in a decade-long program of robotic exploration, called the Mars Surveyor Program. 818-354-5011'
                    ],
                    news_news__release_number: '1997-9722',
                    news_news__get_topic_titles_filter: 'Solar System\nMars',
                    news_news__label: 'News',
                    topic_labels_filter: ['Solar System', 'Mars'],
                    publication_date_filter: '1997-03-14',
                    release_number_filter: '1997-9722',
                    _edgengrams: [
                      'Mars Pathfinder Passes Global Surveyor on Its Way to Mars',
                      'Mars Pathfinder Passes Global Surveyor on Its Way to Mars'
                    ]
                  }
                }
              ]
            }
          }
        }
      }
    ]
  },
  aggregations: {
    topics: {
      doc_count_error_upper_bound: 0,
      sum_other_doc_count: 0,
      buckets: [
        { key: 'Solar System', doc_count: 13389 },
        { key: 'Mars', doc_count: 13242 },
        { key: 'Weather', doc_count: 1132 },
        { key: 'Asteroids and Comets', doc_count: 536 },
        { key: 'Technology', doc_count: 390 },
        { key: 'Stars and Galaxies', doc_count: 323 },
        { key: 'JPL Life', doc_count: 298 },
        { key: 'Earth', doc_count: 250 },
        { key: 'Climate Change', doc_count: 104 },
        { key: 'Robotics', doc_count: 80 },
        { key: 'Exoplanets', doc_count: 47 },
        { key: 'CubeSats and SmallSats', doc_count: 45 },
        { key: 'Earthquakes', doc_count: 3 }
      ]
    },
    content_types: {
      doc_count_error_upper_bound: 0,
      sum_other_doc_count: 0,
      buckets: [
        { key: 'image_detail.ImageDetailPage', doc_count: 11461 },
        { key: 'news.News', doc_count: 2726 },
        { key: 'video_detail.VideoDetailPage', doc_count: 570 },
        { key: 'information_pages.ContentPage', doc_count: 79 },
        { key: 'audio_detail.AudioDetailPage', doc_count: 54 },
        { key: 'infographics.InfographicsDetailPage', doc_count: 36 },
        { key: 'missions.Mission', doc_count: 29 },
        { key: 'events.EventPage', doc_count: 11 },
        { key: 'robotics.RobotPage', doc_count: 4 },
        { key: 'image_detail.CuratedGalleryPage', doc_count: 1 },
        { key: 'press_kits.PressKitHomePage', doc_count: 1 }
      ]
    },
    results_by_year: {
      buckets: [
        { key_as_string: '2026', key: 1767225600000, doc_count: 1 },
        { key_as_string: '2024', key: 1704067200000, doc_count: 127 },
        { key_as_string: '2023', key: 1672531200000, doc_count: 387 },
        { key_as_string: '2022', key: 1640995200000, doc_count: 588 },
        { key_as_string: '2021', key: 1609459200000, doc_count: 807 },
        { key_as_string: '2020', key: 1577836800000, doc_count: 613 },
        { key_as_string: '2019', key: 1546300800000, doc_count: 586 },
        { key_as_string: '2018', key: 1514764800000, doc_count: 613 },
        { key_as_string: '2017', key: 1483228800000, doc_count: 603 },
        { key_as_string: '2016', key: 1451606400000, doc_count: 593 },
        { key_as_string: '2015', key: 1420070400000, doc_count: 678 },
        { key_as_string: '2014', key: 1388534400000, doc_count: 780 },
        { key_as_string: '2013', key: 1356998400000, doc_count: 743 },
        { key_as_string: '2012', key: 1325376000000, doc_count: 849 },
        { key_as_string: '2011', key: 1293840000000, doc_count: 591 },
        { key_as_string: '2010', key: 1262304000000, doc_count: 609 },
        { key_as_string: '2009', key: 1230768000000, doc_count: 383 },
        { key_as_string: '2008', key: 1199145600000, doc_count: 590 },
        { key_as_string: '2007', key: 1167609600000, doc_count: 246 },
        { key_as_string: '2006', key: 1136073600000, doc_count: 685 },
        { key_as_string: '2005', key: 1104537600000, doc_count: 782 },
        { key_as_string: '2004', key: 1072915200000, doc_count: 917 },
        { key_as_string: '2003', key: 1041379200000, doc_count: 494 },
        { key_as_string: '2002', key: 1009843200000, doc_count: 317 },
        { key_as_string: '2001', key: 978307200000, doc_count: 158 },
        { key_as_string: '2000', key: 946684800000, doc_count: 274 },
        { key_as_string: '1999', key: 915148800000, doc_count: 156 },
        { key_as_string: '1998', key: 883612800000, doc_count: 241 },
        { key_as_string: '1997', key: 852076800000, doc_count: 331 },
        { key_as_string: '1996', key: 820454400000, doc_count: 53 },
        { key_as_string: '1995', key: 788918400000, doc_count: 19 },
        { key_as_string: '1994', key: 757382400000, doc_count: 12 },
        { key_as_string: '1993', key: 725846400000, doc_count: 8 },
        { key_as_string: '1992', key: 694224000000, doc_count: 4 },
        { key_as_string: '1991', key: 662688000000, doc_count: 6 },
        { key_as_string: '1990', key: 631152000000, doc_count: 4 },
        { key_as_string: '1989', key: 599616000000, doc_count: 6 },
        { key_as_string: '1988', key: 567993600000, doc_count: 6 },
        { key_as_string: '1987', key: 536457600000, doc_count: 11 },
        { key_as_string: '1986', key: 504921600000, doc_count: 4 },
        { key_as_string: '1984', key: 441763200000, doc_count: 5 },
        { key_as_string: '1983', key: 410227200000, doc_count: 7 },
        { key_as_string: '1982', key: 378691200000, doc_count: 2 },
        { key_as_string: '1980', key: 315532800000, doc_count: 6 },
        { key_as_string: '1979', key: 283996800000, doc_count: 1 },
        { key_as_string: '1977', key: 220924800000, doc_count: 4 },
        { key_as_string: '1976', key: 189302400000, doc_count: 4 },
        { key_as_string: '1975', key: 157766400000, doc_count: 4 },
        { key_as_string: '1971', key: 31536000000, doc_count: 13 },
        { key_as_string: '1970', key: 0, doc_count: 2 },
        { key_as_string: '1969', key: -31536000000, doc_count: 13 },
        { key_as_string: '1967', key: -94694400000, doc_count: 5 },
        { key_as_string: '1966', key: -126230400000, doc_count: 5 },
        { key_as_string: '1965', key: -157766400000, doc_count: 10 },
        { key_as_string: '1964', key: -189388800000, doc_count: 3 },
        { key_as_string: '1962', key: -252460800000, doc_count: 2 }
      ]
    }
  }
}

export const BaseStory = {
  name: 'SearchResultsList',
  args: {
    searchQueryResult: SearchResultsListData,
    pages: SearchResultsListData.hits.hits,
    grid: false,
    condenseGrid: false,
    featureFirstResult: true,
    currentPage: 1
  }
}
