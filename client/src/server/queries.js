export const mainTitle = '*[_type == "mainTitle"]';
export const queryExperience = '*[_type == "experience"]';
export const querySkills = '*[_type == "skills"]';
export const queryResume = '*[_type == "resume"]{"resume":resume.asset->url}';
export const queryCertificate =
  '*[_type=="myCertificate"][0].certificate[]{"certificate":certificate.asset->url}';
export const queryFilter = '*[_type == "filter"]';
export const queryProjects = '*[_type == "work"]';
export const queryLink = '*[_type == "links"]';
export const userIP = '*[_type == "userIp"]';