/*** APP COMPONENT ***/

const ScoreCircle = (props) => {
    return (
        <div className="scoreCircle">
            <span className="correctQsts"></span>
            <span className="allQsts"></span>
        </div>
    );
}

const Results = (props) => {
    return (
        <div className="outResult">
            <h2></h2>
            <p className="outResultDesc"></p>
        </div>
    );
}

const Skill = (props) => {
    return (
        <li className="skill" id="liReaction">
            <h2>Reaction</h2>
            <p className="score">
                <span className="reachedScore"></span>
                <span className="maxScore"></span>
            </p>
        </li>
    );
}

const Button = (props) => {
    return (
        <button>
            ...
        </button>
    );
}

const App = () => {
    return (
        <section className="float">
            <aside className="yourResult">
                <h1>Your Result</h1>
                <ScoreCircle/>
                <Results/>
            </aside>

            <aside className="summary">
                <h1>Summary</h1>

                <ul className="skillList">
                    <Skill/>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                </ul>

                <Button/>
            </aside>
        </section>
    );
}

export default App;