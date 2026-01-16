import { useState, useEffect } from 'react';
import { Box, Input, Button, ButtonGroup, Card, Typography, Stack, Tooltip } from '@mui/joy';
import { CssVarsProvider, extendTheme } from '@mui/joy';
import { v4 as IDGenerate } from 'uuid';
import AndroidOutlinedIcon from '@mui/icons-material/AndroidOutlined';
import AppleIcon from '@mui/icons-material/Apple';
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import AppRegistrationOutlinedIcon from '@mui/icons-material/AppRegistrationOutlined';
import FingerprintOutlinedIcon from '@mui/icons-material/FingerprintOutlined';
import SubtitlesOutlinedIcon from '@mui/icons-material/SubtitlesOutlined';
import FormatAlignLeftOutlinedIcon from '@mui/icons-material/FormatAlignLeftOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';

type Plataform = 'android' | 'ios' | 'desktop';

interface ManifestData {
    id: string;
    version: number;
    title: string;
    description: string;
    author: string;
    platforms: Plataform[];
}

interface ManifestEditorProps {
    onChange: (data: ManifestData) => void;
}

export default function ManifestEditor({ onChange }: ManifestEditorProps) {
    const [ID_Manifest, setID_Manifest] = useState('');
    const [numberVersion, setNumberVersion] = useState(1);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [author, setAuthor] = useState('');
    const [plataforms, setPlataforms] = useState<Plataform[]>([]);

    const togglePlatforms = (platform: Plataform) => {
        setPlataforms(prev =>
            prev.includes(platform) ?
                prev.filter(p => p !== platform) : //remove
                [...prev, platform] //add
        );
    };

    const isActivePlataforms = (platform: Plataform) => plataforms.includes(platform);

    const handleGenerateID = () => setID_Manifest(IDGenerate());

    const manifest: ManifestData = {
        id: ID_Manifest,
        version: numberVersion,
        title,
        description,
        author,
        platforms: plataforms,
    };

    useEffect(() => {
        onChange(manifest);
    }, [ID_Manifest, numberVersion, title, description, author, plataforms, onChange]);

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
            <Box>
                <Card>
                    <Stack>
                        <Typography level="title-sm">ID Manifest</Typography>
                        <Stack direction="row" spacing={2}>
                            <Input
                                startDecorator={<AppRegistrationOutlinedIcon />}

                                type="text"
                                value={ID_Manifest}
                                onChange={(e) => setID_Manifest(e.target.value)}
                                sx={{ flex: 1 }}
                                placeholder='My ID Manifest is..'
                            />
                            <Button onClick={handleGenerateID}>Auto Generate</Button>
                        </Stack>
                    </Stack>

                    <Stack>
                        <Typography>Numeric version code</Typography>
                        <Input
                            startDecorator={<FingerprintOutlinedIcon />}
                            type="number"
                            value={numberVersion}
                            onChange={(e) => { if (Number(e.target.value) > 0) setNumberVersion(Number(e.target.value)) }}
                        />
                    </Stack>

                    <Stack>
                        <Typography>Title</Typography>
                        <Input
                            startDecorator={<SubtitlesOutlinedIcon />}
                            value={title} onChange={(e) => setTitle(e.target.value)}
                            placeholder='My plugin...' />
                    </Stack>

                    <Stack>
                        <Typography>Description</Typography>
                        <Input
                            startDecorator={<FormatAlignLeftOutlinedIcon />}
                            value={description} onChange={(e) => setDescription(e.target.value)}
                            placeholder='My plugin...' />
                    </Stack>

                    <Stack>
                        <Typography>Author</Typography>
                        <Input
                            startDecorator={<BadgeOutlinedIcon />}
                            value={author} onChange={(e) => setAuthor(e.target.value)}
                            placeholder='My nickname is...' />
                    </Stack>

                    <Stack spacing={1}>
                        <Stack
                            direction="row"
                            spacing={1}
                            alignItems="center">
                            <Typography>Supported platforms</Typography>
                            <Tooltip
                                title='You can add more than 1'
                                placement='right'><HelpOutlinedIcon
                                    color='primary'
                                />
                            </Tooltip>

                        </Stack>
                        <ButtonGroup spacing={1}>
                            <Button
                                startDecorator={<AndroidOutlinedIcon />}
                                variant={isActivePlataforms('android') ? 'solid' : 'outlined'}
                                onClick={() => togglePlatforms('android')}
                            >
                                Android
                            </Button>
                            <Button
                                startDecorator={<AppleIcon />}
                                variant={isActivePlataforms('ios') ? 'solid' : 'outlined'}
                                onClick={() => togglePlatforms('ios')}
                            >
                                iOS
                            </Button>
                            <Button
                                startDecorator={<ComputerOutlinedIcon />}
                                variant={isActivePlataforms('desktop') ? 'solid' : 'outlined'}
                                onClick={() => togglePlatforms('desktop')}
                            >
                                Desktop
                            </Button>
                        </ButtonGroup>
                        <Typography level="body-sm">{plataforms.join(', ')}</Typography>
                    </Stack>
                </Card>
            </Box>
        </CssVarsProvider>
    );
};
