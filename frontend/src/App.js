import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from "./Signin.js";
import Signup from "./Signup.js";
// import Appbar from "./Appbar.js";
// import AddCourse from "./AddCourse.js";

function App() {

    return (
        <div>

            <Router>
                <Routes>
                    <Route path={"/signin"} element={<Signin />} />
                    <Route path={"/signup"} element={<Signup />} />
                </Routes>


            </Router>
            <Signin></Signin>
            <Signup></Signup>

        </div >
    )
}

export default App;