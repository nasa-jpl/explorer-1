export interface ImageSrcObject {
    url: string;
    width: number;
    height: number;
}
export interface ImageObject {
    src: ImageSrcObject;
    srcCropped: ImageSrcObject;
    screenXs?: Partial<ImageSrcObject>;
    screenLg?: Partial<ImageSrcObject>;
    screenXL?: Partial<ImageSrcObject>;
    screenThreexl?: Partial<ImageSrcObject>;
    srcSet?: string;
    alt?: string;
    original?: string;
    caption?: string;
    credit?: string;
    detailUrl?: string;
}
