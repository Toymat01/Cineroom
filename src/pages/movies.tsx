import { useFetch } from "@/components/Hooks/useFetch";
import Footer from "@/components/layout/Footer";
import Action from "@/components/movies/Action";
import Africa from "@/components/movies/Africa";
import Anime from "@/components/movies/Anime";
import Crime from "@/components/movies/Crime";
import {
	Box,
	Button,
	Flex,
	Heading,
	Spacer,
	Stack,
	Text,
} from "@chakra-ui/react";
import Link from "next/link";

const url = "http://www.omdbapi.com/?i=tt3896198&apikey=e5ecb81a&s=africa";

const Movies = () => {
	const { data, loading, error } = useFetch({ url });
	return (
		<Box bgColor={"#181818"} color="white">
			<Flex alignItems={"center"} bgColor={"#000"} p={3}>
				<Text
					color={"Red"}
					fontSize={{ lg: "50px", md: "40px", sm: "35px" }}
					fontWeight={"bold"}
				>
					CINEROOM
				</Text>
				<Spacer />
				<Button colorScheme={"red"} onClick={() => {}}>
					Sign up
				</Button>
			</Flex>
			<Box p="5">
				<Heading>Only on Cineroom</Heading>
				<Text my="5">
					Cineroom is the home of amazing original programming that you can’t
					<br />
					find anywhere else. Movies, TV shows, specials and more, all tailored
					<br />
					specifically to you.
				</Text>

				<Stack mt="10" p={5} spacing={10}>
					{loading && <Text>Loading...</Text>}
					{!loading && !error && (
						<Stack>
							<Crime />
							<Anime />
							<Action />
							<Africa />
						</Stack>
					)}
					{error && (
						<Text color={"red"} textAlign="center" fontSize={30}>
							{"Opps!!! an error occured while fetching data."}
						</Text>
					)}
				</Stack>
				<Stack textAlign={"center"} spacing={4}>
					<Text fontWeight={"bold"} fontSize={25}>
						There's even more to watch
					</Text>
					<Text fontWeight={"md"}>
						Cineroom has an extensive library of feature films, documentaries,
						TV <br />
						shows, anime, award-winning Cineroom originals, and more. Watch as
						<br />
						much as you want, anytime you want.
					</Text>
					<Box>
						<Button
							colorScheme={"red"}
							width={{ lg: "15%", md: "15%", sm: "100%" }}
							height={"50"}
						>
							Join Now
						</Button>
					</Box>
					<Link href="">
						Read about Cineroom TV shows and movies and watch bonus videos on
						more.com.
					</Link>
				</Stack>
				<Box mt="20">
					<Footer />
				</Box>
			</Box>
		</Box>
	);
};

export default Movies;
