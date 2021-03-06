# **Munster Waves - Surf Forecast Web Application**
---

<br>


Munster Waves is a fictional surf shop that is just about to open its business for the Munster area. The company is releasing a surf forecast app that is accessible by web browser in order to create a brand image before the shop opens. The company wants to portray themselves as fun and creative as well as being proud of being from Munster. They want to interact with local surfers to better understand the products they would like to be able to purchase. They also want to have site users sign up for an email alert once the shop is open.
<br>

---

## **Table of Contents**
---
* ### **[Technologies Used](#technologies-used)**
    * [Code](#code)
    * [Languages](#languages)
    * [External Libraries](#external-libraries)
    * [Validators](#validators)
    * [Other Technologies Used](#other-technologies-used)
* ### **[UX Process](#ux-process)**
    * #### **[Strategy Plane](#strategy-plane)**
        * [Cultural Considerations](#cultural-considerations)
        * [Value Provided to the Business](#value-provided-to-the-business)
        * [Value Provided to Users](#value-provided-to-users)
        * [B2C](#b2c)
        * [Business Goals](#business-goals)
        * [User Needs](#user-needs)
        * [Opportunities Table](#opportunities-table)
    * #### **[Scope Plane](#scope-plane)**
        * [Site Features](#site-features)
        * [Project Schedule](#project-schedule)
        * [User Stories](#user-stories)
    * #### **[Structure Plane](#structure-plane)**
        * [Interaction Design](#interaction-design)
        * [Information Architecture](#information-architecture)
    * **[Skeleton Plane](#skeleton-plane)**
        * [Wireframes](#wireframes)
    * **[Surface Plane](#surface-plane)**
        * [Colour](#colour)
        * [Layout](#layout)
        * [Fonts](#fonts)
        * [Images](#images)
        * [Order and Sequence](#order-and-sequence)
        * [Identity](#identity)
* **[Testing](#testing)**
    * **[Proof of Concept Testing](#proof-of-concept-testing)**
        * [Home Page Clickable Map Testing](#home-page-clickable-map-testing)
        * [Weather APIs Testing](#weather-apis-testing)
        * [Email API Testing](#email-api-testing)
        * [Map API Testing](#map-api-testing)
    * **[Feature Testing](#feature-testing)**
        * [Brand Logo](#brand-logo)
        * [Announcement Bar](#announcement-bar)
        * [Larger Devices Navbar](#larger-devices-navbar)
        * [Smaller Devices Navbar](#smaller-devices-navbar)
        * [Home Page Map](#home-page-map)
        * [Footer](#footer)
        * [County Pages](#county-pages)
        * [Individual Beach Pages With Surf Forecast](#individual-beach-pages-with-surf-forecast)]
        * [Supplementary Beach Information](#supplementary-beach-information)
        * [Signup Page Form](#signup-page-form)
        * [Information Section About Company](#information-section-about-company)
    * **[User Story Testing](#user-story-testing)**
        * [User Story 1](#user-story-1)
        * [User Story 2](#user-story-2)
        * [User Story 3](#user-story-3)
        * [User Story 4](#user-story-4)
        * [User Story 5](#user-story-5)
        * [User Story 6](#user-story-6)
        * [User Story 7](#user-story-7)
        * [User Story 8](#user-story-8)
        * [User Story 9](#user-story-9)
        * [User Story 10](#user-story-10)
    * **[Validation of Code](#validation-of-code)**
    * **[Efficiency and Performance Testing](#efficiency-and-performance-testing)**
    * **[Accessibility Notes](#accessibility-notes)**
* **[Bugs and Issues](#bugs-and-issues)**
    * [Navbar Bugs](#navbar-bugs)
    * [Home Page Map Issue](#home-page-map-issue)
    * [logo issue](#logo-issue)
    * [forecast icons issue](#forecast-icons-issue)
* **[Deployment](#deployment)**
    * [Github Pages](#github-pages)
    * [To Clone Project](#to-clone-project)
* **[References](#bugs-and-issues)**
* **[Acknowledgements](#acknowledgements)**

        


<br>

---

## Technologies used

### **Code**

* VSCode - to write the code for the project
* Git - used for version control 
* Github - software used to store project remotely
* Github Pages - used to deploy the project to an active link

#### **Languages**

* HTML
* CSS
* JavaScript

### **External Libraries**

* Font Awesome
* JQuery
* Google Fonts

### **Validators**
 * [W3Schools HTML validator](https://validator.w3.org/) 
 * [W3Schools Jigsaw CSS validator](http://jigsaw.w3.org/css-validator/validator) 
 * [JSLint JavaScript validator](https://www.jslint.com/) 

 ### **Apis**
 * [EmailJs](https://www.emailjs.com/) 
 * [Stormglass API](http://jigsaw.w3.org/css-validator/validator) 
 * [Sunrise-sunset.org API](https://sunrise-sunset.org/api) 
 * [Leaflet API](https://leafletjs.com/) 

 ### **Other Technologies Used**

 * Balsamiq - for creating wireframes
 * Chrome developer tools - for testing and inspecting code
 * Lighthouse - for testing performance rating of deployed site
 * [Boxy SVG Editor](boxy-svg.com) - for creating logo and home page map

[back to contents](#table-of-contents)


---

## UX Process

---

<br>



### **Strategy Plane**

<br>

#### **Cultural Considerations**


Cultural considerations were taken into account during the planning of the site. The site is developed for surfers. There are no special tech considerations to be made. However, the site should be very mobile friendly as surfers are often on the road and might need to access the site via mobile often. <br><br>

#### **Value Provided to the Business**

The site provides a platform for the business to raise brand awareness and develop a positive brand image. It also provides an outlet for the brand to interact with potential customers regarding what products they would like to purchase. It also allows the business to create an initial customer base by having site users sign up for an email alert once the shop opens. All of the above will help in the generation of long-term profit for the business. <br><br>

#### **Value provided to Users**

The main value that the site provides to its users is giving them the ability to access the surf forecast and information for the main beaches in the Munster area (The counties of Clare, Kerry, Cork and Waterford) in one place. It also allows users to interact with the Munster Waves surf shop before it opens. They will be able to request products that they would like to purchase. <br><br>

#### **B2C**

As the site will operate under the B2C model of business. There are certain considerations to be made to follow this model. Branding is very important and the brand is striving to create a brand image that is all of the following: punk, proud of its region, fun and creative. Images on the site should be large and there should be a minimalistic approach taken wherever possible. Another consideration to be made is the number of steps taken by the user before being able to purchase. The purchase in this case can be considered as having the user sign up to the email alert. Therefore efforts should be made to minimalise the the number of steps taken by the user to get to this page. There should be an announcement on the top of each page of the site that allows the user to navigate to the signup page in a single click without reading the rest of the content on the page. The announcement should be capitalised in order to trigger the emotions of the user so that they understand that this piece of information is important and should be given attention. <br><br>

### **Business Goals**

The Business Goals are as follows:

* To develop awareness of the brand and to become an integrated part of the surf community in the Munster region. 
* To provide a positive experience to the site users in order to create a positive association between this its experience and the brand.
* To be able to receive product recommendations from customers in order to better stock the shop once it opens.
* To increase traffic to the shop's social media pages.
* To create a general discussion area for surfers. This is in order to reinforce the positive association between community and the brand.
* To provide users with information about the opening of the shop as well as information about the ethos of the shop and products it will have in stock for surfers.
* To survey users on how to improve the site. 
* To register the users with a login that will also work for the future shops main website.
* To provide a recommendation of equipment to users relating to the surf conditions of the particular beaches in order to upsell.
* Make a profit
<br><br>

#### **User Needs**

The user needs for site users are as follow:

* To be able to view surf forecasts for beaches in the Munster area.
* To be able to provide feedback about the site.
* To be able to learn about the 'Munster Waves' shop and understand what they can expect from the brand.
* To be able to view the brand's social media pages.
* To be able to receive news about the shops opening. 
* To be able to save their favourite beaches for ease of use over time on the site. 
* To understand the best equipment to use for different surf conditions.
* To interact with other surfers in order which beach to surf etc.
* To request products to be supplied by the 'Munster Waves' shop.
* To read supplementary information about individual beaches in the region.
<br><br>

### **Opportunities table**

The opportunities are based on the business' goals as well as the site users' needs. 
I = importance - rated 0-5
V = viablility - rated 0-5
Y/N is the decision (yes or no) for an opportunity to be pursued or not. The viablilty rating must be greater to that of the importance rating for the project to be viable. 
The reasoning for an opportunities inclusion or exclusion is also given. 
<br><br>

**Opportunity**                                                                                                                                                  | **I** | **V** | **Y/N** | **Reasoning**                                                                                                                                                                |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|---------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| To create a means for users to receive <br> information about shop opening.                                                                                      | 5     | 5     | Y       | This will be included due to its  <br> importance and easiness to achieve.                                                                                                   |
| To create a means for users to learn about <br> the brand and what to expect.                                                                                    | 5     | 5     | Y       | To be included due to its importance <br> and easiness to achieve.                                                                                                           |
| To create a discussion area on the site for <br> local surfers                                                                                                   | 4     | 2     | N       | Although quite important this will <br> be excluded due to its difficulty to <br> execute.                                                                                   |
| To create a surf forecast for main in <br>  Munster                                                                                                              | 5     | 3     | Y       | This must be included as is is the main <br> value provided to site users.                                                                                                   |
| To provide customers with general <br>  information on the individual beaches                                                                                    | 3     | 4     | Y       | This will be included - it is only <br> somehwat important but easily achievable                                                                                             |
| To create a product recommendations section <br> on relevant pages.                                                                                              | 4     | 0     | N       | This is important as it will allow  the <br> company to upsell its products  but is <br> not viable whatsoever in the timeframe <br> so will be excluded.                    |
| To create a method for site users to save <br> their favourite beaches for easier <br> navigation.                                                               | 4     | 1     | N       | This is quite important but will be <br> excluded as it is not achievable due to <br> to time constraints.                                                                   |
| To allow users the possibility of creating <br>  a login that will work for both the surf <br> forecast site and the shops main site once <br>  it is developed. | 4     | 0     | N       | This is not viable as it would take too <br> long to develop so it will be excluded.                                                                                         |
| To allow site users to provide feedback on <br>  how the site can be improved.                                                                                   | 2     | 5     | Y       | This is not extremely important but due <br> to its simplicity to achieve it will be <br> included.                                                                          |
| To allow site users to request products to <br>  be supplied in the shop once it opens.                                                                          | 4     | 5     | Y       | This is quite important as it shows the <br> company is committed to offering a good <br> service to its customers. It is also <br> easily implemented so will be included.  |
| To develop brand image through the style of <br> the site, the images used etc.                                                                                  | 4     | 5     | Y       | This is integral in the business's goal <br> in developing a positive association <br> between the experience of using the <br> site and the brand so must be included.      |
| To give site users a method of accessing <br>  the company's social media pages.                                                                                 | 3     | 5     | Y       | This is simple to achieve and <br> relatively important so will be included                                                                                                  |
| **Total**                                                                                                                                                        | 47    | 40    |         |                                                                                                                                                                              |
| **Adjusted total disregarding opportunities <br>  to be traded off**                                                                                             | 31    | 37    |         |                                                                                                                                                                              |

The adjusted titles which disregard the traded off opportunites demonstrate a project plan 

<br>

[back to contents](#table-of-contents)

### **Scope Plane** 

<br>

#### **Site Features**

The following are the features and sub-features that will be needed to be developed in order to realise the opportunities outlined in the above section:

* Brand Logo - The brand logo will be shown on all pages. It will be large as it is important in promoting the brands image.
* Announcement bar - This will appear on all pages at the top as it is very important. It will inform the user that the shop is opening soon and allow them to navigate directly to the page where they can sign up to be alerted via email once the shop opens. 
* Navigation bar - This will appear on all pages. It will be developed to allow the site users to navigate to the pages that display the beaches of each of the four counties that contain beaches that can be surfed. As it is quite wide it will needed to be replaced with a burger icon on mobile view. 
* Home page with highlighting clickable map - This is the centrepiece on the main page and is a key part in developing that brands image. It will artistically portray Munster as being an island in the Sea. In the surrounding ocean there will be culturally relevant drawings. This shows the brand as being proud of the Munster region as well as fun and creative.
* Footer - This will be displayed on all pages. The footer will contain the links to the brands' social media pages as well as copyright information.
* County pages with a map showing the beaches in that county - The map should be vibrant and use surfboards as markers for the individual beaches. The markers should be clickable. When clicked they should display a popup with a small amount of information about the particular beach and give the user the opportunity to navigate to that beach. 
* Individual beach pages with the surf-forecast - The surf forecast should be viewable for seven days from the current date. The days should be clickable on larger screens and navigable through arrows on smaller screens. The times should be changeable in hourly increments and should be navigable using arrows on all screen sizes. The forecast should include sunrise times, sunset times, temperature, water temperature, precipitation, swell height, wave height, wave direction, wind speed and wind direction. 
* Supplementary information about beaches - This should be displayed on the individual beach pages. It will include a paragraph containing further information about the particular beach. A photograph of that beach and another map with the beaches location for the convenience of the user. 
* A form page - The form page should allow the users to sign up to be alerted once the company's shop is opened. It will allow site users to offer feedback on how the site can be improved. It will also allow the users to request products they would like the shop to supply once it opens. This will all be achieved by sending the site owners an email with the information contained in the form when the form is submitted. The emails of the user can be extracted from this email and added to a list. A mass email can then be sent once the shop opens. 
* A section of information about the Munster Waves shop and vision - This shall be included in the page with the form and will allow site users to learn about the company's ethos and vision. This is an important in developing the brands desired image. 
<br><br>

#### **Project Schedule** 

The following is the order of tasks to be completed for the project:

1. Proof of concept testing -
    * Concept testing for clickable map on home page.
    * Concept testing for weather apis - to ensure all required parameters are accessible
    * Concept testing for email api - to ensure that the site owners can be emailed the contents of the form on the form page. 
    * Map api testing - to ensure that the map for the county page with the required functionality is achievable. 
2. Home page development - 
    * announcement bar development (template for all pages)
    * Logo placement (template for all pages)
    * Clickable map development
    * Testing
3. Navbar development -
    * Large screen navbar development
    * Small screen navbar development
    * Feature testing
4. Footer development -
    * Feature development
    * Feature testing
5. Indidual County pages development - 
    * Map creation with popups for each beach
    * Feature testing
6. Individual beach pages development - 
   * Surf forecast section development using apis
   * Feature testing
7. Supplementary beach information creation -
    * Information paragraphs
    * Beach photographs
    * Map of beach location
    * Feature testing
8.  Form page development - 
    * Feature development 
    * Feature testing
9. Shop information paragraph -
    * Feature development
    * Feature testing
10. Additional styling -
    * Development
    * Testing (if required)
11. Testing - 
    * User story testing
    * Responsivity testing 
    * Code validation 
    * Efficiency testing
    * Compatibility testing
<br><br>

#### **User Stories**

Below are the user stories to be after the site has been developed:

1. As a prospective customer for the shop I want to be able to read information about the shop.
2. As a young surfer from Munster I want to be able to engage with the company on social media. 
3. As a resident of Inchydoney I want to be able to navigate directly to view the surf forecast for the beach. 
4. As a pro surfer seeking deals on surf equipment I want to be able to sign up to be alerted via email once the surf shop opens. 
5. As a resident of Limerick County I want to be able to view the surf forecast for the beaches in north Kerry and south Clare. 
6. As a big wave surfer I want to be able to make a quick comparison of the wave heights of the different beaches. 
7. As a driver I want to plan a route to Lahinch beach from Ennis.
8. As the site owner I want to ensure that the equipment request section of the form is working. 
9. As a site user I want to be able to provide feedback on the site. 
10. As a full-time employee who enjoys surfing. I want to be able to view the surf forecast for the beaches in Waterford after 6pm on weekdays.
<br><br>

[back to contents](#table-of-contents)

### **Structure Plane**

<br>

#### **Interaction Design**

1. Consistency - The site should remain consitant across all pages. This includes the following.
    * The navbar will remain at the top of the page and the footer at the bottom. 
    * There will be a burger icon on all pages instead of a nav-bar on smaller screen sizes. 
    * Styling will also remain consitant across all pages.
2. Predictablity -
    * All links will take the user to expected locations.
    * Social media links will open in new tabs as this is what users expect.
    * Clicking on the logo will take the user back to the home page as is convention. 
3. Learnability -
    * There will be active links on the navbar so that the user will know what page they are on. 
    * Pages with the same function will have the same layout to provide the user with a better sense of place and navigational possibilities. 
4. Visibility -
    * When possible as much page content for each page will be visible on each page. 
    * In situations where the contenct exceeds that of the screen size content hinting will be used. 
5. Feedback - There will be clear and consistant feedback given to site users -
    * Buttons that link the user to other locations will highlight when the mouse is over them.
    * For links and other clickable items the cursor will change to a pointer. 
    * The counties and surfboards on the home page map will highlight when the cursor is over them to indicate that they can be clicked.
    * For instances when the apis return erros the user will be provided with feedback on screen and in the console. 
<br><br>

#### **Information Architecture**

The site will operate using a traditional navigational system with a navbar at the top of the page. There will be a hub and spoke model used between the county and beach pages. The beach pages will also be navigable between each other using arrows for ease of use. These systems combine to allow the user to access all areas of the site easily. There will also be an announcement bar at the top of each page that allows the user to navigate directly to the page where they can sign up to be contacted via email once the surf shop opens.

The site will also organise the geographical elements from high level to low level. The home page will contain a map of all of Munster. The county pages are the next level in this system and allow the user to link to the beaches of the particular county. These are the lowest level of this organisational modelling.
<br><br>

### **Skeleton Plane**

<br> 

* The site will use icons as metaphors in certain sections. These include metaphorical icons for each weather parameter on the pages where the surf forecast page. An example of this is the use of a droplet icon to represent precipitation. The site will also use social media icons in the footer to link to the various social media pages for the site. There will also be a click icon used on the clickable map to encourage users to click where they want to go on the map. Although this might be intuitive to many users it is important as it will safeguard against confustion. This is particularly important on smaller screen sizes where there is likely to be no cursor (ie. The sections of the map do not highlight). 

* The information on the site will be displayed in order of importance. An example of this is on the mobile view of individual beach pages. The surf forecast will appear above the supplementary information as this is more important to the site user. 

* Content on the site will be well spaced and will be easy to read with good colour contrast. This is good information design.
<br><br>

#### **Wireframes**
The above skeleton plane design decisions can be viewed in the wireframes generated for the site along with other relevant design decisions. These are linked below:

* Desktop 
    * [Home page desktop view wireframe](assets\wireframes\Munster-Waves-Home-Page-Desktop.png)
    * [County page example desktop view wireframe](assets\wireframes\Munster-Waves-County-Page-Example-Desktop.png)
    * [Individual beach example page desktop view wireframe](assets\wireframes\Munster-Waves-Individual-Beach-Page-Example-Desktop.png)
    * [Signup/About page desktop view wireframe](assets\wireframes\Munster-Waves-Signup-About-Page-Desktop.png)
* Laptop
    * [Home page laptop view wireframe](assets\wireframes\Munster-Waves-Home-Page-Laptop.png)
    * [County page example laptop view wireframe](assets\wireframes\Munster-Waves-County-Page-Example-Laptop.png)
    * [Individual beach example page laptop view wireframe](assets\wireframes\Munster-Waves-Individual-Beach-Page-Example-Laptop.png)
    * [Signup/About page laptop view wireframe](assets\wireframes\Munster-Waves-Signup-About-Page-Laptop.png) 
* Tablet
    * [Home page tablet view wireframe](assets\wireframes\Munster-Waves-Home-Page-Tablet.png) 
    * [County page example tablet view wireframe](assets\wireframes\Munster-Waves-County-Page-Example-Tablet.png) 
    * [Individual beach example page tablet view wireframe](assets\wireframes\Munster-Waves-Individual-Beach-Page-Example-Tablet.png) 
    * [Signup/About page tablet view wireframe](assets\wireframes\Munster-Waves-Signup-About-Page-Tablet.png) 
* Mobile 
    * [Home page mobile view wireframe](assets\wireframes\Munster-Waves-Home-Page-Mobile.png) 
    * [County page example mobile view wireframe](assets\wireframes\Munster-Waves-County-Page-Example-Mobile.png) 
    * [Individual beach example page mobile view wireframe](assets\wireframes\Munster-Waves-Individual-Beach-Page-Example-Mobile.png) 
    * [Signup/About page mobile view wireframe](assets\wireframes\Munster-Waves-Signup-About-Page-Mobile.png) 
    
    <br>

[back to contents](#table-of-contents)

### **Surface Plane**

<br>

Below are the surface plane considerations that were made for the site
<br><br>

#### **Colour**

 The colours that will be used on the site will be vibrant to promote a fun and creative image for the brand. They will also be relevant both to the marine and irish associations of the brand. An example of this will be the use of the colours chosen in the navbar that link to the various counties. They will reflect the flags of the individual counties.<br><br>

#### **Layout**

The surface plane decisions relating to the layout include the use of border and color to define various areas of the pages on the site. There will be aquatic style borders employed across the site to help in this. <br><br>

#### **Fonts**

The fonts used will be surf style fonts and Irish style fonts. This will reinstate the brands image as being proud of their region as well as being culturally relevant to the surf community. <br><br>

#### **Images**

The icons used on the site will be chosen according to how recognisable they are. Other images on the site will be vibrant and fun as this pertains to the image that the brand wished to promote. <br><br>

#### **Order and Sequence**

The most important elements on the site are the most easily recognized. An example of this would be the clickable map on the sites home page. This will be large and centred so that it is obvious to the site user that it is something that the site owners wish to be seen. <br><br>

#### **Identity**

Overall the surface plane considerations play a key role in projecting the 'Munster Waves' brand identity to the site user. The fonts, colors and style decisions made are to convey the company as being fun, creative and proud of their Munster roots. The fun and creative identity directly relates to the surf community as this is mainly why people enjoy surfing. The brand wishes surfer to associate them with these traits through the experience offered by the site. An example of creativeness on the site will be the use of a color gradient from light blue to dark blue to brown as the user navigates down the page. This represents the image of looking out from the beach onto the ocean. Light blue represents the sky, dark blue the ocean and the brown represents the wet sand at the edge of the ocean. <br><br>

---

[back to contents](#table-of-contents)

## **Testing**

---

<br>

### **Proof of Concept Testing**

<br>

The first phase of testing involved in the project was proof of concept. These tests were carried on on elements involved with the site that the developer was unsure would be achievable with their skill level or within the time frame. Once the developer was satisfied that the each of these elements were achievable they proceeded to the implentation phase of the project.

#### **Home Page Clickable Map Testing**

The first element that required testing was the clickable map. The developer had the idea of using an svg file depicting Ireland. The map map was edited to only include Munster. Classes were added to the paths belonging to the sections that needed to be highlighted when the cursor was over them (ie. the Clare paths were given the class of clare and so on). These classes were then targeted using JavaScript and listener events were added so that they would highlight and return to normal as the mouse was hovered on and off of them. The test file is linked below with an image showing the test as a success.

[link to test file](proof-of-concept\clickable-map-testing.html) <br>
[link to image of test](assets\test-screenshots\clickable-map-proof-of-concept.PNG)

#### **Weather APIs Testing**

The second element that required testing was the functionality of the weather APIs. The developer needed to ensure that they would have access to the following parameters on any given date and seven days after that. The parameters needed were sunrise times, sunset times, temperatures, water temperatures, precipitation levels, swell heights, wave heights, wave directions, wind speeds and wind directions. The sunrise and sunset information was taken using sunrise-sunset.org's API and the remaining parameters were taken using the Stormglass API. The link to the test file is supplied below along with an image of the successful test of the APIs.

[link to test file](proof-of-concept/weather-apis-testing.html)<br>
[link to image of test](assets\test-screenshots\weather-apis-proof-of-concept.PNG)

#### **Email API Testing**

The third element that needed to be tested was the email api. The developer needed to ensure that the site owner could be sent an email of the site users response to the form on the form page. The developer tested emailJS to achieve this functionality. Below is the link to the test file and an image of the successful testing of the API.

[link to test file](proof-of-concept\email-api-testing.html)<br>
[link to image of test](proof-of-concept\email-api-testing.html)

#### **Map API Testing**

The final element that required testing was the use of an API that could be used to display a map of areas in Munster. The map needed to be able to display custom markers and pop-ups which could display information and links to the developer's choosing. The developer tested the Leaflet API as it documented that it was possible to achieve the above functionality using its library. The test was successful. Below is a link to the test file and an image of the successful testing of the file.

[link to test file](proof-of-concept\leaflet-api-testing.html)<br>
[link to image test](assets\test-screenshots\map-functionality-proof-of-concept.PNG)
<br><br>

[back to contents](#table-of-contents)

### **Feature Testing**

<br>
The site's features were tested recurrently as the project advanced. Presently there are no known bugs to the developer although there are minor styling adjustments still to be made.

#### **Brand Logo**

Desired functionality: The logo is to appear on all pages and work as a link to the home page.

Test results: The logo currently focuses as expected. There was an issue however with the styling that had to be amended and is documented in the issues section of this document.

[view logo issue](#logo-issue)

#### **Announcement Bar**

Desired functionality: The announcement bar should simply navigate the user to the signup page.

Test results: This feature functions as expected.

#### **Smaller Devices Navbar**

Desired functionality: The navbar that appears when viewing the page on smaller devices needs to work in several ways. There should be text matching the brand logo that navigates the user back to the home page. There should be a burger icon that opens a dropdown menu. When the dropdown menu is opened the rest of the screen should be darkened and the functionality should be turned off. Clicking on the darkened area should toggle the dropdown off. 

Test results: The navbar functions as required. There were however several bugs that had to be resolved during development. These are documented in the bugs section of this document.

[view navbar bugs](#navbar-bugs)

#### **Larger Devices Navbar**

Desired functionality: Simpler than the small screen navbar. This navbar simply has to appear on the screen and navigate the users to other pages in the site.

Test results. The navbar functions as required.

#### **Home Page Map**

Desired Functionality: The home page map exists to act as a centre-piece on the home page to draw in the attention of the user. The map should be clickable so that the user can use the map to navigate to both the county pages as well as the individual beach pages. 

Test results: The map now functions as is expected. There was an issue with the map that needed to be resolved during development and this is documented in the issues section of this document. 

[view home page map issue](#home-page-map-issue)

#### **Footer**

Desired functionality: The footer should be 'sticky'. It should stay at the bottom of the screen when there is not enough content to fill the screen. Otherwise, it should stay beneath the content. The footer is also needed to host the social media links that navigate the user to the company's social media pages. 

Test results: The footer functions as expected.

#### **County Pages**

Desired Functionality - The county pages should contain maps using the leaflet api with markers of the beaches in that particular county. When hovering the mouse over the markers there text should appear showing the user which beach they are currently navigating over. When the markers are clicked a popup should appear with a brief description of the beach. This is progressive disclosure as the beaches own page contains much more information about the beach. The user should be able to navigate to the beach pages using the popups.

Test results: The maps on the county pages function as the developer desired.

#### **Individual Beach Pages With Surf Forecast**

Desired functionality: The user should be supplied with the forecast for noon on the current date for the beach they have selected. They should be able to view the forecast from the start of the current date to the end of the seventh day from the date on which the page was loaded. This is achieved using arrows to navigate the hours and days. Navigating the dats changes to buttons on larger screens. If the APIs failed to load the user should be given an error message and the page functionality should be turned off. 

Test results: The page works as expected on small and large screens. There were some issues with the positioning of icons however. This is documented in the issues section of this document. 

[view icon positioning issues](#forecast-icons-issue)

#### **Supplementary Beach information**

Desired functionality: This feature is simply required to give the user more of an idea about what they can generally expect from a particular beach regarding surf conditions and the surrounding area. The user should expect a paragraph of high quality information about the beach they have selected and an accompanying photograph.

Test results: The feature works as the developer intended.

#### **Signup Page Form** 

Desired functionality: Upon the completion of the form the site owner should be sent an email with the form contents. The elements are the customer's name and email, their feedback for the site, products they would like to request from the shop and an indication whether or not they want to be notified when the shop opens. The page should also provide the user with feedback both when the form is sent or unsent. 

Test results: The feature works as desired. Proof of the form sending the customer's information can be viewed below.

[view example email sent using form](assets/images/email-feature-test-proof.PNG)

#### **Information Section About Company**

Desired functionality: The signup page should also contain a paragraph of information about the company. This is to help to encourage the user to sign up to the email notification. 

Test-results: The feature functions as expected.

[back to contents](#table-of-contents)

### **User Stories Testing**

#### **User Story 1**

User Story: As a prospective customer for the shop I want to be able to read information about the shop.

Test outcome: Upon loading the home page of the site the user sees the about tab on the home page. The user clicks the tab and is brought to the signup page. The user sees the section of information about the company.

Analysis: The user has succeeded in accomplishing their task.

[Screenshot](assets/user-stories/user-story-1.PNG)

#### **User Story 2**

User Story: As a young surfer from Munster I want to be able to engage with the company on social media. 

Test outcome: Upon loading the home page of the site the user does not see links to social media. However, as it is conventional to put social media links in the footer of the site the user navigates to the footer and finds the links.

Analyis: The user has succeeded in accomplishing their task.

[Screenshot](assets/user-stories/user-story-2.PNG)
#### **User Story 3**
User Story: As a resident of Inchydoney I want to be able to navigate directly to view the surf forecast for the beach.

Test outcome: Upon loading the home page the user sees the home page map. The user quickly locates Inchydoney. The user sees the click icon on the map. The user hovers the mouse over Inchydoney. The user is given feedback by the highlighting of the text and icon. The user clicks on the icon and navigates to the surf forecast page for Inchydoney.

Analyis: The user has succeeded in accomplishing their task.

[Screenshot](assets/user-stories/user-story-3.PNG)
#### **User Story 4**

User Story: As a pro surfer seeking deals on surf equipment I want to be able to sign up to be alerted via email once the surf shop opens. 

Test outcome: The user loads the home page of the site. The user is drawn to the capitalised letters in the announcement bar and sees that they can sign up to the email alert. The user clicks on the announcement bar to navigate to the signup page. The user fills out the form on the page and signs up.

Analyis: The user has succeeded in accomplishing their task.

[Screenshot](assets/user-stories/user-story-4.PNG)
#### **User Story 5**
User Story: As a resident of Limerick County I want to be able to view the surf forecast for the beaches in north Kerry and south Clare. 

Test outcome: The user clicks on the Spanish-point surf board icon on the home page map. The user navigates to the surf forecast for Spanish Point. The user sees that you can use the arrows to change between beaches. The user clicks the Next beach arrow. The user repeats this again to check the beaches they are interested in. 

Analysis. The user managed to complete their goal. However the developer is not totally satisfied that it was obvious which way along the coast the arrows would take the user. The developer would like to take steps to improve usability regarding this.

[Screenshot](assets/user-stories/user-story-5.PNG)

#### **User Story 6**

User Story: As a big wave surfer I want to be able to make a quick comparison of the wave heights of the different beaches. 

Test outcome: similarly to the previous user story the user uses the home page map to navigate to the beaches. The user clicks the first beach (Doolin Point). The user quickly uses a combination of the days arrows, time arrows and next beach arrows to find the biggest waves.

Analysis: In this case it was less of a problem that the user didn't know the exact beach in which the arrows would take them and they accomplished their goal successfully.

[Screenshot](assets/user-stories/user-story-6.PNG)



#### **User Story 7**
User Story: As a driver I want to plan a route to Lahinch beach from Ennis.

Test outcome: The user uses the navbar to navigate to Clare. The user arrives at the Clare county page and zooms in on the leaflet map to find Ennis. However the roads aren't very visible and the user can't make a plan of which route to take. 

Analysis: Although the user did not succeed in their goal the site developer feels that the color scheme for the map is perfect for the fun nature of this site and changing it would be too big a sacrifice.

[Screenshot](assets/user-stories/user-story-7.PNG)
#### **User Story 8**

User Story: As the site owner I want to ensure that the equipment request section of the form is working. 

Test outcome: Being familiar with the site the user uses the announcement bar to the signup page. The user fills out the form and makes an equipment suggestion. The user then logs into the email address set up to receive emails from the form and sees that the equipment request section is working.

Analysis: The user successfully accomplished their goal.

[Screenshot](assets/user-stories/user-story-8.PNG)
#### **User Story 9**

User Story: As a site user I want to be able to provide feedback on the site. 

Test outcome: The user logs into the site. They are unsure of where to go to send feedback so they navigate to the social media pages in the footer. 

Analysis: It is unclear that it is possible to leave feedback on the signup form and the developer will try to amend this in future builds

[Screenshot](assets/user-stories/user-story-9.PNG)
#### **User Story 10**

User-Story: As a full-time employee who enjoys surfing. I want to be able to view the surf forecast for the beaches in Waterford after 6pm on weekdays.

Test outcome: The user clicks the dropdown menu icon and navigates to the waterford page. The user uses the leaflet map to click on Tramore beach. The user then uses a combination of the day, time and beach changing arrows to find get the forecast for the beaches in Waterford. 

Analysis: This section of the site works intuitively and the user accomplished their goal successfully

[Screenshot](assets/user-stories/user-story-10.PNG)

[back to contents](#table-of-contents)

### **Validation of Code**

* The HTML was validated using the w3schools validator. The code passed through the validator with no issues [W3Schools HTML validator](https://validator.w3.org/) 

* The CSS was validated using the Jigsaw CSS validator and passed with no issues [W3Schools Jigsaw CSS validator](http://jigsaw.w3.org/css-validator/validator) 
 
* The javascript code was validated using JSLint. The code passed through the validator with no major issues. However there were many minor warnings and the developer will need to take time to optimise this code in the future. [JSLint JavaScript validator](https://www.jslint.com/) 

[back to contents](#table-of-contents)

### **Efficiency and Performance Testing**

The website was tested for its performance and effieciency using Lighthouse in Chrome Development tools. The screenshots of these tests are linked below. The outcomes of the tests were successful. However as the mobile version of the site is important for the company, measures should be taken to improve the efficiency of this version.
* [Desktop rating](assets/lighthouse-screenshots/desktop-performance-rating.PNG)
* [Mobile rating](assets/lighthouse-screenshots/mobile-performance-rating.PNG)

[back to contents](#table-of-contents)

### **Accessibility Notes**

The developer made every effort to provide appropriate alt tags on all images in the site and aria labels on appropriate elements. These include the form and the burger icon button.

[back to contents](#table-of-contents)

## **Bugs and Issues**

The main bugs in the project arose with the functionality of the navbar on smaller screen sizes. They are documented below

### **Navbar Bugs**

There was a problem with having the navbar dropdown menu opening underneath the burger icon. This was solved by changing the position of the dropdown to being absolute and manually repositioning it to the right. This was a good solution as it stopped the navbar dropdown from pushing down the content below as this was not desirable.

[example of bug before fix](assets/bugs-screenshots/navbar-bug.PNG)<br>
[screenshot of fix](assets/bugs-screenshots/navbar-bug-3.PNG)

There was also a problem with the leaflet maps appearing above the navbar. The developer discovered that the leaflet api uses very high z-indexs for their content. The developer had to change the navbar z-index to stop this from happening

[screenshot of bug](assets/bugs-screenshots/map-page-bug-1.PNG)

There were also issues when the screen was refreshed and the page was partially scrolled. The navbar would appear in the same position before the screen was refreshed and there was space between it and the top of the screen. This was due to the relationship between the navbar and the announcement bar. To solve this the developer calculated the position of the bottom of the announcement bar in JavaScript. The developer then changed the behaviour of the navbar to always appear stuck to the bottom of the announcement bar when the page was loaded or scrolled. If the announcement bar was off screen this behaviour was overwritten so that the navbar appears at the top of the window.


[screenshot of bug](assets/bugs-screenshots/navbar-bug-6.PNG)<br>
[screenshot of bug](assets/bugs-screenshots/navbar-bug-2.PNG)

There was an issue with changing the size of the window when the dropdown menu was activated. if the screen was changed to a larger size the dropdown screen darkener was still visible. The developer added an event listener in JavaScript to force the screen darkener's display to none if the screen was resized above the breakpoint.

[screenshot of bug](assets/bugs-screenshots/navbar-bug-7.PNG)

The screen darkener also appeared above the announcement bar. This was changed again in JavaScript by forcing the top style value of the screen darkener to appear underneath the bottom of the announcement bar by calculating the height of the announcement bar

[screenshot of bug](assets/bugs-screenshots/navbar-bug-5.PNG)

[back to contents](#table-of-contents)

### **Issues**

#### **Home Page Map Issue**

There was an issue with the the hover effect to highlight areas of the map. When the mouse travelled over the text on the counties, the county stopped from being highlighted. This was fixed by adding classes to the text in the counties as well as the fill paths.

[screenshot of issue](assets/bugs-screenshots/home-page-map-bug-1.PNG)

#### **Logo Issue**

There was an issue with the contrast of the text in the logo. It was difficult to see the 'waves' part of the text. This was fixed by editing the log to have a thick black stroke around the letters

[screenshot of issue](assets/bugs-screenshots/logo-bug.PNG)

#### **Forecast Icons Issue**

There was an issue with the positioning of the text beside the forecast icons. This was due to the irregular size of some of the icons. Some of the icons were simply svg files rather than font awesome icons. This was fixed by changing the parent divs positions to relative and the icons and text spans postions to absolute. The elements were then manually positioned.

[screenshot of issue](assets/bugs-screenshots/wave-direction-icon-bug.PNG)

[back to contents](#table-of-contents)

## **Deployment**

### **Github Pages**

The site was deployed on Github pages. This was done by clicking settings on the repository. Then navigating to pages and selecting the master branch to be deployed. After the project was finished a deployment branch was made with commented code removed 

[link to live site](https://j-j-jack.github.io/Milestone-project-2-Munster-Waves/)

### **To Clone Project**

1. Log into Github and select the 'Milestone-project-2-Munster-Waves' repository. 
2. Copy the URL.
3. Open your IDE
4. Set up a new repository
4. Use the git clone command with the copied url.

[back to contents](#table-of-contents)

## **References**

All the images in the project were taken from tripadvisor. This excludes the company logo and the home page map. These were created by the developer. The home page map was adapted from a fee licence image on wikipedia commons.

[back to contents](#table-of-contents)

## **Acknowledgements**

I would like to thank my mentor Aaron for his help with this project. He gave me good sound advice that really helped to improve the usability and look of the site. I would also like to thank the team at code institute for their time and expertise leading up to the completion of this project.

[back to contents](#table-of-contents)






















