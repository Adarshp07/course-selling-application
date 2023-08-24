// import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";



function Appbar() {
    const navigate = useNavigate();
    return <div style={{
        display: "flex",
        justifyContent: "space-between",
        padding: 4

    }}>

        <div>
            <div className="coursera" style={{
                color: "white",
                height: "100%",
                width: "102%",
                backgroundColor: "blue"
                , textAlign: "center"
                , paddingTop: 10,
                border: "2px solid black"
                , margin: "3px",
                cursor: "pointer"
            }}
                onClick={() => {
                    navigate("/landing")
                    //added link
                }}
            >Coursera</div>
        </div>
        <div style={{ display: "flex" }}>
            <div style={{ marginRight: 10 }}>
                <Button
                    variant={"contained"}
                    onClick={() => {
                        navigate("/signup")
                    }}

                >SignUp</Button>


            </div>
            <div>
                <Button
                    variant={"contained"}
                    onClick={() => {
                        navigate("./signin")
                    }}>Signin</Button>
            </div>
        </div>


    </div >



}
export default Appbar;