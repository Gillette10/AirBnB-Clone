import { Grid, Box } from "@mui/material";
import { locations as cardLocations } from "../data/mock-data";
import CarouselCard from "./CarouselCard";

const LocationCard = () => {
	return (
		<Box sx={{ mx: 2 }}>
			<Grid container rowSpacing={3} columnSpacing={3}>
				{cardLocations.map((location) => {
					return (
						<Grid
							key={location.id}
							item
							xs={12}
							sm={6}
							md={4}
							lg={3}
							sx={{
								display: "flex",
								justifyContent: "cewnter",
								alignItems: "center",
							}}
						>
							<CarouselCard location={location} />
						</Grid>
					);
				})}
			</Grid>
		</Box>
	);
};

export default LocationCard;
