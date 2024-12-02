import styles from './Tags.module.css';
import Languages from '../../data/languages';

import { useState } from 'react';

import tagDetail from './tagDetail';


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

                <div className="tagDetail">
                    <h3>{Languages[showIndex].title}</h3>
                    <p>{Languages[showIndex].description}</p>
                </div>

            </section>
        </>
    )
}

export default Tags