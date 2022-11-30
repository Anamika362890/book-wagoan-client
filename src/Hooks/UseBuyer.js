import { useEffect, useState } from 'react';

const UseBuyer = email => {
    const [isBuyer, setIsBuyer] = useState(false);
    const [isBuyerLoading, setIsBuyerLoading] = useState(true);
    useEffect(() => {
        if (email) {

            fetch(`https://book-wagon-server.vercel.app/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.accessToken) {
                        localStorage.setItem('accessToken', data.accessToken);
                        setIsBuyer(data.isBuyer);
                        setIsBuyerLoading(false);

                    }
                });
        }

    }, [email]);
    return [isBuyer, isBuyerLoading];
}


export default UseBuyer;