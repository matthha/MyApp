import { courses } from '../Pages.js'
import Splash from './Splash';

const parse = require('html-react-parser');

const Page = (props) => {
 
    
    return (
        <div className="page">
        {/* Using {screen} to 'select' the page we want to load. */}
        {(courses[props.screen])}
        {props.screen === 'Learn' && <div>'Learn'</div>}
        {true ? 'Learn' + ' ✔' : 'name'}

        {/* { if ({props.screen} === 'Learn') {return <div>'Learn'</div>} } */}
        {/* The component is 'compiled' in Pages 
        {courses['Splash']}
        <div>Pages Splash Above! The routing type way!</div>*/}

        {/* {parse(courses['Course'])} */}
        <hr></hr>
        </div>
    )

}
export default Page;