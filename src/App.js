import "./App.css";
import { Component } from "react";

const operators = [
  { id: 1, symbel: "+" },
  { id: 2, symbel: "-" },
  { id: 3, symbel: "*" },
  { id: 4, symbel: "/" },
];

class App extends Component {
  state = {
    numberInput: "",
    searchInput: "",
    mathOpp: "+",
    result: "",
    errorMsg: "",
    errorStatus: false,
  };

  onChangeValue = (event) => {
    const value = parseInt(event.target.value);
    this.setState({ searchInput: value });
  };

  onChangeNumber = (event) => {
    const number1 = parseInt(event.target.value);
    this.setState({ numberInput: number1 });
  };

  onChangeOperators = (event) => {
    const mathOpp = event.target.value;
    this.setState({ mathOpp: mathOpp });
  };

  onClickButton = () => {
    const { searchInput, mathOpp, numberInput } = this.state;
    if (searchInput === "" || numberInput === "") {
      const text = "Please enter valid input";
      this.setState({ errorMsg: text, errorStatus: false });
    } else {
      if (searchInput < 100 || numberInput < 10) {
        let result1 = "";

        switch (mathOpp) {
          case "+":
            result1 = searchInput + numberInput;
            break;
          case "-":
            result1 = searchInput - numberInput;
            break;
          case "*":
            result1 = searchInput * numberInput;
            break;
          case "/":
            result1 = searchInput / numberInput;
            break;
        }
        this.setState({ result: result1, errorStatus: true });
      } else {
        let text = "provide number";
        this.setState({ errorMsg: text, errorStatus: false });
      }
    }
  };

  onClickClear = () => {
    this.setState({ searchInput: "", numberInput: "", errorStatus: false });
  };

  render() {
    const {
      searchInput,
      numberInput,
      result,
      errorMsg,
      errorStatus,
    } = this.state;

    return (
      <div className="App">
        <h1 className="heading">Master And Student Task</h1>
        <div>
          <h1>Task</h1>
          <input
            className="searchInput"
            value={searchInput}
            onChange={this.onChangeValue}
            placeholder="Enter Number"
            type="text"
          />
          <select className="option-style" onChange={this.onChangeOperators}>
            {operators.map((eachOperator) => (
              <option value={eachOperator.symbel} key={eachOperator.id}>
                {eachOperator.symbel}
              </option>
            ))}
          </select>
          <input
            className="number-input-style"
            placeholder="Enter Number"
            value={numberInput}
            type="text"
            onChange={this.onChangeNumber}
          />
          {errorStatus ? (
            <button
              className="button-style button-style1"
              onClick={this.onClickClear}
            >
              clear
            </button>
          ) : (
            ""
          )}
        </div>
        <button
          className="button-style"
          type="button"
          onClick={this.onClickButton}
        >
          =
        </button>
        {errorStatus ? <h1>Result: {result}</h1> : <p>{errorMsg}</p>}
      </div>
    );
  }
}

export default App;
