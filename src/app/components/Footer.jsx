import "./Footer.css";

let currentYear = new Date();

const Footer = () => {
	return (
		<div className="footer">
			<p>
			&copy; Code<span className="footerText">Cr8ive</span>
			</p>
			<span>{currentYear.getFullYear()}</span>
		</div>
	);
};
export default Footer;
