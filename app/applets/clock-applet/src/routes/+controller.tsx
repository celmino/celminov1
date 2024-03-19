import {
    Button,
    ForEach,
    HStack,
    ReactView,
    Text,
    UIFormController,
    VStack,
    cTopLeading
} from "@tuval/forms";
import React from "react";
import { Timezones } from "../Timezones";
import { Card } from "./views/Card";



class App extends React.Component<any, any> {
    constructor(props) {
        super(props)
        this.addTimeZone = this.addTimeZone.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            clocks: [],
            selectedClock: 'Asia/Kabul'
        };
    }

    handleChange(e) {
        this.setState({ selectedClock: e.target.value });
    }

    addTimeZone() {
        if (this.state.clocks.findIndex(c => c.Timezone === this.state.selectedClock) < 0) {
            let zone = Timezones.find(k => k.Timezone === this.state.selectedClock);
            this.setState(prevState => ({
                clocks: [...prevState.clocks, zone]
            }));
        }
    }

    removeClick(zone) {
        let updateClocks = this.state.clocks;
        let index = updateClocks.findIndex(t => t.Timezone === zone);
        updateClocks.splice(index, 1)
        this.setState({
            clocks: updateClocks
        });
    }


    render() {
        let optionItems = Timezones.map((zone) =>
            <option value={zone.Timezone} key={zone.Timezone} onChange={this.handleChange}>{zone.Country} ({zone.Timezone})</option>
        );



        return (
            VStack(
                HStack(
                    ReactView(




                        <select className="form-input" value={this.state.selectedClock} onChange={this.handleChange}>
                            {optionItems}
                        </select>





                    ),
                    Button(
                        Text('Add')
                    ).onClick(this.addTimeZone)
                ), HStack(
                    ...ForEach(this.state.clocks)((zone: any) =>
                        ReactView(

                            <Card {...zone} key={zone.Timezone} removeClick={() => this.removeClick(zone.Timezone)} />

                        )
                    )

                )

            ).render()

        );
    }
}

export class AppletController extends UIFormController {
    public LoadView() {

        return (
            VStack({ alignment: cTopLeading })(
                Text('World Clock'),
                ReactView(
                    <App></App>
                )
            )

        )
    }

}