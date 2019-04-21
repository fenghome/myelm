import React from 'react';

class Test extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      color:'blue',
    }
  }

  render(){
    const { bgColor,clickHandler} = this.props;
    return (
      <div style={{width:30,height:30,backgroundColor:this.state.color }}
        onClick={
          ()=>{
            const color = clickHandler();
            this.setState({
              color:color
            })
          }
        }
      >

      </div>
    )
  }
}

export default Test;
