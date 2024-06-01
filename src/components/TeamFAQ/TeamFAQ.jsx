import React from "react";
import "./TeamFAQ.scss";
import FAQ from "../FAQ";

const TeamFAQsData = [
    {
        q: "Is there a free trial available?",
        a: "Yes, Loveworld Virtual Internship offers a free trial period for eligible users. This allows you to explore our platform and experience the benefits of virtual internships before committing to a paid plan.",
    },
    {
        q: "Can I change my plan later?",
        a: "Certainly! Loveworld Virtual Internship understands that needs may evolve. You have the flexibility to upgrade or downgrade your plan at any time to better suit your requirements.",
    },
    {
        q: "What is your cancellation policy?",
        a: "Our cancellation policy provides users with the freedom to cancel their subscription at any time. No long-term commitments are required, and cancellation is a hassle-free process. Please review our terms and conditions for more details.",
    },
    {
        q: "Can other info be added to an invoice?",
        a: "Yes, Loveworld Virtual Internship allows for customization of invoices. Users can add additional information, such as specific project details, payment terms, or any other relevant data to tailor the invoice to their needs.",
    },
    {
        q: "How does billing work?",
        a: "Billing for Loveworld Virtual Internship is typically done on a recurring basis, depending on your chosen subscription plan. Payments can be made securely through our online platform, and you will receive notifications and invoices to keep you informed about upcoming and past transactions.",
    },
    {
        q: "How do I change my account email?",
        a: "To change your account email, log in to your Loveworld Virtual Internship account and navigate to the account settings. Within the settings, you should find an option to update your email address. Follow the prompts to make the change, and don't forget to verify the new email for security purposes. If you encounter any issues, our support team is available to assist you.",
    },
];

const TeamFAQ = () => {
    return (
        <div className="teamFaq">
            <div className="teamFaq_text">
                <h1>FAQs</h1>
                <p>
                    Everything you need to know about the product and billing. Can’t find the answer
                    you’re looking for? Please chat to our friendly team.
                </p>
            </div>
            <div className="teamFaq_faq">
                {TeamFAQsData.map((d, i) => (
                    <FAQ key={i} q={d.q} a={d.a} />
                ))}
            </div>
        </div>
    );
};

export default TeamFAQ;
