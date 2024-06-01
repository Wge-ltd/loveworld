import { useState, useRef } from "react";

import "../ScheduleMeeting/ScheduleMeeting.scss";
import CloseButton from "../../../assets/Cross.svg";
import AddCircle from "../../../assets/add-circle.svg";
import UploadImage from "../../../assets/upload.svg";
import DocImage from "../../../assets/doc.svg";
import VerticalDotImage from "../../../assets/vertical-dot.svg";
import { calculateFileSize, trimFileName } from "../../../utils";
import { useUpdateIntern } from "../../../services/mutations/dashboard";
import { ErrorToast, SuccessToast } from "../../../utils/toast";

const CompleteProfile = ({ id, handleClose }) => {
    const CVRef = useRef(null);
    const VideoRef = useRef(null);
    const [CV, setCV] = useState(null);
    const [CVData, setCVData] = useState(null);
    const [Video, setVideo] = useState(null);
    const [VideoData, setVideoData] = useState(null);
    const { mutateAsync: updateSingleIntern } = useUpdateIntern(id);

    const handleCVUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setCVData(file);
            const reader = new FileReader();

            reader.onload = (e) => {
                setCV(e.target.result);
            };

            reader.readAsDataURL(file);
        }
    };

    const handleVideoUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setVideoData(file);
            const reader = new FileReader();

            reader.onload = (e) => {
                setVideo(e.target.result);
            };

            reader.readAsDataURL(file);
        }
    };

    const handleCVDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file) {
            setCVData(file);
            const reader = new FileReader();

            reader.onload = (e) => {
                setCV(e.target.result);
            };

            reader.readAsDataURL(file);
        }
    };

    const handleVideoDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file) {
            setVideoData(file);
            const reader = new FileReader();

            reader.onload = (e) => {
                setVideo(e.target.result);
            };

            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (values) => {
        try {
            const res = await updateSingleIntern({
                ...(CV && { cv: CV }),
                ...(Video && { oneMinVideo: Video }),
            });
            if (res) {
                SuccessToast("Profile updated successfully");
                setCV(null);
                setVideo(null);
                setCVData(null);
                setVideoData(null);
                handleClose();
            }
        } catch (error) {
            ErrorToast(error.response?.data?.msg ?? "Something went wrong");
        }
    };

    return (
        <div className="custom_overlay">
            <div className="custom_overlay_container">
                <div className="dashboard_new_user" style={{ width: "100%", maxWidth: "30rem" }}>
                    <img
                        onClick={() => {
                            setCV(null);
                            setVideo(null);
                            setCVData(null);
                            setVideoData(null);
                            handleClose();
                        }}
                        className="schedule_meeting_close"
                        src={CloseButton}
                        alt="Close"
                    />
                    <h2>Complete Profile</h2>
                    <p>Record a 1 minute introductory video and upload your CV.</p>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleSubmit();
                        }}
                    >
                        <div className="complete_profile_form">
                            <div
                                className="upload_container"
                                style={{
                                    border: CV ? "none" : "2px dashed #868686",
                                    background: CV ? "#F1F2F4" : "none",
                                }}
                                onClick={() => {
                                    CVRef.current.click();
                                }}
                                onDragOver={(e) => e.preventDefault()}
                                onDrop={handleCVDrop}
                            >
                                {CV ? (
                                    <>
                                        <img src={DocImage} alt="Doc" />
                                        <div className="upload_texts">
                                            <p>{trimFileName(CVData.name)}</p>
                                            <span>{calculateFileSize(CVData.size)}</span>
                                        </div>
                                        <img
                                            src={VerticalDotImage}
                                            alt="options"
                                            className="options_image"
                                        />
                                    </>
                                ) : (
                                    <>
                                        <img src={AddCircle} alt="add cv" />
                                        <div className="upload_texts">
                                            <p>Add Cv/Resume</p>
                                            <span>Browse file or drop here.</span>
                                        </div>
                                    </>
                                )}
                            </div>
                            <div
                                className="upload_container"
                                style={{
                                    border: Video ? "none" : "2px dashed #868686",
                                    background: Video ? "#F1F2F4" : "none",
                                }}
                                onClick={() => {
                                    VideoRef.current.click();
                                }}
                                onDragOver={(e) => e.preventDefault()}
                                onDrop={handleVideoDrop}
                            >
                                {Video ? (
                                    <>
                                        <img src={DocImage} alt="Doc" />
                                        <div className="upload_texts">
                                            <p>{trimFileName(VideoData.name)}</p>
                                            <span>{calculateFileSize(VideoData.size)}</span>
                                        </div>
                                        <img
                                            src={VerticalDotImage}
                                            alt="options"
                                            className="options_image"
                                        />
                                    </>
                                ) : (
                                    <>
                                        <img src={UploadImage} alt="upload video" />
                                        <div className="upload_texts">
                                            <p>Upload Video from your computer</p>
                                            <span>Browse file or drop here.</span>
                                        </div>
                                    </>
                                )}
                            </div>
                            <input
                                ref={CVRef}
                                type="file"
                                name="cv"
                                hidden
                                onChange={handleCVUpload}
                                accept=".pdf,.doc,.docx,image/*"
                            />
                            <input
                                ref={VideoRef}
                                type="file"
                                name="oneMinVideo"
                                hidden
                                onChange={handleVideoUpload}
                                accept="video/*"
                            />
                            <button type="submit" className="schedule_meeting_button">
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CompleteProfile;
