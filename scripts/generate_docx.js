const fs = require('fs')
const path = require('path')
const { marked } = require('marked')
const htmlDocx = require('html-docx-js')

async function mdToDocxBuffer(mdContent) {
  const html = `<!doctype html><html><head><meta charset="utf-8"></head><body>${marked(mdContent)}</body></html>`
  const blob = htmlDocx.asBlob(html)
  const arrayBuffer = await blob.arrayBuffer()
  return Buffer.from(arrayBuffer)
}

async function generate() {
  const docsDir = path.join(__dirname, '..', 'docs')
  if (!fs.existsSync(docsDir)) {
    console.error('docs directory not found')
    process.exit(1)
  }
  const files = fs.readdirSync(docsDir).filter((f) => f.endsWith('.md'))
  for (const f of files) {
    const mdPath = path.join(docsDir, f)
    const md = fs.readFileSync(mdPath, 'utf8')
    try {
      const buf = await mdToDocxBuffer(md)
      const outPath = path.join(docsDir, f.replace(/\.md$/, '.docx'))
      fs.writeFileSync(outPath, buf)
      console.log('Generated', outPath)
    } catch (err) {
      console.error('Error generating', f, err)
    }
  }
}

generate().catch((e) => { console.error(e); process.exit(1) })
