import "./GroupImage.scss";
import GroupImageImg from "../../assets/Group.png";
import PartnerImg from "../../assets/Partner.png";
import ContactImg from "../../assets/Contact.png";
import GoldenWave from "../../assets/GoldenWave.svg";
import GoldenDots from "../../assets/GoldenDots.svg";

const IMAGES = {
    group: GroupImageImg,
    partner: PartnerImg,
    contact: ContactImg,
};

const GroupImage = ({ left = false, type = "group" }) => {
    return (
        <div className={`groupImage ${left ? "groupImage_left" : ""}`}>
            <div className="groupImageMain">
                <img src={IMAGES[type]} alt="group" />
            </div>
            <img src={GoldenDots} alt="dots" className="groupImageIcon1" />
            <div className="groupImageWave">
                <img src={GoldenWave} alt="wave" />
                <img src={GoldenWave} alt="wave" />
            </div>
        </div>
    );
};

export default GroupImage;
