import React from "react";

const Forms = props => (
        <div>
            <form onSubmit={props.getWeather}>
                <input type="text" name="city" placeholder="City..."></input>
                <input type="text" name="country" placeholder="Country..."></input>
                <button>GET WEATHER</button>
            </form>
        </div>

);

export default Forms;
