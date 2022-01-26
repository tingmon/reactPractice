import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Coin() {
	const [loading, setLoading] = useState(true);
	const [coins, setCoins] = useState([]);
	const [keyword, setKeyword] = useState("");
	const [result, setResult] = useState([]);

	useEffect(() => {
		fetch(`https://api.coinpaprika.com/v1/tickers`)
			.then((response) => response.json())
			.then((json) => {
				setCoins(json);
				setLoading(false);
			});
	}, []);

	const onChange = (event) => {
		const {
			target: { value },
		} = event;
		setKeyword(value);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		setResult([]);
		coins.map((coin) => {
			const coco = coin.name.toLowerCase();
			const sysy = coin.symbol.toLowerCase();
			const kiki = keyword.toLowerCase();
			if (coco.includes(kiki) || coco === kiki || sysy.includes(kiki)) {
				setResult((prev) => [...prev, coin]);
				result.sort(function (a, b) {
					return a.rank - b.rank;
				});
			}
		});
	};
	console.log(result);
	return (
		<div>
			<h1>Cataclysmic Coin Calamity</h1>
			<br />
			{loading ? (
				<h2>Loading Catastrophe...</h2>
			) : (
				<>
					<form onSubmit={onSubmit}>
						<p>Search by Name or Symbol</p>
						<input
							onChange={onChange}
							value={keyword}
							type="text"
							placeholder="search coin"
						></input>
						<button>Search</button>
					</form>
					<p>
						--------------------------------------------------------------------------------
					</p>
					<h4>Search Result (total coins: {result.length}) </h4>
					<ul>
						{result.length !== 0 ? (
							result.map((coin) => (
								<li key={coin.id}>
									({coin.symbol}) {coin.name}: $
									{coin.quotes.USD.price.toFixed(2)} USD
								</li>
							))
						) : (
							<li>No Result</li>
						)}
					</ul>
					<p>
						--------------------------------------------------------------------------------
					</p>
					<h4>List of Coins (total coins: {coins.length})</h4>
					<ul>
						{coins.map((coin) => (
							<li key={coin.id}>
								({coin.symbol}) {coin.name}: ${coin.quotes.USD.price} USD
							</li>
						))}
					</ul>
				</>
			)}
			<br />
		</div>
	);
}

export default Coin;
