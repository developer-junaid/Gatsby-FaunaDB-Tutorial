## FaunaDB with Netlify Serverless Functions, Gatsby

## Steps

- Signup on <a href='https://www.netlify.com/'>Netlify</a>
- run command `npm i -g yarn`
- run command `npm i netlify-cli`
- run command `gatsby new app_name https://github.com/gatsbyjs/gatsby-starter-hello-world`
- cd app_name
- create file (netlify.toml) on root
- add commands inside (as written in netlify.toml in my repo)
- Create functions
- - Open terminal
- - create template (run command "netlify functions:create functionName")
- - pick a template (hello-world in my case)
- - Go to /functions/functionName and make changes
- - run command `npm init -y; npm i faunadb`
- Navigate back to your app_name
- run command `npm i formik`
