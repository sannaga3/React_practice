import React from 'react';
import ReactDOM from 'react-dom'

const App = () => {
  return (
    <div>
      <h1>こんにちは</h1>
      <h2>お元気ですか</h2>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

export default App;