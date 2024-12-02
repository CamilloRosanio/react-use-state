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
                            onClick={() => {
                                setIndex((showIndex) => index);
                            }}
                            className={styles.tagLabel + ' ' + item.title}
                            key={index}>
                            {item.title}
                        </li>
                    ))}
                </ul>

                <TagDetail
                    index={showIndex}
                    data={Languages}
                />

            </section >
        </>
    )
}

export default Tags