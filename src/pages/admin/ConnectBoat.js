import React, { Component, useState, useEffect } from 'react';
import { API_MAIN } from "../../utils/api";
import Select from "../../components/ui/DarkmodeSelect"
import { toast } from "react-toastify";



export const ConnectBoat = () => {

    const [harbourNames, setHarbourNames] = useState({})
    const [boatNames, setBoatNames] = useState({})
    const [boat, setBoat] = useState({})
    const [harbour, setHarbour] = useState({})

    useEffect(() => {
        const doAsynchronousCall = async () => {
            const response = await API_MAIN.get("harbour/names");
            let array = [];
            response.data.map(name => array.push({ ["value"]: name, ["label"]: name }))
            setHarbourNames(array)
        };
        const getBoatNames = async () => {
            const response = await API_MAIN.get("boat/harbourless");
            let array = []
            response.data.map(boat => array.push({ ["value"]: boat.name, ["label"]: boat.name }))
            setBoatNames(array)
        }
        doAsynchronousCall()
        getBoatNames()
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let data = []
            data.push({ ["boatname"]: boat.value, ["harbour"]: harbour.value })
            await API_MAIN.put("harbour", data)
            toast("Boat has been connected");
        }
        catch (_error) {
            const error = _error.respons.data;
            toast.error(error.message || "Unknown error occured. Try again later.");
        }
    }

    return (
        <div className="container" style={{ maxWidth: "50rem" }}>
            <div className="content">
                <h1>Connect boat to harbour</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="boat">Boat name</label>
                        <Select
                            className="react-select"
                            onChange={(elem) => { setBoat(elem) }}
                            options={boatNames}

                        />
                        <label htmlFor="harbour">Harbour name</label>
                        <Select
                            className="react-select"
                            onChange={(elem) => { setHarbour(elem) }}
                            options={harbourNames}

                        />

                        <input className="btn btn-primary" type="submit" id="harbour" name="harbour" value="Connect boat"></input>
                    </div>
                </form>
            </div>
        </div >
    )
}