import React, {useState} from 'react';
import dragon from './dragon.png';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p className="App-title"><strong>The Jargon Dragon</strong></p>
        <img src={dragon} alt='dragon' width={300} height={300}/>
        {jargonWords.map((word: string) => <FallingWord word={word} />)}
      </header>
    </div>
  );
}

const FallingWord: React.FC<FallingWordProps> = (props: FallingWordProps) => {
  const absolute: 'absolute' = 'absolute'
  const randomYPos = Math.floor(Math.random()*window.innerHeight)
  const randomXPos = Math.floor(Math.random()*window.innerWidth)
  const divStyle = {
    position: absolute,
    top: randomYPos,
    left: randomXPos,
  };
  return <div style={divStyle} className='falling-word'>{props.word}</div>
}

interface FallingWordProps {
  word: string,
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
