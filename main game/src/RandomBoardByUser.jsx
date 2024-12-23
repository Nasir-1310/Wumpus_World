import React, { useState } from 'react';
import './Random.css';
import { ToastContainer, toast } from 'react-toastify';

const RandomBoardByUser = ({ onUserInput }) => {
  // Define default values for each field
  const defaultGold = 2;
  const defaultWumpus = 3;
  const defaultPit = 3;
  const defaultRow = 10;
  const defaultCol = 10;

  // Use useState with default values
  const [gold, setGold] = useState(defaultGold);
  const [wumpus, setWumpus] = useState(defaultWumpus);
  const [pit, setPit] = useState(defaultPit);
  const [row, setRow] = useState(defaultRow);
  const [col, setCol] = useState(defaultCol);

  const handleUserInput = () => {
    console.log('User Input');
    toast.success('Board Generated!', {
      position: 'top-center',
      autoClose: 2000,
    });

    // Pass default values if user input is not provided
    onUserInput({
      gold: gold || defaultGold,
      wumpus: wumpus || defaultWumpus,
      pit: pit || defaultPit,
      row: row || defaultRow,
      col: col || defaultCol,
    });
  };

  return (
    <div className="premium-container">
      <ToastContainer />
      <div className="premium-header">
        <h1>Customize Your Game Board</h1>
        <p>Adjust the parameters below to generate your personalized board.</p>
      </div>
      <div className="premium-input-group">
        <label className="premium-label">Number of Rows</label>
        <input
          type="range"
          min="1"
          max="10"
          step="1"
          value={row}
          onChange={(e) => setRow(e.target.value)}
          className="premium-slider"
        />
        <span className="premium-value">{row}</span>
      </div>

      <div className="premium-input-group">
        <label className="premium-label">Number of Columns</label>
        <input
          type="range"
          min="1"
          max="10"
          step="1"
          value={col}
          onChange={(e) => setCol(e.target.value)}
          className="premium-slider"
        />
        <span className="premium-value">{col}</span>
      </div>

      <hr className="premium-divider" />

      <div className="premium-input-group">
        <label className="premium-label">Number of Gold</label>
        <input
          type="number"
          name="gold"
          min="1"
          max="10"
          value={gold}
          onChange={(e) => setGold(e.target.value)}
          className="premium-input"
        />
        <span className="premium-value">{gold}</span>
      </div>

      <div className="premium-input-group">
        <label className="premium-label">Number of Wumpus</label>
        <input
          type="number"
          name="wumpus"
          min="1"
          max="10"
          value={wumpus}
          onChange={(e) => setWumpus(e.target.value)}
          className="premium-input"
        />
        <span className="premium-value">{wumpus}</span>
      </div>

      <div className="premium-input-group">
        <label className="premium-label">Number of Pit</label>
        <input
          type="number"
          name="pit"
          min="1"
          max="10"
          value={pit}
          onChange={(e) => setPit(e.target.value)}
          className="premium-input"
        />
        <span className="premium-value">{pit}</span>
      </div>

      <hr className="premium-divider" />

      <button className="premium-button" onClick={handleUserInput}>
        Generate Board
      </button>
    </div>
  );
};

export default RandomBoardByUser;
