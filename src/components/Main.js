import React, {useEffect} from 'react';
import Card from "./Card";
import axios from "axios";
import {useState} from "react";


const Main = () => {
    const [url, setUrl] = useState('https://gateway.marvel.com/v1/public/characters?ts=1&apikey=294e206df9286738beacb67eb0e2cc51&hash=99e0fd0481c8c8855c84dafdc465c0e1')
    const [item, setItem] = useState();
    const [search, setSearch] = useState("");


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(url);
                setItem(res.data.data.results);
                console.log(res.data.data.results);
            } catch (error) {
                console.error('Error fetching data:', error);
                // Handle error, show a meaningful message to the user
            }
        };

        fetchData();
    }, [url]);


    const searchMarvel=()=>{
        setUrl(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&ts=1&apikey=2e1cdeec426ae323484f29024084c206&hash=d516513ba95b9407c7aca0f73b241f8a`)
    }

    return (
        <>
            <header className="p-10">
                <h2 className="text-left">Marvel</h2>
                <div className="text-center">
                    <input type="text" placeholder="Search Marvel..." onChange={e=>setSearch(e.target.value)}
                           onKeyPress={searchMarvel}/>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
            </header>


            <div className={'grid lg:grid-cols-4 gap-2 md:grid-cols-1 container mx-auto'}>
                {
                    (!item) ? <p>not found</p> : <Card data={item}/>
                }
            </div>

        </>
    )
}

export default Main;