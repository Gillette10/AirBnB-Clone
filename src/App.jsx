import Header from "./components/Header";
import { Box, CssBaseline, Container } from "@mui/material";
import OptionsTab from "./components/OptionsTab";
import LocationCard from "./components/LocationCard";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<CssBaseline />
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					height: "100vh",
				}}
			>
				<Box>
					<Header />
					<OptionsTab />
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							flexGrow: 1,
							height: { md: 1050, sm: 730, xs: 400, lg: 500 },
							overflowY: "scroll",
						}}
					>
						<Container maxWidth="xl" sx={{ mb: 3 }}>
							<LocationCard />
						</Container>
					</Box>
					<Footer />
				</Box>
			</Box>
		</>
	);
}

export default App;
