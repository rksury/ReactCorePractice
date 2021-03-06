import React from "react";

class ReactStateAndCycle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date(),
            date: new Date()
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.timeData(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    timeData() {
        this.setState({
            time: new Date()
        });
    }
    render (){
        return (
            <div style={{textAlign:"center"}}>
                <h1>Current Time {this.state.time.toLocaleTimeString()} <span style={{fontSize:16}}> and Date  {this.state.date.toLocaleDateString()}</span></h1>
            </div>
        )
    };
}

export default ReactStateAndCycle;