import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from "./Signin.js";
import Signup from "./Signup.js";
import Appbar from "./Appbar.js";
import Landing from './landingPage.js';
// import AddCourse from "./AddCourse.js";

function App() {

    return (
        <div style={{
            width: "100vw",
            height: "100vh",
            backgroundColor: "#eeeeee"
        }}>

            <Router>
                <Appbar />

                <Routes>
                    <Route path={"/signin"} element={<Signin />} />
                    <Route path={"/landing"} element={<Landing />} />
                    <Route path={"/signup"} element={<Signup />} />
                </Routes>


            </Router>


        </div >
    )
}

export default App;