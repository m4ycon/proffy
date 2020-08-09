
---

# 📄 About

The **Proffy** project is an application aimed at connecting teachers and students, it's a place where the teachers can propagate their work and help other students.
It was developed during Next Level Week #02, by **RocketSeat**.

---

# 🧰 Technologies used
- **Typescript** back/front/mobile
- **Backend (NodeJS)**
  - express
  - sqlite3 with knex
  - cors
- **Frontend (ReactJS)**
  - axios
  - react-router-dom
- **Mobile (React Native)**
  - expo
  - axios
  - intl
  - expo-google-fonts

---

# Quests to be done
  - [ ] Login/Register
  - [ ] JWT - Authentication
  - [ ] Forgot my password
  - [ ] Profile page
    - [ ] Change available times
    - [ ] Change WhatsApp number
    - [ ] Change your bio
    - [ ] Change your cost per class
  - [ ] Splash screen mobile
  - [ ] Infinite scrolling
  - [ ] Showing available times on the list
  - [ ] Save on DB favorites teachers
  - [ ] Logout
  - [ ] Deploy

---

# 🏭 How to install/use
- #### BACKEND (Obrigatory for both, frontend/mobile)
Open cmd
```bash
$ git clone https://github.com/m4ycon/proffy.git
$ cd proffy/server
$ npm install
# Initializing database
$ npm run knex:migrate
# Running the server
$ npm run dev
```
- #### FRONTEND
```bash
$ cd proffy/web
$ npm install
# Run frontend
$ npm start
```
- #### MOBILE
For this you will need, an emulator ios or android, or having expo app in your smartphone.
Now open cmd:
```bash
$ cd proffy/mobile
$ npm install
```
Edit this file "proffy/mobile/src/services/api.ts"
```ts
...
baseURL: 'http://192.168.25.7:3333'
...
// change to your ipv4, you can get it by tipping "ipconfig" on cmd
baseURL: 'http://your.ipv4:3333'
```
Back to cmd
```bash
# Run mobile
$ npm start
```
If you have expo, just scan the qrcode and be happy!

---

Made by Maycon Fabio 🚀
