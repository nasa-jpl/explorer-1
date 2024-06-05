<script setup lang="ts">
import BaseButton from './components/BaseButton/BaseButton.vue'
import BaseLink from './components/BaseLink/BaseLink.vue'
import DetailHeadline from './components/DetailHeadline/DetailHeadline.vue'
import NavSecondary from './components/NavSecondary/NavSecondary.vue'
</script>

<template>
  <div>
    <nav-secondary 
      breadcrumb='[{"path": "/go/test-site", "title": "Test Go Site", "children": []}, {"path": "/go/test-site/has-children", "title": "Has Children", "children": [{"path": "/go/test-site/has-children/level-3-has-children", "title": "Lvl 3 Has Children", "children": [{"path": "/go/test-site/has-children/level-3-has-children/level-4-no-children-1", "title": "Lvl 4 No Children 1"}, {"path": "/go/test-site/has-children/level-3-has-children/level-4-no-children-2", "title": "Lvl 4 No Children 2"}]}, {"path": "/go/test-site/has-children/level-3-no-children", "title": "Lvl 3 No Children", "children": []}]}, {"path": "/go/test-site/no-children-1", "title": "No Children 1", "children": []}, {"path": "/go/test-site/no-children-2", "title": "No Children 2", "children": []}, {"path": "/go/test-site/has-children", "title": "Has Children", "children": [{"path": "/go/test-site/has-children/level-3-has-children", "title": "Lvl 3 Has Children", "children": [{"path": "/go/test-site/has-children/level-3-has-children/level-4-no-children-1", "title": "Lvl 4 No Children 1"}, {"path": "/go/test-site/has-children/level-3-has-children/level-4-no-children-2", "title": "Lvl 4 No Children 2"}]}, {"path": "/go/test-site/has-children/level-3-no-children", "title": "Lvl 3 No Children", "children": []}]}]'
    />
    <detail-headline title="NASA's Ingenuity Mars Helicopter Recharges Its Batteries in Flight" publication-date="2020-08-13" :author="{name: 'Jane Platt',
      organization: 'JPL'}" :topics="[
      {
        title: 'Mars',
        url: '/topics/mars'
      },
      {
        title: 'Rover',
        url: '/topics/rover'
      }
    ]" />
    <base-button variant="secondary"> Button Text </base-button>
    <base-link
      variant="primary"
      href="#"
      >Base Link</base-link
    >
    <p class="text-action">Action color</p>
    <p class="text-emphasis">Emphasis color</p>
  </div>
</template>
