import { useState } from "react";

import "./App.css";
import ProjectCard from "./projectCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="Heading">
        <h1>My Projects</h1>
        <div className="OuterPage">
          <div className="CardGroup">
            <ProjectCard
              avatar="http://placekitten.com/200/200"
              tag1="Unity"
              tag2="C#"
              tag3="Game Development"
              projectName="Out Of Sight"
              cardText="some text."
            />
            <ProjectCard
              avatar="http://placekitten.com/500/200"
              tag1="Unity"
              tag2="C#"
              tag3="Game Development"
              projectName="Villainous Vengance"
              cardText="some text"
            />
            <ProjectCard
              avatar="http://placekitten.com/200/200"
              tag1="C++"
              tag2="Game Development"
              tag3="DirectX11"
              projectName="Whack A' Mole"
              cardText="some text."
            />
            <ProjectCard
              avatar="http://placekitten.com/200/200"
              tag1="JavaScript"
              tag2="React"
              tag3="HTML&CSS"
              projectName="This page"
              cardText="some text."
            />
            <ProjectCard
              avatar="http://placekitten.com/200/200"
              tag1="JavaScript"
              tag2="React"
              tag3="HTML&CSS"
              projectName="This page"
              cardText="some text."
            />
            <ProjectCard
              avatar="http://placekitten.com/200/200"
              tag1="JavaScript"
              tag2="React"
              tag3="HTML&CSS"
              projectName="This page"
              cardText="some text."
            />
            <ProjectCard
              avatar="http://placekitten.com/200/200"
              tag1="JavaScript"
              tag2="React"
              tag3="HTML&CSS"
              projectName="This page"
              cardText="some text."
            />
            <ProjectCard
              avatar="http://placekitten.com/200/200"
              tag1="JavaScript"
              tag2="React"
              tag3="HTML&CSS"
              projectName="This page"
              cardText="some text."
            />
            <ProjectCard
              avatar="http://placekitten.com/200/200"
              tag1="JavaScript"
              tag2="React"
              tag3="HTML&CSS"
              projectName="This page"
              cardText="some text."
            />
            <ProjectCard
              avatar="http://placekitten.com/200/200"
              tag1="JavaScript"
              tag2="React"
              tag3="HTML&CSS"
              projectName="This page"
              cardText="some text."
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
