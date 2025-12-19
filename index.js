const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// =======================
// DATA SEMBAKO
// =======================
const sembakoProducts = [
  {
    id: 1,
    name: "Margarin 200g",
    category: "sembako",
    price: 14000,
    image: "https://i.pinimg.com/736x/dd/be/4a/ddbe4afd23a537ebf41e963eb34d4b5b.jpg",
    description: "Margarin untuk kebutuhan memasak dan baking"
  },
  {
    id: 2,
    name: "Sarden Kaleng 155g",
    category: "sembako",
    price: 18000,
    image: "https://i.pinimg.com/736x/07/c2/51/07c2514f7d36b715dc9f1463e85192bc.jpg",
    description: "Sarden kaleng siap saji"
  },
  {
    id: 3,
    name: "Saus Sambal Botol 340ml",
    category: "sembako",
    price: 16000,
    image: "https://i.pinimg.com/736x/1a/15/f1/1a15f1a5ad836db22b958ac20542f52a.jpg",
    description: "Saus sambal pedas nikmat"
  },
  {
    id: 4,
    name: "Bihun Jagung 200g",
    category: "sembako",
    price: 9000,
    image: "https://i.pinimg.com/736x/1f/a2/39/1fa23953faba6ae24511f28acfb95829.jpg",
    description: "Bihun jagung untuk berbagai masakan"
  },
  {
    id: 5,
    name: "Air Mineral Galon 19L",
    category: "sembako",
    price: 21000,
    image: "https://i.pinimg.com/736x/00/0b/6a/000b6aeebb068154f9fc0f95043dc733.jpg",
    description: "Air mineral isi ulang"
  }
];

// =======================
// DATA MATERIAL BANGUNAN
// =======================
const materialProducts = [
  {
    id: 101,
    name: "Semen Putih 40kg",
    category: "material",
    price: 95000,
    image: "https://i.pinimg.com/1200x/af/3d/bf/af3dbf14cf70ce502e3ae5ba923176b2.jpg",
    description: "Semen putih berkualitas tinggi"
  },
  {
    id: 102,
    name: "Pipa PVC 4 inch",
    category: "material",
    price: 65000,
    image: "https://i.pinimg.com/1200x/67/ec/f3/67ecf384d8aa4c6e931b60c6bd1f8540.jpg",
    description: "Pipa PVC kuat dan tahan lama"
  },
  {
    id: 103,
    name: "Gypsum Board 9mm",
    category: "material",
    price: 88000,
    image: "https://i.pinimg.com/736x/9d/f3/3c/9df33cbd1fd88efeef59af8f49f4fdb1.jpg",
    description: "Gypsum board untuk plafon dan dinding"
  },
  {
    id: 104,
    name: "Seng Gelombang 180cm",
    category: "material",
    price: 72000,
    image: "https://i.pinimg.com/1200x/30/ca/5f/30ca5f628a426bd279fb0e340f971d57.jpg",
    description: "Seng gelombang atap rumah"
  },
  {
    id: 105,
    name: "Handle Pintu Aluminium",
    category: "material",
    price: 35000,
    image: "https://i.pinimg.com/736x/52/8c/82/528c82e9bcc8bcdf673ce62f22667770.jpg",
    description: "Handle pintu aluminium modern"
  }
];

// =======================
// ENDPOINT API
// =======================

app.get('/', (req, res) => {
  res.send('🔥 API TOKO SEMBAKO & MATERIAL BERJALAN');
});

app.get('/products/sembako', (req, res) => {
  res.json(sembakoProducts);
});

app.get('/products/material', (req, res) => {
  res.json(materialProducts);
});

app.get('/products', (req, res) => {
  res.json([...sembakoProducts, ...materialProducts]);
});

// =======================
// JALANKAN SERVER
// =======================
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🔥 API jalan di port ${PORT}`);
});
