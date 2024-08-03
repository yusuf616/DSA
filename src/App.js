import { Layout } from "layout/layout";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import "assets/css/stylesItems.css"
import { Level1 } from "pages/Level1";
import { routes } from "routes";
import { AuthLogin } from "auth/AuthLogin";
import { Home } from "pages/Home";

export const App=()=>{
    return <>

        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/:param1" element={<Level1/>}>
                        <Route path="/:param1/:param2" />
                    </Route>
                </Route>
                <Route path={routes?.login} element={<AuthLogin/>} />
            </Routes>
        </BrowserRouter>

    
    </>;
}