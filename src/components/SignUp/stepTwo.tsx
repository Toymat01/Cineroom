import {
	Box,
	Button,
	Checkbox,
	FormControl,
	Input,
	Stack,
	Text,
} from "@chakra-ui/react";

type stepProp = {
	handleStep: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
const StepTwo = ({ handleStep }: stepProp) => {
	return (
		<Stack spacing={3}>
			<Text>STEP 1 OF 4</Text>
			<Text fontWeight={"bold"} fontSize="3xl">
				Create a password to start <br /> your membership
			</Text>
			<Text my="1">
				Just a few more steps and you're done! <br />
				We hate paperwork, too.
			</Text>
			{/* <FormControl> */}
			<Input placeholder="Email address" height={70} />
			<Input placeholder="Enter Password" height={70} />
			<Checkbox>Please do not email me cineroom special offers</Checkbox>
			{/* </FormControl> */}
			<Button
				colorScheme={"red"}
				py="7"
				my="5"
				width="100%"
				onClick={handleStep}
			>
				NEXT
			</Button>
		</Stack>
	);
};

export default StepTwo;
