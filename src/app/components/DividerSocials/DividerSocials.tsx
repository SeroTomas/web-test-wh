'use client'
import { FacebookOutlined, InstagramOutlined, TwitterOutlined } from "@ant-design/icons";
import styles from "./dividerSocials.module.scss";

const DividerSocials = () => {
    return (
        <div className={styles.container}>
            <div className={styles.socialContainer}>
                <TwitterOutlined />
                <FacebookOutlined />
                <InstagramOutlined />
            </div>
        </div>
    )
}
export default DividerSocials