import React, { Component } from 'react'

 class Header extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron bg-info text-white text-center">
                    <h1>QUIZ UP <i className="fa fa-book"></i></h1>
                    <p>...dropping the best numbers with intentions of a better answer!</p>
                </div>
            </div>
        )
    }
}

export default Header