import React from "react";
import Clock from "react-clock";

export class Card extends React.Component<any, any> {

    state = {
        time: this.getCurrentTime(),
    }
    intervalID: any;

    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    getCurrentTime() {
        let time = new Date();
        time.setMinutes(time.getMinutes() + time.getTimezoneOffset() + parseInt(this.props.Offset));
        return time;
    }

    tick() {
        this.setState({
            time: this.getCurrentTime()
        });
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <h3>
                        <img src={'https://www.countryflags.io/' + this.props.ISO + '/flat/24.png'} className="flag" alt={this.props.Country} /> {this.props.Country}
                    </h3>
                    <h4>{this.props.Timezone}</h4>
                </div>
                <div className="card-body">
                    <Clock value={this.state.time} className="clock" />
                    <p>{this.state.time.toLocaleString()}</p>
                </div>
                <div className="card-footer">
                    <div onClick={this.props.removeClick} className="btn-remove">Remove</div>
                </div>
            </div>
        )
    }

}
