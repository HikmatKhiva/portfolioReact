import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import mainTitle from './mainTitle';
import skills from './skills';
import experience from './experience';
import workExperience from './workExperience';
import resume from './resume';
import work from './work';
import filterWork from './filterWork';
import socialLink from './socialLink';
import contact from './contact';
import userIp from './userIp';
import seo from './seo';
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    mainTitle, skills, experience, workExperience, resume, work, filterWork, socialLink, contact, userIp,seo]),
})
