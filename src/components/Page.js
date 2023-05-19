import { courses } from '../Pages.js'
const parse = require('html-react-parser');
const Page = (props) => {
    console.log({courses})
    
    return (
        <div className="page">
        
        {(props.screen==='Learn')&& parse(courses['Learn'])}
        {parse(courses['Course'])}
        <h1>Learn with Nexus</h1>
        <p>Nexus' program portfolio includes online degree programs, online graduate courses, and professional education certificates available to learners anywhere in the world. Explore our portfolio of career-defining courses and programs.</p>
        <hr></hr>
        </div>
    )

}
export default Page;