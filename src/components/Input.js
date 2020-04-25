import React from "react";
//stateless component never changes

export default function Input() {
    const text = 'incoming message';
    return (
        <div className="input">
            {text}
            <input type="text" id="fname" name="fname" value="text" />
            <input type="submit" value="Submit" />
        </div>
    );
}

//this is the module I want to export so i can access
