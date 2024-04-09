#LearnLingo
LearnLingo is the flagship application developed by a specialized company offering online language learning services. The primary aim of this application is to aid users in finding and selecting suitable instructors tailored to their specific educational needs. It boasts a responsive design that seamlessly adapts to various screen sizes, ensuring an optimal user experience across different devices.

##Core Pages

Homepage: Users can familiarize themselves with the company's advantages and easily navigate to the main application page.

Teachers Page: This section allows users to explore a comprehensive list of available instructors for language training. Users can filter instructors based on language proficiency, teaching expertise, and hourly rates. Initially, only four instructor cards are displayed, with an option to load more by clicking the "Load more" button. Additionally, users can add teachers to their "Favorites" by clicking the heart icon. Unauthorized users will be prompted that this feature is exclusive to authorized users.

Favorites Private Page: Exclusive to authorized users, this page enables them to review all instructors added to their "Favorites" list. The page layout mirrors that of the "Teachers" page.

##Technical Specifications

Authentication: User registration, login, retrieval of current user data, and logout functionalities are handled by Firebase.

Forms: Mandatory registration, login, and trial class booking forms are integrated.

Database: Firebase Realtime Database stores comprehensive information about instructors, including their names, languages, proficiency levels, ratings, reviews, hourly rates, teaching experience, and class details.

Modal Windows: Modal windows for registration, login, booking, and unauthorized access warnings are implemented, featuring closure options via the "cross" button, clicking on the background, or pressing the Esc key.

Selection Functionality: Authorized users can add or remove instructors from their "Favorites" list, with the heart icon changing color accordingly. Selected instructor information persists even after page refresh.

"Read More" Functionality: Users can access additional instructor details and student feedback by clicking the "Read More" button.

Routing: React Router facilitates seamless navigation between pages.

##Deployment

Upon completion, the project will be deployed on third-party hosting, with the code repository hosted on GitHub. The README.md file in the repository will outline project details, core technologies, layout, and specifications.
