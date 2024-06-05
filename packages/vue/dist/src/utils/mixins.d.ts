import { BreadcrumbPathObject, ImageObject, RelatedLinkObject } from '../interfaces';

export interface SrcSetDataValue {
    url: string;
    width: number;
}
export type LinkObject = {
    linkPage: {
        title: string;
        url: string;
    } | null;
    title: string | null;
    path: string | null;
};
export type BreadcrumbObject = {
    menu_links: {
        [key: string]: [BreadcrumbPathObject];
    } | null;
    more: [BreadcrumbPathObject] | null;
};
export type BaseImageObject = {
    title: string | null;
    original: string | null;
    credit: string | null;
    detailUrl: string | null;
};
export type lightboxObject = {
    title: string | null;
    url: string | null;
    detailUrl: string | null;
    credit: string | null;
};
export type lightboxGalleryObject = {
    title: string | null;
    original: string | null;
    detailUrl: string | null;
    credit: string | null;
};
export declare const mixinTransparentHeader: () => void;
export declare const mixinGetLinkText: (item: LinkObject) => string;
export declare const mixinGetRouterLink: (link: LinkObject) => string | undefined;
export declare const mixinUpdateGlobalChildren: (value: [BreadcrumbPathObject] | null) => void;
export declare const mixinUpdateSecondary: (value: [BreadcrumbPathObject] | null) => void;
export declare const mixinHighlightPrimary: (value: boolean) => void;
export declare const mixinIsActivePath: (itemPath: string) => Boolean;
export declare const mixinGetSrcSet: (srcSetObject: Partial<ImageObject>) => string;
export declare const mixinGetExternalLink: (link: RelatedLinkObject) => string | undefined;
export declare const mixinCanonicalUrl: (path: string) => string;
export declare const mixinLightboxItems: (image: BaseImageObject, title: string) => lightboxObject[] | false;
export declare const mixinLightboxGalleryItems: (items: object | any) => object | false;
export declare const mixinFormatSplitEventDates: (startDatetime: string, endDatetime?: string) => {
    day: string;
    monthAndYear: string;
};
export declare const mixinFormatEventDates: (startDatetime: string, endDatetime?: string) => string;
export declare const mixinFormatEventTimeInHoursAndMinutes: (startDatetime: string, endDatetime?: string, endTime?: string) => string;
