export default function newIP(ip) {
  return {
    _type: "userIp",
    country: ip?.country_name,
    city: ip?.city,
    ip: ip?.ip,
    network: ip?.network,
    latitude: ip?.latitude,
    longitude: ip?.longitude,
    country_calling_code: ip?.country_calling_code,
  };
}