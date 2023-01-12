import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import AppThemeProvider from "./themes/AppThemeProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
	<AppThemeProvider>
		<App />
	</AppThemeProvider>,
);
