import { Paper, InputBase, IconButton } from "@mui/material";
import { FaSearch } from "react-icons/fa";
import { VscSettings } from "react-icons/vsc";

const MobileSearch = () => {
	return (
		<Paper
			component="form"
			sx={{
				p: "2px 4px",
				display: "flex",
				justifyContent: "space-between",
				flex: 1,
				border: "1px solid #ccc",
				borderRadius: 20,
			}}
		>
			<IconButton sx={{ p: "10px" }}>
				<FaSearch />
			</IconButton>
			<InputBase
				placeholder="Anywhere"
				helperText="Any week . Add guests"
				sx={{ ml: 1, flex: 1 }}
			/>
			<IconButton type="submit" sx={{ p: "10px" }}>
				<VscSettings />
			</IconButton>
		</Paper>
	);
};

export default MobileSearch;
