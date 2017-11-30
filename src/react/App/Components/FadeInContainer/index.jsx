import React from 'react';
import Div from './Div';

class FadeInContainer extends React.Component {
  constructor(props) {
    super(props);

    this.timer = null;
    this.state = {
      opacity: 0,
    };
  }
  componentDidMount() {
    this.updateTimer();
  }
  updateTimer() {
    const that = this;
    this.timer = setTimeout(() => {
      const newOpacity = that.state.opacity + 0.04;
      that.setState({
        opacity: newOpacity,
      }, () => {
        if (newOpacity < 1) {
          that.updateTimer();
        }
      });
    }, 16.4);
  }
  render() {
    return <Div opacity={this.state.opacity}>{this.props.children}</Div>;
  }
}

export default FadeInContainer;
