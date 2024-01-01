import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Marvel = () => {
    const { id } = useParams();
    const [items, setItem] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(
                    `https://gateway.marvel.com:443/v1/public/characters/${id}/comics?ts=1&apikey=294e206df9286738beacb67eb0e2cc51&hash=99e0fd0481c8c8855c84dafdc465c0e1`
                );
                setItem(res.data.data.results);
                console.log(res.data.data.results);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [id]);

    return (
        <>
            {items.map((item, index) => (
                <section key={index}>
                    <div className={'card'}>
                        <h3 className={'text-center'}>{item.title}</h3>
                        <div className={'col'}>
                            <img
                                src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                                alt=""
                            />
                        </div>
                    </div>
                </section>
            ))}
        </>
    );
};

export default Marvel;
