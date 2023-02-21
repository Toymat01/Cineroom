import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
const SectionThree = () => {
	return (
		<Box
			display={"flex"}
			justifyContent={"center"}
			alignItems="center"
			mb={2}
			px="20"
			height={"300"}
			textAlign={"center"}
			bg={"#000"}
		>
			<Box>
				<Text fontSize={{ lg: 50, md: 50, sm: 30 }} fontWeight={"bold"}>
					Watch everywhere.
				</Text>
				<Text fontSize={{ sm: 20, md: 30, lg: 30 }}>
					Stream unlimited movies and TV shows on your phone, tablet, laptop,
					and TV.
				</Text>
			</Box>
		</Box>
	);
};

export default SectionThree;
