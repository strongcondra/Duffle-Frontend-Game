import './css/ToS.scss';

//Component Imports
import Background from '../components/Background';
import Header from '../components/Header';
import Navigation from '../components/Navigation';

//Image imports
import img_logo from '../images/logo-with-text.svg';

export default function TermsOfService() {
	return (
		<div>
			<Background />
			<Header title="Terms of Services"/>
			<Navigation />

			<main className="tos">
				<div className="container-fluid max-width-1920">
					<div className="row">
						<div className="col-12 col-lg-7 text-container">
							<h4>TERMS OF SERVICE</h4>
							<p>Please read the terms of this site carefully before accessing or using the website. By using or accessing the website, you agree to be bound to the following terms.</p>

							<h4>Minimum Age Requirement:</h4>
							<p>In order to be eligible to play on RustCafe.com you must be 18 years of age or older. This website is only offered and available to users who are 18 years of age or older. You must also be of legal age to form a binding contract with the RustCafe.</p>

							<h4>Consent to electronic communication:</h4>
							<p>You agree that any communications such as site wide announcements, admin messages, and site communication to the user are considered to be part of the website and you will not be able to opt-out of any in site messages that may appear when accessing or using the website.</p>

							<h4>Agreements:</h4>
							<p>By using this website, you agree that you are of legal age to form a binding contract with the company (RustCafe), meet all of the foregoing eligibility requirements, and comply with all the terms and conditions in the Terms of Service. By accessing and using this site, you confirm that you agree to the Terms of Service. We may revise the Terms of Service in the future, all further changes are effective immediately when we post them, and apply to all access and further use of the website.</p>

							<h4>Responsibility of the user:</h4>
							<p>By using this site you are ensuring that all users on your local connection accessing the site are aware of these terms and comply with them without reservation. You agree to sign in and share your trading information through Steam® which is provided by Valve Corp. You agree that information is both current and correct. You agree that all information you provide can be used by us in accordance with Valve Corps privacy policy. You are solely responsible for managing both your account and password and keeping your credentials confidential. You are also accountable for restricting your account from others. You agree that you are responsible for all activities that occur on your account. If you believe your password has become compromised or a third party has access to your account, reset your account and create a new one, or clear your API key found on Steam®. You agree not to allow a third party to use or access your account. You must treat all of your information as confidential, you cannot disclose your information with any other person or entity. You agree to notify us immediately if any unauthorized access to this website is used by your account. It is your responsibility to be careful when accessing your account through public/shared computers. You can use the “logout” feature found by clicking your name in the top right corner which will bring you to your profile page. It is strictly forbidden to use multiple accounts on this site and we reserve the right to ban any users who are found to have multiple accounts.We reserve the right to terminate, suspend, or disable any user, for any reason, at any time. RustySaloon.com is not responsible for losses due to connectivity issues.</p>

							<h4>Third-Party Intellectual Property Rights:</h4>
							<p>Steam® is a registered trademark of Valve Corporation. The Company is not endorsed by nor affiliated in any way with Valve Corp, Rust, Steam®, or any other trademarks of Valve Corp. Valve. The Valve logo are trademarks of Valve Corp. All other trademarks such as the Rust logo, Rust, Rust Skins, and all other trademarks are all owned by Facepunch Studios.</p>

							<h4>Purpose of Website and Pricing:</h4>
							<p>This website is for entertainment purposes only. Our sole purpose is to be able to obtain virtual items by playing different game modes featured on the website. Increasing your site balance can be done by depositing more skins. Our site offers no way to withdraw real money. We do not provide opportunities to win real money. The items prices on our site do not represent any real world value</p>
						</div>
						<div className="col-12 col-lg-5 logo-container">
							<img src={img_logo} className="logo" />
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
