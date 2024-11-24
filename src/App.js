import './App.css';
import CardHeader from "./component/CardHeader";
import Card from "./component/Card";
import {PureComponent} from "react";
import InputText from "./component/InputText";
import ProgressBar from "./component/ProgressBar";

class App extends PureComponent {
    constructor(props, context) {
        super(props, context);
        this.state = {
            "secret": 549,
            "guess": 123,
            "counter": 60
        }
    }


    componentDidMount = () => {
        setInterval(() => {
            this.setState({
                counter: this.state.counter - 1
            }, () => {
                console.log(this.state);
            });
        }, 1_000)
    }
    handleInput = (e) => {
        this.setState({guess: e.target.value});
    }

    render() {
        return (
            <div className="container">
                <Card>
                    <CardHeader title="**Game Console**"></CardHeader>
                    <div className="card-body">
                        <div className="form-group">
                            <InputText value={this.state.guess}
                                       label={"Guess"}
                                       htmlFor={"guess"}
                                       handleInput={this.handleInput}/>
                        </div>
                        <div className="form-group">
                            <ProgressBar max={60}
                                         value={this.state.counter}></ProgressBar>
                        </div>
                    </div>
                </Card>
            </div>
        );
    }
}

export default App;
