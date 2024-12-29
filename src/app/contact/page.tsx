"use client";

export default function Contact() {

    function submit() {
        alert("Thank you for contacting us!");
    }

    return (
        <div className="px-4 sm:px-8 py-4 flex flex-col items-center min-h-screen">
            <div className="w-full flex flex-col max-sm:items-center max-sm:text-center">
                <h1 className="text-3xl mb-4">Contact</h1>
                <div className="px-10 py-10 bg-slate-800 w-full max-w-lg rounded-2xl">
                    <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center sm:justify-between mb-2 gap-2">
                        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 ">
                            <label htmlFor="first_name">First Name</label>
                            <input className="rounded" id="first_name" type="text" />
                        </div>
                        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 ">
                            <label htmlFor="last_name">Last Name</label>
                            <input className="rounded" id="last_name" type="text" />
                        </div>
                    </div>
                    <div className="flex flex-col mb-8">
                        <label htmlFor="message">Message</label>
                        <textarea rows={4} id="message" className="text-black resize-none rounded"></textarea>
                    </div>
                    <button className="px-4 py-2 rounded-md bg-slate-700 hover:bg-slate-800" onClick={submit}>Submit</button>
                </div>
            </div>
        </div>
    )
}