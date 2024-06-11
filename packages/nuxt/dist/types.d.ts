
import type { ModuleOptions } from './module'


declare module '@nuxt/schema' {
  interface NuxtConfig { ['explorer1']?: Partial<ModuleOptions> }
  interface NuxtOptions { ['explorer1']?: ModuleOptions }
}

declare module 'nuxt/schema' {
  interface NuxtConfig { ['explorer1']?: Partial<ModuleOptions> }
  interface NuxtOptions { ['explorer1']?: ModuleOptions }
}


export type { ModuleOptions, default } from './module'
