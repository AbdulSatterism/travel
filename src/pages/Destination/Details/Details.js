import React, { useEffect, useState } from 'react';
import Detail from './Detail';

const Details = () => {
    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch('details.json')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, []);


    return (
        <div>
            {
                details.map(info => <Detail
                    key={info._id}
                    info={info}
                ></Detail>)
            }
        </div>
    );
};

export default Details;