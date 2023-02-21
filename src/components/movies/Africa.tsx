import { Box, Image, List, ListItem, Stack, Text } from "@chakra-ui/react";
import { useFetch } from "../Hooks/useFetch";
import Slicker from "../widgets/slicker";
import dynamic from "next/dynamic";
import { settings } from "../Types/types";

const Slider = dynamic(() => import("react-slick").then((m) => m.default), {
	ssr: false,
});

const url = "http://www.omdbapi.com/?i=tt3896198&apikey=e5ecb81a&s=africa";
const Africa = () => {
	const { data: Africa } = useFetch({ url });

	return (
		<Box blur={"lg"}>
			<Stack spacing={3}>
				<Slicker>
					<Slider {...settings}>
						<Text fontSize={20}>Africa</Text>
						{Africa.map((movie) => (
							<>
								<Image src={movie.Poster} height={150} width={200} />
								<Text px="10" fontSize={15}>
									{movie.Title}
								</Text>
							</>
						))}
					</Slider>
				</Slicker>
			</Stack>
		</Box>
	);
};

export default Africa;
