## Make sure you start by reading the [tweet](twitter.com/minimumssstudio).

There are roughly two parts to the entire story:

- Setting up your computer to be able to develop, run and distribute electronJS projects
- Downloading the electronJS starter project in this repository and have it point at your bubble app

### First of all, requirements

- An hour of your time
- A Macbook with a recent version of macOs (preferably 10.15.5 catalina)
- Basic terminal command knowledge
  -  If you don't know how to navigate folders within your terminal, read [this](https://scotch.io/bar-talk/10-need-to-know-mac-terminal-commands) first

### Stuff we'll need to install

- NodeJS
- Git

NodeJS is a piece of software that lets any computer or server run Javascript outside of a browser.
Git is a tool that makes it really easy for your computer to download pieces of code from github and other places.

### Installing NodeJS

Before installing NodeJS, let's make sure we don't already have it installed by accident (sometimes it comes with other software)

- Open up your terminal by looking for `Terminal.app` in spotlight
- Inside of the terminal, type `node -v`
- If it shows something like `12.18.4` or similar, this means you have a version of node already installed
- In that case, make sure the version is *higher* than `10.17.0`

If that command doesn't return a version and instead says something like `command not found`, we need to install NodeJS.

By far the easiest way of installing Node is going to the official NodeJS website, and downloading the installer.
Go to https://nodejs.org/en/download/ and download the latest macOS installer.

![2](https://github.com/kayamy/nocode-mac-app/blob/master/images/2.png)

**After this, make sure to completely QUIT your terminal** (cmd + q) and open it up again to make sure it reloads your system settings.
Now, when you type `node -v` you should see something like `12.18.4`, which is the latest version as of 17 sept 2020.

![3](https://github.com/kayamy/nocode-mac-app/blob/master/images/3.png)

### Installing Git

Next up is installing git, we also need the terminal for this.

- First try typing `git --version` to see if it's already installed
- If it is, you should see something like `git version 2.20.1...`
- If not, your macbook will automatically prompt you to install the `apple developer tools`
- Git is a part of this set of developer tools, so go ahead and accept the prompt.

![4](https://github.com/kayamy/nocode-mac-app/blob/master/images/4.png)

### Download this electronJS project

With these things installed, we should now be able to run electron project we prepared for you guys.
First, pick a place where on your computer where you want to keep the project folder.
We usually have a `~/Development` folder with all of the projects.

- Go to that folder within your terminal
- To download the project, run this command: `git clone https://github.com/kayamy/nocode-mac-app.git`
- You should now have a new folder called `nocode-mac-app`

### Almost there!

With all of this in place, go inside of the `nocode-mac-app` folder.
You can now run `npm` commands, the `npm` command comes with NodeJS, which we installed earlier.

- First, install all the project-specfic dependencies with `npm install`
- Then launch the project with `npm start`

This should launch the starter project, and look like this

![5](https://github.com/kayamy/nocode-mac-app/blob/master/images/5.png)

You're all set up now 🕴️

Next up is changing some parts of the code to point to your bubble app.
To learn how, check out the [tweet](twitter.com/minimumssstudio).
