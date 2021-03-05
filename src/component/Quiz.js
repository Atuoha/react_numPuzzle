import React, { Component } from 'react'
import QuizOptions from './QuizOptions'

 class Quiz extends Component {

    constructor(props){
        super(props)
        
        let riddle = this.playGame()
        let correct =  false
        let gameOver = false

        this.state = {
            riddle,
            correct,
            gameOver,
            game_response: '',
            game_response_class: ''
        }
        this.renderOptions = this.renderOptions.bind(this)
        this.checkResult = this.checkResult.bind(this)
        this.play_again = this.play_again.bind(this)

    }


    randomize(min,max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    generateRandomOptions(sum){
        let resultsArray = [];
        let randomNumberArray = []

        while(randomNumberArray.length <= 3){
            let randomNumber =  this.randomize(1,19)
            if(randomNumberArray.indexOf(randomNumber) > -1) continue
            randomNumberArray.push(randomNumber)
        }

        for(let i = 0; i < 3; i++){
            let result = sum
            let addSubtract = this.randomize(0,1);
                if(addSubtract === 0){
                    // substract
                    result -= randomNumberArray[i]
                    resultsArray.push(result)
                }else{
                    // add
                    result += randomNumberArray[i]
                    resultsArray.push(result)
                }
        }
        return resultsArray
    }

    playGame(){
       
        let field1 = this.randomize(20,50)
        let field2 = this.randomize(20,50)
        let answer = field1 + field2
        let resultsArray = this.generateRandomOptions(answer)
        resultsArray.push(answer)
        resultsArray.sort(function(a,b){ return 0.5 - Math.random()})
        console.log(resultsArray)
        let riddle = {
            resultsArray,
            field1,
            field2,
            answer
        }
        if(this.state && this.state.gameOver){
            this.setState({riddle})
        }else{
            return riddle
        }
    }

    play_again(){
        this.setState({
            game_response: '',
            game_response_class: ''

        })
        this.playGame()
    }



    
    checkResult(option){
        if(this.state.riddle.answer === option){
            console.log(`Correct! ${option} is the answer`)
            this.setState({
                correct: true,
                gameOver: true,
                game_response: 'Kudos! You are absolutely correct. Play Again',
                game_response_class: 'after correct'
            })
        }else{
            console.log(`Wrong! ${option} is not the answer`)
            this.setState({
                correct: false,
                gameOver: true,
                game_response: 'Opps! You did not get lucky. Game Over | Play Again',
                game_response_class: 'after wrong'
            }) 
        }    
    }

    renderOptions(){
        return (
            <div className="options text-center">
                {this.state.riddle.resultsArray.map((result, i)=>
                    <QuizOptions options={result} key={i}  checkResult={this.checkResult} />
                )}

            </div>
        )   
       
    }

    render() {
        return (
            <div>
                <div className="col-md-10 mx-auto">
                <div className="container quiz">
                   <div className="quiz-content">
                       <p className="question"><i className="fa fa-question"></i> What is the sum of <span className="text-info">{this.state.riddle.field1}</span> and <span className="text-info">{this.state.riddle.field2}</span> </p>

                         {this.renderOptions()}                       

                        <hr />
                        <div className={this.state.game_response_class}>
                            {this.state.game_response} 
                        </div>
                       <a onClick={this.play_again} href="javascript:void(0)" rel="tag" className="btn btn-grey btn-block">Play Again!</a>

                    
                   </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Quiz