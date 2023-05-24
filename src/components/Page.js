import { courses } from '../Pages.js'
import Splash from './Splash';

const parse = require('html-react-parser');

const Page = (props) => {

    
    return (
        <div className="page">
        {/* Using {screen} to 'select' the page we want to load. */}
         {courses[props.screen]}

        {/* The component is 'compiled' in Pages */}
        {courses['Splash']}
        <div>Pages Splash Above! The routing type way!</div>


        {parse(courses['Course'])}
        <h1>Learn with Nexus</h1>
        <p>Nexus' program portfolio includes online degree programs, online graduate courses, and professional education certificates available to learners anywhere in the world. Explore our portfolio of career-defining courses and programs.</p>
        <hr></hr>
        </div>
    )

}
export default Page;