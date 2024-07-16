import NavSecondary from './NavSecondary.vue'

export default {
  title: 'WWW/Header & Footer/Elements/NavSecondary',
  component: NavSecondary,
  excludeStories: /.*Data$/,
  parameters: {
    docs: {
      description: {
        component: `This component is only visible on large viewports. Mobile secondary nav is handled in the \`NavMobile\` component.`
      }
    }
  }
}

export const NavSecondaryData = {
  breadcrumb:
    '[{"path": "/go/test-site", "title": "Test Go Site", "children": []}, {"path": "/go/test-site/has-children", "title": "Has Children", "children": [{"path": "/go/test-site/has-children/level-3-has-children", "title": "Lvl 3 Has Children", "children": [{"path": "/go/test-site/has-children/level-3-has-children/level-4-no-children-1", "title": "Lvl 4 No Children 1"}, {"path": "/go/test-site/has-children/level-3-has-children/level-4-no-children-2", "title": "Lvl 4 No Children 2"}]}, {"path": "/go/test-site/has-children/level-3-no-children", "title": "Lvl 3 No Children", "children": []}]}, {"path": "/go/test-site/no-children-1", "title": "No Children 1", "children": []}, {"path": "/go/test-site/no-children-2", "title": "No Children 2", "children": []}, {"path": "/go/test-site/has-children", "title": "Has Children", "children": [{"path": "/go/test-site/has-children/level-3-has-children", "title": "Lvl 3 Has Children", "children": [{"path": "/go/test-site/has-children/level-3-has-children/level-4-no-children-1", "title": "Lvl 4 No Children 1"}, {"path": "/go/test-site/has-children/level-3-has-children/level-4-no-children-2", "title": "Lvl 4 No Children 2"}]}, {"path": "/go/test-site/has-children/level-3-no-children", "title": "Lvl 3 No Children", "children": []}]}]'
}

export const BaseStory = {
  name: 'NavSecondary',
  args: { breadcrumb: NavSecondaryData.breadcrumb }
}
