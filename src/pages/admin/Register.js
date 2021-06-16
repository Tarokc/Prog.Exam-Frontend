import { useState } from "react";
import { useAuth } from "../../providers/ProvideAuth";
import { toast } from "react-toastify";
import { API_MAIN } from "../../utils/api";
import React, { Component } from 'react';

export const Register = () => {
    const auth = useAuth();

    const [data, setData] = useState({})

    const handleChange = (e) => {
        e.preventDefault();

        const target = e.target;
        setData({ ...data, [target.name]: target.value });
        console.log(data)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await API_MAIN.post("boat", data);
            console.log(data)
            toast("Boat has been created");
        }
        catch (_error) {
            const error = _error.respons.data;
            toast.error(error.message || "Unknown error occured. Try again later.");
        }

    }

    return (
        <div className="container" style={{ maxWidth: "40rem" }}>
            <div className="content">
                <h1>Register new boat</h1>
                <form onSubmit={handleSubmit} onChange={handleChange}>
                    <div className="form-group">
                        <label htmlFor="boatName" className="required">Boat Name</label>
                        <input id="boatname" name="boatname" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="boatmake" className="required">Boat Make</label>
                        <input id="boatmake" name="boatmake" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="boatmodel" className="required">Boat Brand</label>
                        <input id="boatmodel" name="boatmodel" className="form-control" />
                    </div>
                    <div className="form-group d-flex justify-content-end">
                        <input className="btn btn-primary" type="submit" value="Register boat" />
                    </div>
                </form>
            </div>
        </div>
    )
}