let v='hide'
const show=()=>{
    if(v==='hide'){
        console.log(v)
        v ='show'
        
    }
    else{
        console.log(v)
        v='hide'
    }
    render()
}
const render=()=>{
    const template=(
        <div>
        <h1>Visibility toggle</h1>
        <button onClick={show}>{v}</button>
        {this.state.visibility && (
            <div><p>Hey these are the details you wanna see</p></div>
        )}
        </div>
    )
    
    ReactDOM.render(template,approute)
}

const approute=document.getElementById('app')
render()