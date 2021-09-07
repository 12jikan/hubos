import React, { useState } from "react";

export default function TopSelectorComponent(): JSX.Element {
    let [items, setItems] = useState([]);

    return (
        <>
            <div className="top-container">
                {items.map((item) => {
                    return <div key={index}></div>;
                })}
            </div>

            <style jsx>{`
                .top-container {
                    display: flex;
                    flex-direction: row;
                }
            `}</style>
        </>
    );
}
