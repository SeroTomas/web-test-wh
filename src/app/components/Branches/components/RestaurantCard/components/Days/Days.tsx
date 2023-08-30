import styles from "./days.module.scss";

interface Props {
    day: string
    start: string
    end: string
}

const Days = ({ day, start, end }: Props) => {
    return (
        <div className={styles.days}>
            <h4>{day}</h4>
            <p>{start}hs</p>
            <p> - </p>
            <p>{end}hs</p>
        </div>
    )
}
export default Days