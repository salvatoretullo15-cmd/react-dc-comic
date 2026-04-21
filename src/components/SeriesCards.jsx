export default function SeriesCards({comic}){

    return (
        <div className="col">
            <div className="card mt-4">
                <img src={comic.thumb} className="imagine rounded-0" alt={comic.title} />
            </div>
                <h2 className="textcomic mt-3">{comic.series}</h2>
        </div>
    )
}