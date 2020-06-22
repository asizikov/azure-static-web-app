Build the infrastructure:


```bash
cd /infra
githubRepoToken=your-token-here#https://github.com/settings/tokens
az deployment sub create --name rg-azure-static-web-app -l westeurope  -f azure-static-web-app.json --parameters azure-static-web-app.parameters.json
az deployment group create --resource-group rg-azure-static-web-app  -f app-azure-static-web-app.json --parameters app-azure-static-web-app.parameters.json --parameters "repositoryToken=$githubRepoToken" 
```