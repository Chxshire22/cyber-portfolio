import {createContext, useContext} from "react";

export const ThemeContext = createContext(undefined)

export function useThemeContext(){
	const theme = useContext(ThemeContext)
	return theme
}
