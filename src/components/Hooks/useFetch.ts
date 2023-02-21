import { useEffect, useState } from "react";
import { Movies, urlProp } from "../Types/types";
export function useFetch({ url }: urlProp) {
	const [data, setData] = useState<Movies[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	useEffect(() => {
		fetch(url)
			.then((res) => {
				setLoading(true);
				setData([]);
				setError(null);
				return res.json();
			})
			.then((res) => {
				setData(res.Search);
				setLoading(false);
				setError(null);
			})
			.catch((err) => {
				setData([]);
				setLoading(false);
				setError(err.message);
			});
	}, [url]);

	return { data, error, loading };
}
