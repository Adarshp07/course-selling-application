import { Typography } from "@mui/material";
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
            <Typography variant={'h3'}
                onClick={() => {
                    navigate("/landing")
                    //added link
                }}>Coursera</Typography>
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


    </div>



}
export default Appbar;