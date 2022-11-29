import Project from './project';
import data from '../data/info.json'; 

export default function Projects() {
    
   return (
    
    <section id='links' className='d-flex flex-row'>
        {data.map(project => (
            <Project src={`${process.env.PUBLIC_URL}${project.src}`} alt={project.alt} title={project.title} href={project.href} linkText={project.linkText}></Project>
        ))}
    </section>
   ) 
};