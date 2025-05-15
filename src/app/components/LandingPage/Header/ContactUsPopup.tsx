import React, { useState } from "react";
import emailjs from "emailjs-com";
import { X } from "lucide-react";
import toast from "react-hot-toast";

interface IPROPS {
    setOpen: (props: any) => void;
}
const ContactBox: React.FC<IPROPS> = ({ setOpen }) => {
    // State for form inputs
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    // State for submission message
    const [feedbackMessage, setFeedbackMessage] = useState("");

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Define your emailjs parameters
        const emailParams = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
        };

        const serviceId = "service_xn3ipw7";
        const templateId = "template_furba5e";
        const userId = "rUyvB3rw4-VPF4GAg";

        // Use your EmailJS service ID, template ID, and user ID here
        emailjs.send(serviceId, templateId, emailParams, userId).then(
            (response) => {
                console.log("SUCCESS!", response.status, response.text);
                toast.success(
                    "Message sent successfully. We'll get back to you shortly."
                );

                setOpen(false);
            },
            (err) => {
                console.error("FAILED...", err);
                setFeedbackMessage(
                    "Failed to send message. Please try again later."
                );
            }
        );

        // Reset form
        setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
        });
    };

    return (
        <div className="flex items-center justify-center  ">
            <div className="bg-white relative  p-6 rounded-lg   w-96">
                {/* Close Button */}
                <X
                    onClick={() => setOpen(false)}
                    className="absolute -top-2 cursor-pointer right-0  focus:outline-none"
                    aria-label="Close"
                    size={20}
                ></X>

                {/* Title and Description */}
                <h2 className="text-center text-mob-heading  font-bold mb-6">
                    Get Connected With Us!
                </h2>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name*"
                        className="w-full p-2 text-black  border rounded-md placeholder:text-sm"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email*"
                        className="w-full p-2 text-black  border rounded-md placeholder:text-sm"
                        required
                    />
                    <input
                        type="number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your Phone Number*"
                        className="w-full p-2 text-black border rounded-md placeholder:text-sm"
                        required
                        minLength={10} // Minimum length validation (for non-browser validation)
                        maxLength={10} // Maximum length validation (for non-browser validation)
                        pattern="\d{10}" // Pattern validation to ensure exactly 10 digits
                        title="Phone number should be 10 digits"
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Message"
                        className="w-full p-2 text-black  border rounded-md placeholder:text-sm"
                    />
                    <button
                        type="submit"
                        className="w-full py-2 bg-red font-semibold  hover:bg-red text-white rounded-md flex items-center justify-center"
                    >
                        <span className="mr-2 font-semibold">✉</span> Submit
                    </button>
                </form>

                {/* Success or error message */}
                {feedbackMessage && (
                    <p className="mt-4 text-center text-white">
                        {feedbackMessage}
                    </p>
                )}
            </div>
        </div>
    );
};

export default ContactBox;
