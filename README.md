# SportsHub
A Hub for all sports related activities. This app contains social media, venue booking and an sports related e-commerce section.

## App Features
- Social Media
  * Create a new post
  * Browse posts
  * Like and comment on posts
  * Save posts
  * Customized post feed for users
  
- Venue Booking
  * Browse venues
  * Filter venues
  * Book venues
  * Get recommended venues
  * Add / Remove venues (for venue owners)
  * View your venues summary and report (for venue owners)
  * Manage venue schedule (for venue owners)
  * View booking history (for venue owners)
  
- E-commerce
  * Browse products
  * Buy products
  * Review products
  * Filter and sesarch products
  * Infinite scroll pagination
  * Ordering and payment
  
- Admin
  * Add new products
  * Manage users, products, venues
  * Approve venues
  * Manage user roles
  
- Other Features
  * Mobile friendly
  * Dark mode
  * Theme customization
  * Email integration
  * Realtime chat
  * User based recommendation system
  
## Technologies Used
### Backend
- Node JS
- Express JS
- Socket IO (for realtime chat)
- Mongo DB
- SendGrid (for emails)
- Cloudinary (for images)

### Frontend
- React JS
- Redux
- Mantine UI
- Socket IO
- Chart.JS
- Khalti Web (for payment)

## .ENV Files
### Backend ENV (inside frontend folder)
MONGO_URI=  
TOKEN_KEY=  
GOOGLE_CLIENT_ID=  
GOOGLE_CLIENT_SECRET=  
GOOGLE_CALLBACK=  
FRONTEND_URL=  
CLOUD_NAME="for cloudinary"  
CLOUD_API_KEY="for cloudinary"  
CLOUD_API_SECRET="for cloudinary"  

CLIENT_BASE_URL=  
SENDGRID_API_KEY=  
SENDGRID_FROM_EMAIL=  
SENDGRID_RESET_PASSWORD_TEMPLATE_ID=  
SENDGRID_RESET_PASSWORD_SUCCESS_TEMPLATE_ID=  
SENDGRID_NEW_REGISTRATION_TEMPLATE_ID=  
SENDGRID_VENUE_VERIFIED_TEMPLATE_ID=  
SENDGRID_PRODUCT_ORDER_TEMPLATE_ID=  
SENDGRID_VENUE_BOOK_TEMPLATE_ID=  

### Frontend ENV (inside frontend folder)
REACT_APP_MAPBOX_ACCESS_TOKEN=  
REACT_APP_BASE_SERVER_URL=  

## Starting the App
### Inside backend folder
run "npm start"  
the backend server run on port 8000

### Inside frontend folder
run "npm start"  
the server starts ar port 3000

## App Screenshots
![Login Page](https://raw.githubusercontent.com/Manish24870/SportsHub/main/screenshots/Screenshot%20(30).png)
![Register Page](https://raw.githubusercontent.com/Manish24870/SportsHub/main/screenshots/Screenshot%20(31).png)
![Social Media Page](https://raw.githubusercontent.com/Manish24870/SportsHub/main/screenshots/Screenshot%20(32).png)
![New Post Page](https://raw.githubusercontent.com/Manish24870/SportsHub/main/screenshots/Screenshot%20(33).png)
![Browse Venues Page](https://raw.githubusercontent.com/Manish24870/SportsHub/main/screenshots/Screenshot%20(34).png)
![Browse Shop Page](https://raw.githubusercontent.com/Manish24870/SportsHub/main/screenshots/Screenshot%20(35).png)
![Challenges Page](https://raw.githubusercontent.com/Manish24870/SportsHub/main/screenshots/Screenshot%20(36).png)
![Admin Page](https://raw.githubusercontent.com/Manish24870/SportsHub/main/screenshots/Screenshot%20(37).png)
![Cart Page](https://raw.githubusercontent.com/Manish24870/SportsHub/main/screenshots/Screenshot%20(38).png)
![Checkout Page](https://raw.githubusercontent.com/Manish24870/SportsHub/main/screenshots/Screenshot%20(39).png)
![Chat Page](https://raw.githubusercontent.com/Manish24870/SportsHub/main/screenshots/Screenshot%20(40).png)
![Notifications Page](https://raw.githubusercontent.com/Manish24870/SportsHub/main/screenshots/Screenshot%20(41).png)
![Profile Page](https://raw.githubusercontent.com/Manish24870/SportsHub/main/screenshots/Screenshot%20(42).png)
![Theme Page](https://raw.githubusercontent.com/Manish24870/SportsHub/main/screenshots/Screenshot%20(43).png)
![Friends Page](https://raw.githubusercontent.com/Manish24870/SportsHub/main/screenshots/Screenshot%20(44).png)
![Single Venue Page](https://raw.githubusercontent.com/Manish24870/SportsHub/main/screenshots/Screenshot%20(45).png)
![Book Venue Page](https://raw.githubusercontent.com/Manish24870/SportsHub/main/screenshots/Screenshot%20(46).png)
![Single Product Page](https://raw.githubusercontent.com/Manish24870/SportsHub/main/screenshots/Screenshot%20(47).png)
![My Venues Page](https://raw.githubusercontent.com/Manish24870/SportsHub/main/screenshots/Screenshot%20(48).png)
![Venue Schedule Page](https://raw.githubusercontent.com/Manish24870/SportsHub/main/screenshots/Screenshot%20(49).png)
![Booking History Page](https://raw.githubusercontent.com/Manish24870/SportsHub/main/screenshots/Screenshot%20(50).png)
