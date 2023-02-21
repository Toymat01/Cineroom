import { CheckIcon } from "@chakra-ui/icons";
import {
	Box,
	Button,
	Flex,
	ScaleFade,
	Stack,
	Text,
	useDisclosure,
} from "@chakra-ui/react";

type stepProp = {
	handleStep: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
const StepThree = ({ handleStep }: stepProp) => {
	return (
		<Stack spacing={4} textAlign="center" fontSize={"1xl"}>
			<Box
				width={10}
				height={10}
				border="red solid 2px"
				borderRadius={"50%"}
				display="flex"
				justifyContent={"center"}
				alignItems="center"
				margin={"0 auto"}
			>
				<CheckIcon color={"red"} boxSize={6} />
			</Box>
			<Text>STEP 3 of 4</Text>
			<Text fontSize={"3xl"} fontWeight="bold">
				Choose your plan.
			</Text>
			<Flex alignItems={"center"}>
				<CheckIcon color={"red"} mr="2" />
				<Text>
					No commitments, cancel <br /> anytime.
				</Text>
			</Flex>
			<Flex alignItems={"center"}>
				<CheckIcon color={"red"} mr="2" />
				<Text>
					Everything on Netflix for one <br /> low price.
				</Text>
			</Flex>
			<Flex alignItems={"center"}>
				<CheckIcon color={"red"} mr="2" />
				<Text>No ads and no extra fees. Ever.</Text>
			</Flex>
			<Button
				colorScheme={"red"}
				width="100%"
				py="7"
				my="5"
				onClick={handleStep}
			>
				NEXT
			</Button>
		</Stack>
	);
};

export default StepThree;
