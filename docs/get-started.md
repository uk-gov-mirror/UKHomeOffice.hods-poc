Prototyping
===========

This guide explains how to quickly build prototypes for testing ideas with users.


### 2. Run the following commands locally

Using terminal, run the following commands below (the parts in ALL CAPS should be replaced with something specific to
you):

```shell
mkdir YOUR-PROTOTYPE
cd YOUR-PROTOTYPE
git init
git remote add origin git@github.com:YOUR_USER/YOUR-PROTOTYPE.git
npm init @hods prototype
```


### 3. Answer the interactive prompts

The generator / initialiser will ask you some questions but the defaults should be fine. You can accept the default by simply pressing enter.

- **Prototype**
  Select this option if you want to build a prototype for testing ideas and for research.
  (If you already have a prototype, you might prefer to run
  `npm run create:app` instead.)
- **Project**
  This option is aimed at developers to set up a project in production using the
  coded React examples from the Home Office Design System.

Once you've selected the prototype option and answered the additional prompts you should pull down the dependencies:

```shell
npm install
```


### 4. View your prototype locally

Enter the following command:

```shell
npm run dev
```
Once that's completed, open in your browser: http://localhost:8080/

### 1. Set up your remote repository

If you want to to deploy your prototype so it can be tested with users or allow others to collaborate on it, you can set up a blank code repository in [GitHub](https://github.com/). Extra CI support is provided through [GitHub Actions](https://github.com/features/actions).

### 5. Commit and push your new prototype

Run the following commands to push up the first version of your new
prototype to your remote code repository:

```shell
git add .
git commit -m 'Initial commit'
git push -u origin master
```

[Webpack]: https://webpack.js.org/
[Sass]: https://sass-lang.com/
[Create React App]: https://create-react-app.dev/
[react-router]: https://reactrouter.com/
[GitHub]: https://github.com/
[GitHub Actions]: https://github.com/features/actions
[Working on your project]: ./working-on-your-project
[Chromatic]: https://www.chromatic.com/
[log in to Chromatic]: https://www.chromatic.com/start
[Netlify]: https://www.netlify.com/
[log in to Netlify]: https://app.netlify.com/
[Netlify documentation]: https://docs.netlify.com/
