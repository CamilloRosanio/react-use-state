function TagDetail({ index, data }) {

    return (
        <>
            <div className="tagDetail">
                <h3>{data[index].title}</h3>
                <p>{data[index].description}</p>
            </div>
        </>
    )
}

export default TagDetail