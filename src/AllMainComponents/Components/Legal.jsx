
import { useEffect } from "react";
import HtmlParser from "../CommonComponent/HtmlParser";
import SeoHelmet from "../CommonComponent/SeoHelmet";
function Legal({ type }) {
    const pages = {
        termscondition: `<div style="display:flex;flex-direction:column; padding:1rem; margin:5px; margin-bottom:1.5rem">
    <h2>Terms and Conditions</h2>
    <div style="font-size:0.9rem;">Last updated: Oct 07, 2023</div> <br/>
    <p style="font-weight:normal; font-size:0.9rem ">These terms and conditions outline the rules and regulations for the use of nodeschool.in Website, located at https://nodeschool.in. <br />
        By accessing this website we assume you accept these terms and conditions. Do not continue to use nodeschool.in if you do not agree to take all of the terms and conditions stated on this page. <br />
        The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.</p>
    <h3>Cookies</h3>
    <p style="font-weight:normal; font-size:0.9rem ">
        We employ the use of cookies. By accessing nodeschool.in, you agreed to use cookies in agreement with the nodeschool.in Privacy Policy.
        Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
    </p>
    <h3>License</h3>
    <p style="font-weight:normal; font-size:0.9rem ">
        Unless otherwise stated, nodeschool.in and/or its licensors own the intellectual property rights for all material on nodeschool.in. All intellectual property rights are reserved. You may access this from nodeschool.in for your own personal use subjected to restrictions set in these terms and conditions.
    </p>
    <div style="font-weight:normal;font-size:0.9rem;">You must not:</div>
    <ul style="font-weight:normal; font-size:0.9rem; margin-left:2rem;">
        <li>Republish material from nodeschool.in</li>
        <li>Sell, rent or sub-license material from nodeschool.in</li>
        <li>Reproduce, duplicate or copy material from nodeschool.in</li>
        <li>Redistribute content from nodeschool.in</li>
    </ul>
    <p style="font-weight:normal; font-size:0.9rem ">You hereby grant nodeschool.in a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your testimonials in any and all forms, formats or media.
        <br/><br/>No use of nodeschool.in's logo or other artwork will be allowed for linking absent a trademark license agreement.
    </p>
    <h3>iFrames</h3>
    <p style="font-weight:normal; font-size:0.9rem ">Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.</p>
    <h3>Content Liability</h3>
    <br/>
    <h3>Your Privacy</h3>
    <p style="font-weight:normal; font-size:0.9rem ">Please read Privacy Policy</p>
    <h3>Reservation of Rights</h3>
    <br/>
    <h3>Disclaimer</h3>
    <p style="font-weight:normal; font-size:0.9rem ">To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
     <br/>
    As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.</p>
    </div>`,
        policy: `<div style="display:flex;flex-direction:column; padding:1rem; margin:5px; margin-bottom:1.5rem">
    <h2>Privacy Policy</h2>
    <div style="font-size:0.9rem;">Last updated: Oct 07, 2023</div> <br/>
    <p style="font-weight:normal; font-size:0.9rem ">
        Courses offered by Prashant Pathak, accessible from nodeschool.in, are covered under this Privacy Policy. Hereforth we will
        be referring all of the above entity as "nodeschool.in". The document contains types of information that is collected
        and recorded by nodeschool.in and how we use it.
        <br /> If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact
        us.
        <br /> This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards
        to the information that they shared and/or collect in nodeschool.in. This policy is not applicable to any information
        collected offline or via channels other than this website.
    </p>
    <h3>Consent</h3>
    <p style="font-weight:normal; font-size:0.9rem ">
        The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear
        to you at the point we ask you to provide your personal information.
        <br /> If you contact us directly, we may receive additional information about you such as your name, email address, phone
        number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
        <br/> When you register for an Account, we may ask for your contact information, including items such as name, company
        name, address, email address, and telephone number.
    </p>
    <h3>How we use your information</h3>
    <p style="font-weight:normal; font-size:0.9rem ">
        We use the information we collect in various ways, including to:
    </p>
    <ul style="font-weight:normal; font-size:0.9rem; margin-left:2rem;">
        <li>Provide, operate, and maintain our website</li>
        <li>Improve, personalize, and expand our website</li>
        <li>Understand and analyze how you use our website</li>
        <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with
            updates and other information relating to the website, and for marketing and promotional purposes</li>
        <li>Send you emails</li>
        <li>Find and prevent fraud</li>
    </ul>
    <h3>Log Files</h3>
    <p style="font-weight:normal; font-size:0.9rem ">
        nodeschool.in follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting
        companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol
        (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly
        the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information
        is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
    </p>
    <h3>Cookies and Web Beacons</h3>
    <p style="font-weight:normal; font-size:0.9rem ">Like any other website, nodeschool.in uses 'cookies'. These cookies are used to store information including visitors'
        preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the
        users' experience by customizing our web page content based on visitors' browser type and/or other information. For more
        general information on cookies, please read
        <a href="https://www.termsfeed.com/blog/cookies/">What Are Cookies</a>.</p>
    <h3>Advertising Partners Privacy Policies</h3>
    <p style="font-weight:normal; font-size:0.9rem ">You may consult this list to find the Privacy Policy for each of the advertising partners of nodeschool.in. Third-party
        ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective
        advertisements and links that appear on nodeschool.in, which are sent directly to users' browser. They automatically
        receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising
        campaigns and/or to personalize the advertising content that you see on websites that you visit. Note that nodeschool.in
        has no access to or control over these cookies that are used by third-party advertisers.</p>
    <br/>
    <h3>Third Party Privacy Policies</h3>
    <p style="font-weight:normal; font-size:0.9rem ">nodeschool.in's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult
        the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices
        and instructions about how to opt-out of certain options. You can choose to disable cookies through your individual browser
        options. To know more detailed information about cookie management with specific web browsers, it can be found at the
        browsers' respective websites.</p>
    <h3>CCPA Privacy Rights (Do Not Sell My Personal Information)</h3>
    <p style="font-weight:normal; font-size:0.9rem ">Under the CCPA, among other rights, California consumers have the right to: Request that a business that collects a consumer's
        personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.
        Request that a business delete any personal data about the consumer that a business has collected. Request that a business
        that sells a consumer's personal data, not sell the consumer's personal data. If you make a request, we have one month
        to respond to you. If you would like to exercise any of these rights, please contact us.</p>
    <br/>
    <h3>GDPR Data Protection Rights</h3>
    <p style="font-weight:normal; font-size:0.9rem ">
        We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
        <br/> The right to access – You have the right to request copies of your personal data. We may charge you a small fee
        for this service. The right to rectification – You have the right to request that we correct any information you believe
        is inaccurate. You also have the right to request that we complete the information you believe is incomplete. The right
        to erasure – You have the right to request that we erase your personal data, under certain conditions. The right to restrict
        processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.
        The right to object to processing – You have the right to object to our processing of your personal data, under certain
        conditions. The right to data portability – You have the right to request that we transfer the data that we have collected
        to another organization, or directly to you, under certain conditions. If you make a request, we have one month to respond
        to you. If you would like to exercise any of these rights, please contact us.
    </p>
    <h3>Children's Information</h3>
    <p style="font-weight:normal; font-size:0.9rem ">
        Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians
        to observe, participate in, and/or monitor and guide their online activity. nodeschool.in does not knowingly collect
        any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind
        of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to
        promptly remove such information from our records.
    </p>
</div>`
    }
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    if (type == 'terms') {
        return (
            <>
                <SeoHelmet
                    title="Terms and Conditions | Nodeschool.in"
                    href="https://nodeschool.in/terms-conditions"
                    desc="Terms and Terms and Conditions" />
                <HtmlParser htmlString={pages.termscondition} />
            </>
        )
    } else if (type == 'refund') {
        return <HtmlParser htmlString={pages.termscondition} />
    } else if (type == 'privacy') {

        return(
            <>
            <SeoHelmet
                    title="Privacy Policy | Nodeschool.in"
                    href="https://nodeschool.in/privacy-policy"
                    desc="privacy policy"
                     />
            <HtmlParser htmlString={pages.policy} />
            </>
        ) 
    }
}

export default Legal;