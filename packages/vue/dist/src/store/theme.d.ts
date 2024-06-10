/** Sets the Explorer-1 theme
 */
export type Explorer1Theme = 'defaultTheme' | 'ThemeInternal' | 'ThemeEdu';
export interface State {
    theme: Explorer1Theme | null;
}
export declare const useThemeStore: import('pinia').StoreDefinition<"theme", State, {}, {
    setTheme(value: Explorer1Theme): void;
}>;
