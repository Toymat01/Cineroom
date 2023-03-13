import { ArrowUpDownIcon, CheckIcon } from "@chakra-ui/icons";
import {
	Box,
	Flex,
	Stack,
	Text,
	Tabs,
	TabList,
	TabPanels,
	Tab,
	Table,
	Tbody,
	Tr,
	Td,
	TableContainer,
	Button,
} from "@chakra-ui/react";
import { useState } from "react";

const StepFour = () => {
	const [tabOne, setTabOne] = useState(false);
	const [tabTwo, setTabTwo] = useState(false);
	const [tabThree, setTabThree] = useState(false);
	const [tabFour, setTabFour] = useState(false);

	const handleTabOne = () => {
		setTabOne(true);
		setTabTwo(false);
		setTabFour(false);
		setTabThree(false);
	};
	const handleTabTwo = () => {
		setTabOne(false);
		setTabTwo(true);
		setTabFour(false);
		setTabThree(false);
	};
	const handleTabThree = () => {
		setTabOne(false);
		setTabTwo(false);
		setTabFour(false);
		setTabThree(true);
	};
	const handleTabFour = () => {
		setTabOne(false);
		setTabTwo(false);
		setTabFour(true);
		setTabThree(false);
	};

	return (
		<Stack spacing={3}>
			<Text>STEP 4 OF 4</Text>
			<Text fontSize={"2xl"} fontWeight="bold">
				Choose the plan that is right for you.
			</Text>
			<Flex alignItems={"center"} fontSize={18}>
				<CheckIcon color={"red"} mr="2" />
				<Text>Watch all you want. Ad-free.</Text>
			</Flex>
			<Flex alignItems={"center"} fontSize={18}>
				<CheckIcon color={"red"} mr="2" />
				<Text>Recommendations just for you.</Text>
			</Flex>
			<Flex alignItems={"center"} fontSize={18}>
				<CheckIcon color={"red"} mr="2" />
				<Text>Change or cancel your plan anytime.</Text>
			</Flex>
			<Box>
				<Tabs align="center" variant="unstyled" orientation="vertical">
					<TabList mt={12}>
						<Tab
							bgColor={"red"}
							color={"white"}
							mt="2"
							p="5"
							fontWeight={"bold"}
							opacity={0.6}
							_selected={{ opacity: "1" }}
							onClick={handleTabOne}
						>
							Mobile
						</Tab>
						<Tab
							bgColor={"red"}
							color={"white"}
							// mb="2"
							p="5"
							fontWeight={"bold"}
							opacity={0.6}
							_selected={{ opacity: "1" }}
							onClick={handleTabTwo}
						>
							Basic
						</Tab>
						<Tab
							bgColor={"red"}
							color={"white"}
							// my="2"
							p="5"
							fontWeight={"bold"}
							opacity={0.6}
							_selected={{ opacity: "1" }}
							onClick={handleTabThree}
						>
							Standard
						</Tab>
						<Tab
							bgColor={"red"}
							color={"white"}
							mb="2"
							p="5"
							fontWeight={"bold"}
							opacity={0.6}
							_selected={{ opacity: "1" }}
							onClick={handleTabFour}
						>
							Premium
						</Tab>
					</TabList>
					<TabPanels>
						<TableContainer>
							<Table size={"lg"}>
								<Tbody>
									<Tr>
										<Td fontWeight={"semibold"}>Monthly Price</Td>
										<Td fontWeight={"semibold"}>Video Quality</Td>
										<Td fontWeight={"semibold"}>Resolution</Td>
									</Tr>
									<Tr color={tabOne ? "red" : "CaptionText"}>
										<Td>$300</Td>
										<Td>Good</Td>
										<Td>480p</Td>
									</Tr>
									<Tr color={tabTwo ? "red" : "CaptionText"}>
										<Td>$500</Td>
										<Td>Good</Td>
										<Td>720p</Td>
									</Tr>
									<Tr color={tabThree ? "red" : "CaptionText"}>
										<Td>$800</Td>
										<Td>Better</Td>
										<Td>1080p</Td>
									</Tr>
									<Tr color={tabFour ? "red" : "CaptionText"}>
										<Td>$1000</Td>
										<Td>Best</Td>
										<Td>4K+ HDR</Td>
									</Tr>
								</Tbody>
							</Table>
						</TableContainer>
					</TabPanels>
				</Tabs>
			</Box>
			<Text fontSize={"xs"} mt="4" color={"gray.600"}>
				HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject
				to your internet service and device capabilities. Not all content is
				available in all resolutions. See our Terms of Use for more details.
			</Text>
			<Text fontSize={"xs"} color={"gray.600"}>
				Only people who live with you may use your account. Watch on 4 different
				devices at the same time with Premium, 2 with Standard, and 1 with Basic
				and Mobile.
			</Text>
			<Box display={"flex"} justifyContent="center" alignItems={"center"}>
				<Button colorScheme={"red"} width={"50%"} py="7" mt="10">
					NEXT
				</Button>
			</Box>
		</Stack>
	);
};

export default StepFour;
