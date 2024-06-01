export const calculateFileSize = (size) => {
    if (size === 0 || !size) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(size) / Math.log(k));
    return `${parseFloat((size / k ** i).toFixed(2))} ${sizes[i]}`;
};

export const trimFileName = (fileName) => {
    if (fileName && fileName.length > 30) {
        return `${fileName.slice(0, 20)}...`;
    }
    return fileName || "Upload file";
};

export const joinUserName = (user) => {
    if (!user || Object.keys(user).length === 0) return "";
    return `${user?.firstName} ${user?.lastName}`;
};

export const cleanUpObject = (obj) => {
    if (!obj) return false;
    const newObj = {};
    Object.keys(obj).forEach((key) => {
        if (obj[key] || (typeof obj[key] === "string" && obj[key] !== "")) {
            newObj[key] = obj[key];
        }
    });
    return Object.keys(newObj).length === 0 ? false : newObj;
};

export const formatDate = (date) => {
    if (!date) return "";

    const d = new Date(date);
    const month = d.getMonth() + 1;
    const day = d.getDate();
    const year = d.getFullYear();

    const formattedDate = `${year}-${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day}`;

    return formattedDate;
};

export const formatDateTime = (date) => {
    if (!date) return "";

    const d = new Date(date);
    const month = d.getMonth() + 1;
    const day = d.getDate();
    const year = d.getFullYear();
    let hours = d.getHours();
    const minutes = d.getMinutes();

    // Determine if it's AM or PM
    const period = hours < 12 ? "AM" : "PM";

    // Convert to 12-hour format
    if (hours > 12) {
        hours -= 12;
    } else if (hours === 0) {
        hours = 12;
    }

    const formattedDate = `${year}-${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day}`;
    const formattedTime = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;

    if (date.includes(":")) {
        return `${formattedDate} ${formattedTime} ${period}`;
    } else {
        return formattedDate;
    }
};
