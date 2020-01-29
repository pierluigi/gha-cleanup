# gha-cleanup - Clean up GitHub Actions artifacts

List and delete artifacts created by GitHub Actions in your repository. 
Requires a Personal Access Token with full repo permissions.

# Instructions

```
yarn install
npm link // Optional step. Call ./cli.js instead

// Options can be supplied interactively or via flags

$ gha-cleanup --help
Usage: gha-cleanup [options]

Options:
  -t, --token <PAT>        Your GitHub PAT
  -u, --user <username>    Your GitHub username
  -r, --repo <repository>  Repository name
  -h, --help               output usage information

```

# Example

Watch this asciicast to see an example execution:

[![asciicast](https://asciinema.org/a/pWVSBic12Tj43AfBUtfTnn2xK.svg)](https://asciinema.org/a/pWVSBic12Tj43AfBUtfTnn2xK)
