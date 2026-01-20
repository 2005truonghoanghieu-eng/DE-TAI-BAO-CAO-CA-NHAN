(function () {
  const grid = document.getElementById("grid");
  if (!grid) return;

  // Lấy cat từ URL
  const url = new URL(location.href);
  const cat = url.searchParams.get("cat") || "";

  // Đặt tiêu đề nếu có
  const title = document.getElementById("catTitle");
  const CAT_NAME = {
    "dien-gia-dung": "Điện gia dụng",
    "nha-bep": "Nhà bếp",
    "lam-mat": "Làm mát",
    "phu-kien": "Phụ kiện"
  };
  if (title) title.textContent = `Danh mục: ${CAT_NAME[cat] || "Tất cả"}`;

  // Lấy danh sách sản phẩm
  const all = (window.PRODUCTS || []);
  const list = cat ? all.filter(p => p.category === cat) : all;

  // Nếu rỗng thì báo
  if (!list.length) {
    grid.innerHTML = `<p class="small">Không có sản phẩm cho danh mục này.</p>`;
    return;
  }

  // Render
  grid.innerHTML = list.map(p => `
    <article class="card">
      <div class="thumb">
  <img src="${p.img}" alt="${p.name}">
</div>
      <h3>${p.name}</h3>
      <p class="meta">${p.brand || ""}</p>
      <p class="price">${formatVND(p.price)}</p>
      <div class="row2">
        <a class="btn-outline" href="product.html?id=${encodeURIComponent(p.id)}">Chi tiết</a>
        <button class="btn-outline add" data-id="${p.id}">Thêm</button>
      </div>
    </article>
  `).join("");

  // Add cart
  grid.querySelectorAll(".add").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      const product = list.find(x => x.id === id);
      addToCart(product, 1);
      btn.textContent = "Đã thêm";
      setTimeout(() => btn.textContent = "Thêm", 700);
    });
  });
})();
