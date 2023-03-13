import Footer from "@/components/layout/Footer";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	useDisclosure,
	Box,
	Stack,
	Input,
	Checkbox,
	Flex,
	Spacer,
	Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { useEffect } from "react";
const Login = () => {
	const { isOpen, onClose, onOpen } = useDisclosure();
	useEffect(() => {
		onOpen();
	}, [onOpen]);

	return (
		<>
			<Box bgColor="black" color="white">
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
					<Modal isOpen={isOpen} onClose={onClose}>
						{/* <ModalOverlay /> */}
						<ModalContent bgColor={"rgba(0, 0, 0, 0.6)"} color="white">
							<ModalHeader px="10" fontSize="30">
								Sign in
							</ModalHeader>
							<ModalBody py={10}>
								<Stack spacing={7}>
									<Input
										variant="outline"
										placeholder="Email Address"
										aria-label="Eamil Address"
										height={20}
									/>
									<Input variant="outline" placeholder="Password" height={20} />
									<Button colorScheme={"red"}>Sign in</Button>
									<Flex>
										<Checkbox defaultChecked>Remember me</Checkbox>
										<Spacer />
										<Text>Need Help?</Text>
									</Flex>
									<Text>
										New to Cineroom? <Link href={""}>Sign up</Link>
									</Text>
								</Stack>
							</ModalBody>
						</ModalContent>
					</Modal>
				</Box>
				<Footer />
			</Box>
		</>
	);
};

export default Login;
