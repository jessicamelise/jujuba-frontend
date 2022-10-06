import React, { useEffect, useState } from "react";
import { getAllUsers } from "../../api/users/usersApi";
import '../../styles/employees.scss';

export function Employees() {
    const [users, setUsers] = useState("");
    // eslint-disable-next-line
    const [errorGetUsers, setErrorGetUsers] = useState("");

    const getUsers = () => {
        getAllUsers()
            .then((userList) => {
                setUsers(userList);
            })
            .catch((err) => {
                setErrorGetUsers(err);
            });
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div id="employees-area">
            <table>
                <thead>
                    <tr>
                        {users && Object.keys(users[0]).map((userKey, index) => {
                            return (
                                <th key={index}>{userKey}</th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    {users && users.map((user, index) => {
                        return (
                            <tr key={index}>
                                <td>{user.name}</td>
                                <td>{user.role}</td>
                                <td>{user.email}</td>
                                <td>{user.active ? 'Sim' : 'Não'}</td>
                                <td>{user.id}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}