import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { useFetch } from "../Hooks/useFetch";
import Slicker from "../widgets/slicker";
import dynamic from "next/dynamic";
import { settings } from "../Types/types";

const Slider = dynamic(() => import("react-slick").then((m) => m.default), {
	ssr: false,
});

const url = "http://www.omdbapi.com/?i=tt3896198&apikey=e5ecb81a&s=war";
const Crime = () => {
	const { data: crimeMovies } = useFetch({ url });

	return (
		<Box>
			{crimeMovies && (
				<Stack spacing={3}>
					<Slicker>
						<Slider {...settings}>
							<Text fontSize={20}>CRIME</Text>
							{crimeMovies.map((movie) => (
								<>
									<Image src={movie.Poster} height={180} width={200} />
									<Box fontSize={13}>
										<Text px="10" fontSize={15}>
											{movie.Title}
										</Text>
									</Box>
								</>
							))}
						</Slider>
					</Slicker>
				</Stack>
			)}
		</Box>
	);
};

export default Crime;
