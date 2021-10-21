import Sidebar from '../components/Sidebar'
import { useRouter } from 'next/router'
import {useState} from "react";



const Newproject = () => {

  const [name, setProject]= useState(() => {
    const initialState =" ";
    return initialState;
  });

  const [teaser, setTeaser]= useState(() => {
    const initialState =" ";
    return initialState;
  });

  const [type, setTypes]= useState(() => {
    const initialState =" ";
    return initialState;
  });

  const [deadline, setDeadline]= useState(() => {
    const initialState =" ";
    return initialState;
  });

  const [image, setImage]= useState(() => {
    const initialState =" ";
    return initialState;
  });
  
  const submit= async (e) => {
    e.preventDefault();

    await fetch('http://localhost:3000/projects', {
      method: 'POST',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify({
        name,
        teaser,
        image,
        type,
        deadline,

      })
    });

  }

  const router = useRouter()




    return ( 
    <div className="container ">
        <div className="menu">
        <Sidebar />
    </div>
<div className="mainArea"> 


<form onSubmit={submit}>
<div className="form-title">
<h3> Add a New Project </h3>
</div>
    <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Project Name</label>
  <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="Enter Project Name" onChange= { e => setProject(e.target.value)} />
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Project Teaser  (Description) </label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange= { e => setTeaser(e.target.value)}></textarea>
</div>

<div class="mb-3">
  <label for="formFileSm" class="form-label">Project Image</label>
  <input class="form-control form-control-sm" id="formFileSm" type="file" onChange= { e => setImage(e.target.value)}/>
</div>

<div className="mb-3">
<label for="exampleDataList" class="form-label">Project Type</label>
<input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." onChange= { e => setTypes(e.target.value)}/>
<datalist id="datalistOptions">
  <option value="Investment"/>
  <option value="Acceleration"/>
  <option value="Landing Program"/>
  <option value="Incubator"/>
  <option value="Upskilling"/>
</datalist>
</div>
<div className="mb-3">
      <label for="date" className="form-label">Deadline</label>
      <input class="form-control" type="date" id="date"  onChange= { e => setDeadline(e.target.value)}/>
    
    </div>

    <button type="submit" class="btn btn-primary" onClick={() => router.push('/projects')}>Submit</button>

    </form>
</div>

</div>
)
    ;
}
 
export default Newproject;