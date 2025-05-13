import React, { useState } from "react";

function BrowserHistoryApp(){
    const [history, setHistory] = useState([]);
    const [url, setUrl] = useState("");
    const [historyLength, setHistoryLength] = useState(5);

    const visitPage = (url) => {
        const timestamp = new Date().toLocaleString();

        const filtered = history.filter(entry => entry.url !== url);
        setHistory([{ url, timestamp }, ...filtered]);
    };

    const getMostRecentHistory = (n) => {
        return history.slice(0, n);
    };

    const clearHistory = () => {
        setHistory([]);
    };

    const handleVisit = () => {
        if(url.trim()){
            visitPage(url.trim());
            setUrl("");
        }
    };

    return (
        <div style = {{ padding: "20px", fontFamily: "sans-serif"}}>
            <h2>Browser History UI Simulated</h2>
            <input
                type="text"
                placeholder="Enter URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
            />

            <button onClick={handleVisit}>Visit Page</button>

            <div style={{marginTop: "10px"}}>
                <label>History Length</label>
                <input
                    type="number"
                    min="1"
                    value={historyLength}
                    onChange={(e) => setHistoryLength(Number(e.target.value))}
                />
            </div>

            <button onClick={clearHistory} style={{marginTop: "10px", color: "red"}}>Clear History</button>

            <h3 style={{marginTop: "20px"}}>Recent History</h3>
            <ul>
                {getMostRecentHistory(historyLength).map((entry, index) => (
                    <li key={index}>
                        <strong>{entry.url}</strong> -- <em>{entry.timestamp}</em>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BrowserHistoryApp;