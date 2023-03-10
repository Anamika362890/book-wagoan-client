import { useEffect, useState } from 'react';

const UseSeller = email => {
    const [isSeller, setIsSeller] = useState(false);
    const [isSellerLoading, setIsSellerLoading] = useState(true);
    useEffect(() => {
        if (email) {

            fetch(`http://localhost:5000/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.accessToken) {
                        localStorage.setItem('accessToken', data.accessToken);
                        setIsSeller(data.isSeller);
                        setIsSellerLoading(false);

                    }
                });
        }

    }, [email]);
    return [isSeller, isSellerLoading];
}


export default UseSeller;