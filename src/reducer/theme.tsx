import React, { useReducer, createContext, Dispatch } from "react";

type ThemeModeInterface = "light" | "dark";
type ThemeStateInterface = {
  mode?: ThemeModeInterface;
};
type ThemeActionInterface = { type: "MODE"; mode?: ThemeModeInterface };
type ThemeDispatchContextInterface = Dispatch<ThemeActionInterface>;

type ThemeProviderInterface = {
  children: React.ReactNode;
};

function themeReducer(
  state: ThemeStateInterface,
  action: ThemeActionInterface
): ThemeStateInterface {
  switch (action.type) {
    case "MODE":
      localStorage.setItem("theme", action.mode ?? "light");
      return {
        ...state,
        mode: action.mode,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export const ThemeStateContext = createContext<ThemeStateInterface | null>({
  mode: "light",
});
export const ThemeDispatchContext =
  createContext<ThemeDispatchContextInterface>(() => null);

export function ThemeProvider({ children }: ThemeProviderInterface) {
  const [state, dispatch] = useReducer(themeReducer, {
    mode: "light",
  });
  return (
    <ThemeStateContext.Provider value={state}>
      <ThemeDispatchContext.Provider value={dispatch}>
        {children}
      </ThemeDispatchContext.Provider>
    </ThemeStateContext.Provider>
  );
}
