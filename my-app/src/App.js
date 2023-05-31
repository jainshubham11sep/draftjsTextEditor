import React, { useState } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./App.css";

function App() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  return (
    <div className="App">
      <header className="App-header">Rich Text Editor</header>

      <Editor editorState={editorState} onEditorStateChange={setEditorState} />
    </div>
  );
}

export default App;
