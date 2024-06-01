import "./NoInternTask.scss";
import TaskBag from "../../../../assets/taskBag.svg";

const NoInternTask = () => {
    return (
        <div className="noTask">
            <div className="noTask_detail">
                <img src={TaskBag} alt="No task" />
                <div>
                    <span>Ooops!!</span>
                    <span>No task assigned yet, check in later.</span>
                </div>
            </div>
        </div>
    );
};

export default NoInternTask;
