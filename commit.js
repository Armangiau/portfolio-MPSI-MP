import { execSync } from 'node:child_process'

try {
  execSync('npm run format', { stdio: 'inherit' })
  try {
    execSync('npm run test-run', { stdio: 'inherit' })
    try {
      const args = process.argv
      const commitMessage = args.at(args.indexOf('-m') + 1)
      execSync(`git add . && git commit -m "${commitMessage}"`, { stdio: 'inherit' })
    } catch (err) {
      console.error('Git add/commit error, have you added well the -m message :\n', err)
    }
  } catch {
    console.error('You must pass all the tests to commit')
  }
} catch {
  console.error('Resovle the problem of format before commit')
}
