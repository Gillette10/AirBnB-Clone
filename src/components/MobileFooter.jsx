import React from "react";
import { Box, Link, Paper, Stack, Typography, Container } from "@mui/material";

//React icon
import { BsSearch, BsPersonCircle } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { flexCenterColumn } from "../themes/commonStyles";

const MobileFooter = () => {
	return (
		<Box sx={{ borderTop: "1px solid #ddd", p: 2 }}>
			<Container maxWidth="sm">
				<Paper>
					<Stack
						sx={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<Box sx={flexCenterColumn}>
							<BsSearch size={24} />
							<Typography>Explore</Typography>
						</Box>
						<Box sx={flexCenterColumn}>
							<AiOutlineHeart size={24} />
							<Typography>Wishlists</Typography>
						</Box>
						<Box sx={flexCenterColumn}>
							<BsPersonCircle size={24} />
							<Typography>Log in</Typography>
						</Box>
					</Stack>
				</Paper>
			</Container>
		</Box>
	);
};

export default MobileFooter;
