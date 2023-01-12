import { FaAirbnb } from "react-icons/fa";
import { Typography, Box } from "@mui/material";
import { pink } from "@mui/material/colors";
import { flexCenter } from "../themes/commonStyles";

const Logo = () => {
	return (
		<Box sx={flexCenter}>
			<FaAirbnb color={pink[500]} size={40} />
			<Typography
				sx={{
					color: (theme) => theme.palette.secondary.main,
					fontSize: "20px",
					ml: "5px",
					fontWeight: "bold",
					display: {
						sm: "none",
						md: "block",
					},
				}}
			>
				airbnb
			</Typography>
		</Box>
	);
};

export default Logo;
