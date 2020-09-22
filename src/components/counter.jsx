import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    // imageUrl: "https://picsum.photos/200",
    // tags: ["tag1", "tag2", "tag3"],
  };

  //   styles = {
  //     fontSize: 10,
  //     fontWeight: "bold",
  //   };

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  //   use an arrow function instead of binding this
  handleIncrement = () => {
    // console.log("Increment Clicked", this);
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <React.Fragment>
        {/* <img src={this.state.imageUrl} alt="" /> */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {/* <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    //   object destructuring
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
