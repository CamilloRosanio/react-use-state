import Languages from '../../data/languages';

function TagDetail({ index, title, description }) {

    return (
        <>
            <div className="tagDetail">
                <h3>{Languages[index].title}</h3>
                <p>{Languages[index].description}</p>
            </div>
        </>
    )
}

export default TagDetail