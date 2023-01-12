import Logo from "./Logo";
import { Box, Container } from "@mui/material";
import {
	dFlex,
	displayOnDesktop,
	flexBetweenCenter,
} from "../themes/commonStyles";
import LocationSearch from "./LocationSearch";
import ProfileSetting from "./ProfileSetting";
import MobileSearch from "./MobileSearch";

const Header = () => {
	return (
		<Box
			sx={{
				...dFlex,
				minHeight: 70,
				borderBottom: "1px solid #ddd",
			}}
		>
			<Container
				sx={{
					...flexBetweenCenter,
					minHeight: 90,
					px: 4,
				}}
				maxWidth="lg"
			>
				<Box sx={displayOnDesktop}>
					<Logo />
				</Box>
				<Box sx={displayOnDesktop}>
					<LocationSearch />
				</Box>
				<Box sx={displayOnDesktop}>
					<ProfileSetting />
				</Box>
				<Box
					sx={{
						display: {
							xs: "flex",
							sm: "none",
						},
						width: "90%",
						justifyContent: {
							sm: "center",
						},
					}}
				>
					<MobileSearch />
				</Box>
			</Container>
		</Box>
	);
};

export default Header;
