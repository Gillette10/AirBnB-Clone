import { Box, Stack, Button, Link, Paper } from "@mui/material";
import { BsPersonCircle } from "react-icons/bs";
import { FiMenu, FiGlobe } from "react-icons/fi";
import { grey } from "@mui/material/colors";
import { flexCenter } from "../themes/commonStyles";

const preventDefault = (event) => event.preventDefault();

const ProfileSetting = () => {
	return (
		<Box onClick={preventDefault} sx={flexCenter}>
			<Link
				href="#"
				underline="none"
				sx={{
					fontSize: {
						md: "15px",
						xs: "12px",
					},
					fontWeight: "bold",
					p: 1,
					pl: 2,
					pr: 2,
					"&:hover": {
						bgcolor: (theme) => theme.palette.primary.other,
						borderRadius: 20,
					},
				}}
			>
				Airbnb your home
			</Link>
			<Stack>
				<Button
					sx={{
						p: 1,
						borderRadius: 30,
						"&:hover": {
							bgcolor: (theme) => theme.palette.primary.other,
						},
					}}
				>
					<FiGlobe size={17} color={grey[900]} />
				</Button>
				<Button
					sx={{
						borderRadius: 10,
						border: "1px solid #ddd",
						p: {
							md: 1,
							sx: 0.4,
						},
						"&:hover": { boxShadow: "-2px 6px 17px -8px rgba(0,0,0,0.38)" },
						cursor: "pointer",
					}}
				>
					<Stack
						sx={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<FiMenu size={17} />
						<BsPersonCircle size={28} />
					</Stack>
				</Button>
			</Stack>

			<Paper
				sx={{
					borderRadius: 20,
					border: "1px solid #ddd",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			></Paper>
		</Box>
	);
};

export default ProfileSetting;
