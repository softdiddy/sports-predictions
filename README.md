<p>Project Overview<p/>
The Node.js backend service fetches football/basketball match predictions from the BetMiner API, processes these predictions, 
and provides endpoints for a React frontend to display predictions and check their accuracy against actual results.
<br/>
GitHub Repository<br/>
Project Setup and Instructions<br/>
Clone the Repository:
<br/><br/>
git clone https://github.com/softdiddy/sports-predictions.git<br/>
cd sports-predictions<br/>
<br/><br/>
Install Dependencies:<br/>
npm install
<br/><br/>
Environment Configuration:<br/>
Create a .env file in the root directory with the following content:<br/>
PORT=5000<br/>
RAPIDAPI_KEY=your_rapidapi_key_here<br/>
RAPIDAPI_HOST=betminer.p.rapidapi.com<br/>
MONGO_URI=your_mongodb_connection_string_here<br/>
<br/><br/>
Start the Server:<br/>
npm run dev
