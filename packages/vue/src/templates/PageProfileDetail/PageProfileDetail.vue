<template>
  <div
    v-if="data"
    class="ThemeVariantLight text-gray-dark mb-20 md:mb-40"
    itemscope
    itemtype="http://schema.org/Person"
  >
    <NavSecondary :breadcrumb="data.breadcrumb" />

    <div class="BaseGrid container mx-auto lg:px-0 px-4 lg:my-20 my-10 gap-y-0">
      <div class="col-start-1 col-end-13 md:hidden">
        <BaseHeading level="h1" size="h2" class="mb-5" itemprop="name">{{
          data.title
        }}</BaseHeading>
        <p class="text-body-lg mb-5" itemprop="jobTitle">{{ data.jobTitle }}</p>
      </div>
      <BaseImagePlaceholder
        aspect-ratio="portrait"
        class="col-start-1 col-end-6 lg:col-start-3 lg:col-end-6 mb-10 md:mb-0"
      >
        <BaseImage
          v-if="data.image && data.image.src"
          :src="data.image.src.url"
          :srcset="getPortraitSrcset(data.image)"
          :width="data.image.src.width"
          :height="data.image.src.height"
          image-class="w-full h-auto"
          loading="eager"
          alt=""
        />
      </BaseImagePlaceholder>

      <div
        class="col-start-1 col-end-13 md:col-start-6 md:col-end-13 lg:col-start-6 lg:col-end-11"
      >
        <div class="hidden md:block">
          <BaseHeading
            level="h1"
            size="h2"
            class="mb-5 md:mb-7 lg:mb-10"
            itemprop="name"
            >{{ data.title }}</BaseHeading
          >
          <p class="text-body-lg mb-5 md:mb-7 lg:mb-10" itemprop="jobTitle">
            {{ data.jobTitle }}
          </p>
        </div>
        <template v-if="data.email">
          <BaseHeading level="h2" size="h4" class="mb-2">
            <IconEnvelope class="inline relative -top-0.5" />
            Email
          </BaseHeading>
          <p class="text-h6">
            <a
              class="font-normal underline break-all"
              itemprop="email"
              :href="`mailto:${data.email}`"
            >
              {{ data.email }}
            </a>
          </p>
        </template>
      </div>
    </div>

    <LayoutHelper indent="col-3">
      <ProfileDetailSectionGroup
        v-for="section in topLevel"
        :key="section.id"
        :section="section"
        :data="data"
      />
    </LayoutHelper>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import LayoutHelper from '@/components/LayoutHelper/LayoutHelper.vue'
import NavSecondary from '@/components/NavSecondary/NavSecondary.vue'
import BaseHeading from '@/components/BaseHeading/BaseHeading.vue'
import BaseImagePlaceholder from '@/components/BaseImagePlaceholder/BaseImagePlaceholder.vue'
import BaseImage from '@/components/BaseImage/BaseImage.vue'
import IconEnvelope from '@/components/Icons/IconEnvelope.vue'
import ProfileDetailSectionGroup from '@/components/ProfileDetailSectionGroup/ProfileDetailSectionGroup.vue'

export default defineComponent({
  name: 'PageProfileDetail',
  components: {
    LayoutHelper,
    NavSecondary,
    BaseHeading,
    BaseImagePlaceholder,
    BaseImage,
    IconEnvelope,
    ProfileDetailSectionGroup,
  },
  props: {
    data: {
      type: Object,
      required: false,
    },
  },

  data() {
    return {
      topLevel: [
        {
          title: 'About',
          id: 'about',
          subsections: [
            {
              title: 'Biography',
              prop: 'biography',
              icon: 'IconBookUser',
            },
            { title: 'Education', prop: 'education', icon: 'IconUniversity' },
            {
              title: 'Research Interests',
              prop: 'researchInterests',
              icon: 'IconMagnifyingGlass',
            },
          ],
        },
        {
          title: 'Experience',
          id: 'experience',
          subsections: [
            {
              title: 'Professional Experience',
              prop: 'professionalExperience',
              icon: 'IconBriefcase',
            },
            {
              title: 'Community Service',
              prop: 'communityService',
              icon: 'IconHand',
            },
          ],
        },
        {
          title: 'Achievements',
          id: 'achievements',
          subsections: [
            {
              title: 'Selected Awards',
              prop: 'selectedAwards',
              icon: 'IconMedal',
            },
            { title: 'Publications', prop: 'publications', icon: 'IconBook' },
          ],
        },
      ],
    }
  },

  methods: {
    // Generate the srcset manually as the image renditions use a portrait aspect ratio.
    getPortraitSrcset(image) {
      return `${image.screenSm.url} ${image.screenSm.width}w, ${image.screenMd.url} ${image.screenMd.width}w, ${image.src.url} ${image.src.width}w`
    },
  },
})
</script>
