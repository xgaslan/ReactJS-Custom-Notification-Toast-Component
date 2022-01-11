// React
import React, {useState} from "react";

// Style
import styles from "./App.module.css";

// Component
import Button from "./components/Button/Button";
import Notification from "./components/Notification/Notification";

export default function App() {
    // useState
    const [list, setList] = useState([]);

    // Definition
    let notificationProperties = null;

    // Function
    const showNotification = (notificationType) => {
        switch (notificationType) {
            case "success":
                notificationProperties = {
                    id: list.length + 1,
                    title: "Success",
                    description: "This is a success notification component",
                    backgroundColor: "#31B22F",
                };
                break;
            case "danger":
                notificationProperties = {
                    id: list.length + 1,
                    title: "Danger",
                    description: "This is a danger notification component",
                    backgroundColor: "#d9534f",
                };
                break;
            case "info":
                notificationProperties = {
                    id: list.length + 1,
                    title: "Info",
                    description: "This is a info notification component",
                    backgroundColor: "#44AACB",
                };
                break;
            case "warning":
                notificationProperties = {
                    id: list.length + 1,
                    title: "Warning",
                    description: "This is a warning notification component",
                    backgroundColor: "#f0ad4e",
                };
                break;
            case "request":
                notificationProperties = {
                    id: list.length + 1,
                    title: "Request",
                    description: "This is a request notification component",
                    backgroundColor: "#5F676A",
                };
                break;

            default:
                notificationProperties = [];
                break;
        }
        setList([...list, notificationProperties]);
    };

    return (
        <div className={styles.root}>
            <h1>React Custom Notification Component</h1>
            <div className={styles.buttons}>
                <Button handleClick={() => showNotification("success")}>
                    Success
                </Button>
                <Button handleClick={() => showNotification("danger")}>
                    Danger
                </Button>
                <Button handleClick={() => showNotification("info")}>
                    Info
                </Button>
                <Button handleClick={() => showNotification("warning")}>
                    Warning
                </Button>
                <Button handleClick={() => showNotification("request")}>
                    Request
                </Button>
            </div>
            <Notification
                notificationList={list}
                position="top-right"
                setList={setList}
            />
        </div>
    );
}
