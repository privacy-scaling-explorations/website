import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import Home from '../src/HomePage'
import fs from 'fs'
import path from 'path'

const template = fs.readFileSync(path.join(__dirname, '../build/index.html')).toString()

const pages = [
  { Component: Home, output: '/index.html' },
]

for (const page of pages) {
  const { Component, output } = page
  const app = ReactDOMServer.renderToString((
    <StaticRouter location={'/'}>
      <Component />
    </StaticRouter>
  ))
  const html = `${template}`.replace('<div id="root"></div>', `
  <div id="root">${app}</div>
  `)
  if (output.indexOf('html') !== -1) {
    fs.writeFileSync(path.join(__dirname, `../build/${output}`), html)
  } else {
    // make a directory and put an index.html in that
    fs.mkdirSync(path.join(__dirname, `../build/${output}`))
    fs.writeFileSync(path.join(__dirname, `../build/${output}`, 'index.html'), html)
  }
}
