import React from "react";

// Controlled component
export default function Editor({value, handleChange}: {value: string, handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void}) {

    return <textarea value={value} id="editor" onChange={handleChange}></textarea>;
}