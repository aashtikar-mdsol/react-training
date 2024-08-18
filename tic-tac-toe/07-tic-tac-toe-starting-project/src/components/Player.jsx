import { useState } from "react";


export default function Player({ name, symbol, isActive, updatePlayerName }) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(name);


    function handleEditClick() {
        setIsEditing(isEditing => !isEditing);
        if (isEditing) {
            updatePlayerName(symbol, playerName)
        }
    }

    function handleNameChange(event) {
        setPlayerName(event.target.value);
    }

    return (
        <li className={isActive ? "active" : undefined}>
            <span className="player">
                {
                    !isEditing ?
                        <span className="player-name">{playerName}</span> :
                        <input value={playerName} onChange={handleNameChange} required />
                }
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}