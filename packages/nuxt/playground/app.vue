<template>
  <div class="relative">
    <nav-secondary breadcrumb="[{'path': '/go/test-site', 'title': 'Test Go Site', 'children': []}, {'path': '/go/test-site/has-children', 'title': 'Has Children', 'children': [{'path': '/go/test-site/has-children/level-3-has-children', 'title': 'Lvl 3 Has Children', 'children': [{'path': '/go/test-site/has-children/level-3-has-children/level-4-no-children-1', 'title': 'Lvl 4 No Children 1'}, {'path': '/go/test-site/has-children/level-3-has-children/level-4-no-children-2', 'title': 'Lvl 4 No Children 2'}]}, {'path': '/go/test-site/has-children/level-3-no-children', 'title': 'Lvl 3 No Children', 'children': []}]}, {'path': '/go/test-site/no-children-1', 'title': 'No Children 1', 'children': []}, {'path': '/go/test-site/no-children-2', 'title': 'No Children 2', 'children': []}, {'path': '/go/test-site/has-children', 'title': 'Has Children', 'children': [{'path': '/go/test-site/has-children/level-3-has-children', 'title': 'Lvl 3 Has Children', 'children': [{'path': '/go/test-site/has-children/level-3-has-children/level-4-no-children-1', 'title': 'Lvl 4 No Children 1'}, {'path': '/go/test-site/has-children/level-3-has-children/level-4-no-children-2', 'title': 'Lvl 4 No Children 2'}]}, {'path': '/go/test-site/has-children/level-3-no-children', 'title': 'Lvl 3 No Children', 'children': []}]}]" />
    <base-heading size="h1">Nuxt Module Playground</base-heading>
    <div class="text-center mb-3">
      <base-button variant="primary">
        Button component
      </base-button>
    </div>
    <block-image class="relative" :data="BlockImageData" />
    <p>This is a paragraph, not a component.</p>
    <hero-media :image="{
      url: 'https://picsum.photos/1440/620',
      width: 1440,
      height: 620
    }" />
    <detail-headline title="NASA's Ingenuity Mars Helicopter Recharges Its Batteries in Flight" publication-date="2020-08-13" :topics="[
      {
        title: 'Mars',
        url: '/topics/mars'
      },
      {
        title: 'Rover',
        url: '/topics/rover'
      }
    ]" />
  </div>
</template>

<script setup>

const BlockImageData = {
  blockType: 'FullBleedImageBlock',
  fullBleed: false,
  image: {
    alt: 'Fourth image',
    caption:
      '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel porttitor urna. Maecenas at est laoreet, sagittis risus a, rutrum ipsum. Quisque tincidunt lacus nunc, dapibus facilisis felis scelerisque sit amet. </p>',
    credit: 'NASA/JPL',
    detailUrl: '/image/placeholder/',
    original: 'https://picsum.photos/869/700',
    src: {
      height: 700,
      url: 'https://picsum.photos/869/700',
      width: 869
    },
    srcSet: 'https://picsum.photos/320/258 320w, https://picsum.photos/869/700 1024w'
  },
  imageFullBleed: {
    alt: 'Fourth image',
    caption:
      '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel porttitor urna. Maecenas at est laoreet, sagittis risus a, rutrum ipsum. Quisque tincidunt lacus nunc, dapibus facilisis felis scelerisque sit amet. </p>',
    credit: 'NASA/JPL',
    detailUrl: '/image/placeholder/',
    original: 'https://picsum.photos/1800/600',
    src: {
      width: 1800,
      height: 900,
      url: 'https://picsum.photos/1800/600'
    },
    srcCropped: {
      width: 1024,
      height: 341,
      url: 'https://picsum.photos/1024/341'
    },
    screenXs: {
      url: 'https://picsum.photos/320/107',
      width: 320
    },
    screenLg: {
      url: 'https://picsum.photos/1024/341',
      width: 1024
    },
    screenXl: {
      url: 'https://picsum.photos/1280/427',
      width: 1280
    },
    screenThreexl: {
      url: 'https://picsum.photos/1800/600',
      width: 1800
    }
  }
}
</script>
