/*** APP COMPONENT ***/
/* eslint-disable react/prop-types */

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
    return (
        <li className="skill" id={'li' + props.name}>
            <h2>{props.name}</h2>
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
                    <Skill name="Reaction" reachedScore="80" maxScore="100"/>
                    <Skill name="Memory" reachedScore="92" maxScore="100"/>
                    <Skill name="Verbal" reachedScore="61" maxScore="100"/>
                    <Skill name="Visual" reachedScore="72" maxScore="100"/>
                </ul>

                <Button value="Continue"/>
            </aside>
        </section>
    );
}

export default App;