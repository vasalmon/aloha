# Aloha Apparel Co.
RED Academy Portfolio Project 01


## Introduction
### Mobile-First, Intuitive Layout
This apparel sales website uses a responsive, mobile-first approach through scalable units, percentages, and CSS media queries to modify mobile styles along break-points and optimize use for tablets (600px) and desktops (1240px). 


### Intentional Design, Efficient Process
This was made possible through our use of Flexbox although neither Flexbox nor mobile-first were taught until significant progress on the project was made. This forced a redesign and significant refactoring of the mark-up and style used on this website. I learned how costly refactoring can be and how essential it is to draw out designs on paper and have them with me while I implement a design. The cost savings of these strategies were invaluable when I was using them.


### JQuery: Sleek and Quick
Aloha Apparel also uses several short scripts written in Javascript, often using the JQuery library. Smooth Scrolling animates link clicks. Flickity animates the slider/carousel. Form validation and behavior modification are built into the subscribe button. 


## Navigation
Compact, easy to use navigation menus clearly expose the layout while incorporating smooth scrolling. If we view the page first as a Tablet, we see a clean looking header.
<img src="https://github.com/vasalmon/aloha/blob/master/readme/Aloha%20Tablet%20Nav.jpg">

The responsive mobile-first design uses an elegant flexbox solution to quickly and easily compact the width of the header by shifting the order of the flexbox items, pushing the nav to another row and creating a light border.
<img src="https://github.com/vasalmon/aloha/blob/master/readme/Aloha%20Mobile%20Nav.jpg">

The view from Desktop is similar to Tablet but images are larger for a richer experience.
<img src="https://github.com/vasalmon/aloha/blob/master/readme/Aloha%20Desk%20Nav.jpg">


## Shop
The shopping area maximizes its use of visual real estate filling as much of the screen with images as possible while retaining a minimal design.

<img src="https://github.com/vasalmon/aloha/blob/master/readme/Aloha%20Mobile%20Shop.jpg">

In Tablet, flexbox easily pops the tiles onto two lines making better use of the additional width.

<img src="https://github.com/vasalmon/aloha/blob/master/readme/Aloha%20Tablet%20Shop.jpg">

Finally, in Desktop, the tiles continue to scale to make use of the space available.

<img src="https://github.com/vasalmon/aloha/blob/master/readme/Aloha%20Desk%20Shop.jpg">


## Carousel: Flickity
The carousel is a jQuery implementation of Flickity with its options set for the cleanest experience. The autoPlay and wrapAround are enabled while the previous and next arrows are disabled for an understated but continuous experience.

<img src="https://github.com/vasalmon/aloha/blob/master/readme/Aloha%20Mobile%20Carousel.jpg">

As space is available the carousel expands to show more results (2 per line on tablet).

<img src="https://github.com/vasalmon/aloha/blob/master/readme/Aloha%20Tablet%20Carousel.jpg">

As more space becomes available, the carousel comes alive showcasing 4 results at a time.

<img src="https://github.com/vasalmon/aloha/blob/master/readme/Aloha%20Desk%20Carousel.jpg">


## Email Subscription
One function of the Aloha Apparel website is to allow for e-mail submission. Using Javascript, the default behaviour of the submit button is modified to produce an alert box with some basic form validation.

<img src="https://github.com/vasalmon/aloha/blob/master/readme/Aloha%20Mobile%20Email.jpg">

In Tablet view, we can see a successful e-mail submission.

<img src="https://github.com/vasalmon/aloha/blob/master/readme/Aloha%20Tablet%20Email.jpg">

In Desktop, we see an unsuccessful submission following an attempt to submit an empty string.

<img src="https://github.com/vasalmon/aloha/blob/master/readme/Aloha%20Desk%20Email.jpg">