import Navbar from "./Navbar";
import Footer from "./Footer";

function Terms() {
	const termsOfService = [
		{
			number: 1,
			heading: "Acceptance of Terms",
			policy:
				"By creating an account or using MindLift, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you should discontinue use of the platform.",
		},
		{
			number: 2,
			heading: "Purpose of MindLift",
			policy:
				"MindLift is designed to support mental wellness by providing tools for self-reflection, journaling, reporting, and personal growth. It is not a substitute for professional medical, psychological, or psychiatric advice, diagnosis, or treatment.",
		},
		{
			number: 3,
			heading: "User Responsibilities",
			policy:
				"You agree to use MindLift responsibly and lawfully. You must not misuse the platform, attempt unauthorized access, interfere with its operation, or use it in any way that could harm other users or the service.",
		},
		{
			number: 4,
			heading: "Account Security",
			policy:
				"You are responsible for maintaining the confidentiality of your account credentials. Any activity that occurs under your account is your responsibility. Notify us immediately if you believe your account has been compromised.",
		},
		{
			number: 5,
			heading: "Accurate Information",
			policy:
				"You agree to provide accurate and up-to-date information when creating and maintaining your account. Providing false or misleading information may result in suspension or termination of your account.",
		},
		{
			number: 6,
			heading: "Privacy",
			policy:
				"Your use of MindLift is also governed by our Privacy Policy, which explains how we collect, use, store, and protect your information.",
		},
		{
			number: 7,
			heading: "Prohibited Conduct",
			policy:
				"You may not use MindLift to upload or share illegal, abusive, threatening, defamatory, hateful, fraudulent, or harmful content. You must also not introduce malware, spam, or attempt to exploit vulnerabilities within the platform.",
		},
		{
			number: 8,
			heading: "Intellectual Property",
			policy:
				"All branding, logos, software, designs, and content provided by MindLift remain the property of MindLift unless otherwise stated. You may not copy, modify, distribute, or reproduce any part of the platform without permission.",
		},
		{
			number: 9,
			heading: "Your Content",
			policy:
				"You retain ownership of the content you create within MindLift, including reports and journal entries. By storing your content on the platform, you grant MindLift permission to process and store it solely for the purpose of providing the service.",
		},
		{
			number: 10,
			heading: "Service Availability",
			policy:
				"While we strive to provide uninterrupted access to MindLift, we cannot guarantee that the service will always be available. Maintenance, updates, or unforeseen technical issues may occasionally affect availability.",
		},
		{
			number: 11,
			heading: "Limitation of Liability",
			policy:
				"MindLift is provided 'as is' without warranties of any kind. To the fullest extent permitted by law, MindLift and its creators are not liable for any indirect, incidental, or consequential damages arising from the use or inability to use the platform.",
		},
		{
			number: 12,
			heading: "No Medical Advice",
			policy:
				"The information, feedback, or insights provided through MindLift are for informational and self-improvement purposes only. They should not be considered professional medical or mental health advice. If you are experiencing a mental health crisis or require medical assistance, seek help from a qualified healthcare professional or your local emergency services.",
		},
		{
			number: 13,
			heading: "Account Suspension or Termination",
			policy:
				"We reserve the right to suspend or terminate accounts that violate these Terms of Service, engage in unlawful activities, or misuse the platform in a way that negatively affects other users or MindLift.",
		},
		{
			number: 14,
			heading: "Changes to the Service",
			policy:
				"MindLift may add, remove, or modify features at any time to improve the platform or comply with legal and operational requirements.",
		},
		{
			number: 15,
			heading: "Changes to These Terms",
			policy:
				"We may revise these Terms of Service from time to time. Continued use of MindLift after updated terms become effective constitutes your acceptance of the revised Terms.",
		},
		{
			number: 16,
			heading: "Governing Law",
			policy:
				"These Terms of Service shall be governed by and interpreted in accordance with the laws applicable in the jurisdiction in which MindLift operates, unless otherwise required by applicable law.",
		},
		{
			number: 17,
			heading: "Contact Information",
			policy:
				"If you have questions about these Terms of Service, you may contact the MindLift team through the contact information provided on our website or within the application.",
		},
	];
	return (
		<>
			<main>
				<Navbar />
				<div className="w-full px-10 lg:px-40 pt-10">
					<div>
						<div className="mb-8">
							<h1 className="text-4xl font-bold mb-1">Terms of Service</h1>
							<p className="text-gray-700">
								Please read these terms carefully before using MindLift.
							</p>
						</div>
						<div className="border border-gray-300 shadow-xl rounded-xl p-8 mb-30">
							<div className="mb-5">
								<h1 className="text-3xl font-bold mb-3">MindLift User Terms</h1>
								<p className="text-gray-700">
									Please read these Terms carefully as they contain important
									information about what we do and do not offer, and what you
									can and cannot do.
								</p>
							</div>
							{termsOfService.map((term) => {
								return (
									<div className="mb-5">
										<div className="text-2xl font-semibold">
											<span>{term.number}. </span>
											<span>{term.heading}</span>
										</div>
										<div>
											<p className="text-gray-700">{term.policy}</p>
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
export default Terms;
