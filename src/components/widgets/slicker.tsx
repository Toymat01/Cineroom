import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@chakra-ui/react";

interface Props extends React.PropsWithChildren<{}> {
	// other props
}
const Slicker = ({ children }: Props) => {
	return (
		<Box
			sx={{
				".slick-dots": {
					transform: "translateY(1em)",
				},
				".slick-dots li button": {
					_before: {
						transition: "0.2s",
						content: "''",
						borderRadius: "50%",
						background: "red",
					},
				},
				".slick-arrow": {
					backgroundColor: "black",
					color: "red",
					w: "30px",
					h: "50px",
					transition: "0.2s",
					_hover: {
						backgroundColor: "red",
					},
				},
				".slick-prev": {
					left: "0px",
					zIndex: 1,
					color: "red",
					_before: {
						content: '"<"',
					},
				},
				".slick-next": {
					right: "0px",
					color: "red",
					_before: {
						content: '">"',
					},
				},
			}}
		>
			{children}
		</Box>
	);
};

export default Slicker;
