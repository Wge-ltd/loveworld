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
        a: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
        q: "What is your cancellation policy?",
        a: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
        q: "Can other info be added to an invoice?",
        a: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
        q: "How does billing work?",
        a: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
        q: "How do I change my account email?",
        a: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
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
