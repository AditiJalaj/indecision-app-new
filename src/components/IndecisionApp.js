import React from 'react'
import AddOption from './AddOption'
import Header from './Header.js'
import Action from './Action.js'
import Options from './Options.js'
import OptionModal from './OptionModal.js'

export default class IndecisionApp extends React.Component{
    state={
        options:[''],
        selectedOption:undefined
    }
    handleDeleteOption=()=>{
        this.setState(()=>({options:[]}))
    }
    handleClearModal=()=>{
        this.setState(()=>{
            return{
                selectedOption:undefined
            }
        })
    }
     

    handleRemoveSingleOption=(optionToRemove)=>{
        this.setState((prevState) => ({
          options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }
handlePick=()=>{
    const n=Math.floor((Math.random()*this.state.options.length))
    this.setState(()=>{
        return {
            selectedOption:this.state.options[n]
        }
    })
}
handleAddOption=(option)=>{
    if(!option){
        return 'Enter Something to add Option'
    }
    else if(this.state.options.indexOf(option)>-1){
        return 'This option already exists'
    }
    this.setState((prevState)=>({options: prevState.options.concat(option)}))
}
    componentDidMount(){
        try{
            const json=localStorage.getItem('options')
            const options=JSON.parse(json)
            
            if(options){
                this.setState(()=>({options:options}))
            }
       
        }
        catch(e){
        }
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.options.length!==this.state.options.length){
           const json=JSON.stringify(this.state.options)
           localStorage.setItem('options',json)
        }
    }
    
    render(){
        const title='Indecision App'
        const subtitle="Place your life in the hands of a computer"
        // let options=[12,23,32]

        return(
        <div>

        <Header title={title} subtitle={subtitle}/>
        <Action hasOptions={this.state.options}
        handlePick={this.handlePick}/>
        <Options options={this.state.options}
        handleDeleteOption={this.handleDeleteOption}
        handleRemoveSingleOption={this.handleRemoveSingleOption}/>
        <AddOption handleAddOption={this.handleAddOption} />
        <OptionModal selectedOption={this.state.selectedOption}
        handleClearModal={this.handleClearModal}/>
        </div>)
    }
}
