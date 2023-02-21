export interface Movies {
	Title: string;
	Year: string;
	Type: string;
	imdbId: string;
	Poster: string;
}

export type urlProp = {
	url: string;
};

export const settings = {
	dot: false,
	slidesToScroll: 5,
	slidesToShow: 5,
	speed: 500,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 4,
				infinite: true,
				dots: false,
			},
		},
		{
			breakpoint: 900,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				initialSlide: 2,
			},
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			},
		},
	],
};
