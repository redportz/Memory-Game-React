import "./DifficultySelect.css";

function Difficulty_selector({difficulty, setDifficulty}) {

    function handleDifficultyChange(newDifficulty) {
        setDifficulty(newDifficulty);
    }

    return (
        <>
                <ul className="modes-list">
                <label htmlFor="Modes">Modes:</label>
                  <li><button className={difficulty === "beginner" ? "selected-diff" : "difficulty"} 
                    onClick={() => handleDifficultyChange("beginner")}>Beginner</button>
                    </li>
                  <li><button className={difficulty === "intermediate" ? "selected-diff" : "difficulty"} 
                    onClick={() => handleDifficultyChange("intermediate")}>Intermediate</button>
                    </li>
                  <li><button className={difficulty === "advanced" ? "selected-diff" : "difficulty"} 
                    onClick={() => handleDifficultyChange("advanced")}>Advanced</button>
                    </li>
                </ul>
              </>
    )
}

export default Difficulty_selector;