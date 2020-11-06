# munchmunch
Alpha of Munch Munch

# Running the front end client 
In the client folder, you should just have to run: 
```shell
yarn install
```
once Yarn is installed running the aws amplify client packages
```shell
npm install -g @aws-amplify/cli
```
# Setting up an AWS User
In the client folder, you should just have to run: 
```shell
amplify pull
```
Setup new user: Y, Follow the next step in your browser.

After signing into your AWS account enter a user name in your shell and proceed to finish user creation in your browser.
Enter your access key and secret access key in your shell to finish your AWS User.

Additonal instructions to come for the security token issue when creating AWS USers. 


In order to fetch all the needed packages. You will need [gatsbyJs](https://www.npmjs.com/package/gatsby#-get-up-and-running-in-5-minutes) installed globally in order to use the CLI and run the app locally. 
If you don't have it installed running: 
```shell
yarn global add gatsby
```
should have you up and running. After doing that, in the "client" folder run: 

```shell 
gatsby develop
```
and you will have a hot reloading test version of the app.
