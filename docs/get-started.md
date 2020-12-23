Prototyping
===========

This guide explains how to create prototypes using the Home Office Design System.

### 1. Set up your repository

Set up a blank code repository in [GitHub](https://github.com/) as
extra CI support is provided through [GitHub Actions](https://github.com/features/actions).


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

The generator / initialiser will ask you some questions about whether you want to create a new prototype or
project:

- **Prototype**
  Select this option if you want to build a prototype for testing ideas and for research.
  (If you already have a prototype, you might prefer to run
  `npm run create:app` instead.)
- **Project**
  This option is aimed at developers to set up a project in production using the
  coded React examples from the Home Office Design System.

Once you've selected the prototype option and answered the additional prompts you should pull down the dependencies:

```shell
pnpm install
```


### 4. View your prototype locally

Enter the following command:

```shell
npm run dev
```
Once that's completed, open in your browser: http://localhost:8080/

### 5. Commit and push your new prototype

Run the following commands to push up the first version of your new
prototype to your remote code repository:

```shell
git add .
git commit -m 'Initial commit'
git push -u origin master
```
