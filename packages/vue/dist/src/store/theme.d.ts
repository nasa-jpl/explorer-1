import { Explorer1Theme } from './../interfaces';

/** Sets the Explorer-1 theme
 */
export interface State {
    theme: Explorer1Theme | null;
}
export declare const useThemeStore: import('pinia').StoreDefinition<"theme", State, {
    isEdu(state: {
        theme: Explorer1Theme | null;
    } & import('pinia').PiniaCustomStateProperties<State>): boolean;
}, {
    setTheme(value: Explorer1Theme): void;
}>;
