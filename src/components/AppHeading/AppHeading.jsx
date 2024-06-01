import "./AppHeading.scss";

const topNav = [
    {
        title: "Interns",
        path: "INTERNS",
    },
    {
        title: "Company",
        path: "COMPANIES",
    },
];

const AppHeading = ({ currentTab, setCurrentTab }) => {
    return (
        <div className="appHeadings">
            {topNav.map((d, i) => (
                <h4
                    key={i}
                    onClick={() => setCurrentTab(d.path)}
                    className={`heading4 ${currentTab === d.path && "appHeadings-active"}`}
                >
                    {d.title}
                </h4>
            ))}
        </div>
    );
};

export default AppHeading;
