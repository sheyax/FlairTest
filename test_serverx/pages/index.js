import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


 

export default function Home() {


  return (
    
    <div classname="container_home" >

    <div className="HomeArea">

      <h1> Welcome to Flair Homework Test </h1>
      </div>

    <div className="homeproj">
        <Link href="/projects"><a>
          Project Page</a></Link>
    </div>
    </div>
    
  )
}
