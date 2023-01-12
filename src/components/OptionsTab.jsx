import { Box, Tabs, tabsClasses, Tab, Container, Button } from "@mui/material";
import { useState } from "react";
import { FaFilter } from "react-icons/fa";
import { locationsTab } from "../data/mock-data";

const OptionsTab = () => {
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Container maxWidth="lg">
			<Box
				sx={{
					display: "flex",
					flewGrow: 1,
					px: { xs: 0, md: 2 },
					alignItems: "center",
					mt: 2,
					mb: 2,
				}}
			>
				<Tabs
					value={value}
					onChange={handleChange}
					variant="scrollable"
					scrollButtons
					sx={{
						[`& .${tabsClasses.scrollButtons}`]: {
							"&.Mui-disabled": { opacity: 0.3 },
						},
					}}
				>
					{locationsTab.map((tab) => {
						return <Tab key={tab.id} label={tab.label} icon={tab.icon} />;
					})}
				</Tabs>
				<Button
					sx={{
						display: { xs: "none", sm: "block" },
						border: "1px solid #ddd",
						py: 1,
						borderRadius: 2,
						minWidth: 90,
					}}
				>
					<FaFilter /> Filters
				</Button>
			</Box>
		</Container>
	);
};

export default OptionsTab;
