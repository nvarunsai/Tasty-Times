<div align="center">

# 🍜 Tasty Times — Restaurant Website

**A fully responsive Chinese restaurant website with live cart, Firebase database integration, and an admin order dashboard.**

[![Live Demo](https://img.shields.io/badge/Live_Demo-Visit_Site-FF6B35?style=for-the-badge&logo=netlify&logoColor=white)](https://your-live-link.netlify.app)
[![GitHub Pages](https://img.shields.io/badge/Hosted_on-GitHub_Pages-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/your-username/tasty-times)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

![Tasty Times Banner](assets/images/hero.png)

</div>

---

## 📌 Overview

**Tasty Times** is a real-world restaurant website built for a Chinese restaurant in Vijayawada, Andhra Pradesh. It features a live add-to-cart system, a full order placement flow with database storage, and a private admin dashboard to manage all incoming orders — all built using only HTML, CSS, and Vanilla JavaScript with no backend server required.

> Built as a freelance project and portfolio showcase demonstrating front-end development, database integration, and production-ready deployment.

---

## 🚀 Live Demo

| Page | Link |
|------|------|
| 🍽️ Restaurant Website | [your-live-link.netlify.app](https://your-live-link.netlify.app) |
| 📊 Admin Dashboard | [your-live-link.netlify.app/admin](https://your-live-link.netlify.app/admin) |

---

## ✨ Features

### Customer-Facing Website
- **Sticky Navigation** with smooth scroll and mobile hamburger drawer
- **Hero Section** with trust badges and dual CTAs
- **Menu Grid** with 6 signature dishes, price badges, and add-to-cart buttons
- **Live Cart Drawer** — add items, adjust quantity, remove items, running total
- **Order Modal** — customer fills name, phone, address; order saved to database instantly
- **Gallery Section** with restaurant food photography
- **Google Maps Embed** with exact restaurant location
- **WhatsApp Float Button** for direct customer contact
- **Fully Mobile Responsive** across all screen sizes

### Admin Dashboard (`/admin`)
- View all orders in real-time from Firestore or localStorage
- Stats cards — total orders, new, confirmed, delivered, total revenue
- Update order status (New → Confirmed → Delivered) inline
- Demo mode indicator with one-click clear for testing
- Auto-switches to live Firebase badge when connected

### Database Layer
- **Demo mode** (default) — works instantly with `localStorage`, zero setup
- **Firebase mode** — flip one flag in `js/firebase-config.js` to go fully live
- Same public API (`saveOrder`, `fetchAllOrders`, `updateOrderStatus`) for both modes
- Includes `DATABASE_SETUP_GUIDE.md` with setup steps for Firebase, Supabase, MySQL, and Google Sheets

---

## 🗂️ Project Structure

```
tasty-times/
│
├── index.html                  ← Main restaurant website
├── styles.css                  ← All styles including cart & modal
├── Script.js                   ← Navbar scroll & mobile menu logic
│
├── js/
│   ├── firebase-config.js      ← Database layer (demo + Firebase)
│   └── cart.js                 ← Cart state, order form, toast notifications
│
├── admin/
│   └── index.html              ← Admin order dashboard
│
├── assets/
│   └── images/                 ← Restaurant food & interior photos
│       ├── hero.png
│       ├── fried_rice.png
│       ├── noodles.png
│       ├── manchurian.png
│       ├── spring_rolls.png
│       └── interior.png
│
└── DATABASE_SETUP_GUIDE.md     ← Full guide for Firebase, Supabase, MySQL, Sheets
```

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| Structure | HTML5 |
| Styling | CSS3 (Custom Properties, Grid, Flexbox, Animations) |
| Logic | Vanilla JavaScript (ES Modules) |
| Database | Firebase Firestore / localStorage (demo) |
| Icons | Font Awesome 6 |
| Fonts | Google Fonts (Poppins, Inter) |
| Maps | Google Maps Embed API |
| Hosting | Netlify / GitHub Pages / Firebase Hosting |

---

## ⚙️ Getting Started

### Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/your-username/tasty-times.git

# 2. Navigate into the project
cd tasty-times

# 3. Open with VS Code Live Server
# Right-click index.html → Open with Live Server
```

> ⚠️ Must use a local server (VS Code Live Server, or `npx serve .`) — not just double-clicking the HTML file — because the project uses ES Modules (`type="module"`).

### Test the Cart & Orders (Demo Mode)

1. Open `index.html` with Live Server
2. Click **"Add to Order"** on any menu item
3. Open the cart drawer (bag icon top-right)
4. Click **"Proceed to Order"** → fill the form → **"Place Order"**
5. Open `admin/index.html` → your order appears instantly ✅

---

## 🔥 Connect Firebase (Go Live)

1. Create a project at [console.firebase.google.com](https://console.firebase.google.com)
2. Enable **Firestore Database** (Start in test mode, region: `asia-south1`)
3. Register a Web App and copy your `firebaseConfig` keys
4. Open `js/firebase-config.js` and paste your keys:

```javascript
const firebaseConfig = {
  apiKey:            "AIzaSy...",
  authDomain:        "your-project.firebaseapp.com",
  projectId:         "your-project",
  storageBucket:     "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId:             "1:123456789:web:abc123"
};

const USE_FIREBASE = true; // ← flip this from false to true
```

5. Done — all orders now save to Firebase in real-time 🎉

> See [`DATABASE_SETUP_GUIDE.md`](DATABASE_SETUP_GUIDE.md) for Supabase, MySQL (PHP), and Google Sheets alternatives.

---

## 📸 Screenshots

| Restaurant Website | Cart & Order Flow |
|---|---|
| ![Homepage](assets/images/hero.png) | ![Menu](assets/images/fried_rice.png) |

---

## 🗺️ Roadmap

- [x] Responsive restaurant website
- [x] Add-to-cart system
- [x] Order placement with database storage
- [x] Admin dashboard with order management
- [x] Demo mode (localStorage) for instant testing
- [x] Firebase integration
- [ ] Online payment integration (Razorpay)
- [ ] Customer review submission form
- [ ] SMS/WhatsApp order notification
- [ ] Full menu CMS via Firestore

---

## 🤝 Built For

> **Tasty Times Restaurant**
> 32-15-44, Bramanadha Reddy Nagar St, Seetharampuram, Vijayawada – 520010
> 📞 088979 28318 | Open Mon–Sun, 12 PM – 11 PM

---

## 📄 License

This project is licensed under the **MIT License** — you are free to use, modify, and distribute it with attribution.

---

## 📬 Contact & Portfolio Links

<div align="center">

| Platform | Link |
|----------|------|
| 🐙 GitHub | [github.com/your-username/data-analyst-portfolio](https://github.com/your-username/data-analyst-portfolio) |
| 💼 LinkedIn | [linkedin.com/in/your-profile](https://linkedin.com/in/your-profile) |
| 📧 Email | [nvarunsai17@gmail.com](mailto:nvarunsai17@gmail.com) |

</div>

---

<div align="center">

Made with ❤️ in Vijayawada, Andhra Pradesh

⭐ **If you found this useful, give it a star!** ⭐

</div>
