npm init react-app react-deploy   //for reactApp creation

npm install gh-pages --save-dev   //for installing git-hub pages



In package.json
    add ----   "homepage": "http://sagarsalyan.github.io/react-deploy",
    add inside "scripts" ---- "predeploy": "npm run build",
		                      "deploy": "gh-pages -d build",