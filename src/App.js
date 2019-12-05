import React , { useState } from 'react';
import './App.css';

// -----   class Component before -------
// class App extends Component {
//   state = {
//     count:0
//   };
//   modify = n => {
//     this.setState({
//       count: n
//     });
//   };
//   render() {
//     const { count } = this.state;
//     return (
//       <>
//         <div>{count}</div>
//         <button onClick={() => this.modify(count + 1)}> Increment </button>
//       </>
//     )
//   }
// }



// ------ React Hook -------
const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      {count}
      <button onClick={() => setCount(count +1)}> Increment</button>
    </>
  );
};

export default App;
