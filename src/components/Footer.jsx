import { Box } from "@mui/material";

import DesktopFooter from "./DesktopFooter";
import MobileFooter from "./MobileFooter";

import { displayOnDesktop } from "../themes/commonStyles";

const Footer = () => {
	return (
		<Box>
			<Box sx={displayOnDesktop}>
				<DesktopFooter />
			</Box>
			<Box
				sx={{
					display: {
						sm: "none",
					},
					justifyContent: {
						sm: "center",
					},
				}}
			>
				<MobileFooter />
			</Box>
		</Box>
	);
};

export default Footer;
