"use client";

import { useState, useEffect } from "react";
import "./Board.css";
import Image from "next/image";

const boardData = [
	{
		path: "/images/aircraft1.jpg",
	},
	{
		path: "/images/aircraft10.jpg",
	},
	{
		path: "/images/aircraft3.jpg",
	},
	{
		path: "/images/aircraft14.jpg",
	},
	{
		path: "/images/aircraft5.jpg",
	},
	{
		path: "/images/aircraft6.jpg",
	},
	{
		path: "/images/aircraft7.jpg",
	},
	{
		path: "/images/aircraft9.jpg",
	},
];

function Board() {
	const [board, setBoard] = useState([]);
	const [flippedCards, setFlippedCards] = useState([]);
	const [paired, setPairedCards] = useState([]);
	const [moves, setMoves] = useState(0);
	const [gameOver, setGameOver] = useState(false);
	const [loading, setLoading] = useState(true);
	const [previousResult, setPreviousResult] = useState("");
	useEffect(() => {
		initialize();
	}, []);

	useEffect(() => {
		if (paired.length == 16) {
			if (!previousResult || moves < previousResult) {
				setPreviousResult(moves);
			}
			setGameOver(true);
		}
	}, [moves]);

	const initialize = () => {
		shuffle();
		setGameOver(false);
		setFlippedCards([]);
		setPairedCards([]);
		setMoves(0);
	};
	const shuffle = () => {
		const shuffledCards = [...boardData, ...boardData]
			.sort(() => Math.random() - 0.5)
			.map((v) => v.path);

		setBoard(shuffledCards);
		setLoading(false);
	};

	const updateActiveCards = (i) => {
		if (!flippedCards.includes(i)) {
			if (flippedCards.length == 1) {
				const firstIdx = flippedCards[0];
				const secondIdx = i;
				if (board[firstIdx] == board[secondIdx]) {
					setPairedCards((prev) => [...prev, firstIdx, secondIdx]);
				}

				setFlippedCards([...flippedCards, i]);
			} else if (flippedCards.length == 2) {
				setFlippedCards([i]);
			} else {
				setFlippedCards([...flippedCards, i]);
			}

			setMoves((v) => v + 1);
		}
	};

	return (
		<div className="container">
			<div className="containerShadow"></div>
			<div className="board">
				{loading ? (
					<Image
						src={"/images/loader.svg"}
						width={120}
						height={120}
						className="loader"
						alt="loading icon"
					/>
				) : (
					board.map((data, i) => {
						const flipped = flippedCards.includes(i) ? true : false;
						const matched = paired.includes(i) ? true : false;
						return (
							<div
								onClick={() => {
									!flipped ? updateActiveCards(i) : null;
								}}
								key={i}
								className={`card ${flipped || matched ? "active" : ""}`}>
								<div className="front">
									<Image
										src={data}
										width={100}
										height={100}
										alt="game card"
										priority
										className="card-image"
									/>
								</div>
								<div className="back"></div>
							</div>
						);
					})
				)}
			</div>
			<div className="gameInfo">
				<div className="gameInfoTop">
					<p>{`Moves: ${moves}`}</p>
					<p>{gameOver ? "Congrats You Win! 🎉" : ""}</p>
					{previousResult ? <p>Best result: {previousResult}</p> : ""}
				</div>

				<button onClick={() => initialize()} className="reset-btn">
					{gameOver ? "Play Again!" : " Restart Game!"}
				</button>
			</div>
		</div>
	);
}
export default Board;
