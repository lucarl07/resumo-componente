/* eslint-disable no-undef */
/*** APP COMPONENT ***/
/* eslint-disable react/prop-types */

import iconMemory from './assets/images/icon-memory.svg'
import iconReaction from './assets/images/icon-reaction.svg'
import iconVerbal from './assets/images/icon-verbal.svg'
import iconVisual from './assets/images/icon-visual.svg'

const ScoreCircle = (props) => {
    return (
        <div className="scoreCircle">
            <span className="reachedScore">{props.reachedScore}</span>
            <span className="maxScore">of {props.maxScore}</span>
        </div>
    );
}

const Result = (props) => {
    return (
        <div className="result">
            <h2>{props.value}</h2>
            <p className="resultDesc">
                {props.description}
            </p>
        </div>
    );
}

const Skill = (props) => {
    const bgColor = props.color.slice(0, 6) + 'bg-' + props.color.slice(6)
    let sIcon = '';

    switch (props.name) {
        case 'Reaction':
            sIcon = iconReaction
            break;
        case 'Memory':
            sIcon = iconMemory
            break;
        case 'Verbal':
            sIcon = iconVerbal
            break;
        case 'Visual':
            sIcon = iconVisual
            break;
        default:
            throw new Error('Ícone indisponível para esse tipo de habilidade.');
    }

    return (
        <li className="skill" id={'li' + props.name} style={{backgroundColor: bgColor}}>
            <div>
                <img src={sIcon} alt={`${props.name} skill icon`} />
                <h2 style={{color: props.color}}>{props.name}</h2>
            </div>
            <p className="score">
                <span className="reachedScore">{props.reachedScore} </span>
                <span className="maxScore">/ {props.maxScore}</span>
            </p>
        </li>
    );
}

const Button = (props) => {
    return (
        <button className="btn" id={'btn' + props.value}>
            {props.value}
        </button>
    );
}

const App = () => {
    return (
        <section className="float">
            <aside className="yourResult">
                <h1>Your Result</h1>

                <ScoreCircle reachedScore="76" maxScore="100"/>

                <Result value="Great" description="You scored higher than 65% of people who have taken these tests."/>
            </aside>

            <aside className="summary">
                <h1>Summary</h1>

                <ul className="skillList">
                    <Skill name="Reaction" reachedScore="80" maxScore="100" color="var(--light-red)"/>
                    <Skill name="Memory" reachedScore="92" maxScore="100" color="var(--orangey-yellow)"/>
                    <Skill name="Verbal" reachedScore="61" maxScore="100" color="var(--green-teal)"/>
                    <Skill name="Visual" reachedScore="72" maxScore="100" color="var(--cobalt-blue)"/>
                </ul>

                <Button value="Continue"/>
            </aside>
        </section>
    );
}

export default App;