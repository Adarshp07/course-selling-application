import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import { Card, Typography } from "@mui/material";
import { useState } from "react";



function SignIn() {
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
                Welcome to Coursera, SignIn below
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
                    dynamic-txts
                    fullWidth={true}
                    label="Password"
                    variant="outlined"
                    type={"password"}
                >
                </TextField>

                <br /> <br />
                <Button
                    type='medium'
                    variant='outlined'



                >SignIn</Button>

            </Card>

        </div>

    </div >

}
export default SignIn;