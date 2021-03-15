console.log("app.js is running")
const object={
    title:'Indecision App',
    subtitle:"this is the subtitle",
    options:[]
}


const formSubmit=(e)=>{
    e.preventDefault()
    const option=e.target.elements.option.value
    if(option){
        object.options.push(option)
        e.target.elements.option.value=''
        renderApp()
    }
}
const removeall=()=>{
    object.options=[]
    renderApp()
}
const makeDecision=()=>{
    const number=Math.floor(Math.random()*object.options.length)
    const option=object.options[number]
    alert(option)   
}
const numbers=[112,22,223]

const renderApp=()=>{
   
    const template=(
        <div>
          <h1>{object.title}</h1>
          {object.subtitle && <p>{object.subtitle}</p>}
          {object.options.length>0?<p>Here are your options</p>:<p>No options</p>}
          <button disabled ={object.options.length===0} onClick={makeDecision}>What should I do?</button>
          <button onClick={removeall}>Remove All</button>
          
          <ol>
          {object.options.map((option)=>{
            return <li key={option}>{option}</li>
        })}
        </ol>
          <form onSubmit={formSubmit}>
          <input type="text" name="option"></input>
          <button>Add option</button>
          </form>
        </div>
        );
        
        ReactDOM.render(template,approute)
}

const approute=document.getElementById('app')
renderApp()