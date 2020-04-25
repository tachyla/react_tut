import React from "react";

export default function Card() {
    const greeting = "Hello from Card";
    return (
        <div className="card">
            <h1>Messages</h1>
            {greeting}
        </div>
    );
}
