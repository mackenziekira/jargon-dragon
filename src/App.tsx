import React, {useState} from 'react';
import dragon from './dragon.png';
import './App.css';

const App: React.FC = () => {
  const [words, updateWords] = useState([makeWordWithPos()])
  if (words.length < 40) {
    setTimeout(() => updateWords([...words, makeWordWithPos()]), 300)
  } 
  return (
    <div className="App">
      <header className="App-header">
        <p className="App-title"><strong>The Jargon Dragon</strong></p>
        <img src={dragon} alt='dragon' width={300} height={300} className='dragon'/>
        {words.map((wordWithPos: WordWithPosType) => <FallingWord {...wordWithPos} />)}
      </header>
    </div>
  );
}

const makeWordWithPos = (): WordWithPosType => {
  const randomYPos = Math.floor(Math.random()*window.outerHeight)
  const randomXPos = Math.floor(Math.random()*window.outerWidth)
  const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
  const word = jargonWords[Math.floor(Math.random()*jargonWords.length)]
    return {word: word, xPos: randomXPos, yPos: randomYPos, color: randomColor}
}

const FallingWord: React.FC<WordWithPosType> = (props: WordWithPosType) => {
  const absolute: 'absolute' = 'absolute'
  const divStyle = {
    position: absolute,
    top: props.yPos,
    left: props.xPos,
    color: props.color,
  };
  return <div style={divStyle} className='falling-word'>{props.word}</div>
}

interface WordWithPosType {
  word: string,
  xPos: number,
  yPos: number,
  color: string
}

const jargonWords = ['adient',
'apodictic',
'cetris paribus',
'entelechy',
'enthymeme',
'epiphenomenalist suspicion',
'epoché',
'ex hypothesi',
'explanandum',
'facon de parler',
'gnoseological',
'grosso modo',
'ignoratio elenchi',
'illata',
'illation',
'inter alia',
'Jemeinigkeit je meines',
'irrefrangible',
'ipseity',
'latitudinarian',
'mereological',
'modus ponens',
'Modus tollens',
'mutatis mutandis',
'nociceptive',
'noema',
'noesis',
'noetic',
'nomological',
'prolegomenon',
'propaedeutic',
'ratiocination',
'salva veritate',
'secundum quid',
'sensorium',
'sentiri',
'sorite',
'species chauvenism',
'tout court',
'transeunt',
'verbigerative',
'Weltanschauung',
'ignoratio elenchi',
'nomological net ',
'perspicuous nexus',
'transeunt causation']

export default App;
