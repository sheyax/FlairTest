import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'


export const getStaticPaths = async ()=>{

    const res= await fetch('http://localhost:3000/projects');
    const data= await res.json();

    const paths= data.map(project => {

        return{
            params: {id: project.id.toString()}
        }
    })
    return{
        paths,
        fallback: false,

    }

    
}

export const getStaticProps= async (context) => {
const id= context.params.id;
const res= await fetch('http://localhost:3000/projects/'+ id)
const data= await res.json();

return{
    props:{ project: data}
}

}

const Details = ({project}) => {
    

    return ( 
        <div className="container">

<div className = "menu" >
        <Sidebar/>
        </div>
<div className = "mainArea">

<div className = "headArea" >

<Header/>

</div> 

            <div>
            <h3>{project.name}</h3>
            <img src={project.image}/>
            <p>{project.teaser}</p>

            </div>

            </div>
        </div>
     );
}
 
export default Details;