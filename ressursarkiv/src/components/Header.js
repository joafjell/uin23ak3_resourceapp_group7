import { useParams } from "react-router-dom"
export default function Header(resources) {
    
        const {title} = useParams()
        const resourc = resources.find((res) => res.title === title)
        return (
            <section>
                <h1>{resourc.category}</h1>
                <ul>
                    {resourc.url.map((url, index) =>(
                    <li key={"ing"+index}>{url}</li>
                ))}
                </ul>
                <ol>
                {resourc.url.map((step, index) =>(
                    <li key={"step"+index}>{step}</li>
                ))}
            </ol>
            </section>
        )    
}