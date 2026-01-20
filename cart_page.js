// cart_page.js
// Lưu ý: CART_KEY, loadCart, saveCart, cartCount, formatVND... đã có trong app.js

function findProductById(id){
  const list = (window.PRODUCTS || []);
  return list.find(p => p.id === id) || null;
}

function renderCart(){
  const root = document.getElementById("cartRoot");
  if(!root) return;

  const cart = loadCart(); // {id: {id,name,price,qty}}
  const ids = Object.keys(cart);

  // giỏ trống
  if(ids.length === 0){
    root.innerHTML = `
      <h1>Giỏ hàng</h1>
      <div class="empty-cart">
        <p>Chưa có sản phẩm nào trong giỏ.</p>
        <a class="btn" href="products.html">Mua sắm ngay</a>
      </div>
    `;
    updateCartBadge();
    return;
  }

  // tính tiền
  let sub = 0;
  ids.forEach(id => {
    const it = cart[id];
    sub += (it.price || 0) * (it.qty || 0);
  });

  const ship = sub > 1000000 ? 0 : 30000; // ví dụ: > 1tr free ship
  const total = sub + ship;

  root.innerHTML = `
    <h1>Giỏ hàng</h1>

    <div class="cart-layout">
      <div class="cart-list" id="cartList"></div>

      <aside class="cart-summary2">
        <div class="sum-row"><span>Tạm tính</span><b id="sub">${formatVND(sub)}</b></div>
        <div class="sum-row"><span>Phí ship</span><b id="ship">${formatVND(ship)}</b></div>
        <div class="sum-row sum-total"><span>Tổng</span><b id="total">${formatVND(total)}</b></div>
        <div class="sum-note">* Demo: đơn trên 1.000.000đ sẽ được miễn phí ship.</div>
        <div class="sum-btns">
          <button class="btn" id="orderBtn">Đặt hàng</button>
          <button class="btn-outline" id="clearBtn">Xóa giỏ</button>
        </div>
      </aside>
    </div>
  `;

  const listEl = document.getElementById("cartList");

  // render từng item
  listEl.innerHTML = ids.map(id => {
    const it = cart[id];
    const p = findProductById(id);
    const img = (p && p.img) ? p.img : "img/placeholder.png";
    const brand = (p && p.brand) ? p.brand : (it.brand || "");

    return `
      <div class="cart-item" data-id="${id}">
        <a class="pic" href="product.html?id=${encodeURIComponent(id)}" title="Xem chi tiết">
          <img src="${img}" alt="${it.name}">
        </a>

        <div class="info">
          <div class="name">${it.name}</div>
          <div class="brand">${brand}</div>
          <div class="price">${formatVND(it.price)} <span style="font-weight:400;color:#666;">/ sp</span></div>
        </div>

        <div class="qty-box">
          <button class="qty-btn dec" title="Giảm">−</button>
          <input class="qty-input" type="text" value="${it.qty}" inputmode="numeric">
          <button class="qty-btn inc" title="Tăng">+</button>
        </div>

        <div class="cart-actions">
          <button class="cart-remove" title="Xóa">Xóa</button>
          <div style="font-weight:700">${formatVND(it.price * it.qty)}</div>
        </div>
      </div>
    `;
  }).join("");

  // gắn sự kiện
  listEl.querySelectorAll(".cart-item").forEach(row => {
    const id = row.dataset.id;

    const dec = row.querySelector(".dec");
    const inc = row.querySelector(".inc");
    const input = row.querySelector(".qty-input");
    const removeBtn = row.querySelector(".cart-remove");

    dec.addEventListener("click", () => changeQty(id, -1));
    inc.addEventListener("click", () => changeQty(id, +1));

    input.addEventListener("change", () => {
      const v = parseInt(input.value, 10);
      setQty(id, isNaN(v) ? 1 : v);
    });

    removeBtn.addEventListener("click", () => {
      removeItem(id);
    });
  });

  // nút đặt hàng / xóa giỏ
  document.getElementById("clearBtn").addEventListener("click", () => {
    if(confirm("Xóa toàn bộ giỏ hàng?")){
      saveCart({});
      renderCart();
    }
  });

  document.getElementById("orderBtn").addEventListener("click", () => {
    alert("Đặt hàng thành công (demo)! Cảm ơn bạn.");
    saveCart({});
    renderCart();
  });

  updateCartBadge();
}

function changeQty(id, delta){
  const cart = loadCart();
  if(!cart[id]) return;

  cart[id].qty = (cart[id].qty || 0) + delta;

  if(cart[id].qty <= 0){
    delete cart[id];
  }

  saveCart(cart);
  renderCart();
}

function setQty(id, qty){
  const cart = loadCart();
  if(!cart[id]) return;

  const q = Math.max(1, Math.min(99, qty));
  cart[id].qty = q;

  saveCart(cart);
  renderCart();
}

function removeItem(id){
  const cart = loadCart();
  if(!cart[id]) return;

  delete cart[id];
  saveCart(cart);
  renderCart();
}

document.addEventListener("DOMContentLoaded", renderCart);
