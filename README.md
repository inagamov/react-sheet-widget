# React Sheet Widget (SPA)

![image](https://user-images.githubusercontent.com/69040554/180501158-9dc50216-b0d4-4e4c-a776-a5c3e3c4d6b9.png)

Technical specification: https://faint-adasaurus-4bc.notion.site/web-React-js-22257203622947f8879c527bf8ed0f48

<br/>

## 📍 Setup

NB! This application uses PostgreSQL. If you want to use different database management system, you may also want to change `dialect` in `/server/db.js`

1. Open `/server/.env` file and change all variables starting with `DB_` (except for the `DB_NAME`).

2. Open pgAdmin and create a database called "react_sheet_widget".

3. Head over to `/server` folder and run `npm install`

4. Head over to `/client` folder and run `npm install`

<br/>

## 📍 Lauch

1. Launch your DB.

2. Go to `/server` folder and run `npm run dev`

3. Go to `/client` folder and run `npm start`

<br/>

## 📍 Notes

> If you want to add rows to the sheet manually, use some POST-API programm (e.g. Postman) and send `POST` request to `http://localhost:5000/api/sheet/create` with some JSON data `{"date": "2020-10-20", "name": "Model X", "amount": 1, "distance": 9999}`

> You can change the `limit` (max rows per page) in `/client/src/store/SheetStore.js` on line `12`.

> There're some things in this project that may be improved, for example, using the `useMemo` hook for the received rows and pagination to increase efficiency. 
