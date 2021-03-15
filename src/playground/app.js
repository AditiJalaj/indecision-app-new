class IndecisionApp extends React.Component{
    constructor(props){
        super(props)
        this.handleDeleteOption=this.handleDeleteOption.bind(this)
        this.handlePick=this.handlePick.bind(this)
        this.handleAddOption=this.handleAddOption.bind(this)
        this.handleRemoveSingleOption=this.handleRemoveSingleOption.bind(this)
        this.state={
            options:[]
        }
    }
    
    componentDidMount(){
        try{
            const json=localStorage.getItem('options')
        this.setState(()=>{
            return {
                options:JSON.parse(json)
            }
        })
        }
        catch{

        }
        

    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.options.length!=this.state.options.length){
           const json=JSON.stringify(this.state.options)
           localStorage.setItem('options',json)
        }
    }
    handleDeleteOption(){
       this.setState(()=>({options:[]}))
    }

    handleRemoveSingleOption(optionToRemove){
            this.setState((prevState) => ({
              options: prevState.options.filter((option) => optionToRemove !== option)
            }));
    }
    handlePick(){
        const n=Math.floor((Math.random()*this.state.options.length))
        alert(this.state.options[n])
    }
    handleAddOption(option){
        if(!option){
            return 'Enter Something to add Option'
        }
        else if(this.state.options.indexOf(option)>-1){
            return 'This option already exists'
        }
        this.setState((prevState)=>({options: prevState.options.concat(option)}))
    }
    render(){
        const title='Indecision App'
        const subtitle="Place your life in the hands of a computer"
        let options=[12,23,32]

        return(
        <div>
        <Header title={title} subtitle={subtitle}/>
        <Action hasOptions={this.state.options.length>0}
        handlePick={this.handlePick}/>

        <Options options={this.state.options}
        handleDeleteOption={this.handleDeleteOption}
        handleRemoveSingleOption={this.handleRemoveSingleOption}/>
        <AddOption handleAddOption={this.handleAddOption} />
        </div>)
    }
}

const Header=(props)=>{
    return (<div>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
        </div>)
}

const Action=(props)=>{
    return(
        <div>
        <button onClick={props.handlePick} 
        disabled={!props.hasOptions}>
        What should I do?
        </button>
        </div>
    )
}


const Options=(props)=>{
    return (
        <div>
        <button onClick={props.handleDeleteOption}>Remove All</button>
        {props.options.length===0 && <p>Please add an Option to get Started</p>}
        {props.options.map((option)=><Option
            key={option} 
            optionT={option}
            handleRemoveSingleOption={props.handleRemoveSingleOption}
        />
        )}
       
        </div>
    )
}
const Option=(props)=>{
    return(
        <div>{props.optionT}
        <button onClick={(e)=>{
            props.handleRemoveSingleOption(props.optionT)
        }}>Remove</button></div>
    )
}


class AddOption extends React.Component{
    constructor(props){
        super(props)
        this.addOption=this.addOption.bind(this)
        this.state={
            error:undefined
        }
    }
    addOption(e){
       e.preventDefault()
       const option=e.target.elements.option.value.trim()
       const error=this.props.handleAddOption(option)
       this.setState(()=>({error:error}))

       if(!error){
           e.target.elements.option.value=''
       }
    }
    render(){
        return (
            <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.addOption}><input type="text" name="option"/>
            <button >Add option</button>
            </form>
            </div>
        )
    }
}


ReactDOM.render(<IndecisionApp/>,document.getElementById('app'))