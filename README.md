# Expense Tracker

A simple web-based expense tracking application built with Node.js, Express, MongoDB, and vanilla JavaScript. This app allows users to add, view, and delete expenses while keeping track of the total expenditure.

## Features

- **Add Expenses**: Input amount, category, and date for each expense.
- **View Expenses**: Display a list of all recorded expenses.
- **Delete Expenses**: Remove unwanted expenses from the list.
- **Total Calculation**: Automatically calculates and displays the total amount spent.
- **Responsive Design**: Clean, neubrutalism-inspired UI that works on various screen sizes.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Frontend**: HTML, CSS, JavaScript (Vanilla)
- **Styling**: Custom CSS with neubrutalism design

## Prerequisites

Before running this application, make sure you have the following installed:

- Node.js (version 14 or higher)
- MongoDB (running locally on default port 27017)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/expense-tracker.git
   cd expense-tracker
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start MongoDB (if not already running):
   ```bash
   mongod
   ```

4. Start the server:
   ```bash
   node server.js
   ```

5. Open your browser and navigate to `http://localhost:3000`

## Usage

1. **Adding an Expense**:
   - Enter the amount in the "Amount" field.
   - Specify the category (e.g., Food, Transport).
   - Select the date.
   - Click the "ADD" button.

2. **Viewing Expenses**:
   - All expenses are displayed in a list below the form.
   - Each expense shows the category, amount, and a delete button.

3. **Deleting an Expense**:
   - Click the "X" button next to the expense you want to remove.

4. **Checking Total**:
   - The total expenditure is displayed at the top of the page.

## API Endpoints

The backend provides the following REST API endpoints:

- `POST /expenses`: Add a new expense
  - Body: `{ "amount": number, "category": string, "date": string }`

- `GET /expenses`: Retrieve all expenses
  - Response: Array of expense objects

- `DELETE /expenses/:id`: Delete an expense by ID
  - Params: `id` (MongoDB ObjectId)

## Project Structure

```
expense-tracker/
├── index.html      # Frontend HTML file
├── server.js       # Backend Express server
├── package.json    # Node.js dependencies and scripts
└── README.md       # This file
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the ISC License.