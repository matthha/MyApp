import { theCourses } from "../Courses"
const Learn = ({screen, setScreen}) => {
    return (
        <div>
            The content on the Learn page.
            {/* map through the courses to show what's available, create the cards in map */}
            <div className="g4">
                {theCourses.map((a,b)=>
                    <div className="g2" key={b}><div>{a[0]}</div><button onClick={(e) => setScreen(a[2])}>View Course</button></div>
                )}
            </div>
        </div>
    )
    // {results.length > 0 && results.map((result, index) => <li key={index} onClick={(e) => chooseResult(result)}>{result}</li>)}
}
export default Learn