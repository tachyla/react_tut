import React from "react";

export default function Card() {
    const greeting = "Hello from Card";
    return (
        <div className="card">
            <h1>Company Names</h1>
            {greeting}
        </div>
    );
}
