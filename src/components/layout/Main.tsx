import { Box, Divider, Flex, Image, Spacer, Text } from "@chakra-ui/react";
import SectionFour from "../sections/SectionFour";
import SectionThree from "../sections/sectionThree";
import SectionTwo from "../sections/SectionTwo";
import SectionOne from "../sections/setionOne";

const Main = () => {
	return (
		<Box>
			<SectionOne />
			<SectionTwo />
			<SectionThree />
			<SectionFour />
		</Box>
	);
};

export default Main;
