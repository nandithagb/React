import React  from 'react'

export default function About(props) {
    // const[mystyle,setMyStyle]=useState(
    // {
    //     color:'black',
    //     backgroundColor:'white',
    // })
    let mystyle={
color:props.mode==='dark'?'white':'#042743',
backgroundColor:props.mode==='dark'?'rgb(36 74 104)':'white',
border:'2px solid',
borderColor:props.mode==='dark'?'white':'#042743',
    }

  return (
    <div className='container' style={{color:props.mode==='dark'?'white':'#042743' }}>
        <h1 className='my-3'>About Us</h1>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button"  style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Analyze your text
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle} >
      Text analysis (TA) is a machine learning technique used to automatically extract valuable insights from unstructured text data. Companies use text analysis tools to quickly digest online data and documents, and transform them into actionable insights.      </div>
    </div>
  </div>
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
    Free to use
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
      What is free text analysis?
The purpose of Text Analysis is to create 
structured data out of free text content. 
The process can be thought of as slicing and dicing heaps of unstructured,
 heterogeneous documents into easy-to-manage and interpret data pieces. </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       Browse capabilities
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
      When a WebDriver session is created it returns a set of capabilities describing the negotiated, 
      effective capabilities of the session. Some of the capabilities included in this set are standard and shared between all browsers, 
      but the set may also contain browser-specific capabilities and these are always prefixed. </div>
    </div>
  </div>
</div>
    </div>
  )
}
