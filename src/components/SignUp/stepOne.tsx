import { Box, Button, Text } from "@chakra-ui/react";

type stepProp = {
	handleStep: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const StepOne = ({ handleStep }: stepProp) => {
	return (
		<Box textAlign={"center"}>
			<Text>STEP 1 OF 4</Text>
			<Text fontSize="3xl" fontWeight="bold">
				Finish setting your <br /> account
			</Text>
			<Text fontWeight={"semi-bold"}>
				Netflix is personalized for you.
				<br />
				Create a password to watch on any device at any time.
			</Text>
			<Button
				colorScheme={"red"}
				py="7"
				my="5"
				width="80%"
				onClick={handleStep}
			>
				NEXT
			</Button>
		</Box>
	);
};

export default StepOne;
