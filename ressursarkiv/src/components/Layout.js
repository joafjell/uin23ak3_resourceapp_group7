
import Header from "./Header";
import Main from "./Main";
import Nav from "./Nav";

export default function Layout({children}){
    return(
        <div id="container">
            <header>  
                
            </header>
            <nav>
                <Nav/>
            </nav>
            <main>
                <Main/>
                {children}
            </main>
            <footer>

            </footer>
        </div>
    )
}