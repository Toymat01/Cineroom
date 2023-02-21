import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Main from "@/components/layout/Main";

import { Box } from "@chakra-ui/react";

export default function Home() {
	return (
		<Box bgColor={"#181818"} color="white">
			<Box>
				<Header />
			</Box>
			<Box>
				<Main />
			</Box>
			<Box bgColor={"#000"}>
				<Footer />
			</Box>
		</Box>
	);
}
