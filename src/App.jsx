import {marked} from 'marked';
import { useState } from 'react';


const App = () => {

  const str = `# Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:
  
  Heres some code, \`<div></div>\`, between 2 backticks.
  
  \`\`\`
  // this is multi-line code:
  
  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`
  
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.
  
  There's also [links](https://www.freecodecamp.org), and
  > Block Quotes!
  
  And if you want to get really crazy, even tables:
  
  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | -------------
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.
  
  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.
  
  
  1. And there are numbered lists too.
  1. Use just 1s if you want!
  1. And last but not least, let's not forget embedded images:
  
  ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`

  const [html, setHtml] = useState(marked(str));

  const handleTextareaChange = (event) => {
    const newText = event.target.value;
    setHtml(marked(newText));
  }

  return (
    <div className="container bg-custom rounded border border-5 border-dark p-2 h-100 position-fixed top-50 start-50 translate-middle">
      <div className="row h-50">
        <div className="col-12">
          <div className="form-group">
            <label className="form-control form-label border border-dark border-5 rounded bg-success text-center text-dark fs-3" for="exampleFormControlTextarea1">Editor</label>
            <textarea defaultValue={str} className="border border-5 border-success bg-dark text-success form-control" id="editor" onChange={handleTextareaChange} rows="10"></textarea>
          </div>
        </div>
      </div>
      <div className="row h-50">
        <div className="col-12 p-3">

          <h3 className='container bg-success rounded-pill d-flex justify-content-center border border-5 w-25 text-center border-dark'>
            Preview
          </h3>
          <div className="overflow-auto container-fluid bg-dark text-light rounded border w-75 mt-2 border-success border-5 h-50">
            <div id="preview" dangerouslySetInnerHTML={{ __html: html }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
