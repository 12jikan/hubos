import React, { useEffect, useState } from "react";

export default function TopSelectorComponent(): JSX.Element {
    const [items, setItems] = useState<Object[]>([]);
    useEffect(() => {
        setItems([
            {
                name: "test",
            },
            {
                name: "test",
            },
            {
                name: "test",
            },
        ]);
    }, []);

    return (
        <>
            <div className="top-container">
                {items.map((item, index) => {
                    return (
                        <div className="item-container" key={index}>
                            <a>{item}</a>
                        </div>
                    );
                })}
            </div>

            <style jsx>{`
                .top-container {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                }

                .item-container {
                    display: flex;
                    padding: 25px;
                    margin: 25px;
                    background-color: black;
                    justify-content: center;
                }
            `}</style>
        </>
    );
}
