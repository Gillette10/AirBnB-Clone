import {
	Box,
	Typography,
	Stack,
	Paper,
	Divider,
	Button,
	Avatar,
} from "@mui/material";
import { FaSearch } from "react-icons/fa";

const choices = [
	{ id: 1, text: "Anywhere" },
	{ id: 2, text: "Any week" },
	{ id: 3, text: "Add guest", withIcon: true },
];

const LocationSearch = () => {
	return (
		<Paper
			sx={{
				borderRadius: 20,
				border: "1px solid #ddd",
				boxShadow: "1px 14px 3px -15px rgba(0,0,0,0.75)",
			}}
		>
			<Stack
				sx={{
					borderRadius: 20,
					transition: "all 0.5s ease",
					"&:hover": { boxShadow: "1px 14px 8px -15px rgba(0,0,0,0.75)" },
					cursor: "pointer",
				}}
				divider={<Divider orientation="vertical" flexItem />}
			>
				{choices.map((choice) => {
					return (
						<Button key={choice.id}>
							<Typography
								sx={{
									color: (theme) => theme.palette.text.primary,
									fontWeight: "bold",
									width: {
										sm: "60px",
										md: "100px",
									},
									whiteSpace: {
										sm: "nowrap",
									},
									overflow: {
										sm: "hidden",
									},
									textOverflow: {
										sm: "ellipsis",
									},
								}}
							>
								{choice.text}
							</Typography>
							{choice.withIcon && (
								<Box sx={{ p: "3px" }}>
									<Avatar
										sx={{
											width: 30,
											height: 30,
											bgcolor: (theme) => theme.palette.secondary.main,
										}}
									>
										<FaSearch size={13} />
									</Avatar>
								</Box>
							)}
						</Button>
					);
				})}
			</Stack>
		</Paper>
	);
};

export default LocationSearch;
