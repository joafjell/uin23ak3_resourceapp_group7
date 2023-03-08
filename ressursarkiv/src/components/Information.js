

export default function Information({title, url}){
    return(
        <article className="info-card">
            <h3>{title}</h3>
            <ul>
                <li>
                <a class="links" href={url}>{title}</a>
                </li>
            </ul>
        </article>
    )
}