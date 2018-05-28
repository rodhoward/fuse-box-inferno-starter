import { Component } from 'inferno';

import { ModalExample } from './modal';

export class MyApp extends Component {
    public state = {
        counter: 6
    };
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1 class="blar">Header!</h1>
                <span>Counter is at: {this.state.counter}</span>
                <div class="ml-2"><ModalExample buttonLabel="YO" /></div>
            </div>
        );
    }
}