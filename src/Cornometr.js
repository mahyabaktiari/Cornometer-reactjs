import React, { Component } from 'react'

export class Cornometr extends Component {
    constructor(){
        super()
        this.state = { 
            Hsecond : 0 ,
            second : 0 ,
            minute : 0 ,
            stop : false , 
            start : true,
        }
    }

    start = ()=>{
        if(this.state.start){
            let myInterval = setInterval(()=>{
                if(this.state.stop){
                    clearInterval(myInterval)
                    this.setState({stop : !this.state.stop})
                }else{
                    
                    if(this.state.Hsecond === 60){
                        this.setState({Hsecond : 0 , second : this.state.second + 1})
                        if(this.state.second === 60){
                            this.setState({second : 0 , minute : this.state.minute + 1})
                        }
                    }else{
                        this.setState({Hsecond : this.state.Hsecond + 1})
                    }
                    // this.setState({counter : time})
                }
            } , 10)
            this.setState({start : false})
        }
    }

    stop = ()=>{
        this.setState({stop : true , start: true})
    }

    
    render() {
        return (
            <div className='chorno'>
                <h3>{this.state.minute} : {this.state.second} : {this.state.Hsecond}</h3>
                <button onClick={this.start}>Start</button>
                <button onClick={this.stop}>Stop</button>
                <button onClick={()=>{this.setState({ Hsecond : 0 , second : 0 , minute : 0 , stop:true , start : true})}}>Reset</button>
            </div>
        )
    }
}

export default Cornometr
