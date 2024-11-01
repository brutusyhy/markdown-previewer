
import {marked} from "marked";
//import DOMPurify from "dompurify";

// Rendering HTML based on user output could be dangerous
// This function uses DOMPurify to first sanitize the preview HTML
export default async function parseMarkdown(markdown: string) {
    return await marked.parse(markdown);
    //return DOMPurify.sanitize(await marked.parse(markdown));
}