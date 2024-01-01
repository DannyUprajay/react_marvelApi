import React from 'react';
import Card from "./Card";
const Main = () =>{
    return (
        <>
            <header className="p-10">
                <h2 className="text-left">Marvel</h2>
                <div className="text-center">
                    <input type="text" placeholder="Search Marvel..."  />
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
            </header>


            <div className={'grid lg:grid-cols-4 gap-2 md:grid-cols-1 container mx-auto'}>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>

        </>
    )
}

export default Main;