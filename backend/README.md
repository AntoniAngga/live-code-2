# Artikel Website

Membuat Seuatu Aplikasi sederhana untuk mendapatkan Artikel dan login.

Cara Memakai aplikasi nya : </br>
ini untuk backend nya
```bash
  npm install
  npm start
```
ini untuk frontend nya
```bash
  npm install
  npm run dev
```
untuk API nya ada :


| Methods | URL                       | Description              |
|---------|---------------------------|--------------------------|
| POST    | /login                    | Login User               |
| POST    | /user                     | Create User              |
| GET     | /artikel                  | Get All Artikel          |
| GET     | /artikel/:id              | Get Artikel by id        |
| POST    | /artikel                  | Add Artikel              |
| PUT     | /artikel/:id              | Update Artikel           |
| GET     | /artikel/author/:author   | Find Artikel by Author   |
| GET     | /artikel/author/:category | Find Artikel by Category |
| DELETE  | /artikel/:id              | Delete Artikel by Id     |
