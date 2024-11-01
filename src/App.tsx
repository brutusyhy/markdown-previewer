import React, {useEffect, useState} from 'react'

import './App.css'
import Editor from "./components/Editor.tsx";
import Preview from "./components/Preview.tsx";
import parseMarkdown from "./services/markdown.ts";

function App() {
    const defaultString = `# Sample Markdown
## Useful info
[Basic Markdown Syntax](https://www.markdownguide.org/basic-syntax/)

Inline \`code example\`
\`\`\`
This is a code block
\`\`\`
Example List
- First item
- Second item

> Several markdown syntaxes won't display correctly
> Possibly because of **sanitization**

![A cat] (https://en.wikipedia.org/wiki/Cat#/media/File:Gustav_chocolate.jpg)
`
    const [value, setValue] = useState('');
    const [preview, setPreview] = useState('');

    useEffect(() => {
        setValue(defaultString);
        parseMarkdown(defaultString)
            .then(defaultPreview => setPreview(defaultPreview));
    }, [defaultString])

    async function handleChange (event: React.ChangeEvent<HTMLTextAreaElement>) {
        setValue(event.target.value);
        const newPreview = await parseMarkdown(event.target.value);
        setPreview(newPreview);
    }
    return (
        <div>
            <Editor value={value} handleChange={async (event) => {await handleChange(event)}}/>
            <Preview content={preview}/>
        </div>
    );
}

export default App
