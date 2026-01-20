// js/products_data.js

const IMG_DG = [
  "img/dien-gia-dung/noi-com-1.jpg",
  "img/dien-gia-dung/noi-com-2.jpg",
  "img/dien-gia-dung/noi-com-3.jpg",
  "img/dien-gia-dung/noi-com-4.jpg",
];

const IMG_NB = [
  "img/nha-bep/am-sieu-toc-1.jpg",
  "img/nha-bep/am-sieu-toc-2.jpg",
  "img/nha-bep/am-sieu-toc-3.jpg",
];

const IMG_LM = [
  "img/lam-mat/quat-1.jpg",
  "img/lam-mat/quat-2.jpg",
  "img/lam-mat/quat-3.jpg",
];

const IMG_PK = [
  "img/phu-kien/o-cam-1.jpg",
  "img/phu-kien/o-cam-2.jpg",
  "img/phu-kien/o-cam-3.jpg",
  "img/phu-kien/o-cam-4.jpg",
];

window.PRODUCTS = [
  // ================= ĐIỆN GIA DỤNG =================
  ...Array.from({ length: 30 }, (_, i) => ({
    id: `DG${String(i + 1).padStart(3, "0")}`,
    name: `Nồi cơm điện ${(1.2 + (i % 4) * 0.3).toFixed(1)}L - Model ${i + 1}`,
    price: 690000 + (i % 10) * 50000,
    category: "dien-gia-dung",
    brand: ["SunHome", "ElekPro", "HomePlus"][i % 3],
    img: IMG_DG[i % IMG_DG.length],
    desc: "Sản phẩm điện gia dụng, tiết kiệm điện, bảo hành 12 tháng."
  })),

  // ================= NHÀ BẾP =================
  ...Array.from({ length: 30 }, (_, i) => ({
    id: `NB${String(i + 1).padStart(3, "0")}`,
    name: `Ấm siêu tốc ${(1.5 + (i % 3) * 0.2).toFixed(1)}L - Series ${i + 1}`,
    price: 199000 + (i % 12) * 30000,
    category: "nha-bep",
    brand: ["KitchenX", "Cooky", "ElekPro"][i % 3],
    img: IMG_NB[i % IMG_NB.length],
    desc: "Đun nhanh, tự ngắt khi sôi, an toàn khi sử dụng."
  })),

  // ================= LÀM MÁT =================
  ...Array.from({ length: 30 }, (_, i) => ({
    id: `LM${String(i + 1).padStart(3, "0")}`,
    name: `Quạt đứng ${5 + (i % 3)} cánh - Ver ${i + 1}`,
    price: 490000 + (i % 10) * 40000,
    category: "lam-mat",
    brand: ["CoolAir", "Breeze", "HomePlus"][i % 3],
    img: IMG_LM[i % IMG_LM.length],
    desc: "Gió mạnh, vận hành êm, nhiều chế độ, tiết kiệm điện."
  })),

  // ================= PHỤ KIỆN =================
  ...Array.from({ length: 30 }, (_, i) => ({
    id: `PK${String(i + 1).padStart(3, "0")}`,
    name: `Ổ cắm điện an toàn ${2 + (i % 4)} lỗ - Type ${i + 1}`,
    price: 79000 + (i % 15) * 5000,
    category: "phu-kien",
    brand: ["SafePlug", "PowerBox", "ElekPro"][i % 3],
    img: IMG_PK[i % IMG_PK.length],
    desc: "Chống quá tải, vật liệu chống cháy, phù hợp gia đình."
  })),
];
