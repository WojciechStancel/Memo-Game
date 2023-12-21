import "./Footer.css";

const currentYear = new Date().getFullYear();

const Footer = () => {
	return (
		<div className="footer">
			<p>
			Code<span className="footerText">Cr8ive</span>
			</p>
			<span>{currentYear}</span>
		</div>
	);
};
export default Footer;
