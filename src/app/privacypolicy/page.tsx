// Importing Constants and Icons //
import { links } from "@/common/constants/websiteData"

// Exporting Default function for Privacy Policy //
export default function PrivacyPolicy() {
    return (
        <section className="flex flex-col gap-14 py-10">
            <h1 className="font-bold text-primary text-3xl md:text-4xl">Privacy Policy</h1>
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-3">
                    <h3 className="bg-[#e5e7eb] bg-[#e5e7eb] font-semibold text-lg lg:text-xl xl:text-2xl p-2 rounded p-2 rounded"># Introduction</h3>
                    <div className="text-justify text-text-light">Welcome to <strong className="text-primary">Skillshetra!</strong> We are committed to protecting your privacy and ensuring a safe online experience. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or engage with us in any other way. By using our website and services, you agree to the terms of this Privacy Policy.</div>
                </div>
                <div className="flex flex-col gap-3">
                    <h3 className="bg-[#e5e7eb] font-semibold text-lg lg:text-xl xl:text-2xl p-2 rounded"># Information We Collect</h3>
                    <ul className="flex flex-col gap-1 text-justify">
                        <li className="before:content-['1.'] before:text-lg before:font-semibold"><b className="pl-1">Personal Information:</b> We may collect personal information that you voluntarily provide to us, such as your name, email address, phone number, and payment details when you register for our courses or interact with us.</li>
                        <li className="before:content-['2.'] before:text-lg before:font-semibold"><b className="pl-1">Usage Data:</b> We collect information about your interactions with our website and services, including your IP address, browser type, operating system, and browsing behavior. This helps us understand how you use our site and improve your experience.</li>
                        <li className="before:content-['3.'] before:text-lg before:font-semibold"><b className="pl-1">Cookies and Tracking Technologies:</b> We use cookies and similar tracking technologies to enhance your browsing experience. Cookies are small data files stored on your device that help us remember your preferences and track your activity on our site.</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-3">
                    <h3 className="bg-[#e5e7eb] font-semibold text-lg lg:text-xl xl:text-2xl p-2 rounded"># How We Use Your Information</h3>
                    <div className="flex flex-col gap-1 text-justify">
                        <p>We use the information we collect for various purposes, including:</p>
                        <ul className="flex flex-col gap-1 text-justify">
                            <li className="before:content-['✔'] before:text-lg before:font-semibold"><b className="pl-1">To Provide and Manage Services:</b> To process your registrations, manage your courses, and provide customer support.</li>
                            <li className="before:content-['✔'] before:text-lg before:font-semibold"><b className="pl-1">To Improve Our Services:</b> To analyze usage patterns and improve the quality and functionality of our website and services.</li>
                            <li className="before:content-['✔'] before:text-lg before:font-semibold"><b className="pl-1">To Communicate with You:</b> To send you updates, newsletters, promotional materials, and other information related to our courses and services.</li>
                            <li className="before:content-['✔'] before:text-lg before:font-semibold"><b className="pl-1">To Process Payments:</b> To process transactions and handle billing and payment information securely.</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <h3 className="bg-[#e5e7eb] font-semibold text-lg lg:text-xl xl:text-2xl p-2 rounded"># Sharing Your Information</h3>
                    <div className="flex flex-col gap-1 text-justify">
                        <p>We do not sell or rent your personal information to third parties. However, we may share your information in the following circumstances:</p>
                        <ul className="flex flex-col gap-1 text-justify">
                            <li className="before:content-['✔'] before:text-lg before:font-semibold"><b className="pl-1">Service Providers:</b> We may share your information with third-party service providers who assist us in operating our website, processing payments, and providing customer support. These providers are contractually obligated to protect your information and use it only for the purposes for which it was shared.</li>
                            <li className="before:content-['✔'] before:text-lg before:font-semibold"><b className="pl-1">Legal Requirements:</b> We may disclose your information if required by law or in response to valid requests from public authorities (e.g., to comply with a subpoena or similar legal process).</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <h3 className="bg-[#e5e7eb] font-semibold text-lg lg:text-xl xl:text-2xl p-2 rounded"># Data Security</h3>
                    <div className="flex flex-col gap-1 text-justify">We implement reasonable administrative, technical, and physical measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. However, no method of transmission over the internet or electronic storage is 100% secure, so we cannot guarantee absolute security.</div>
                </div>
                <div className="flex flex-col gap-3">
                    <h3 className="bg-[#e5e7eb] font-semibold text-lg lg:text-xl xl:text-2xl p-2 rounded"># Your Rights and Choices</h3>
                    <ul className="flex flex-col gap-1 text-justify">
                        <li className="before:content-['✔'] before:text-lg before:font-semibold"><b className="pl-1">Access and Correction:</b> You have the right to access and correct your personal information held by us. You can request this by contacting us at <a href={links.mail} target="_blank" rel="noopener noreferrer" className="font-semibold">support@skillshetra.com</a>.</li>
                        <li className="before:content-['✔'] before:text-lg before:font-semibold"><b className="pl-1">Opt-Out:</b> You can opt out of receiving promotional communications from us by following the unsubscribe instructions provided in those communications.</li>
                        <li className="before:content-['✔'] before:text-lg before:font-semibold"><b className="pl-1">Cookies:</b> You can manage your cookie preferences through your browser settings. Please note that disabling cookies may affect your ability to use certain features of our website.</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-3">
                    <h3 className="bg-[#e5e7eb] font-semibold text-lg lg:text-xl xl:text-2xl p-2 rounded"># Changes to This Privacy Policy</h3>
                    <div className="text-justify">We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.</div>
                </div>
                <div className="flex flex-col gap-3">
                    <h3 className="bg-[#e5e7eb] font-semibold text-lg lg:text-xl xl:text-2xl p-2 rounded"># Contact Us</h3>
                    <div className="flex flex-col gap-1 text-justify">
                        <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at: <strong className="text-primary">Skillshetra</strong></p>
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center"><b className="inline-block min-w-24">Email:</b><a className="text-sm text-primary font-semibold" href={links.mail} target="_blank" rel="noopener noreferrer">support@skillshetra.com</a></div>
                            <div className="flex items-center"><b className="inline-block min-w-24">Facebook:</b><a className="text-sm text-primary font-semibold" href={links.facebook} target="_blank" rel="noopener noreferrer">{links.facebook.replace("https://", "")}</a></div>
                            <div className="flex items-center"><b className="inline-block min-w-24">Instagram:</b><a className="text-sm text-primary font-semibold" href={links.instagram} target="_blank" rel="noopener noreferrer">{links.instagram.replace("https://", "")}</a></div>
                            <div className="flex items-center"><b className="inline-block min-w-24">Twitter:</b><a className="text-sm text-primary font-semibold" href={links.twitter} target="_blank" rel="noopener noreferrer">{links.twitter.replace("https://", "")}</a></div>
                            <div className="flex items-center"><b className="inline-block min-w-24">LinkedIn:</b><a className="text-sm text-primary font-semibold" href={links.linkedin} target="_blank" rel="noopener noreferrer">{links.linkedin.replace("https://", "")}</a></div>
                            <div className="flex items-center"><b className="inline-block min-w-24">Pinterest:</b><a className="text-sm text-primary font-semibold" href={links.pinterest} target="_blank" rel="noopener noreferrer">{links.pinterest.replace("https://", "")}</a></div>
                            <div className="flex items-center"><b className="inline-block min-w-24">Quora:</b><a className="text-sm text-primary font-semibold" href={links.quora} target="_blank" rel="noopener noreferrer">{links.quora.replace("https://", "")}</a></div>
                            <div className="flex items-center"><b className="inline-block min-w-24">Discord:</b><a className="text-sm text-primary font-semibold" href={links.discord} target="_blank" rel="noopener noreferrer">{links.discord.replace("https://", "")}</a></div>
                            <div className="flex items-center"><b className="inline-block min-w-24">YouTube:</b><a className="text-sm text-primary font-semibold" href={links.youtube} target="_blank" rel="noopener noreferrer">{links.youtube.replace("https://", "")}</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}