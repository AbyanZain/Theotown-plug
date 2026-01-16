import {Card, Typography} from "@mui/joy";
import {CssVarsProvider, extendTheme} from "@mui/joy";
//import {useState} from "react";

export default function JsonView({jsonText} : any){
    const theme = extendTheme({
        components: {
            JoyCard: {
                defaultProps: {
                    variant: 'outlined',
                    color: 'primary'
                }
            },
            JoyTypography : {
                defaultProps : {
                    fontFamily: '"Google Sans Code", sans-serif'
                }
            }
        }
    });
    return(
        <CssVarsProvider theme={theme}>
            <Card>
                <Typography>{jsonText}</Typography>
            </Card>
        </CssVarsProvider>
    );
}