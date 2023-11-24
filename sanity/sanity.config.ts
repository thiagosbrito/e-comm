import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {colorInput} from '@sanity/color-input'

export default defineConfig({
  name: 'default',
  title: 'e-comm',

  projectId: 'uxmmw4pb',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), colorInput()],

  schema: {
    types: schemaTypes,
  },
})
