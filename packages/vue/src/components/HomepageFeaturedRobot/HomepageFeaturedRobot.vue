<template>
  <div
    v-if="data"
    class="HomepageFeaturedRobot lg:BaseGrid lg:px-0 container px-4 mx-auto"
  >
    <!-- all the text -->
    <div class="lg:flex items-center col-span-5 col-start-2">
      <div>
        <div class="lg:pr-5 xl:pr-18">
          <p class="text-subtitle text-jpl-red mb-3">Robotics</p>
          <BaseHeading
            v-if="data.nickname || data.title"
            level="h2"
            class="mb-5"
          >
            {{ data.nickname || data.title }}
          </BaseHeading>
          <div
            v-if="data.homePageBlurb || data.description"
            class="text-body-lg mb-10"
          >
            {{ data.homePageBlurb || data.description }}
          </div>

          <!-- the image on mobile -->
          <div class="lg:hidden sm:w-xl w-full mx-auto my-10">
            <BaseImage
              v-if="theImage && theImage.src"
              :src="theImage.src.url"
              :srcset="
                mixinGetSrcSet(theImage)
                  ? mixinGetSrcSet(theImage)
                  : theImage.srcSet
              "
              :width="theImage.src.width"
              :height="theImage.src.height"
              image-class="w-full h-auto"
              alt=""
              :object-fit-class="data.homePageImage ? 'contain' : 'cover'"
              loading="lazy"
            />
          </div>

          <RoboticsDetailStatsMini
            class="my-10"
            :mass="data.mass"
            :height="data.height"
            :speed="data.speed"
            :alternative-stats="data.alternativeStats"
          />
        </div>
        <!-- buttons -->
        <BaseButton
          v-if="data.url"
          class="lg:mr-3 mb-3"
          block-classes="lg:inline-block block"
          variant="primary"
          :aria-label="
            data.nickname ? `Meet ${data.nickname}` : `Meet ${data.title}`
          "
          :to="data.url"
        >
          Meet {{ data.nickname || data.title }}
        </BaseButton>
        <BaseButton
          v-if="data.parent && data.parent.url"
          class="lg:mr-3 mb-3"
          block-classes="lg:inline-block block"
          variant="secondary"
          :to="data.parent.url"
          aria-label="See All Robots"
          compact
        >
          See All Robots
        </BaseButton>
      </div>
    </div>
    <!-- the image on desktop -->
    <div class="lg:flex items-center hidden col-span-6">
      <BaseImage
        v-if="theImage && theImage.src"
        image-class="w-full h-auto"
        :src="theImage.src.url"
        :srcset="
          mixinGetSrcSet(theImage) ? mixinGetSrcSet(theImage) : theImage.srcSet
        "
        :width="theImage.src.width"
        :height="theImage.src.height"
        alt=""
        :object-fit-class="data.homePageImage ? 'contain' : 'cover'"
        loading="lazy"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import RoboticsDetailStatsMini from './../RoboticsDetailStats/RoboticsDetailStatsMini.vue'
import BaseButton from './../BaseButton/BaseButton.vue'
import BaseHeading from './../BaseHeading/BaseHeading.vue'
import BaseImage from './../BaseImage/BaseImage.vue'

export default defineComponent({
  name: 'HomepageFeaturedRobot',
  components: {
    RoboticsDetailStatsMini,
    BaseButton,
    BaseHeading,
    BaseImage,
  },
  props: {
    data: {
      type: Object,
      required: false,
    },
  },
  computed: {
    theImage(): object | null {
      if (this.data.homePageImage) {
        return this.data.homePageImage
      } else if (this.data.heroImage) {
        return this.data.heroImage
      }
      return null
    },
  },
})
</script>
