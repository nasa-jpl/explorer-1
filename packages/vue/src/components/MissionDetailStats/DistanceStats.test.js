import { supportedAPIPaths } from './DistanceStats.vue'

const consoleError = console.error

describe('DistanceStats - /api/v1/missions/', () => {
  const config = supportedAPIPaths['/api/v1/missions/']

  beforeEach(() => {
    console.error = () => {}
  })

  afterEach(() => {
    console.error = consoleError
  })

  test('gets the correct path', () => {
    expect(
      config.getPath(
        'https://mars.nasa.gov/api/v1/missions/2/',
        '/api/v1/missions/'
      )
    ).toBe('/api/mars/api/v1/missions/2/')
  })

  test('throws', () => {
    const config = supportedAPIPaths['/api/v1/missions/']
    expect(() => {
      config.getPath('https://mars.nasa.gov/api/v2/potato/')
    }).toThrow('/api/v1/missions/')
  })

  test('gets the correct distance', () => {
    expect(config.getDistance({ mi_traveled: 10.22 })).toEqual({
      value: 10.22,
      system: 'imperial',
    })
  })

  test('throws', () => {
    expect(() => {
      config.getDistance({})
    }).toThrow('/api/v1/missions/')
  })
})

describe('DistanceStats - /spice_data/getRangefromT1/', () => {
  const config = supportedAPIPaths['/spice_data/getRangefromT1/']

  beforeEach(() => {
    console.error = () => {}
  })

  afterEach(() => {
    console.error = consoleError
  })

  test('gets the correct path', () => {
    expect(
      config.getPath(
        'https://mars.nasa.gov/spice_data/getRangefromT1/EARTH/MARS/2020-10-19T11:29:0/2020-10-19T11:34:0/1/',
        '/spice_data/getRangefromT1/'
      )
    ).toMatch(
      /\/api\/mars\/spice_data\/getRangefromT1\/EARTH\/MARS\/.+\/.+\/1\//
    )
  })

  test('also gets the correct path', () => {
    expect(
      config.getPath(
        'https://mars.nasa.gov/spice_data/getRangefromT1/VENUS/MARS/',
        '/spice_data/getRangefromT1/'
      )
    ).toMatch(
      /\/api\/mars\/spice_data\/getRangefromT1\/VENUS\/MARS\/.+\/.+\/1\//
    )
  })

  test('throws', () => {
    const config = supportedAPIPaths['/spice_data/getRangefromT1/']
    expect(() => {
      config.getPath('https://mars.nasa.gov/spice_data/getRangefromT1/1')
    }).toThrow()
  })

  test('gets the correct distance', () => {
    expect(
      config.getDistance(
        {
          items: [{ value: (4500.23).toString() }],
          error: false,
          units: 'KM',
        },
        0
      )
    ).toEqual({
      value: 4500,
      system: 'metric',
    })
  })

  test('throws if error flag is set', () => {
    expect(() => {
      config.getDistance(
        {
          items: [{ value: (4500.23).toString() }],
          error: true,
          units: 'KM',
        },
        0
      )
    }).toThrow()
  })

  test('throws if unit is unexpected', () => {
    expect(() => {
      config.getDistance(
        {
          items: [{ value: (4500.23).toString() }],
          error: false,
          units: 'AU',
        },
        0
      )
    }).toThrow()
  })

  test('throws if there is no data', () => {
    expect(() => {
      config.getDistance(
        {
          items: [],
          error: false,
          units: 'KM',
        },
        0
      )
    }).toThrow()
  })
})
