import { Layout } from "layout/layout";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import "assets/css/stylesItems.css"
import { Level2 } from "pages/Level2";
import { Level1 } from "pages/Level1";

export const App=()=>{
    return <>

        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/" element={<></>}/>
                    <Route path="/:param1" element={<Level1/>}/>
                    <Route path="/:param1/:param2" element={<Level2/>}/>
                </Route>
            </Routes>
        </BrowserRouter>

    
    </>;
}