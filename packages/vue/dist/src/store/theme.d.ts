import { Explorer1Theme } from './../interfaces';

/** Sets the Explorer-1 theme
 */
export interface State {
    theme: Explorer1Theme | null;
}
export declare const useThemeStore: import('pinia').StoreDefinition<"theme", State, {}, {
    setTheme(value: Explorer1Theme): void;
}>;
