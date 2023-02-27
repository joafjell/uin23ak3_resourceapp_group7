import { Link, Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout(){
    return(
        <div id="container">
            <header>
                <Header/>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>

            </footer>
        </div>
    )
}