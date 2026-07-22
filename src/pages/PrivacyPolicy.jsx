import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function PrivacyPolicy() {
	const privacyPolicy = [
		{
			number: 1,
			heading: "Information We Collect",
			policy:
				"MindLift only collects the information necessary to provide and improve our services. This may include your name, email address, account information, reports you create, messages you submit, and other information you voluntarily provide while using the platform.",
		},
		{
			number: 2,
			heading: "How Your Information Is Used",
			policy:
				"Your information is used solely to provide our services, personalize your experience, improve the platform, respond to your requests, and maintain the security and reliability of MindLift.",
		},
		{
			number: 3,
			heading: "Your Privacy Matters",
			policy:
				"Your personal information, reports, and conversations are treated as private. We do not read, share, or disclose your information except when required by law or when necessary to protect the safety and security of our users and services.",
		},
		{
			number: 4,
			heading: "No Selling of Personal Data",
			policy:
				"MindLift does not sell, rent, lease, or trade your personal information with advertisers, marketers, or any third party for commercial purposes.",
		},
		{
			number: 5,
			heading: "Secure Data Storage",
			policy:
				"We use industry-standard security measures to protect your information during transmission and while it is stored. Although no system can guarantee absolute security, we continuously work to safeguard your data from unauthorized access, loss, or misuse.",
		},
		{
			number: 6,
			heading: "Private Requests",
			policy:
				"Any reports, journal entries, feedback, or requests you submit through MindLift are transmitted securely and handled confidentially. We take reasonable steps to ensure that your interactions remain private.",
		},
		{
			number: 7,
			heading: "Third-Party Services",
			policy:
				"MindLift may use trusted third-party services for functions such as hosting, authentication, analytics, or email delivery. These providers are only given the information necessary to perform their services and are expected to protect your data.",
		},
		{
			number: 8,
			heading: "Cookies and Similar Technologies",
			policy:
				"We may use cookies or similar technologies to keep you signed in, remember your preferences, improve performance, and better understand how our platform is used. You can manage cookie preferences through your browser settings.",
		},
		{
			number: 9,
			heading: "Your Rights",
			policy:
				"You have the right to access, update, correct, or delete your personal information where applicable. You may also request a copy of your data or close your account by contacting us.",
		},
		{
			number: 10,
			heading: "Account Security",
			policy:
				"You are responsible for keeping your account credentials secure. We recommend not sharing your login information with anyone.",
		},
		{
			number: 11,
			heading: "Changes to This Privacy Policy",
			policy:
				"We may update this Privacy Policy from time to time to reflect changes in our services, legal requirements, or security practices. Significant changes will be communicated through the application or by other appropriate means.",
		},
		{
			number: 12,
			heading: "Contact Us",
			policy:
				"If you have any questions, concerns, or requests regarding this Privacy Policy or how your information is handled, please contact the MindLift support team through the contact options available within the application or on our website.",
		},
	];
	return (
		<>
			<main>
				<Navbar />
				<div className="w-full px-10 lg:px-40 pt-10">
					<div>
						<div className="mb-8">
							<h1 className="text-4xl font-bold mb-1">Privacy Policy</h1>
							<p className="text-gray-700">
								Learn how MindLift collects, uses, and protects your
								information.
							</p>
						</div>
						<div className="border border-gray-300 shadow-xl rounded-xl p-8 mb-30">
							<div className="mb-5">
								<h1 className="text-3xl font-bold mb-3">
									MindLift Privacy Policy
								</h1>
								<p className="text-gray-700">
									This policy has been compiled to clarify all essential
									information about our handling of your personal data and your
									corresponding rights ("Privacy Policy").
								</p>
							</div>
							{privacyPolicy.map((object) => {
								return (
									<div className="mb-5">
										<div className="text-2xl font-semibold">
											<span>{object.number}. </span>
											<span>{object.heading}</span>
										</div>
										<div>
											<p className="text-gray-700">{object.policy}</p>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}

export default PrivacyPolicy;
