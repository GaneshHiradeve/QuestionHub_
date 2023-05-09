import React, { useState } from 'react'
import { Chart as ChartJS } from 'chart.js/auto'; 

import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import Additem from './Additem';


// export const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top',
//       },
//       title: {
//         display: true,
//       },
//     },
//   };

// const BarChart = ({ UserData }) => {
//     const [userData, setUserData] = useState({
//       labels: UserData.map(data => data.month),
//       datasets: [
//         {
//           label: 'Monthly Users',
//           data: UserData.map(data => data.users),
//           borderColor: ['#009688'],
//           backgroundColor: '#009688',
//           borderWidth: 2,
//         },
//       ],
//     });
//     return <Line data={userData} options={options} />;

// }



const AdminDash = ({userData}) => {
    console.log(userData)
  return (
    <div>
       <div className="feed">
      {/* <QuoraBox /> */}
      {/* {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))} */}

{ userData &&
          userData.map((data, index) => {
         
            return <Additem key={index} data={data}  />;
          })}
      
      
    </div>
  
    </div>
  )
}

export default AdminDash
