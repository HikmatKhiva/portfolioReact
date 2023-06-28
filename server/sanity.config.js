import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas/schema'

export default defineConfig({
  name: 'default',
  title: '', /* your project Title */

  projectId: '', /* here projectId  */
  dataset: '', /* your project dataset */

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})