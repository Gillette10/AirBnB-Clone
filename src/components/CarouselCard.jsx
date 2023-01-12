import { Box, Paper, Typography, Stack } from "@mui/material";

import { FaRegHeart } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Pagination } from "swiper";
import "../App.css";

const CarouselCard = ({ location }) => {
	return (
		<Box
			sx={{ position: "relative", flexGrow: 1, width: "310px" }}
			className="card"
		>
			<Paper
				elevation={0}
				sx={{
					display: "flex",
					alignItems: "center",
					height: 50,
					pl: 2,
				}}
			>
				<Box sx={{ position: "absolute", right: 20, top: 70, zIndex: 10 }}>
					<FaRegHeart size={24} color="#fff" />
				</Box>
			</Paper>

			<Swiper
				modules={[Navigation, Pagination]}
				pagination={{
					dynamicBullets: true,
				}}
				navigation={true}
			>
				{location.locationImages.map((loc) => (
					<SwiperSlide key={loc.id}>
						<img
							style={{
								height: 300,
								objectFit: "cover",
								width: "100%",
								borderRadius: 10,
							}}
							src={loc.url}
							alt={loc.id}
						/>
					</SwiperSlide>
				))}
			</Swiper>

			<Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
				<Box>
					<Typography
						component="h3"
						sx={{
							fontWeight: "bold",
							color: "black",
						}}
					>
						{location.location}
					</Typography>
					<Typography component="h4" sx={{ mr: 0, opacity: ".8" }}>
						{location.days}
					</Typography>
					<Typography component="h5" sx={{ mr: 0 }}>
						{location.price}
					</Typography>
				</Box>
				<Box>
					{location.isNew ? (
						<Box sx={{ display: "flex", alignItems: "center", gap: "3px" }}>
							<AiFillStar />
							<Typography component="h4" sx={{ mr: 1 }}>
								New
							</Typography>
						</Box>
					) : (
						<Box sx={{ display: "flex", alignItems: "center", gap: "3px" }}>
							<AiFillStar />
							{location.rating}
						</Box>
					)}
				</Box>
			</Box>
		</Box>
	);
};

export default CarouselCard;
