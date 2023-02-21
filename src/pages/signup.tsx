import Footer from "@/components/layout/Footer";
import {
	Box,
	Button,
	Divider,
	Flex,
	IconButton,
	Spacer,
	Text,
} from "@chakra-ui/react";
import StepOne from "@/components/SignUp/stepOne";
import { useState } from "react";
import StepTwo from "@/components/SignUp/stepTwo";
import StepThree from "@/components/SignUp/stepThree";
import StepFour from "@/components/SignUp/stepFour";
import { ArrowBackIcon } from "@chakra-ui/icons";

const Signup = () => {
	const [step, setStep] = useState(1);

	const handleStep = () => {
		setStep((prev) => prev + 1);
	};
	return (
		<Box height={700}>
			<Box>
				<Flex p="4" alignItems={"center"}>
					<Text
						color={"red"}
						fontWeight="bold"
						fontSize={{ lg: "50", md: "40", sm: 30 }}
						fontFamily="heading"
					>
						CINEROOM
					</Text>
					<Spacer />
					<Button variant={"ghost"} fontWeight="bold" fontSize={20}>
						Sign in
					</Button>
				</Flex>
				<Divider />
				<IconButton
					icon={<ArrowBackIcon />}
					onClick={() => {
						if (step >= 1) {
							setStep((prev) => prev - 1);
						} else {
							setStep(1);
						}
					}}
					aria-label="return prev step"
					color={"red"}
					variant="unstyled"
					mt={1}
				/>
				<Box p="5" mx={{ lg: "20", md: "0", sm: "0" }}>
					{step === 4 ? <StepFour /> : null}
				</Box>
				<Box
					display={"flex"}
					justifyContent="center"
					alignItems={"center"}
					py="20"
				>
					{step === 1 ? <StepOne handleStep={handleStep} /> : null}
					{step === 2 ? <StepTwo handleStep={handleStep} /> : null}
					{step === 3 ? <StepThree handleStep={handleStep} /> : null}
				</Box>
			</Box>
			<Box bg={"gray.100"}>
				<Footer />
			</Box>
		</Box>
	);
};

export default Signup;
