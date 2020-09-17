Make sure you start by reading the tweet.

There are roughly two parts to the entire story:

- Setting up your computer to be able to develop, run and distribute electronJS projects
- Downloading the electronJS starter project in this repository and have it point at your bubble app
- It might look like a lot of text but 80% is just context, it's really only installing two things

To be able to develop and run these electronJS projects on your computer, we'll need to do some spooky developer stuff in the terminal.
Don't worry, we basically just need to install some software that electron needs to function.

# First of all, requirements

- A Macbook with a recent version of macOs (preferably 10.15.5 catalina)
- Basic terminal command knowledge, if you don't know how to navigate folders within your terminal, read this first: https://scotch.io/bar-talk/10-need-to-know-mac-terminal-commands
- An hour of your time

While all of this is possible on windows the setup of it is a bit different.
For the sake of simplicity we'll be focussing on building Mac apps, on a macbook.

# Stuff we'll need to install

- NodeJS
- Git

NodeJS is a piece of software that lets any computer or server run Javascript outside of a browser.
Git is a tool that makes it really easy for your computer to download pieces of code from github and other places.

You need to have both of these installed on your machine to be able to run electron apps.
In general, these are useful things to have installed on your machine anyway, and don't take up much space.

# Installing NodeJS

Before installing NodeJS, let's make sure we don't already have it installed by accident (sometimes it comes with other software)

- Open up your terminal by looking for Terminal.app in spotlight
- inside of the terminal, type `node -v`
- If it shows something like `12.18.4` or similar, this means you have a version of node already installed
- In that case, make sure the version is higher than `10.17.0`

If that command doesn't return a version and instead says something like 'command not found', we need to install NodeJS

By far the easiest way of installing Node is going to the official nodejs website, and downloading the installer
Go to https://nodejs.org/en/download/ and pick the macOS installer

PLAATJE VAN INSTALL STAPPEN

After this, make sure to completely QUIT your terminal (cmd + q) and open it up again to make sure it reloads your system settings.
Now, when you type `node -v` you should see something like `12.18.4`, which is the latest version as of 17 sept 2020.

# Installing Git

Next up is installing git, we also need the terminal for this.

- First try typing `git --version` to see if it's already installed
- If it is, you should see something like `git version 2.20.1...`, which version doesn't really matter
- If not, your macbook will automatically prompt you to install the `apple developer tools`
- Git is a part of this set of developer tools

PLAATJE VAN XCODE TOOLS

# Download this electronJS project

With these things installed, we should now be able to run electron project we prepared for you guys.
First, pick a place where on your computer where you want to keep the project folder.
We usually have a `~/Development` folder with all of the projects.

- go to that folder within your terminal
- in the above case, the command to navigate there would be `cd ~/Development`
- to download the project, run this command: `git clone X`
- you should now have a new folder called `bubble-mac-app`

# Almost there!

With all of this in place, go inside of the `bubble-mac-app` folder.
You can now run `npm start`, the `npm` command comes with NodeJS, which we installed earlier.
This should launch the starter project, and look like this

PLAATJE VAN MAC APP

You're all set up now.
Next up is changing some parts of the code to point to your bubble app.
To learn how, check out the tweet.
