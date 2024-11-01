

export default function Preview({content}: {content: string}) {
    // We have sanitized the output HTML with dompurify
    return (<div id="preview">
        {<div dangerouslySetInnerHTML={{__html: content}} />}
    </div>);
}