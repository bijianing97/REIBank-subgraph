module.exports = async function ({ deployments, getNamedAccounts }) {
  const { deploy } = deployments
  const { deployer } = await getNamedAccounts()
  const bank= await deploy('MyBank', {
    from: deployer,
    log: true,
    deterministicDeployment: false,
  })
  console.log('bank deployed on:', bank.address)
}