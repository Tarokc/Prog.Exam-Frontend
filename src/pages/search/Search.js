import { useState } from "react";
import { useAuth } from "../../providers/ProvideAuth";
import { API_MAIN } from "../../utils/api";
import { OwnerTable } from "../../components/OwnerTable"
import { BoatTable } from "../../components/BoatTable"

export const Search = () => {
    const [allOwners, setAllOwners] = useState({})
    const [allBoatsInHarbour, setAllBoatsInHarbour] = useState({})
    const [allBoatOwners, setBoatOwners] = useState({})

    const handleSeeAllOwners = async (e) => {
        e.preventDefault();

        const _owners = (await API_MAIN.get(`owner/all`)).data;
        setAllOwners(_owners);
        setAllBoatsInHarbour([])
        setBoatOwners([])
    }

    const [searchHarbour, setSearchHarbour] = useState({});
    const [searchBoat, setSearchBoat] = useState({});

    const handleChangeHarbour = (e) => {
        const target = e.target;
        setSearchHarbour(target.value);
    };

    const handleSubmitHarbour = async (e) => {
        e.preventDefault();
        if (!searchHarbour.length == 0) {
            const _boatsInHarbour = (await API_MAIN.get(`harbour/` + searchHarbour)).data;
            setAllBoatsInHarbour(_boatsInHarbour);
            setAllOwners([])
            setBoatOwners([])
        }
    };

    const handleChangeBoat = (e) => {
        const target = e.target;
        setSearchBoat(target.value);
    };

    const handleSubmitBoat = async (e) => {
        e.preventDefault();
        if (!searchBoat.length == 0) {
            const _boatOwners = (await API_MAIN.get(`boat/` + searchBoat)).data;
            setBoatOwners(_boatOwners);
            setAllOwners([])
            setAllBoatsInHarbour([])
        }
    };

    return (
        <div className="container">
            <div className="content">
                <h1>Search</h1>
                <div className="row">
                    <div className="col-sm">
                        <button onClick={handleSeeAllOwners}>See all owners</button>
                    </div>
                    <div className="col-sm">
                        <form onSubmit={handleSubmitHarbour} onChange={handleChangeHarbour}>
                            <div className="form-group">

                                <label htmlFor="harbour">Harbour name</label>
                                <input type="text"></input>
                                <input type="submit" id="harbour" name="harbour"></input>
                            </div>
                        </form>
                    </div>
                    <div className="col-sm">
                        <form onSubmit={handleSubmitBoat} onChange={handleChangeBoat}>
                            <div className="form-group">

                                <label htmlFor="harbour">Boat name</label>
                                <input type="text"></input>
                                <input type="submit" id="harbour" name="harbour"></input>
                            </div>
                        </form>
                    </div>
                </div>
                {allOwners.length > 0 ? <OwnerTable data={allOwners} /> : allBoatsInHarbour.length > 0 ? <BoatTable data={allBoatsInHarbour} /> : allBoatOwners.length > 0 ? <OwnerTable data={allBoatOwners} /> : <span>No boats found</span>}
            </div>
        </div>
    )
}