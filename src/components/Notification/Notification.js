// React
import React, {useCallback, useEffect} from "react";

// Style
import styles from "./Notification.module.css";

export default function Notification({notificationList, position, setList}) {
    // useCallback
    const deleteToast = useCallback(
        (id) => {
            console.log(id);
            const toastListItem = notificationList.filter((t) => t.id !== id);
            setList(toastListItem);
        },
        [notificationList]
    );

    // useEffect
    useEffect(() => {
        const interval = setInterval(() => {
            if (notificationList.length) {
                deleteToast(notificationList[0].id);
            }
        }, 3000);
        return () => {
            clearInterval(interval);
        };
    }, [notificationList, deleteToast]);

    return (
        <div className={`${styles.container} ${styles[position]}`}>
            {notificationList.map((notification, index) => (
                <div
                    key={index}
                    className={`${styles.notification} ${styles.toast} ${styles[position]}`}
                    style={{backgroundColor: notification.backgroundColor}}
                >
                    <button onClick={() => deleteToast(notification.id)}>
                        X
                    </button>
                    <div>
                        <p className={styles.title}>{notification.title}</p>
                        <p className={styles.description}>
                            {notification.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
