import { useState } from 'react';
import styles from './Tags.module.css';
import Languages from '../../data/languages';
import TagDetail from './TagDetail';


function Tags() {

    const [showIndex, setIndex] = useState(0);
    console.log(showIndex);

    return (
        <>
            <section className='tagsContainer'>
                <ul className={styles.tagList}>
                    {Languages.map((item, index) => (
                        <li
                            onClick={() => setIndex((showIndex) => index)}
                            className={styles.tagLabel + ' ' + item.title}
                            key={index}>
                            {item.title}
                        </li>
                    ))}
                </ul>

                {/* SOLUZIONE SENZA COMPONENT */}
                {/* <div className="tagDetail">
                    <h3>{Languages[showIndex].title}</h3>
                    <p>{Languages[showIndex].description}</p>
                </div> */}

                <TagDetail
                    index={showIndex}
                />

            </section>
        </>
    )
}

export default Tags