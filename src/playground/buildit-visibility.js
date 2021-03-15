class Visibility extends React.Component{
    constructor(props){
        super(props)
        this.handleToggleVisibility=this.handleToggleVisibility.bind(this)
        this.state={
            visibility:false
        }
    }
   handleToggleVisibility(){
       this.setState((prevState)=>{
           return{
            visibility:!prevState.visibility
           }
       })
   }
   
    
 render(){
     return(
        <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>{this.state.visibility?'Show':'Hide'}</button>
        {this.state.visibility && (
            <div><p>Hey these are the details you wanna see</p></div>
        )}
        </div>
     )
 }   
}
ReactDOM.render(<Visibility/>,document.getElementById('app'))
