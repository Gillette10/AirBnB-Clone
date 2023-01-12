import { ThemeProvider, createTheme } from "@mui/material";
import { grey, pink } from "@mui/material/colors";

const theme = createTheme({
	typography: {
		allVariants: {
			fontFamily: "Roboto",
			textTransform: "none",
			fontSize: 15,
		},
	},
	palette: {
		primary: {
			main: grey[700],
			other: grey[100],
		},
		secondary: {
			main: pink[500],
		},
	},
	components: {
		MuiTypography: {
			defaultProps: {
				sx: {
					px: 1,
				},
				variant: "subtitle2",
			},
		},
		MuiStack: {
			defaultProps: {
				sx: {
					px: 2,
					py: 1,
				},
				spacing: 2,
				direction: "row",
			},
		},
		MuiPaper: {
			defaultProps: {
				elevation: 0,
			},
		},
		MuiLink: {
			defaultProps: {
				sx: {
					color: (theme) => theme.palette.primary.main,
				},
				underline: "none",
			},
		},
		MuiButton: {
			defaultProps: {
				size: "small",
				p: 0,
				disableRipple: true,
			},
			variant: "text",
		},
		MuiTab: {
			defaultProps: {
				disableRipple: true,
			},
		},
	},
});

const AppThemeProvider = (prop) => {
	return <ThemeProvider theme={theme}> {prop.children}</ThemeProvider>;
};

export default AppThemeProvider;
