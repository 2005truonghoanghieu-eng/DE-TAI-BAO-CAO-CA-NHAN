// product_page.js
(function () {
  const el = document.getElementById("detail");
  if (!el) return;

  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  const list = window.PRODUCTS || [];
  const p = list.find(x => x.id === id);

  if (!p) {
    el.innerHTML = `<h2>Không tìm thấy sản phẩm</h2>
      <p class="small">Vui lòng quay lại trang sản phẩm.</p>
      <a class="btn-outline" href="products.html">← Xem sản phẩm</a>`;
    return;
  }

  el.innerHTML = `
    <div class="detail-wrap">
      <div class="detail-left">
        <div class="thumb detail-thumb">
          <img src="${p.img}" alt="${p.name}">
        </div>
      </div>

      <div class="detail-right">
        <h1>${p.name}</h1>
        <p class="meta">Hãng: <b>${p.brand || ""}</b> • Danh mục: <b>${p.category}</b></p>
        <p class="price big">${formatVND(p.price)}</p>
        <p class="desc">${p.desc || ""}</p>

        <div class="row2" style="margin-top:12px;">
          <button class="btn" id="addBtn">Thêm vào giỏ</button>
          <a class="btn-outline" href="products.html">← Quay lại</a>
        </div>
      </div>
    </div>
  `;

  document.getElementById("addBtn").addEventListener("click", () => {
    addToCart(p, 1);
    const btn = document.getElementById("addBtn");
    btn.textContent = "Đã thêm";
    setTimeout(() => (btn.textContent = "Thêm vào giỏ"), 900);
  });
})();
