import { BrowserRouter , Routes, Route} from "react-router-dom";
import Home from "../pages/Home";
import Form from "../pages/dataForm";
export default function Routing() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="add/" element={<Form />} />
                    <Route path="edit/:id" element={<Form />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}