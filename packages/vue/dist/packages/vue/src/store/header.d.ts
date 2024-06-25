/** Controls various display states for the header and navigation
 ** headerTransparent: whether the header is a transparent overlay
 ** highlightPrimary: logic in various components will enable/disable this
 ** globalChildren: the breadcrumb items derived from the active primary item in the global navigation
 ** secondayNav: breadcrumb items that are overridden from content pages or similar
 */
export interface State {
    headerTransparent: boolean;
    highlightPrimary: boolean;
    globalChildren?: any | null;
    secondaryNav?: any | null;
}
export declare const useHeaderStore: import('pinia').StoreDefinition<"header", State, {}, {
    makeTransparent(value: boolean): void;
    updateHighlightPrimary(value: boolean): void;
    updateGlobalChildren(value: any): void;
    updateSecondary(value: any): void;
}>;
