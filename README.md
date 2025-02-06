# HNG12 Public API

This is a simple public API built for HNG12 that returns JSON data with:
- My registered HNG12 Slack email
- The current datetime in **ISO 8601 format (UTC)**
- The GitHub repository URL of this project

## **🚀 Live API URL**
[https://hng12-task-1-gwye.onrender.com/](https://hng12-task-1-gwye.onrender.com/)  


## **🛠️ Technology Stack**
- **Node.js** with **Express.js**
- **CORS middleware**

## **📌 API Usage**
### **Endpoint:**  

```js
GET /
```
```json 
{
  "email": "your-email@example.com",
  "current_datetime": "2025-01-30T09:30:00Z",
   "github_url": "https://github.com/Marrwan/HNG12-task-1"
}
```

## 🚀 Running Locally
1️.  Clone the repository
```sh

git clone https://github.com/Marrwan/HNG12-task-1.git
cd HNG12-task-1
```
2.  Install dependencies
```sh
npm install
```
3️. Start the server

```sh
npm start
```
The API will run at:
http://localhost:3001