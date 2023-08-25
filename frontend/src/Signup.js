import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import { Card, Typography } from "@mui/material";
import { useState } from "react";



function SignUp() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return <div>
        <div style={{
            paddingTop: 150,
            marginBottom: 10,
            display: "flex",
            justifyContent: "center"
        }}>

            <Typography variant={"h6"}>
                Welcome to Coursera, Sign up below
            </Typography>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Card varint={"outlined"} style={{ width: 400, padding: 20 }}>
                <TextField
                    onChange={(e) => {
                        let elemt = e.target;
                        setEmail(elemt.value)
                    }}
                    fullWidth={true}
                    label="Email"
                    variant='outlined'></TextField>

                <br /> <br />

                <TextField
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}

                    fullWidth={true}
                    label="Password"
                    variant="outlined"
                    type={"password"}
                >
                </TextField>

                <br /> <br />
                <Button
                    size={"large"}
                    variant="contained"
                    onClick={() => {
                        function callback2(data) {
                            localStorage.setItem("token", data.token);
                        }
                        function callback1(res) {
                            res.json().then(callback2)
                        }
                        fetch("http://localhost:3000/admin/signup", {
                            method: "POST",
                            body: JSON.stringify({
                                username: email,
                                password: password
                            }),
                            headers: {
                                "Content-type": "application/json"
                            }
                        })
                            .then(callback1)
                    }}




                >SignUp</Button>

            </Card>

        </div>

    </div >

}
export default SignUp;