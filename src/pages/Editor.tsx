import ManifestEditor from '../components/Editor/ManifestEditor.tsx';
import JsonView from '../components/Editor/JsonView.tsx';
import JsonEditor from '../components/Editor/JsonEditor.tsx';
import { CssVarsProvider, extendTheme } from '@mui/joy';
import { Grid } from '@mui/joy';
import { useState } from 'react';
export default function Editor() {
    const [manifest, setManifest] = useState<any>(null);
    const handleManifestChange = (data: any) => { //Callback the ManifestEditor
        setManifest(data);
    };
    const JsonText = JSON.stringify(manifest, null, 2);
    const theme = extendTheme({
        components: {
            JoyButton: {
                defaultProps: {
                    color: 'primary'
                }
            },
            JoyButtonGroup: {
                defaultProps: {
                    color: 'primary'
                }
            },
            JoyTooltip: {
                defaultProps: {
                    color: 'primary',
                    variant: 'outlined'
                }
            },
            JoyCard: {
                defaultProps: {
                    variant: 'outlined',
                    color: 'primary'
                }
            }
        }
    })
    return (
        <CssVarsProvider theme={theme}>
            <Grid container spacing={2}>
                <Grid xs={10}>
                    <ManifestEditor onChange={handleManifestChange} />
                </Grid>
                <Grid xs={2}>
                    <JsonView jsonText={JsonText} />
                </Grid>
            </Grid>
            <JsonEditor/>
        </CssVarsProvider >
    )
}
