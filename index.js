const { ClientSecretCredential } = require("@azure/identity");
const { SecretClient } = require("@azure/keyvault-secrets");
const secretName = "wallet-pk";
const tenantId = "{{your_tenant_id}}";
const clientId = "{{your_client_id}}";
const clientSecret = "{{your_client_secret}}";
const credential = new ClientSecretCredential(tenantId, clientId, clientSecret);
const vaultName = "goartqavault";
const url = `https://${vaultName}.vault.azure.net`;
const client = new SecretClient(url, credential);
async function main() {
  const latestSecret = await client.getSecret(secretName);
  console.log(`Latest version of the secret ${secretName}: `, latestSecret);
}
main();