import { Box, Link, Paper, Stack, Typography, Container } from "@mui/material";

import { CgCopyright } from "react-icons/cg";
import { BsCurrencyDollar } from "react-icons/bs";
import { FiGlobe } from "react-icons/fi";
import { MdKeyboardArrowUp } from "react-icons/md";

import { flexCenter, link } from "../themes/commonStyles";

const DesktopFooter = () => {
	return (
		<Box sx={{ borderTop: "1px solid #ddd", p: 2 }}>
			<Container maxWidth="xl">
				<Paper>
					<Stack
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
						}}
					>
						<Box sx={flexCenter}>
							<CgCopyright />
							<Typography>2023 Airbnb, Inc.</Typography>
							<Link href="#" sx={link}>
								Terms
							</Link>
							<Link href="#" sx={link}>
								Sitemap
							</Link>
							<Link href="#" sx={link}>
								Privacy
							</Link>
							<Link href="#" sx={link}>
								Your Privacy Choices
							</Link>
							<Link href="#" sx={link}>
								Destinations
							</Link>
						</Box>

						<Box sx={flexCenter}>
							<FiGlobe />
							<Typography>English (CA)</Typography>
						</Box>
						<Box sx={flexCenter}>
							<BsCurrencyDollar />
							<Typography>CAD</Typography>
						</Box>
						<Box sx={{ ...flexCenter, cursor: "pointer" }}>
							<Typography>Support & resources</Typography>
							<MdKeyboardArrowUp size={24} />
						</Box>
					</Stack>
				</Paper>
			</Container>
		</Box>
	);
};

export default DesktopFooter;
