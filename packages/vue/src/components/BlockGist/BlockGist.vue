<script setup lang="ts">
import { ref, watch } from 'vue'

interface BlockGistProps {
  data: {
    blockType: string
    caption: string
    id: string
    url: string
  }
}

const props = defineProps<BlockGistProps>()

const gistUrl = ref<string>('')
const notFound = ref<string>(
  'https://user-images.githubusercontent.com/883233/102043641-d4817580-3d89-11eb-885d-2786373932d4.png'
)

const generateIframeUrl = () => {
  gistUrl.value = `${props.data.url}.pibb`
}

watch(
  () => props.data.url,
  () => {
    generateIframeUrl()
  },
  { immediate: true }
)
</script>

<template>
  <div class="BlockGist">
    <template v-if="!gistUrl">
      <img
        id="notFound"
        height="100%"
        width="100%"
        :src="notFound"
        alt="404"
      />
    </template>
    <template v-else>
      <iframe
        :src="gistUrl"
        width="100%"
        class="min-h-[500px]"
        frameborder="0"
      ></iframe>
      <div
        class="gist-caption"
        v-html="
          `${props.data.caption} <a href='${props.data.url}' target='_blank' class='underline text-action can-hover:hover:text-action-dark cursor-pointer'>View on GitHub</a>`
        "
      ></div>
    </template>
  </div>
</template>

<style scoped lang="scss">
body.ThemeVariantLight {
  .BlockGist {
    margin: 1rem 0;

    iframe {
      @apply border border-gray-light-mid rounded-lg;
    }

    .gist-caption {
      @apply text-sm font-medium text-gray-mid-dark m-1;

      a {
        @apply underline text-action can-hover:hover:text-action-dark cursor-pointer;
        white-space: nowrap; /* Prevents the link from wrapping onto a new line */
      }
    }
  }
}

body.ThemeVariantDark {
  .BlockGist {
    margin: 1rem 0;

    iframe {
      @apply border border-gray-dark rounded-lg bg-gray-light p-2;
    }

    .gist-caption {
      @apply text-sm font-medium text-gray-light-mid m-1;

      a {
        @apply underline text-action can-hover:hover:text-action-dark cursor-pointer;
        white-space: nowrap; /* Prevents the link from wrapping onto a new line */
      }
    }
  }
}
</style>
