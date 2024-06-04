import { ImageObject } from '../interfaces';

export interface SrcSetDataValue {
    url: string;
    width: number;
}
export type linkObject = {
    linkPage: {
        title: string;
        url: string;
    } | null;
    title: string | null;
    path: string | null;
};
export type breadcrumbPathObject = {
    path: string;
    title: string;
};
export type breadcrumbObject = {
    menu_links: {
        [key: string]: [breadcrumbPathObject];
    } | null;
    more: [breadcrumbPathObject] | null;
};
export type relatedLinkObject = {
    page: {
        url: string;
    } | null;
    document: {
        url: string;
    } | null;
    externalLink: string | null;
    text: string | null;
};
export type baseImageObject = {
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
export declare const mixinGetSrcSet: (srcSetObject: Partial<ImageObject>) => string;
