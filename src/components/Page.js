// import {Pages} from '../Pages.js'
const Page = (props) => {
    
    return (
        <div className="page">

        {(props.screen==='Learn')&& 'Hello'}
        <h1>Learn with Nexus</h1>
        <p>Nexus' program portfolio includes online degree programs, online graduate courses, and professional education certificates available to learners anywhere in the world. Explore our portfolio of career-defining courses and programs.</p>
        <hr></hr>
        </div>
    )

}
export default Page;