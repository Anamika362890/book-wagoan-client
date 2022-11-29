import { useEffect, useState } from 'react';

const UseAdmin = email => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true);
    useEffect(() => {
        if (email) {

            fetch(`http://localhost:5000/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.accessToken) {
                        localStorage.setItem('accessToken', data.accessToken);
                        setIsAdmin(data.isAdmin);
                        setIsAdminLoading(false);

                    }
                });
        }

    }, [email]);
    return [isAdmin, isAdminLoading];
}


export default UseAdmin;