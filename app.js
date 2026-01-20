// js/app.js
const CART_KEY = "do_dien_cart_v2";

function loadCart() {
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || {}; }
  catch { return {}; }
}
function saveCart(cart) { localStorage.setItem(CART_KEY, JSON.stringify(cart)); }
function cartCount(cart) { return Object.values(cart).reduce((s, it) => s + it.qty, 0); }
function formatVND(n) { return Number(n).toLocaleString("vi-VN") + "đ"; }
function getParam(name) {
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}
function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}

function addToCart(product, qty = 1) {
  const cart = loadCart();
  if (!cart[product.id]) cart[product.id] = { id: product.id, name: product.name, price: product.price, qty: 0 };
  cart[product.id].qty += qty;
  saveCart(cart);
  updateCartBadge();
}

function updateCartBadge() {
  const badge = document.getElementById("cartCount");
  if (!badge) return;
  badge.textContent = cartCount(loadCart());
}

document.addEventListener("DOMContentLoaded", updateCartBadge);
