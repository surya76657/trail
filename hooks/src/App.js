import React, { useState, useEffect, useContext } from 'react';
import ReactTable from 'react-table';
import { DataContext } from './Context';
import 'react-table/react-table.css';
import './App.css';

// // class App extends React.Component{
// //   state={
// //     count:0
// //   }

// //   render(){
// //     const handleClick = () => this.setState({count:this.state.count+1});
// //     const handleCount = () => this.setState({count: this.state.count-1});
// //     return(
// //       <div>
// //         <button onClick={handleClick}>count Increment</button>
// //         <p>{this.state.count}</p>
// //         <button onClick={handleCount}>count Decrement</button>
// //       </div>
// //       );
// //   }
// // }

// export default App;

// export default function App(props) {
//   const [count, setCount] = useState(0);
//   const [isLoading, setisLoading] = useState(false);
//   const handleLoading = useCallback(() => setisLoading(!isLoading), [isLoading]);
//   const handleClick = useCallback(() => {
//     setCount(count + 1);
//   }, [count]);
//   const handleCount = useCallback(() => {
//     setCount(count - 1);
//   }, [count]);

//   return (
//     <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//       <div>
//         <button onClick={handleClick} style={{ cursor: 'pointer' }}>
//           count Increment
//         </button>
//         <p>{count}</p>
//         <button onClick={handleCount} style={{ cursor: 'pointer' }} disabled={count <= 0}>
//           count Decrement
//         </button>
//       </div>
//       <div onClick={handleLoading} style={{ cursor: 'pointer' }}>
//         <p>{isLoading ? 'Loading....' : 'refresh'}</p>
//       </div>
//     </div>
//   );
// }

// Promise
// const columns = [
//   {
//     accessor: 'name',
//     Header: 'Name'
//   },
//   {
//     accessor: 'age',
//     Header: 'Age'
//   },
//   {
//     accessor: 'email',
//     Header: 'Email'
//   }
// ];
const data = [
  { name: 'Himanshu Kumar', age: 21, email: 'himanshu28051997@gmail.com' },
  { name: 'Surya Prakash', age: 23, email: 'surya76657@gmail.com' },
  { name: 'Raj', age: 21, email: 'raj@gmail.com' },
  { name: 'Anjali', age: 19, email: 'Anjali@gmail.com' },
  { name: 'Himanshu Kumar', age: 21, email: 'himanshu28051997@gmail.com' },
  { name: 'Surya Prakash', age: 23, email: 'surya76657@gmail.com' },
  { name: 'Raj', age: 21, email: 'raj@gmail.com' },
  { name: 'Anjali', age: 19, email: 'Anjali@gmail.com' },
  { name: 'Himanshu Kumar', age: 21, email: 'himanshu28051997@gmail.com' },
  { name: 'Surya Prakash', age: 23, email: 'surya76657@gmail.com' },
  { name: 'Raj', age: 21, email: 'raj@gmail.com' },
  { name: 'Anjali', age: 19, email: 'Anjali@gmail.com' },
  { name: 'Himanshu Kumar', age: 21, email: 'himanshu28051997@gmail.com' },
  { name: 'Surya Prakash', age: 23, email: 'surya76657@gmail.com' },
  { name: 'Raj', age: 21, email: 'raj@gmail.com' },
  { name: 'Anjali', age: 19, email: 'Anjali@gmail.com' }
];
// const modifiedData = () => {
//   return data.map(data => {
//     const { name, ...rest } = data;
//     return {
//       name: <span style={{ backgroundColor: 'green' }}>{name}</span>,
//       ...rest
//     };
//   });
// };
// const userdatalist = () => {
//   return new Promise((resolve, reject) => {
//     if (data.length) {
//       resolve(data);
//     } else {
//       reject('no data available');
//     }
//   });
// };

// function App(props) {
//   const [userList, setUserList] = useState([]);
//   useEffect(() => {
//     userdatalist()
//       .then(result => {
//         return result.filter(data => data.age > 0);
//       })
//       .then(res => {
//         setUserList(res);
//       })
//       .catch(err => console.log(err));
//   }, [props]);
//   return (
//     <div>
//       <ReactTable
//         columns={columns}
//         data={modifiedData()}
//         defaultPageSize={5}
//         showPaginationTop={true}
//         showPaginationBottom={false}
//         minRows={0}
//         getTrProps={(state, rowInfo, instance) => {
//           if (rowInfo) {
//             return {
//               style: {
//                 background: rowInfo.index % 2 ? 'red' : 'yellow',
//                 color: 'black'
//               }
//             };
//           }
//           return {};
//         }}
//         filterable={false}
//         sortable={false}
//       />
//       {/* <UserInfo userList={userList} /> */}
//     </div>
//   );
// }
// export default App;

// function UserInfo(props) {
//   const { userList } = props;
//   return (
//     <div>
//       {userList.map((user, i) => (
//         <User user={user} key={i} even={i % 2 ? true : false} />
//       ))}
//     </div>
//   );
// }

// function User(props) {
//   const { user, even } = props;
//   const { name, age, email } = user;
//   return (
//     <div className={`user-details ${even ? 'even' : 'odd'}`}>
//       <header>{name}</header>
//       <header>{age}</header>
//       <header>{email}</header>
//     </div>
//   );
// }
// practise
const pr = age => {
  return new Promise((resolve, reject) => {
    const userInfo = data.filter(user => user.age <= age);
    if (userInfo.length) resolve(userInfo);
    else reject('Sorry!! No Data Found');
  });
};
function App(props) {
  const [data, setdata] = useState([]);
  const context = useContext(DataContext);
  context.actions.handleCount(80);
  console.log(context);
  useEffect(() => {
    // {console.log()}
    const pr1 = pr(30);
    const pr2 = pr(22);
    Promise.all([pr1, pr2]).then(res => {
      const [twitter, instagram] = res;
      console.log({ twitter, instagram });
      setdata(instagram);
    });
    // pr().then(res => setdata(res));
  }, []);
  return (
    <div>
      <p>Hello World!!</p>
      {console.log(trial(categories, items))}
      {/* {trial(categories, items).map(category=>cat)} */}
      {data.map((user, i) => {
        return (
          <header key={i}>
            {user.name} {user.age} <b>{`instagram`}</b>
          </header>
        );
      })}
    </div>
  );
}
export default App;

const categories = [
  {
    id: 1,
    name: 'accessioris'
  },
  { id: 2, name: 'belt' },
  { id: 3, name: 'shirt' }
];
const items = [
  {
    id: 1,
    name: 'mobile',
    categoryId: 1
  },
  { id: 1, name: 'mobile1', categoryId: 1 },
  { id: 1, name: 'v gla', categoryId: 3 }
];

function trial(categories, items) {
  return categories
    .map(category => ({ name: category.name, items: items.filter(item => category.id === item.categoryId).map(item => item.name) }))
    .filter(fKey => fKey.items.length > 0);
}
