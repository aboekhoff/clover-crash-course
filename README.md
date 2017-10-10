# React/Redux Clover Crash Course

![Crash GIF](http://68.media.tumblr.com/tumblr_lzpvdbOgkl1qip8f5.gif)

## Phase 0: Setup

~~~ bash
$ brew install yarn
$ yarn global add create-react-app
$ create-react-app clover-crash-course
$ cd clover-crash-course
$ yarn add redux react-redux axios
$ yarn start
~~~

## Phase 1: Make it Personal

Open the clover-crash-course directory in the editor of your choice then open App.js.

Change the app title to "Welcome to the React/Redux Clover Crash Course".

Save the file and check that the app updated.

Let's add a little branding.

Just below the imports add the following line:

~~~ js
const CloverLogo = 'http://hillhouseconstruction.com/wp-content/uploads/2015/12/Clover.png'
~~~

Copy the existing image tag and replace the src with the CloverLogo and save.

If you feel dizzy you can turn the animation off in the App.css file.

Finally delete the paragraph tag below the header.

## Phase 2: Cat Pictures

It is an established fact that the internet has two main purposes. 

One of them is sharing cat pictures. 

