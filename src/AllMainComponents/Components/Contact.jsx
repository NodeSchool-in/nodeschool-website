import ContactForm from "../CommonComponent/ContactForm";
import { useEffect } from "react"
import SeoHelmet from "../CommonComponent/SeoHelmet";

function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <SeoHelmet 
                title="Contact Us | Nodeschool.in" 
                desc="contact us for any queries and if you want to register our course"
                href="https://nodeschool.in/contact" />
            <ContactForm />
        </>

    )
}

export default Contact;