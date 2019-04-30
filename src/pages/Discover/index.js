import React from 'react';
import { PullToRefresh } from 'antd-mobile';

function genData(){
  const dataArr = [];
  for(let i=0;i<20;i++){
    dataArr.push(i);
  }
  return dataArr;
}

class Demo extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <PullToRefresh
        direction="up"
        onRefresh={()=>console.log('push')}
      >
      {
        genData().map(i=>{
          return (
            <div>这是item{i}</div>
          )
        })
      }
      </PullToRefresh>

    )
  }
}
