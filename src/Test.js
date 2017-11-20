import React from 'react';

class Test extends React.Component{
  constructor(props){
    super(props);

    this.state = { test: this.props.test }
  }

  componentWillReceiveProps(nextProps){
    // console.log(nextProps.test);
    this.setState({ test: nextProps.test });
  }

  render(){
    return(
      <p>{this.state.test}</p>
    )
  }
}

export default Test;
