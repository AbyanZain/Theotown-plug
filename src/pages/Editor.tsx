import ManifestEditor from '../components/Editor/ManifestEditor.tsx';
import JsonView from '../components/Editor/JsonView.tsx';
import { useState } from 'react';
export default function Editor() {
    const [manifest, setManifest] = useState<any>(null);
    const handleManifestChange = (data: any) => { //Callback the ManifestEditor
        setManifest(data);

    };
    return (
        <>
            <ManifestEditor onChange={handleManifestChange} />
            <JsonView jsonText={JSON.stringify(manifest, null, 2)} />
            <pre>{JSON.stringify(manifest, null, 2)}</pre>
        </>
    )
}