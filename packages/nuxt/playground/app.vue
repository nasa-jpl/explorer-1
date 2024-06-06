<template>
  <div class="relative">
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
    <mission-detail-highlights
      :animation="true"
      heading="Heading"
      mission-title="UAD"
      :highlights="[
    {
      date: '1983-01-21',
      heading: 'Launch',
      highlightLink: {
        externalLink: null,
        page: {
          title: 'Color Picture from Spirit is Most Detailed View of Mars Ever Seen',
          url: '/news/from-russia-with-grace/'
        }
      },
      summary: 'A successful launch happened.'
    },
    {
      date: '1983-06-08',
      heading: null,
      highlightLink: {
        externalLink: null,
        page: {
          title: 'Color Picture from Spirit is Most Detailed View of Mars Ever Seen',
          url: '/news/from-russia-with-grace/'
        }
      },
      summary: null
    },
    {
      date: '1983-11-21',
      heading: 'End of mission',
      highlightLink: {
        externalLink: 'https://www.nasa.gov',
        page: null
      },
      summary:
        'Following a 10-month-long mission, the space telescope exhausts its cryogen and ceases operations.'
    }
  ]"
    />
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
