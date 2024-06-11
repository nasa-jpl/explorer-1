import * as _nuxt_schema from '@nuxt/schema';

type Explorer1Theme = 'defaultTheme' | 'ThemeInternal' | 'ThemeEdu';
interface ModuleOptions {
    theme: Explorer1Theme;
    includeStyles: boolean;
    includeComponents: boolean;
    includePageTemplates: boolean;
    includeStore: boolean;
}
declare const _default: _nuxt_schema.NuxtModule<ModuleOptions>;

export { type ModuleOptions, _default as default };
