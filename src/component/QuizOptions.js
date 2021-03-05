import React, { Component } from 'react'
import '../App.css';


class QuizOptions extends Component {
 
    constructor(props){
        super(props)

        this.state = {}
        this.callParentFnc = this.callParentFnc.bind(this)
    }

    callParentFnc(){
        this.props.checkResult(this.props.options)
    }

    render() {
        return (
                 <div className="fields" onClick={this.callParentFnc}>
                    <div className="field-block">{this.props.options}</div>
                 </div> 
        )
    }
}

export default QuizOptions