import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Editor} from "@monaco-editor/react";
import { MonacoBindings } from 'y-monaco';
import {useRef,useMemo} from 'react';
import * as Y from 'yjs';
import {SocketIOProvider} from 'y-socket.io';


function App() {
  const editorRef = useRef(null);

  
const handleMount = (editor) => {
  editorref.current = editor;


}


  return (
   <>
   <main
   className="h-screen w-full bg-gray-950 flex gap-4 p-4"
   >
    <aside className='h-full w-1/4 bg-amber-50 rounded-lg'></aside>
    <section className='w-3/4 bg-neutral-800 rounded-lg'>
    <Editor
  height="100%"
  defaultLanguage="javascript"
  defaultValue="// Write your code here"
  theme="custom-dark"
  beforeMount={(monaco) => {
    monaco.editor.defineTheme("custom-dark", {
      base: "vs-dark",
      inherit: true,
      rules: [],
      colors: {
        "editor.background": "#00000000", 
      },
    });
  }}
/>
    </section>


   </main>
   </>
  )
}

export default App
