let count=0
const addOne=()=>{count++;
    renderCounter()}

const minusOne=()=>{count--
     renderCounter()  }

const reset=()=>{count=0; renderCounter()};

const renderCounter=()=>{
    const templatetwo=(
    <div>
    <h1>Count:{count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>Reset</button>
    </div>
)
ReactDOM.render(templatetwo,approute)
}
    
const approute=document.getElementById('app')
renderCounter()