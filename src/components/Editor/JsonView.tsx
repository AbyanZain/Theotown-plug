import { Card, Typography } from "@mui/joy";
import { CssVarsProvider, extendTheme } from "@mui/joy";
//import {useState} from "react";

export default function JsonView({ jsonText }: any) {
    const theme = extendTheme({
        components: {
            JoyCard: {
                defaultProps: {
                    variant: 'outlined',
                    color: 'primary'
                }
            }
        }
    });
    return (
        <CssVarsProvider theme={theme}>
            <Card>
                <Typography level="title-lg">JSON View</Typography>
                <Typography sx={{ fontFamily: '"Google Sans Code", sans-serif' }}>{jsonText}</Typography>
            </Card>
        </CssVarsProvider>
    );
}