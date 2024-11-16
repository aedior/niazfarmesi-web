import React from "react";

// Example class component
export default class OTPinput extends React.Component<any> {
  ref0: any;
  ref1: any;
  ref2: any;
  ref3: any;
  ref4: any;
  ref5: any;
  state: any;
  onEnd: (code: number) => void;
  onChange: (code: number) => void;
  disable: boolean;

  constructor(props: {
    onEnd: (code: number) => void;
    onChange: (code: number) => void;
    disable: boolean;
  }) {
    super(props);
    this.state = {
      focusIndex: null,
      digi0: null,
      digi1: null,
      digi2: null,
      digi3: null,
      digi4: null,
      digi5: null,
    };
    this.ref0 = React.createRef();
    this.ref1 = React.createRef();
    this.ref2 = React.createRef();
    this.ref3 = React.createRef();
    this.ref4 = React.createRef();
    this.ref5 = React.createRef();

    this.onEnd = props.onEnd;
    this.onChange = props.onChange;
    this.disable = props.disable;
    console.log(this.onChange);
  }

  componentDidMount() {
    this.focusDiv();
  }

  componentDidUpdate() {
    this.focusDiv();
  }

  storeDigi = (e: any, index: any) => {
    let valueToken = e.target.value;
    if (e.target.value > 10) {
      valueToken = e.target.value % 10;
    }

    switch (index) {
      case 1:
        this.setState({
          focusIndex: 2,
          digi0: valueToken,
        });
        break;
      case 2:
        this.setState({
          focusIndex: 3,
          digi1: valueToken,
        });
        break;
      case 3:
        this.setState({
          focusIndex: 4,
          digi2: valueToken,
        });
        break;
      case 4:
        this.setState({
          focusIndex: 5,
          digi3: valueToken,
        });
        break;
      case 5:
        this.setState({
          focusIndex: 6,
          digi4: valueToken,
        });
        break;
      case 6:
        this.setState({
          focusIndex: undefined,
          digi5: valueToken,
        });
        this.onEnd(this.getNumber());
        break;
    }
    this.onChange(this.getNumber());
  };

  focusDiv = () => {
    if (this.state.focusIndex) {
      switch (this.state.focusIndex) {
        case 1:
          this.ref0.current.focus();
          break;
        case 2:
          this.ref1.current.focus();
          break;
        case 3:
          this.ref2.current.focus();
          break;
        case 4:
          this.ref3.current.focus();
          break;
        case 5:
          this.ref4.current.focus();
          break;
        case 6:
          this.ref5.current.focus();
          break;
      }
    }
  };

  getNumber = () => {
    return (
      this.ref0.current.value +
      this.ref1.current.value +
      this.ref2.current.value +
      this.ref3.current.value +
      this.ref4.current.value +
      this.ref5.current.value
    );
  };

  render() {
    return (
      <div>
        <div style={{ display: "flex" }}>
          <input
            className="bg-slate-100 m-1 px-1 py-3 rounded-xl outline-none text-center w-10"
            type="number"
            value={this.state.digi0}
            disabled={this.disable}
            min="0"
            max="9"
            onChange={(e) => this.storeDigi(e, 1)}
            ref={this.ref0}
          />
          <input
            className="bg-slate-100 m-1 px-1 py-3 rounded-xl outline-none text-center w-10"
            type="number"
            value={this.state.digi1}
            disabled={this.disable}
            min="0"
            max="9"
            onChange={(e) => this.storeDigi(e, 2)}
            ref={this.ref1}
          />
          <input
            className="bg-slate-100 m-1 px-1 py-3 rounded-xl outline-none text-center w-10"
            type="number"
            value={this.state.digi2}
            disabled={this.disable}
            min="0"
            max="9"
            onChange={(e) => this.storeDigi(e, 3)}
            ref={this.ref2}
          />
          <input
            className="bg-slate-100 m-1 px-1 py-3 rounded-xl outline-none text-center w-10"
            type="number"
            value={this.state.digi3}
            disabled={this.disable}
            min="0"
            max="9"
            onChange={(e) => this.storeDigi(e, 4)}
            ref={this.ref3}
          />
          <input
            className="bg-slate-100 m-1 px-1 py-3 rounded-xl outline-none text-center w-10"
            type="number"
            value={this.state.digi4}
            disabled={this.disable}
            min="0"
            max="9"
            onChange={(e) => this.storeDigi(e, 5)}
            ref={this.ref4}
          />
          <input
            className="bg-slate-100 m-1 px-1 py-3 rounded-xl outline-none text-center w-10"
            type="number"
            value={this.state.digi5}
            disabled={this.disable}
            min="0"
            max="9"
            onChange={(e) => this.storeDigi(e, 6)}
            ref={this.ref5}
          />
        </div>
      </div>
    );
  }
}
