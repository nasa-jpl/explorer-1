<template>
  <div class="PageMaintenanceMode bg-white border border-white">
    <div class="max-w-screen-3xl min-h-100 mx-auto bg-white">
      <div
        class="BaseGrid text-gray-dark font-primary animate-fadeInSlow container mx-auto transition-all duration-150"
      >
        <div
          class="mb-12 lg:mb-24 lg:pl-0 lg:col-start-2 col-start-1 col-end-13 px-4 py-10"
        >
          <div class="w-full text-center">
            <img
              loading="lazy"
              class="max-w-full mx-auto mt-10 lg:mt-20 px-10 lg:px-0"
              src="@/assets/images/jpg/pages/maintenance/maintenance-gears.jpg"
              width="283"
              height="227"
              alt=""
            />
            <h1
              class="lg:text-7xl mt-10 text-4xl font-bold leading-normal tracking-normal"
            >
              {{
                $config && $config.MAINTENANCE_MODE_HEADING
                  ? $config.MAINTENANCE_MODE_HEADING
                  : 'Houston, we have an&nbsp;update.'
              }}
            </h1>

            <p
              class="lg:text-xl text-base py-5 max-w-2xl mx-auto lg:mb-10 mb-6 font-semibold leading-normal tracking-normal"
            >
              {{
                $config && $config.MAINTENANCE_MODE_DESCRIPTION
                  ? $config.MAINTENANCE_MODE_DESCRIPTION
                  : 'The JPL website is undergoing planned maintenance and will be back online when the update is complete in a few&nbsp;minutes.'
              }}
            </p>
            <NavSocial class="justify-center" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavSocial from '@/components/NavSocial/NavSocial.vue'

export default defineComponent({
  name: 'PageMaintenanceMode',
  components: {
    NavSocial,
  },
})
</script>
<style lang="scss">
.PageMaintenanceMode {
  .NavSocial {
    @apply -ml-2; // visually centered due to narrow facebook icon
    .BaseButton.-social {
      @apply border-0 bg-none text-gray-dark;
      @include hover {
        @apply bg-none bg-transparent;

        &.-facebook {
          @apply text-facebook;
        }

        &.-twitter {
          @apply text-twitter;
        }

        &.-instagram {
          @apply text-instagram;
        }

        &.-youtube {
          @apply text-youtube;
        }
      }
    }
  }
}
</style>
