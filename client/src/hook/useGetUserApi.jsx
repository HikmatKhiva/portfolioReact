/* Building */
// import {useZustandStore} from '../zustand'
// const useGetUserApi = () => {
//   const {userInfo, updateUserInfo} = useZustandStore()
//   const userIp = {
//     _type: 'userIp',
//     country: userInfo?.country,
//     city: userInfo?.city,
//     ip: userInfo?.ip,
//     network: userInfo?.network,
//     latitude: userInfo?.latitude,
//     longitude: userInfo?.longitude,
//     country_calling_code: userInfo?.country_calling_code,
//   }
//   const getUserApi = () => {
//     try {
//       fetch('https://ipapi.co/json')
//         .then((res) => res.json())
//         .then((data) => updateUserInfo(data))
//     } catch (err) {}
//   }
//   return {getUserApi}
// }
// export default useGetUserApi
