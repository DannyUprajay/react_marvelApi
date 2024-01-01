import React from 'react';
import {useNavigate} from "react-router-dom";

const Card = ({ data }) => {
    let navigate = useNavigate()
    return (
        <>
            {data ? (
                data.map((item, index) => {
                    return (
                        <section key={index}>
                            <div className={'card'} key={item.id} onClick={()=>navigate(`/${item.id}`)}>
                                <h3 className={'text-center'}>{item.title}</h3>
                                <div className={'col'}>
                                    <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </section>
                    );
                })
            ) : (
                ''
            )}
        </>
    );
};

export default Card;
