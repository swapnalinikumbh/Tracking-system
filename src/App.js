// src/App.js
import React, { useState, useEffect } from "react";
import "./styles.css";

function App() {
  const [assets, setAssets] = useState([]);
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [newAsset, setNewAsset] = useState({ name: "", barcode: "" });

  // Simulated data for demonstration purposes
  const initialAssets = [
    { id: 1, name: "Laptop", barcode: "ABCD123" },
    { id: 2, name: "Monitor", barcode: "EFGH456" }
  ];

  useEffect(() => {
    // Simulated data initialization
    setAssets(initialAssets);
  }, []);

  const handleAssetClick = (asset) => {
    setSelectedAsset(asset);
  };

  const handleAddAsset = () => {
    setAssets([...assets, { ...newAsset, id: assets.length + 1 }]);
    setNewAsset({ name: "", barcode: "" });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Asset Tracking System</h1>
      </header>
      <div className="container">
        <div className="asset-list">
          <h2>Asset List</h2>
          <ul>
            {assets.map((asset) => (
              <li
                key={asset.id}
                onClick={() => handleAssetClick(asset)}
                style={{ cursor: "pointer" }}
              >
                {asset.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="asset-details">
          <h2>Asset Details</h2>
          {selectedAsset ? (
            <div>
              <h3>Name: {selectedAsset.name}</h3>
              <p>Barcode: {selectedAsset.barcode}</p>
            </div>
          ) : (
            <p>Select an asset to view details.</p>
          )}
        </div>
        <div className="asset-add">
          <h2>Add New Asset</h2>
          <input
            type="text"
            placeholder="Asset Name"
            value={newAsset.name}
            onChange={(e) => setNewAsset({ ...newAsset, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Barcode"
            value={newAsset.barcode}
            onChange={(e) =>
              setNewAsset({ ...newAsset, barcode: e.target.value })
            }
          />
          <button onClick={handleAddAsset}>Add Asset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
