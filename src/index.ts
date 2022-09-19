import { readFileSync } from "fs"
import glob from "glob"
import { resolve } from "path"

const files = glob.sync("**/*.[tj]s?(x)")
const cwdPath = process.cwd()

const fileLines = files.map((file) => {
  const filePath = resolve(cwdPath, file)
  const fileLines = readFileSync(filePath, "utf-8").split(/\r?\n/).length

  console.log(`File "${file}": ${fileLines} lines.`)

  return fileLines
})

console.log(`Total: ${fileLines.reduce((prev, curr) => prev + curr, 0)}`)
