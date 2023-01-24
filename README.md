# Contribution guidelines

### Development and Production branches

Our `development` and `production` branches are the three main branches through which codes are tested and pushed through live `environment`. Any contribution needs to follow a proper `git-flow` to integrate your codes to these branches for testing and deployments.

### Wrok branch

Any new **feature-branch** needs to be created from **production**. Once stable codes are ready, create a pull request to test your codes in our `development` branch where we manage our testing servers. **feature-branchs** needs to be prefixed with `feat`. Example: `feat/test-editor`, `feat/email-templating` etc.
