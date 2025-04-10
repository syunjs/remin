import { proxy } from "valtio";

const uiState = proxy({
  darkMode: false,
  fullScreen: false,
});

export default uiState;
