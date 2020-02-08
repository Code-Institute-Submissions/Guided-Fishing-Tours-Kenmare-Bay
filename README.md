
# Guided Tours Fishing in Kenmare Bay- Interactive Frontend Development Project

"Give a man a fish and he will have food for a day, teach a man to fish and he will have food for the rest of his life"
-Unknown
This project was created with customer needs on mind and as well to promote product. The product here is providing service to potential clients of guided tours in Kenmare Bay. I have created this fictional company webpage with a focus on user experience. For ease of passing information to user, I have applied number of technologies. Starting with a hero image of a tranquil fishing spot with calm waters, to using Kerry colouring scheme throughout website user will find it very intuitive to search and stay, collecting interesting pieces of data, guidelines, visual and dynamic interaction with this product. 
## Project Background
This project includes several API's like Google Maps, Open Weather, EmailJS. Although there is abundant offer of other APIs
I decided on these because they fall in well with the narrative of the website and its purpose. I was guided with approach of "less is more" and focused on ease of use rather than complexity of offer to a user. This project is far from finished and I think it could benefit from updates later.
## Demo  
![Am I Responsive](/assets/images/testing.png)
A live demo can be found [here](https://alchemist2016.github.io/Guided-Fishing-Tours-Kenmare-Bay/).
## UX  
### User stories
As a user I would like to be able to easily retrieve information that is of use to me. Being engaged by the website and exploring its contents that would keep me entertained and relevant to my needs.  So, as a fishing enthusiast that is travelling to Kenmare Town for a fishing trip I would like to see how it would look like and I would like a professional first impressions.
Within this project I wanted to provide clarity of purpose, natural flow of structure, and easy access to 
further information as well interactivity between user and the website and its information. 

Here as a user I have links to parts of the website I could jump to:
![Landing Page](/assets/images/landing_page.png)
On this page I can read about the proposed tours and some information about the company.
![About Us](/assets/images/about_us.png)
This is a busy page where I can as a user find a lot of information. The Search Bar above Google Map can retrieve me any place to stay or I can find out about proposed fishing markers on the map which when clicked will open a pop-up window with more details about that spot. 
As always before you go fishing you want to know what kind of weather you can expect in that area with wind strength as one of the most important information. For that I can quickly glance at the weather app which offers default info for Kenmare Town, but I can also use Search Box which will dynamically retrieve info about any city in APIs database.
![Fishing Spots](/assets/images/fishing_spots.png)
Here on a Contact page I can enquire about fishing trip. All fields are marked as required and will accept appropriate values.
![Contact Us](/assets/images/contact_us.png)
### Strategy
My goal was appealing website which provides easy as possible access to information and keeping it minimalist 
and user-friendly. Also, I wanted to give a user visual orientation and information related to structure of the site.
### Scope
Allowing targeted user to get all the necessary information with the option to contact fictional company if they choose.
### Structure
The main aim to this structure is to provide positive experience and simplicity of use. The layout is intuitive, and colouring is related to outdoors greens and blues and also colours of Kerry County. Back to top button allows quick one click return to landing page where all other links are available. Hamburger button on smaller screen sizes is also easy to use.
In the footer I have included links to YouTube profile, Facebook profile and Instagram.
They all link to a new page opening thus keeping the integrity of original website and ease of use.
### Skeleton
1.[Home wireframe](/assets/wireframes/main_page.jpg)  
2.[About Us wireframe](/assets/wireframes/about_us.jpg)  
3.[Fishing Spots wireframe](/assets/wireframes/fishing_spots.jpg)   
4.[Contact Us wireframe](/assets/wireframes/contact_us.jpg)

## Technologies  
1.HTML   
2.CSS3    
3.Bootstrap(4.4.1)   
4.JavaScript   
5.JQuery    
6.EmailJS API   
7.Google Maps API   
8.OpenWeather API   
## Features  
The nav-bar and footer are used from Bootstrap with extra JavaScript for a toggle button in nav-bar. I have included back to top button also.
Google Maps API is rendering map correctly with a point to take that API key for Google Map should be restricted so that a third party cannot use it.
Search Bar for Google Maps has additional library so that it provides data for historical sites, restaurants, hotels etc.
Search Bar of Weather App is providing information for any city that is typed in regardless of letter format.
Weather App defaults weather information for Kenmare when page is loaded and refreshes every time the page is loaded.
Contact form is required in order to submit your form and is fully connected to EmailJS service.
All links in footer are target="_blank" formatted so that they open new tab when clicked on them and preserve that way integrity of original page.
### Features left to implement
I would love to add more functionality regarding Google Maps API, Weather widget, better control and verification of correct use of contact us form.
## Testing  
Testing was performed on all sizes of screens and devices. Also, I have performed testing on several desktop browsers like Chrome, Firefox successfully. All links in navbar are tested. 
Contact form is made in such a way that if you miss out or put invalid data in e-mail area you will be shown an error noting that you need to fill correct details. I have made a text area for Tours compulsory too.
All links will open in new tab using 'target="_blank"'. All links have been manually tested to ensure that they are pointing to the correct destination.
During the test phase I realised that some of the text rendered on pages was different colour in Microsoft Edge. That is something I need to investigate in the future.
All the code was put through a validator.
## Deployment  
This site is hosted using GitHub pages, deployed directly from the master branch. Updates are automatic with new commits. In order to deploy correctly on GitHub pages, the landing page must be named index.html.
To run locally, you can clone this repository directly into the editor of your choice by pasting `git clone https://github.com/alchemist2016/Guided-Fishing-Tours-Kenmare-Bay.git` into your terminal. To cut ties with this GitHub repository, type `git remote rm origin` into the terminal.  

Further help with cloning can be found on this GitHub Help [page](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository)
## Credits 
Credits to Code Institute for teaching me to do this cool stuff.
Thanks to good people on Stack Overflow.
Thanks to my Tutors from Code Institute for guidance through tough times.
### Content
All content in fishing spots markers is taken from [sea-angling-ireland.org](https://www.sea-angling-ireland.org/shore%20-%20kerry%20-%20ring.html)
also, Google Maps API documentation and instructions,
OpenWeather API documentation and instructions.
All other content was written by me.
### Media
All photos are taken from Unsplash.com, Fotolea.com, Adventure Holidays.com, WallpaperFlare free image library. 
## Acknowledgements  
I have used some generic code from Bootstrap 4 website and then significantly modified to fit the wireframes and original ideas.
I have used Google Maps API documentation and tutorials in order to create Google Map.
I have used OpenWeather documentation and tutorials in order to create dynamic weather widget on my website.
I have used media queries from Stack Overflow tutorial [here](https://stackoverflow.com/questions/tagged/media-queries).
Thanks for videos and tutorials from Code Institute.
