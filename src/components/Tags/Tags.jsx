import styles from './Tags.module.css';
import Languages from '../../data/languages';


function Tags() {

    return (
        <>
            <ul className={styles.tagList}>
                {Languages.map((item, index) => (
                    <li className={styles.tagLabel + ' ' + item.title} key={index}>{item.title}</li>
                ))}
            </ul>
        </>
    )
}

export default Tags