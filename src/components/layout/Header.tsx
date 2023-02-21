import {
	Box,
	Button,
	Flex,
	Input,
	InputGroup,
	Spacer,
	Text,
	useDisclosure,
} from "@chakra-ui/react";
import Router from "next/router";

const Header = () => {
	return (
		<Box bgColor="black" color="white" mb={2}>
			<Box
				bgImage={"../assets/netflix.jpeg"}
				width="100%"
				height="800"
				bgSize="cover"
			></Box>
			<Box
				position="absolute"
				top="0"
				left="0"
				width="100%"
				height="800"
				bgColor="rgba(0, 0, 0, 0.6)"
				z-index="1"
			>
				<Flex
					alignItems={"center"}
					padding={{ xl: "10", lg: "10", md: "5", sm: 1 }}
				>
					<Text
						color={"Red"}
						fontSize={{ lg: "50px", md: "40px", sm: "20px" }}
						fontWeight={"bold"}
					>
						CINEROOM
					</Text>
					<Spacer />
					<Button
						colorScheme={"red"}
						onClick={() => Router.push("/login")}
						py={"10px"}
					>
						Sign up
					</Button>
				</Flex>
				<Box
					color={"white"}
					padding={{ lg: "100", md: "70", sm: "20" }}
					textAlign={"center"}
					my={20}
				>
					<Text fontSize={40} fontWeight={"bold"}>
						Unlimited Movies, TV shows, and more.
					</Text>
					<Text fontSize={20} my="5">
						Watch Anywhere. Cancel anythime.
					</Text>
					<Text
						mb={2}
						fontWeight={{ lg: "bold", md: "semibold", sm: "normal" }}
					>
						Ready to watch? Enter your email to create or restart your
						membership.
					</Text>
					<InputGroup
						display={"flex"}
						justifyContent={"center"}
						alignItems={"center"}
					>
						<Input
							placeholder="Email Address"
							py="30"
							borderRadius={"none"}
							bgColor={"white"}
							color="black"
							width={{ lg: "50%", md: "50%", sm: "100%" }}
						/>
						<Button
							colorScheme={"red"}
							py="31"
							borderRadius={"none"}
							// px="19"
							onClick={() => Router.push("/signup")}
						>
							Get Started
						</Button>
					</InputGroup>
				</Box>
			</Box>
		</Box>
	);
};

export default Header;
