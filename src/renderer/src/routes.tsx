import { Router, Route } from 'electron-router-dom'

import { Blank } from './pages/blank.js'
import { Document } from './pages/document.js'
import { Default } from './pages/layouts/default.js'

export function Routes() {
  return (
    <Router
      main={
        <Route path="/" element={<Default />}>
          <Route path="/" element={<Blank />} />
          <Route path="/documents/:id" element={<Document />} />
        </Route>
      }
    />
  )
}
