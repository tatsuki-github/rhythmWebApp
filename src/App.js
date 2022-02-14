import React from 'react';


class App extends React.Component {
render(){
        let viewText = "テストページ";
        return (
            <div>
                <h1>Hello! World.</h1>
                <p>このページは{viewText}です。</p>
            </div>
        )
    }
}

export default App;