import React from "react";

class Temperature extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 18,
            color: 'rgb(47, 37, 90)'
        };
    }
    temperatureIncrement = () => {
        const newCount = this.state.count + 1;
        const newColor = newCount > 15 ? 'rgb(90, 37, 37)' : 'rgb(47, 37, 90)';
        this.setState({ count: newCount, color: newColor });

    }

    temperatureDecrement = () => {
        const newCount = this.state.count - 1;
        const newColor = newCount > 15 ? 'rgb(90, 37, 37)' : 'rgb(47, 37, 90)';
        this.setState({ count: newCount, color: newColor });
    }

    render() {
        return (
            <div className="temperature-app" style={{backgroundColor: this.state.color}}>
                <h1>{this.state.count}°C</h1>
                <div className="buttons">
                    <button onClick={this.temperatureIncrement}>+</button>
                    <button onClick={this.temperatureDecrement}>-</button>
                </div>
            </div>
        );
    }
}

export default Temperature