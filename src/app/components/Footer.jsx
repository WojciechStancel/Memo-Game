import "./Footer.css";

const currentYear = new Date().getFullYear();

const Footer = () => {
	return (
		<div className="footer">
			All rights reserved <span>{currentYear}</span>
		</div>
	);
};
export default Footer;
