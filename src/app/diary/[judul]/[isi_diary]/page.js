export default function DiaryPost ({params}) {
    const {title, pragraph} =  params;

    return (
        <div className="diary-post-container" >
        <h1>{decodeURIComponent(title)}</h1>
        <p>{decodeURIComponent(pragraph)}</p>
        </div>
    );
}
