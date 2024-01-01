"use client";

import { useState } from "react";
import "./Footer.css";

function getYear() {
	let currentYear = new Date().getFullYear();
	return currentYear
}

const Footer = () => {
	const [actualYear, setActualYear] = useState(getYear());
	return (
		<div className="footer">
			<p>
				&copy; Code<span className="footerText">Cr8ive</span>
			</p>
			<span>{actualYear}</span>
		</div>
	);
};
export default Footer;
