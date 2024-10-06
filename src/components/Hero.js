import React from 'react'
import { Component } from 'react';

class Hero extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            title : "new heading1",
            belowtag : 'paragraph',
        }
    }
    changeText() {
        this.setState({
            title: "new heading3",
            belowtag: 'paragraph2'
        }
            );
    }
    render() {
        return(
            <div>
                <h1>
                    This is { this.state.title} and below is { this.state.belowtag}.
                  </h1>
                  <p>
                    An engagement platform made exclusively for
                    higher education.
                  </p>
                  <div className="s-48"></div>
                  <button onClick={()=> this.changeText()}>Toggle Heading</button>
             </div>
        )
            
    }
}

export default Hero;