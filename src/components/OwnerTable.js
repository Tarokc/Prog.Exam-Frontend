import React, { Component } from 'react';
export const OwnerTable = (owners) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>
                        Name
                    </th>
                    <th>
                        Phone
                    </th>
                    <th>
                        Boat
                    </th>
                    <th>Harbor</th>
                </tr>
            </thead>
            <tbody>
                {owners.data.map(owner => {
                    return (<tr key={owner.name}>
                        <td>{owner.name}</td>
                        <td>{owner.phone}</td>
                    </tr>)
                })}
            </tbody>
        </table>
    )
}