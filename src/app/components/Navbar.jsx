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
					className="planeRight"
				/>{" "}
				Welcome in Aviation Memory Game
				<Image
					src="images/plane.svg"
					width={30}
					height={30}
					alt="aircraft icon"
				/>
			</h1>
		</div>
	);
};
export default Navbar;
