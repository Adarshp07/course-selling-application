import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import { Card, Typography } from "@mui/material";




function SignIn() {

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

                    fullWidth={true}
                    label="Email"
                    variant='outlined'></TextField>

                <br /> <br />

                <TextField



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




                >SignIn</Button>

            </Card>

        </div>

    </div >

}
export default SignIn;