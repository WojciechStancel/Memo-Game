import Image from "next/image";
import "./Navbar.css";

const Navbar = () => {
	return (
		<div className="navbar">
			<h1>
				<Image
					src="images/plane.svg"
					width={30}
					height={30}
					alt="aircraft icon"
					className="planeLeft"
				/>{" "}
				Aviation Memory Game
				<Image
					src="images/plane.svg"
					width={30}
					height={30}
					alt="aircraft icon"
					className="planeRight"
				/>
			</h1>
			<div className="icons">
				<a
					href="https://www.instagram.com/codecr8ive"
					target="_blank"
					rel="noopener">
					<Image
						src={"/images/instagram.svg"}
						width={25}
						height={25}
						alt="instagram icon"
					/>
				</a>
				<a href="https://codecr8ive.pl/" target="_blank" rel="noopener">
					<Image
						src={"/images/logo.svg"}
						width={25}
						height={25}
						alt="github icon"
					/>
				</a>
				<a
					href="https://github.com/WojciechStancel"
					target="_blank"
					rel="noopener">
					<Image
						src={"/images/github.svg"}
						width={25}
						height={25}
						alt="github icon"
					/>
				</a>

				<a
					href="https://www.facebook.com/profile.php?id=61552481912036"
					target="_blank"
					rel="noopener">
					<Image
						src={"/images/facebook.svg"}
						width={25}
						height={25}
						alt="facebook icon"
					/>
				</a>
			</div>
		</div>
	);
};
export default Navbar;
