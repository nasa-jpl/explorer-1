<script setup lang="ts">
import { ref, watch } from 'vue'

interface BlockGistProps {
  data: {
    blockType?: string
    caption?: string
    id?: string
    url?: string
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
      <div
        id="iframe-description"
        class="sr-only"
      >
        This iframe displays a code snippet from GitHub Gist.
      </div>
      <iframe
        :src="gistUrl"
        width="100%"
        class="min-h-[500px]"
        frameborder="0"
        title="Code snippet display"
        aria-label="Code snippet display iframe"
        aria-describedby="iframe-description"
        aria-hidden="false"
      ></iframe>
      <div class="gist-caption">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <span v-html="props.data.caption"></span>
        <a
          :href="props.data.url"
          target="_blank"
          rel="noopener noreferrer"
          title="View on GitHub"
        >
          {{ 'View on GitHub' }}
        </a>
      </div>
    </template>
  </div>
</template>

<style scoped lang="scss">
.BlockGist {
  margin: 1rem 0 0.5rem;

  iframe {
    @apply border border-gray-light-mid rounded-none pr-2;
  }

  .gist-caption {
    @apply text-sm font-medium m-1 flex-wrap;

    span {
      p {
        @apply text-gray-mid;
      }
    }

    a {
      @apply underline text-action can-hover:hover:text-action-dark cursor-pointer;
      white-space: nowrap; /* Prevents the link from wrapping onto a new line */
    }
  }
}
body.ThemeVariantLight {
  .BlockGist {
    iframe {
      @apply border-gray-light-mid;
    }

    .gist-caption {
      @apply text-gray-mid-dark;
    }
  }
}

body.ThemeVariantDark {
  .BlockGist {
    iframe {
      @apply border-gray-mid-dark bg-gray-light;
    }

    .gist-caption {
      @apply text-gray-light-mid;
    }
  }
}
</style>
