import React, { useState } from "react";
import "./App.css";
import asl from "./asl.png";
import dragon from "./dragon.png";

const App: React.FC = () => {
  const [words, updateWords] = useState([makeWordWithPos()]);
  if (words.length < 40) {
    setTimeout(() => updateWords([...words, makeWordWithPos()]), 300);
  }
  return (
    <div className="App">
      <header className="App-header">
        <p className="App-title">
          <strong>The Jargon Dragon</strong>
        </p>
        <img
          src={dragon}
          alt="dragon"
          width={300}
          height={300}
          className="dragon"
        />
        <p className="fade-in explanation">
          Language brings people together in creative ways. It can also prevent
          people from understanding each other. The Jargon Dragon is a way to
          indicate that words are inaccessible. It’s helpful in group settings
          when people want to avoid interrupting a discussion. It’s also helpful
          when people feel uncomfortable identifying themselves as needing help
          understanding what’s being said. Jargon Dragon comes from the ASL sign
          for “ask”. It's invoked by extending an index finger upwards and
          downwards in a crooked position similar to the ASL letter “X”.
        </p>
        <img
          src={asl}
          alt="asl-sign"
          width={300}
          height={300}
          className="fade-in asl-sign"
        />
        {words.map((wordWithPos: WordWithPosType) => (
          <FallingWord {...wordWithPos} />
        ))}
      </header>
    </div>
  );
};

const makeWordWithPos = (): WordWithPosType => {
  const randomYPos = Math.floor(Math.random() * window.outerHeight);
  const randomXPos = Math.floor(Math.random() * window.outerWidth);
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  const word = jargonWords[Math.floor(Math.random() * jargonWords.length)];
  return { word: word, xPos: randomXPos, yPos: randomYPos, color: randomColor };
};

const FallingWord: React.FC<WordWithPosType> = (props: WordWithPosType) => {
  const absolute: "absolute" = "absolute";
  const divStyle = {
    position: absolute,
    top: props.yPos,
    left: props.xPos,
    color: props.color,
  };
  return (
    <div style={divStyle} className="falling-word">
      {props.word}
    </div>
  );
};

interface WordWithPosType {
  word: string;
  xPos: number;
  yPos: number;
  color: string;
}

const jargonWords = [
  "adient",
  "apodictic",
  "cetris paribus",
  "entelechy",
  "enthymeme",
  "epiphenomenalist suspicion",
  "epoché",
  "ex hypothesi",
  "explanandum",
  "facon de parler",
  "gnoseological",
  "grosso modo",
  "ignoratio elenchi",
  "illata",
  "illation",
  "inter alia",
  "Jemeinigkeit je meines",
  "irrefrangible",
  "ipseity",
  "latitudinarian",
  "mereological",
  "modus ponens",
  "Modus tollens",
  "mutatis mutandis",
  "nociceptive",
  "noema",
  "noesis",
  "noetic",
  "nomological",
  "prolegomenon",
  "propaedeutic",
  "ratiocination",
  "salva veritate",
  "secundum quid",
  "sensorium",
  "sentiri",
  "sorite",
  "species chauvenism",
  "tout court",
  "transeunt",
  "verbigerative",
  "Weltanschauung",
  "ignoratio elenchi",
  "nomological net ",
  "perspicuous nexus",
  "transeunt causation",
];

export default App;
