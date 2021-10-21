import Link from 'next/link'
import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'

export const getStaticProps = async() => {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('http://localhost:3000/projects')
    const posts = await res.json()

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            posts,
        },
    }
}


const Projects = ({ posts }) => {
    return ( <div className = "container" >

        <div className = "menu" >
        <Sidebar/>
        </div>

        <div className = "mainArea" >

        <div className = "headArea" >

        <Header/>

        </div> 
        <div className = "DataArea" >

        <table className = "projectData" >
        <tr >
        <th > My Project </th> 
        <th > Project Type </th> 
        <th > Deadline </th> 
        <th > Status </th>

        </tr> 
        {posts.map((post) => (



                <tr>
                <td id = "proj">
                <div>
                <img src = { post.image }/> 
                </div>

                <div>

                <Link href={'/projects/' + post.id} key={post.id}><a className="projname text-decoration-none">
                <h3 > <b> { post.name } </b></h3 >
                </a></Link>

                <p > { post.teaser } </p> 
                </div> </td>

                <td id = "others" > { post.type } </td>

                <td id = "others" >
                <p > { post.deadline } </p> </td>

                <td id = "others" >
                <p > { post.applications }Applications </p> 
                </td>

                </tr>


            ))
        }

        </table> <div className = "newproj" >

        <svg xmlns = "http://www.w3.org/2000/svg"
        width = "30"
        height = "30"
        fill = "currentColor"
        class = "bi bi-plus-circle"
        viewBox = "0 0 16 16" >
        <path d = "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
        < path d = "M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
        </svg> 
        
        <Link href = "/newproject" >< a >
        Upload a new project </a></Link >


        </div> 
        </div> 
        </div>

        </div>
    )
}
export default Projects