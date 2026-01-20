const PER_PAGE = 12;
let page = 1;

const grid = document.getElementById("grid");
const qEl = document.getElementById("q");
const catEl = document.getElementById("category");
const sortEl = document.getElementById("sort");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const pageInfo = document.getElementById("pageInfo");

function getFiltered() {
  let list = [...PRODUCTS];
  const q = qEl.value.toLowerCase();
  const cat = catEl.value;

  if (cat) list = list.filter(p => p.category === cat);
  if (q) list = list.filter(p => p.name.toLowerCase().includes(q));

  if (sortEl.value === "price-asc") list.sort((a,b)=>a.price-b.price);
  if (sortEl.value === "price-desc") list.sort((a,b)=>b.price-a.price);
  if (sortEl.value === "name-asc") list.sort((a,b)=>a.name.localeCompare(b.name));

  return list;
}

function render() {
  const list = getFiltered();
  const totalPages = Math.ceil(list.length / PER_PAGE) || 1;
  page = Math.min(page, totalPages);

  const items = list.slice((page-1)*PER_PAGE, page*PER_PAGE);
  grid.innerHTML = items.map(p => `
    <div class="card">
      <div class="thumb">
  <img src="${p.img}" alt="${p.name}">
</div>
      <h3>${p.name}</h3>
      <p class="price">${formatVND(p.price)}</p>
      <div class="row2">
        <a class="btn-outline" href="product.html?id=${p.id}">Chi tiết</a>
        <button class="btn-outline add" data-id="${p.id}">Thêm</button>
      </div>
    </div>
  `).join("");

  pageInfo.textContent = `Trang ${page}/${totalPages} (${list.length} SP)`;
  prevBtn.disabled = page === 1;
  nextBtn.disabled = page === totalPages;

  document.querySelectorAll(".add").forEach(b=>{
    b.onclick=()=>{
      const p = PRODUCTS.find(x=>x.id===b.dataset.id);
      addToCart(p);
    };
  });
}

[qEl,catEl,sortEl].forEach(e=>e.oninput=()=>{page=1;render()});
prevBtn.onclick=()=>{page--;render()};
nextBtn.onclick=()=>{page++;render()};

render();
