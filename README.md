# cerberus

## Prerequisites

Before running the tests, make sure you have the following tools installed on your system:

- Node.js (version 12 or higher)
- NPM or Yarn (I recommend NPM)

## Installation

Clone the repository:
```bash
git clone https://github.com/ElysianBR/cerberus.git
```

### For UI Tests
Navigate to the UI tests directory and install dependencies:
```bash
cd cypress-web-tests
```
```bash
npm install
```
```bash
npm install cypress --save-dev
```

### For API Tests
Navigate to the API tests directory and install dependencies:
```bash
cd cy-api-tests
```
```bash
npm install
```
```bash
npm install cypress --save-dev
```

## UI Tests - How to run 

### Headless mode:
```bash
npm run cy:ui-regression
```
### Windowed mode:
```bash
npm run cy:open
```

## API Tests - How to run 

```bash
npm run cy:run
```


---

