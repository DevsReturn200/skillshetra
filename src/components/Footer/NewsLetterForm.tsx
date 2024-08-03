// Delclaring Client Component //
"use client"

// Importing Packages and Icons //
import { FormEvent, ChangeEvent, useState } from "react"
import { NewsLetterIcon } from "@/components/Icons/Icons"

// Exporting Default function for NewsLetterForm //
export default function NewsLetterForm({ handleNewsLetterFormSubmit }: { handleNewsLetterFormSubmit: (email: string) => Promise<{ text: string; error: boolean }> }) {
    // State Variables to show error and successMessage //
    const [error, setError] = useState("")
    const [showSucessMessage, setShowSucessMessage] = useState(false);

    // Function to Submit FormData //
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        // Preventing Default and Setting Success Message to hide //
        event.preventDefault()
        setShowSucessMessage(prev => false)

        // Getting email from Formdata //
        const email = new FormData(event.target as HTMLFormElement).get('email') as string


        // If no error exists //
        if (error === "") {
            // Sending request to Server Action for getting response //
            const response: { text: string; error: boolean } = await handleNewsLetterFormSubmit(email)

            // If Error then show error //
            if (response.error) { setError(prev => response.text) }
            // If no error in backend then showSuccessMessage and hide errors
            else { setShowSucessMessage(prev => true); setError(prev => ""); ((event.target as HTMLFormElement).querySelector('input[name="email"]') as HTMLInputElement).value = ""; }
        }
    }

    // Function to handle change of input field to show realtime errors //
    async function handleInputEmailFieldChange(event: ChangeEvent<HTMLInputElement>) {
        // Setting Show Sucess Message to False and getting current value of email field and validating for errors //
        setShowSucessMessage(prev => false)
        if (event.target.value.length < 10) { setError(prev => "Email should be more than 10 characters.") }
        else if (event.target.value.length > 60) { setError(prev => "Email should be less than 60 characters.") }
        else if (!(/@.*\./).test(event.target.value)) { setError(prev => "Malformed Email Address.") }
        else { setError(prev => "") }
    }

    // Returning JSX //
    return (
        <form onSubmit={onSubmit} className="flex flex-col md:col-span-2 lg:col-span-1 items-center gap-3 px-2 py-8 xl:px-4 rounded" style={{ boxShadow: "1px 5px 15px 5px rgba(0, 0, 0, .15)" }}>
            <div className="flex w-full flex-col gap-1">
                <h3 className="flex w-full justify-center items-center gap-2 text-primary text-2xl xl:text-3xl font-bold"><NewsLetterIcon width={25} height={25} /> Newsletter</h3>
                <p className="font-semibold text-text-light text-sm md:text-xs lg:md:text-sm xl:md:text-base ">Stay up to date with our latest courses</p>
            </div>
            <div className="flex w-full flex-col gap-1">
                <div className="flex w-full">
                    <input type="text" name="email" placeholder="email" onChange={handleInputEmailFieldChange} className="w-full px-2 py-1 rounded-tl rounded-bl border-y border-l border-border outline-none" />
                    <button className="font-semibold text-sm md:text-base bg-text text-bg px-2 py-1 rounded-tr rounded-br border border-border hover:bg-[#1f2937] transition duration-300">Subscribe</button>
                </div>
                <p style={error !== "" ? { padding: "5px" } : {}} className="font-semibold text-xs text-[#ff0000] bg-[#ff000025] rounded">{error}</p>
                <p style={showSucessMessage ? { display: "block" } : { display: "none" }} className="font-semibold text-xs text-[#007bff] bg-[#007bff25] px-2 py-1 rounded">Subscribed! You&apos;ll receive all future newsletters.</p>
            </div>
        </form>
    )
}