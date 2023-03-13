import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { useFetch } from "../Hooks/useFetch";
import Slicker from "../widgets/slicker";
import dynamic from "next/dynamic";
import { settings } from "../Types/types";

const Slider = dynamic(() => import("react-slick").then((m) => m.default), {
	ssr: false,
});

const url = "https://www.omdbapi.com/?i=tt3896198&apikey=e5ecb81a&s=action";
const Action = () => {
	const { data: Action } = useFetch({ url });

	return (
		<Box>
			{Action && (
				<Stack spacing={3}>
					<Slicker>
						<Slider {...settings}>
							<Text fontSize={20}>Action</Text>
							{Action.map((movie) => (
								<>
									<Image
										src={movie.Poster}
										height={150}
										width={200}
										alt="movie-banner"
									/>
									<Box fontSize={13}>
										<Text px={{ lg: "10", md: "5" }} fontSize={15}>
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

export default Action;
