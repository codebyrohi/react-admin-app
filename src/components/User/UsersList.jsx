import React, { useState,useEffect } from 'react';
import Main from "../Main/Main";
const UsersList = () => {
  // Define the static data for the table
  const [usersList,setUsersList] = useState({});
  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "api/users_list", {
        method: "GET"
    })
    .then((d) => d.json())
    .then((res) => {
        if (res.status == "SUCCESS") {
            console.log(res.response_data.users);
            setUsersList(res.response_data.users);
        }
    })
    .catch((err) => {
        console.log("e", err);
    });  

   },[]);
  return (
    <div>
        <div class="container-fluid">
            <h1 class="h3 mb-2 text-gray-800">Tables</h1>
            <div class="card shadow mb-4">
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                            </tr>
                            </thead>
                            <tbody>
                                {usersList.length > 0 && usersList.map((row) => (
                                    <tr key={row.id}>
                                    <td>{row.id}</td>
                                    <td>{row.name}</td>
                                    <td>{row.email}</td>
                                    <td>{row.mobile_no}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
</div>
  );
};

export default UsersList;
