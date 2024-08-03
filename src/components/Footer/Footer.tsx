// Importing Packages and Components //
import Link from "next/link"
import NewsLetterForm from "@/components/Footer/NewsLetterForm"

// Importing Types //
import { ClassNameType } from "@/common/types/reactTypes"

// Importing Constants and Icons //
import { links } from "@/common/constants/websiteData"
import { EmailIcon, FacebookIcon, InstagramIcon, TwitterIcon, LinkedinIcon, PinterestIcon, QuoraIcon, DiscordIcon, YoutubeIcon } from "@/components/Icons/Icons"

// Exporting Default function Footer //
export default async function Footer({ className, initialMessage }: { className?: ClassNameType, initialMessage?: string }) {
    // Getting Current Date //
    const currentYear = new Date().getFullYear().toString()

    const handleNewsLetterFormSubmit = async (email: string): Promise<{ text: string; error: boolean }> => {
        // Declaring Server Function //
        "use server"

        // Check if email id passed correctly then store in database or throw error //
        if (email.length < 10 || email.length > 60 || (/@.*\./).test(email)) {
            console.log(email)
            ////////////////////// Write Code to save in Database //////////////////////
            ////////////////////// Write Code to save in Database //////////////////////
            ////////////////////// Write Code to save in Database //////////////////////
            return { text: "Subscribed Succesfully", error: false }
            ////////////////////// Write Code to save in Database //////////////////////
            ////////////////////// Write Code to save in Database //////////////////////
        } else { return { text: "Malformed Email Address", error: true } }
    }

    // Returning JSX //
    return (
        <footer className={className} style={{ boxShadow: "0 -1px 3px 0 rgba(0, 0, 0, .15)" }}>
            {/* Top Footer Starts Here */}
            <div className="grid justify-items-stretch items-start md:grid-cols-4 lg:grid-cols-3 gap-8 md:gap-2 border-b border-border pb-10">
                <div className="flex flex-col gap-3">
                    <h3 className="font-bold text-primary text-xl md:text-base lg:text-xl">About Us</h3>
                    <div className="flex flex-col gap-1 md:text-sm lg:text-base">
                        <Link href="/" className="w-fit font-semibold text-text-light hover:text-text transition duration-300">SkillShetra</Link>
                        <Link href="/trannings" className="w-fit font-semibold text-text-light hover:text-text transition duration-300">Trannings</Link>
                        <Link href="/contentintergrity" className="w-fit font-semibold text-text-light hover:text-text transition duration-300">Content Intergrity</Link>
                        <Link href="/team" className="w-fit font-semibold text-text-light hover:text-text transition duration-300">Our Team</Link>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <h3 className="font-bold text-primary text-xl md:text-base lg:text-xl">Support</h3>
                    <div className="flex flex-col gap-1 md:text-sm lg:text-base">
                        <Link href="/contactus" className="w-fit font-semibold text-text-light hover:text-text transition duration-300">Contact Us</Link>
                        <Link href="/termsofuse" className="w-fit font-semibold text-text-light hover:text-text transition duration-300">Terms of Use</Link>
                        <Link href="/privacypolicy" className="w-fit font-semibold text-text-light hover:text-text transition duration-300">Privacy Policy</Link>
                        <Link href="/sitemap" className="w-fit font-semibold text-text-light hover:text-text transition duration-300">Sitemap</Link>
                    </div>
                </div>
                <NewsLetterForm handleNewsLetterFormSubmit={handleNewsLetterFormSubmit} />
            </div>
            {/* Top Footer Ends Here */}

            {/* Bottom Footer Starts Here */}
            <div className="flex flex-col-reverse sm:flex-row justify-center sm:justify-between items-center gap-2">
                <div className="font-semibold text-text-light sm:text-xs md:text-base">&copy; Copyright {currentYear} Skillshetra</div>
                <div className="flex justify-center items-center gap-3">
                    <a href={links.mail} target="_blank" rel="noopener noreferrer"><EmailIcon width={22} height={22} /></a>
                    <a href={links.facebook} target="_blank" rel="noopener noreferrer"><FacebookIcon width={22} height={22} /></a>
                    <a href={links.instagram} target="_blank" rel="noopener noreferrer"><InstagramIcon width={22} height={22} /></a>
                    <a href={links.twitter} target="_blank" rel="noopener noreferrer"><TwitterIcon width={22} height={22} /></a>
                    <a href={links.linkedin} target="_blank" rel="noopener noreferrer"><LinkedinIcon width={22} height={22} /></a>
                    <a href={links.pinterest} target="_blank" rel="noopener noreferrer"><PinterestIcon width={22} height={22} /></a>
                    <a href={links.quora} target="_blank" rel="noopener noreferrer"><QuoraIcon width={22} height={22} /></a>
                    <a href={links.discord} target="_blank" rel="noopener noreferrer"><DiscordIcon width={22} height={22} /></a>
                    <a href={links.youtube} target="_blank" rel="noopener noreferrer"><YoutubeIcon width={22} height={22} /></a>
                </div>
            </div>
            {/* Bottom Footer Starts Here */}
        </footer>
    )
}