import {
	Accordion,
	Box,
	Text,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Divider,
} from "@chakra-ui/react";
import React from "react";

const SectionFour = () => {
	return (
		<Box textAlign={"center"} alignContent="center" mb={2} bg={"#000"}>
			<Text fontWeight={"bold"} fontSize="30" m="10">
				FREQUENTLY ASKED QUESTIONS
			</Text>
			<Box px="70" height={"400"} alignContent="center">
				<Accordion allowMultiple bg={"gray.800"}>
					<AccordionItem border={"none"}>
						<AccordionButton>
							<Box
								as="span"
								flex="1"
								textAlign="left"
								fontSize="20"
								fontWeight="bold"
							>
								What's is Cineroom
							</Box>
							<AccordionIcon />
						</AccordionButton>

						<AccordionPanel pb={4}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</AccordionPanel>
					</AccordionItem>
					<Divider />
					<AccordionItem border={"none"}>
						<AccordionButton>
							<Box
								as="span"
								flex="1"
								textAlign="left"
								fontSize="20"
								fontWeight="bold"
							>
								How much does Cineroom cost
							</Box>
							<AccordionIcon />
						</AccordionButton>

						<AccordionPanel pb={4}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</AccordionPanel>
					</AccordionItem>
					<Divider />
					<AccordionItem border={"none"}>
						<AccordionButton>
							<Box
								as="span"
								flex="1"
								textAlign="left"
								fontSize="20"
								fontWeight="bold"
							>
								How do i cancel
							</Box>
							<AccordionIcon />
						</AccordionButton>

						<AccordionPanel pb={4}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</AccordionPanel>
					</AccordionItem>
					<Divider />
					<AccordionItem border={"none"}>
						<AccordionButton>
							<Box
								as="span"
								flex="1"
								textAlign="left"
								fontSize="20"
								fontWeight="bold"
							>
								Where can i watch
							</Box>
							<AccordionIcon />
						</AccordionButton>

						<AccordionPanel pb={4}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</AccordionPanel>
					</AccordionItem>
					<Divider />
					<AccordionItem border={"none"}>
						<AccordionButton>
							<Box
								as="span"
								flex="1"
								textAlign="left"
								fontSize="20"
								fontWeight="bold"
							>
								Is Cineroom good for kids?
							</Box>
							<AccordionIcon />
						</AccordionButton>

						<AccordionPanel pb={4}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</AccordionPanel>
					</AccordionItem>
					<Divider />
					<AccordionItem border={"none"}>
						<AccordionButton>
							<Box
								as="span"
								flex="1"
								textAlign="left"
								fontSize="20"
								fontWeight="bold"
							>
								What can i watch on Cineroom
							</Box>
							<AccordionIcon />
						</AccordionButton>

						<AccordionPanel pb={4}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</AccordionPanel>
					</AccordionItem>
					<Divider />
				</Accordion>
			</Box>
		</Box>
	);
};

export default SectionFour;
