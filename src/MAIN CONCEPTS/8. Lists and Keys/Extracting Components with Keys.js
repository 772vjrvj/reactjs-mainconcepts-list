import React from 'react';
import '../../css/8. Lists and Keys/Extracting Components with Keys.css';

    function ListItem(props) {
        // Correct! There is no need to specify the key here:
        return <li>{props.value}</li>;
    }
    
    function ExtractingComponentsWithKeys(props) {
        const numbers = props.numbers;
        const listItems = numbers.map((number) =>
        // Correct! Key should be specified inside the array.
        <ListItem key={number.toString()}
                    value={number} />
        );
        return (
        <ul>
            {listItems}
        </ul>
        );
    }
    

  export default ExtractingComponentsWithKeys;
//   const numbers = [1, 2, 3, 4, 5];
//   <NumberList numbers={numbers} /> 을 사용해 주세요



// function ListItem(props) {
//     // Correct! There is no need to specify the key here:
//     return <li>{props.value}</li>;
//   }
  
//   function NumberList(props) {
//     const numbers = props.numbers;
//     const listItems = numbers.map((number) =>
//       // Correct! Key should be specified inside the array.
//       <ListItem key={number.toString()}
//                 value={number} />
//     );
//     return (
//       <ul>
//         {listItems}
//       </ul>
//     );
//   }
  
//   const numbers = [1, 2, 3, 4, 5];
//   ReactDOM.render(
//     <NumberList numbers={numbers} />,
//     document.getElementById('root')
//   );