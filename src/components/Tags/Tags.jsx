import styles from './Tags.module.css';
import Languages from '../../data/languages';


function Tags() {

    return (
        <>
            <section className='tagsContainer'>
                <ul className={styles.tagList}>
                    {Languages.map((item, index) => (
                        <li className={styles.tagLabel + ' ' + item.title} key={index}>{item.title}</li>
                    ))}
                </ul>

                <div className="tagDetail">
                    <h3>{Languages[0].title}</h3>
                    <p>{Languages[0].description}</p>
                </div>

            </section>
        </>
    )
}

export default Tags