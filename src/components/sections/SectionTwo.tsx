import { Box, Flex, Image, Spacer, Text } from "@chakra-ui/react";

const SectionTwo = () => {
	return (
		<Box
			display={{ lg: "flex", md: "block", sm: "block" }}
			flexDirection={"row-reverse"}
			justifyContent={"center"}
			alignItems="center"
			p="10"
			mb={2}
			bg={"#000"}
		>
			<Box textAlign={"center"}>
				<Text fontSize={50} fontWeight={"bold"}>
					Download your shows to watch offline.
				</Text>
				<Text fontSize={25}>
					Save your favorites easily and always have something to watch.
				</Text>
			</Box>
			<Box position={"relative"} left={{ md: "15%", lg: "2" }}>
				<Box>
					<Image
						src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
						alt="movies"
					/>
				</Box>
				<Box
					alignItems="center"
					justifyContent={"center"}
					background=" #000"
					border="2px solid hsla(0,0%,100%,.25)"
					borderRadius=" 0.75em"
					boxShadow=" 0 0 2em 0 #000"
					display="flex"
					margin="0 auto"
					height="90"
					minWidth="15em"
					padding="0.25em 0.65em"
					width={{ lg: "50%", md: "40%", sm: "50%" }}
					left="30%"
				>
					<Box height={"100%"}>
						<Image
							src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
							alt="stranger things"
						/>
					</Box>
					<Box>
						<Text fontWeight={"bold"}>Stranger Things</Text>
						<Text color={"blue"}>Downloading...</Text>
					</Box>
					<Box
						bgImage="url(https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif)"
						backgroundSize="100%"
						display="flex"
						flexGrow="0"
						flexShrink="0"
						height="3em"
						outline=" 2px solid #000"
						outlineOffset="-2px"
						width="3em"
					></Box>
				</Box>
			</Box>
		</Box>
	);
};

export default SectionTwo;
