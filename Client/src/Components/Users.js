
import React from 'react';
import UserCard from './UserCard'
import { useQuery, gql, NetworkStatus } from '@apollo/client';

const ALL_USERS = gql`
  query {
    getAllUsers {
      id
      firstName
      lastName
      email
      password
    }
  }
`;

function Users({sendUserData,filterData}){

    //Passing query to useQuery hook to fetch data
    const{data, loading, error, networkStatus} = useQuery(ALL_USERS, {fetchPolicy: "cache-and-network"})


    if (networkStatus === NetworkStatus['refetch'])
        return 'Refetching!';
    else if (loading)
        return 'Loading..';
    else if (error)
        return `Error! ${error}`;
    else if(data)

        sendUserData(data.getAllUsers)
        console.log('data all users length',data.getAllUsers.length,filterData.length)
        return(
            <div className="is-scrollable-list">
                {filterData.length!=0 ? 
                    
                    filterData.map((item) => (
                    <UserCard
                        key={item.id}
                        item={item}
                    />
                    )) 
                : 
                    data.getAllUsers.map((item) => (
                    <UserCard
                        key={item.id}
                        item={item}
                    />
                    ))
                 }
            </div>
        )
}

export default Users;




































// import React, { useState } from 'react';
// import UserCard from './UserCard'
// import { useQuery, gql, NetworkStatus } from '@apollo/client';

// const ALL_USERS = gql`
//   query {
//     getAllUsers {
//       id
//       firstName
//       lastName
//       email
//       password
//     }
//   }
// `;

// function Users({searchField}){


//     //Passing query to useQuery hook to fetch data
//     const{data, loading, error, networkStatus} = useQuery(ALL_USERS, {fetchPolicy: "cache-and-network"})
//     const filteredArr = []

//     const filtterData=()=>{
//         if(searchField!==""){ 
//             data.getAllUsers.filter(
//                 usernew=>{
//                     if(usernew.firstName.toLowerCase().includes(searchField.toLowerCase()) || usernew.lastName.toLowerCase().includes(searchField.toLowerCase())){
//                         console.log(usernew.firstName, usernew.lastName ,searchField)
//                         {
//                             filteredArr.push(usernew)
//                             console.log(filteredArr)   
//                             filteredArr.map((item)=>(
//                             console.log(item.id)                                      
//                                 )
//                             )
//                             } 
//                         } 
//                     } 
//                 )              
//             } 
//         }        
    



//     if (networkStatus === NetworkStatus['refetch'])
//         return 'Refetching!';
//     else if (loading)
//         return 'Loading..';
//     else if (error)
//         return `Error! ${error}`;
//     else if(data)
//         filtterData()
//         console.log(data)
//         console.log(searchField!=="",searchField)

//         return(
//             <div className="is-scrollable-list">
//                 {filteredArr!==[] ? 
//                     filteredArr.map((item) => (
//                         console.log(filteredArr),
//                         <UserCard
//                         key={item.id}
//                         item={item}
//                     />
//                     )) 
//                 : data.getAllUsers.map((item) => (
//                     <UserCard
//                         key={item.id}
//                         item={item}
//                     />)) 
//                 }
//             </div>
//         )

//     }

// export default Users;