import { useRef, useState } from "react";
import "./Team.scss";
import Layout from "../../components/Layout";
import TeamProfileImg from "../../assets/TeamProfile.png";
import LinkedInIcon from "../../assets/LinkedinIcon.svg";
import TwitterIcon from "../../assets/TwitterIcon.svg";
import FutureWork from "../../components/FutureWork";

const TeamTop = () => (
    <div className="team_top">
        <h1>Meet the Team</h1>
        <p>Many Countries, Multiple Departments, one Mission</p>
    </div>
);

const TeamBox = () => (
    <div className="team_box">
        <img src={TeamProfileImg} className="team_boxProfile" alt="profile" />
        <div className="team_boxGradient" />
        <div className="team_boxMain">
            <div>
                <h3>Sharon Huges</h3>
                <p>Marketing Specialist</p>
            </div>
            <div className="team_boxMainIcons">
                <img src={LinkedInIcon} alt="linkedin" />
                <img src={TwitterIcon} alt="twitter" />
            </div>
        </div>
    </div>
);

const TabsData = [
    {
        name: "Leadership",
        value: "leadership",
    },
    {
        name: "Team",
        value: "team",
    },
    {
        name: "Advisors",
        value: "advisors",
    },
];

const TeamTabs = ({ activeTab, handleTabChange }) => (
    <div className="team_tabs">
        {TabsData.map((d, i) => (
            <div
                key={i}
                className={`${activeTab === d.value ? "team_tabActive" : ""}`}
                onClick={() => handleTabChange(d.value)}
            >
                {d.name}
            </div>
        ))}
    </div>
);

const TeamSection = ({ title, refProp, children }) => (
    <div ref={refProp} className="team_section">
        <h1>{title}</h1>
        <div className="team_main">{children}</div>
    </div>
);

const Team = () => {
    const leadershipRef = useRef();
    const teamRef = useRef();
    const advisorsRef = useRef();
    const [activeTab, setActiveTab] = useState("leadership");

    const handleTabChange = (tab) => {
        switch (tab) {
            case "team":
                teamRef.current.scrollIntoView({ behavior: "smooth" });
                break;
            case "leadership":
                leadershipRef.current.scrollIntoView({ behavior: "smooth" });
                break;
            case "advisors":
                advisorsRef.current.scrollIntoView({ behavior: "smooth" });
                break;
            default:
                break;
        }
        setActiveTab(tab);
    };

    return (
        <Layout className="team">
            <TeamTop />
            <TeamTabs activeTab={activeTab} handleTabChange={handleTabChange} />
            <TeamSection title="The Leadership Team" refProp={leadershipRef}>
                {[...Array(4)].map((_, i) => (
                    <TeamBox key={i} />
                ))}
            </TeamSection>
            <TeamSection title="Our Team" refProp={teamRef}>
                {[...Array(8)].map((_, i) => (
                    <TeamBox key={i} />
                ))}
            </TeamSection>
            <TeamSection title="Advisors" refProp={advisorsRef}>
                {[...Array(4)].map((_, i) => (
                    <TeamBox key={i} />
                ))}
            </TeamSection>
            <FutureWork />
        </Layout>
    );
};

export default Team;
