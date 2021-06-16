import React, { Component } from 'react';
export const BoatTable = (boats) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>
                        Name
                    </th>
                    <th>
                        Make
                    </th>
                    <th>
                        Model
                    </th>
                </tr>
            </thead>
            <tbody>
                {boats.data.map(boat => {
                    return (<tr key={boat.boatname}>
                        <td>{boat.boatname}</td>
                        <td>{boat.boatmake}</td>
                        <td>{boat.boatmodel}</td>
                    </tr>)
                })}
            </tbody>
        </table>
    )
}