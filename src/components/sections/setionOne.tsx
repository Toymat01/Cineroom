import { Box, Flex, Image, Spacer, Text } from "@chakra-ui/react";
import React from "react";

const SetionOne = () => {
	return (
		<Box
			display={{ lg: "flex", md: "block", sm: "block" }}
			justifyContent={"center"}
			alignItems="center"
			p="10"
			mb={2}
			bg={"#000"}
		>
			<Box textAlign={"center"}>
				<Text fontSize={50} fontWeight={"bold"}>
					Enjoy on your TV.
				</Text>
				<Text fontSize={30}>
					Watch on Smart TVs, Playstation, Xbox,
					<br /> Chromecast, Apple TV, Blu-ray players, and more.
				</Text>
			</Box>
			<Spacer />
			<Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
				<Box position={"relative"} zIndex="1">
					<Image
						src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
						alt="movies"
					/>
				</Box>
				<Box
					height="100%"
					left={{ lg: "93%", md: "62%", sm: "55%" }}
					maxHeight="54%"
					maxWidth="73%"
					position="absolute"
					top={{ lg: "58%", md: "58%", sm: "60%" }}
					transform="translate(-50%,-50%)"
					width="100%"
				>
					<video
						src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
						autoPlay
						playsInline
						muted
						loop
					/>
				</Box>
			</Box>
		</Box>
	);
};

export default SetionOne;
