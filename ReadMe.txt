> npm init react-app react-deploy   //for reactApp creation
> git init
> git remote add origin https://github.com/sagarsalyan/react-deploy.git
> npm install gh-pages --save-dev   //for installing git-hub pages
In package.json
    add ----   "homepage": "http://sagarsalyan.github.io/react-deploy",
    add inside "scripts" ---- "predeploy": "npm run build",
		                      "deploy": "gh-pages -d build",

> git add .
> git commit -m "Deployed my react-app"  
> npm run deploy

That's it app will hosted

To push the code to repository
>git push -u origin master