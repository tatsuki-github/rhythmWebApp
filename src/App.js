import React from 'react';

class HelloWorld extends React.Component {
  render() {
    // 定数nameを定義
    const hello = "Hello World!"

    return (
      <div>
        {/* 定数helloを用いて表示 */}
        <h1>{hello}</h1>
      </div>
    );
  }
}

export default HelloWorld;