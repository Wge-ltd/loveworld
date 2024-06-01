import { useState, useRef } from "react";

import CopyIcon from "../../assets/Copy.svg";
import DeleteIcon from "../../assets/SVGs/Delete";
import { InfoToast } from "../../utils/toast";
import TextInput from "../TextInput";
import Select from "../Select";

const Task = ({ index, task }) => {
    const [toggle, setToggle] = useState(false);
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);

    const handleCopy = () => {
        if (!titleRef.current?.value || !descriptionRef.current?.value) return;

        const text = `Title: ${titleRef.current.value} \n Description: ${descriptionRef.current.value}`;
        navigator.clipboard.writeText(text);
        InfoToast("Copied to clipboard");
    };

    return (
        <div className="task">
            <div className="task_detail">
                <TextInput
                    id={`tasks[${index}].title`}
                    name={`tasks[${index}].title`}
                    placeholder="Enter Title"
                    containerClass="task_input"
                    classChange
                    innerRef={titleRef}
                    value={task?.title}
                />
                <Select
                    id={`tasks[${index}].type`}
                    name={`tasks[${index}].type`}
                    options={[
                        { text: "Paragraph", value: "Paragraph" },
                        { text: "Attachment", value: "Attachment" },
                        { text: "Text Content", value: "Text Content" },
                    ]}
                />
            </div>
            <div>
                <TextInput
                    id={`tasks[${index}].description`}
                    name={`tasks[${index}].description`}
                    placeholder="Enter Description"
                    containerClass="task_description"
                    classChange
                    innerRef={descriptionRef}
                    value={task?.description}
                />
            </div>
            <div className="task_info">
                <div className="task_images">
                    <img className="task_copy" src={CopyIcon} alt="Copy" onClick={handleCopy} />
                    <DeleteIcon />
                </div>
                <div
                    onClick={() => setToggle((prevState) => !prevState)}
                    className={`${toggle && "task_toggle-active"} task_toggle`}
                >
                    <span></span>
                </div>
            </div>
        </div>
    );
};

export default Task;
