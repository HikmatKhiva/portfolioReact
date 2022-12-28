import React, { useContext, useEffect, useState } from 'react';
import toastHot from 'react-hot-toast';
import { toast } from 'react-toastify';
import { UserInfoContext } from '../context/UserInfo';
import { client } from '../server/client'
const useGetUserApi = () => {
    const [cancelButton, setCancelButton] = useState(false);
    const { setUserInfo, userInfo } = useContext(UserInfoContext);
    const alertUser = () => {
        toastHot.custom((t) => (
            <div
                className={`${t.visible ? 'animate-enter' : 'animate-leave'
                    } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
            >
                <div className="flex-1 flex flex-col w-0 p-4">
                    <span className="text-xl text-center">Can i save your ip address?</span>
                    <div className="buttons__flex flex p-2">
                        <button
                            disabled={cancelButton}

                            onClick={() => {
                                toastHot.dismiss(t.id)
                                localStorage.setItem('userAgreed', JSON.stringify({ userAgreed: true }))
                                getUserApi()
                                setCancelButton(true)
                            }}
                            className="w-full border rounded bg-green-700 p-2 flex items-center justify-center text-sm font-medium text-white hover:bg-green-600 focus:outline-none"
                        >
                            Yes
                        </button>
                        <button
                            disabled={cancelButton}
                            onClick={() => {
                                toastHot.dismiss(t.id);
                                setCancelButton(true)
                                localStorage.setItem('userAgreed', JSON.stringify({ userAgreed: false }));
                                toastHot.custom((t) => (
                                    <div className="p-2 flex-col items-center max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5">
                                        <span className="text-xl">I didn`t save your ip address</span>
                                        <button onClick={() => toastHot.dismiss(t.id)} className='border rounded bg-red-700 p-1 text-white'>Cancel</button>
                                    </div>
                                ), 1000)
                            }}
                            className="w-full rounded bg-red-700  p-2 flex items-center justify-center text-sm font-medium text-white hover:bg-red-600 focus:outline-none"
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
        if (userInfo?.ip) return client.create(userIp).then(() => toast.success('Save your ip address'));

    }, [userInfo?.city, userInfo?.country, userInfo?.country_calling_code, userInfo?.ip, userInfo?.latitude, userInfo?.longitude, userInfo?.network])
    const getUserApi = () => {
        try {
            fetch('https://ipapi.co/json').then(res => res.json()).then(data => setUserInfo(data))
        } catch (err) { }
    }
    return { getUserApi, alertUser }
}
export default useGetUserApi