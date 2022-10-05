import React from "react";
import "./Card.css"

const Reward = ({med, amount}) => {
    if(amount > 0){
        return (
            <div className="reward">
                <p>{amount}</p>
                <p>{med}</p>
            </div>
        )
    }
}

const Card = ({name, avatar, bronze, silver, gold}) => {
    return (
        <div className="card">
            <div className="top">
                <h1>{name}</h1>
                <div className="img-container">
                    <img className="avatar" src={avatar} alt="avatar" />
                </div>
            </div>
            <div className="bottom">
                <h1>Rewards</h1>
                <div className="rewards">
                    <Reward med="bronze" amount={bronze}/>
                    <Reward med="silver" amount={silver}/>
                    <Reward med="gold" amount={gold}/>
                </div>
            </div>
        </div>
    );
}

export default Card;