

export default function Information({title, url}){
    return(
        <article className="info-card">
            <ul>
                <li>
                <a class="links" href={url}>{title}</a>
                </li>
            </ul>
        </article>
    )
}