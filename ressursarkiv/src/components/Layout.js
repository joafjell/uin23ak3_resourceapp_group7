import { Link, Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout(){
    return(
        <div id="container">
            <header>   
                <Link to='/'>
                    <Header/>
                </Link>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>

            </footer>
        </div>
    )
}