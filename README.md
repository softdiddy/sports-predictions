<p>Project Overview<p/>
The Node.js backend service fetches football/basketball match predictions from the BetMiner API, processes these predictions, 
and provides endpoints for a React frontend to display predictions and check their accuracy against actual results.


GitHub Repository
Project Setup and Instructions
Clone the Repository:


git clone https://github.com/softdiddy/sports-predictions.git
cd sports-predictions


Install Dependencies:
npm install


Environment Configuration:
Create a .env file in the root directory with the following content:


PORT=5000
RAPIDAPI_KEY=your_rapidapi_key_here
RAPIDAPI_HOST=betminer.p.rapidapi.com
MONGO_URI=your_mongodb_connection_string_here


Start the Server:
npm run dev
