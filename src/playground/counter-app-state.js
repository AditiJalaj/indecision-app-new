class Counter extends React.Component{
    constructor(props){
        super(props)
        this.add =this.add.bind(this)
        this.minus=this.minus.bind(this)
        this.reset=this.reset.bind(this)
        this.state={
            count:0
        }
    }
    
    componentDidMount(){
        const stringCount=localStorage.getItem('count')
        const count=parseInt(stringCount,10)
        if(!isNaN(count)){
            this.setState(()=>({count:count}))
        }
        
    }

    componentDidUpdate(prevState){
        if(prevState.count!=this.state.count){
           
           localStorage.setItem('count',this.state.count)
        }
    }
    
    add(){
        this.setState((prevstate)=>{
            return{
                count:prevstate.count+1
            }
        });
    }
    minus(){
        this.setState((prevstate)=>{
            return{
                count:prevstate.count-1
            }
        })
    }
    reset(){
        this.setState(()=>{
            return{
                count:0
            }
        })
    }
    render(){
        return(
            <div>
            <h1> Counter-App:{this.state.count}</h1>
            <button onClick={this.add}>+1</button>
            <button onClick={this.minus}>-1</button>
            <button onClick={this.reset}>Reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter/>,document.getElementById('app'))