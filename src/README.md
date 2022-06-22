# NOTES regarding popup and popupWithImage class

1. in webpack.config change 'main' to 'index'

2. in CARD.JS
   line 8 change card constructor to include function 'handlezoom' note: handlezoom is not actually used, it is a placeholder for a renderer function or method
   line 18 change doc.qs to template literal
   line 28 comment out handlezoom

3. CONSTANTS.JS
   cardSection: "card-grid\_\_format'
   cardTemplate: 'myTemplate'
   note: use template literal to insert '#' for ID

4. POPUP.JS
   change doc.qs to `.${popupSelector}`
   add .bind(this) to both addEventListeners

5. POPUPWITHIMAGE.JS
   change to export by name

# NOTES regarding section class

1. to make the display of 6 images work need the following....index.js, section.js, constants.js.....

# NOTES regarding webpack and steps to make it work.

1. in babel.config.js.....needed to use 'targets' instead of 'target' this allowed to get past the error
2. after 'npm run build' the dist folder contains hash and the other files as it should
3. converted all css to a single file 'index.css'...no use of @import, just straight css
4. created a new folder in 'src' called 'pages', added 'index.css' and 'index.js' to 'pages'
5. changed path for images from ../../../images to ../images
6. moved garbage can icon from index.html to a background-image in css

# REMAINING ISSUES

1. the 6 images are repeated; apparently the rendering of the initial array of images is happending twice

# Project Name: Around the U.S.

        Practicum-Yandex, Web-Project 7, Sprint 7, May 23, 2022

### Description

- responsive, single page website with four active javascript files
- follows Figma specifications provided by P-Y
- [Link to the project on Figma]https://www.figma.com/file/05izwsCh3F3UsBmHfHhUFQ/Sprint-6%3A-Around-The-U.S.?node-id=0%3A1

### Technologies

- utilizes additional listeners with 'click', 'mousedown' and 'keydown'
- utilizes Javascript to add interactivity to website
- utilizes Javascript to add form validation
- utilizes Javascript to control Card display & remove
- utilizes Templates
- utilizes flat BEM file structure
- media at-rules at several breakpoints facilitate responsiveness
- flexbox assist with positioning
- images compressed using https://tinypng.com/
- the "Inter" font is included (style:normal at weights: 400, 500, and 900)
- the project repository is located at https://github.com/rhwette/web_project_4.git

### Plans for Future Updates

- change grid photos
- add hyperlinks to photos to describe locations
- privacy statement and "contact us" button in footer
- to make the page more general purpose....
-     add capability to change cousteau picture
-     add capability to change page title
- link to github page....
  https://github.com/rhwette/web_project_4.git
