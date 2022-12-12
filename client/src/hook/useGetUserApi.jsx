import React, { useContext } from 'react';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { UserInfoContext } from '../context/UserInfo';
import { client } from '../server/client'
const useGetUserApi = () => {

    const { setUserInfo, userInfo } = useContext(UserInfoContext);
    
    const userIp = {
        _type: 'userIp',
        country: userInfo?.country,
        city: userInfo?.city,
        ip: userInfo?.ip,
        network: userInfo?.network,
        latitude: userInfo?.latitude,
        longitude: userInfo?.longitude,
        country_calling_code: userInfo?.country_calling_code,
    }

    const alertUser = () => {
        toast.custom((t) => (
            <div
                className={`${t.visible ? 'animate-enter' : 'animate-leave'
                    } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
            >
                <div className="flex-1 flex flex-col w-0 p-4">
                    <span className="text-xl text-center">Can i save your ip address?</span>
                    <div className="buttons__flex flex p-2">
                        <button
                            onClick={() => {
                                toast.dismiss(t.id)
                                localStorage.setItem('userAgreed', JSON.stringify({ userAgreed: true }))
                                getUserApi()
                            }}
                            className="w-full border rounded bg-green-700 p-2 flex items-center justify-center text-sm font-medium text-white hover:bg-green-600 focus:outline-none"
                        >
                            Yes
                        </button>
                        <button
                            onClick={() => {
                                toast.dismiss(t.id);
                                localStorage.setItem('userAgreed', JSON.stringify({ userAgreed: false }));
                                toast.custom(() => (
                                    <div className="p-2 flex-col items-center max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5">
                                        <span className="text-xl">I didn't save your ip address</span>
                                    </div>
                                ), 1000)
                            }}
                            className="w-full border rounded bg-red-700  p-2 flex items-center justify-center text-sm font-medium text-white hover:bg-red-600 focus:outline-none"
                        >
                            No
                        </button>
                    </div>

                </div>
            </div>
        ), {
            duration: 90000
        })
    }
    useEffect(() => {
        if (userInfo?.ip) return client.create(userIp).then(() => toast.success('Save your ip address'));

    }, [userInfo?.ip])
    const getUserApi = () => {
        try {
            fetch('https://ipapi.co/json').then(res => res.json()).then(data => setUserInfo(data))
        } catch (err) { }
    }
    return { getUserApi, alertUser }
}

export default useGetUserApi