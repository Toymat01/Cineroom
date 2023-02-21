import { Box, Flex, Spacer, Text } from "@chakra-ui/react";

const Footer = () => {
	return (
		<Box height={300} px="30" color={"gray"} fontSize="13">
			<Text my={5}>Questions? Contact us</Text>
			<Flex>
				<Box>
					<Text>FAQ</Text>
					<Text>Investor Relations</Text>
					<Text>Privacy</Text>
					<Text>Speed Test</Text>
				</Box>
				<Spacer />
				<Box>
					<Text>Help Center</Text>
					<Text>Jobs</Text>
					<Text>Cookie Preferences</Text>
					<Text>Legal Notices</Text>
				</Box>
				<Spacer />
				<Box>
					<Text>Account</Text>
					<Text>Ways to watch</Text>
					<Text>Corporate Information</Text>
					<Text>Only on Cineroom</Text>
				</Box>
				<Spacer />
				<Box>
					<Text>Media Center</Text>
					<Text>Terms of use</Text>
					<Text>Contact us</Text>
				</Box>
			</Flex>
			<Text mt={5}>Cineroom, Nigeria.</Text>
		</Box>
	);
};

export default Footer;
