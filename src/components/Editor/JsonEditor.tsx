import { Box, Button, ButtonGroup, Input, Stack, Typography, Card, Divider, Grid } from '@mui/joy';
import { useState } from 'react';
import { v4 as IDGenerate } from 'uuid';

import GiteOutlinedIcon from '@mui/icons-material/GiteOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import FactoryOutlinedIcon from '@mui/icons-material/FactoryOutlined';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
type typeJson = 'residenial' | 'commercial' | 'industrial';
type levelJson = 1 | 2 | 3;

export default function JsonEditor() {
    const [ID_Manifest, setID_Manifest] = useState('');
    const [numberVersion, setNumberVersion] = useState(1);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [author, setAuthor] = useState('');
    const [type, setType] = useState<typeJson>('residenial');
    const [level, setLevel] = useState(2);
    const [power, setPower] = useState(0);
    const [waterm, setWater] = useState(0);

    const toggleType = (t: typeJson) => {
        setType(t);
    };
    const isActiveType = (t: typeJson) => type === t;
    const toggleLevel = (l: levelJson) => {
        setLevel(l);
    }
    const isActiveLevel = (l: levelJson) => level === l;


    const handleIDGenerate = () => (setID_Manifest(IDGenerate()));

    return (
        <Box>
            <Card>
                <Typography level="title-lg">JSON Editor</Typography>
                <Stack>
                    <Typography level="title-sm">ID Manifest</Typography>
                    <Stack direction="row" spacing={2}>
                        <Input
                            type="text"
                            value={ID_Manifest}
                            onChange={(e) => setID_Manifest(e.target.value)}
                            sx={{ flex: 1 }}
                            placeholder='My ID Manifest is..'
                        />
                        <Button onClick={handleIDGenerate}>Auto Generate</Button>
                    </Stack>
                </Stack>
                <Stack>
                    <Typography>Numeric version code</Typography>
                    <Input
                        type="number"
                        value={numberVersion}
                        onChange={(e) => { if (Number(e.target.value) > 0) setNumberVersion(Number(e.target.value)) }}
                    />
                </Stack>
                <Stack>
                    <Typography>Title</Typography>
                    <Input
                        value={title} onChange={(e) => setTitle(e.target.value)}
                        placeholder='My plugin is...' />
                </Stack>
                <Stack>
                    <Typography>Description</Typography>
                    <Input
                        value={description} onChange={(e) => setDescription(e.target.value)}
                        placeholder='My plugin is...' />
                </Stack>
                <Stack>
                    <Typography>Autor</Typography>
                    <Input
                        value={author} onChange={(e) => setAuthor(e.target.value)}
                        placeholder='My nickname is...' />
                </Stack>
                <Divider inset="none" />
                <Stack spacing={2}>
                    <Stack direction="row" spacing={4} sx={{ flexWrap: 'wrap' }}>
                        <Stack spacing={1} sx={{ flexWrap: 'wrap' }}>
                            <Typography>Type</Typography>
                            <ButtonGroup spacing={1}>
                                <Button
                                    startDecorator={<GiteOutlinedIcon />}
                                    variant={isActiveType('residenial') ? 'solid' : 'outlined'}
                                    onClick={() => toggleType('residenial')}
                                >
                                    Residencial
                                </Button>
                                <Button
                                    startDecorator={<StorefrontOutlinedIcon />}
                                    variant={isActiveType('commercial') ? 'solid' : 'outlined'}
                                    onClick={() => toggleType('commercial')}
                                >
                                    Commercial
                                </Button>
                                <Button
                                    startDecorator={<FactoryOutlinedIcon />}
                                    variant={isActiveType('industrial') ? 'solid' : 'outlined'}
                                    onClick={() => toggleType('industrial')}
                                >
                                    Industrial
                                </Button>
                            </ButtonGroup>
                        </Stack>
                        <Divider inset="none" orientation='vertical' />
                        <Stack spacing={1}>
                            <Typography>Level</Typography>
                            <ButtonGroup spacing={1}>
                                <Button
                                    startDecorator={<GiteOutlinedIcon />}
                                    variant={isActiveLevel(1) ? 'solid' : 'outlined'}
                                    onClick={() => toggleLevel(1)}>
                                    1
                                </Button>
                                <Button
                                    startDecorator={<HomeWorkOutlinedIcon />}
                                    variant={isActiveLevel(2) ? 'solid' : 'outlined'}
                                    onClick={() => toggleLevel(2)}>
                                    2
                                </Button>
                                <Button
                                    startDecorator={<ApartmentOutlinedIcon />}
                                    variant={isActiveLevel(3) ? 'solid' : 'outlined'}
                                    onClick={() => toggleLevel(3)}>
                                    3
                                </Button>
                            </ButtonGroup>
                        </Stack>
                    </Stack>
                    <Stack direction="row" spacing={4}>
                        <Stack spacing={1} sx={{ flex: 1, minWidth: 100 }}>
                            <Typography>Power</Typography>
                            <Input
                                type="number"
                                value={power}
                                onChange={(e) => { if (Number(e.target.value) >= 0) setPower(Number(e.target.value)) }} />
                        </Stack>
                        <Divider inset="none" orientation='vertical' />
                        <Stack spacing={1} sx={{ flex: 1, minWidth: 100 }}>
                            <Typography>Water</Typography>
                            <Input
                                type="number"
                                value={waterm}
                                onChange={(e) => { if (Number(e.target.value) >= 0) setWater(Number(e.target.value)) }} />

                        </Stack>
                    </Stack>
                </Stack>
                <Typography level='body-xs'>Json Editor 0.1</Typography>
            </Card>
        </Box >
    )
};