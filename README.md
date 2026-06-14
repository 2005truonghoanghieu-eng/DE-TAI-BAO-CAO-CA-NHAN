# DE-TAI-BAO-CAO-CA-NHAN
website mua bán thiết bị điện – Đề tài Tiểu luận Cá nhân môn lập trình web, Trường Đại học Văn Hiến – Khoa Công nghệ Thông tin.
# ⚡ Tiệm Điện Của Hiếu - Website Mua Bán Thiết Bị Điện

## Giới thiệu

Tiệm Điện Của Hiếu là website bán thiết bị điện được xây dựng nhằm phục vụ học phần **Lập Trình Web (252INT4407)** tại Trường Đại học Văn Hiến.

Website mô phỏng một cửa hàng bán đồ điện trực tuyến với các chức năng cơ bản như:

* Xem danh sách sản phẩm
* Phân loại sản phẩm theo danh mục
* Tìm kiếm sản phẩm
* Xem chi tiết sản phẩm
* Thêm sản phẩm vào giỏ hàng
* Quản lý giỏ hàng
* Gửi thông tin liên hệ

---

## Công nghệ sử dụng

### Front-end

* HTML5
* CSS3
* JavaScript (Vanilla JS)

### Lưu trữ dữ liệu

* LocalStorage (lưu giỏ hàng)

### Công cụ phát triển

* Visual Studio Code
* Google Chrome
* GitHub Pages

---

## Chức năng chính

### 1. Trang chủ

* Hiển thị thông tin giới thiệu cửa hàng
* Danh mục nổi bật
* Carousel sản phẩm mới
* Form liên hệ nhanh

### 2. Danh sách sản phẩm

* Hiển thị toàn bộ sản phẩm
* Tìm kiếm sản phẩm theo tên
* Lọc theo danh mục
* Sắp xếp theo:

  * Giá tăng dần
  * Giá giảm dần
  * Tên A-Z
* Phân trang sản phẩm

### 3. Danh mục sản phẩm

Các nhóm sản phẩm gồm:

* Điện gia dụng
* Nhà bếp
* Làm mát
* Phụ kiện điện

### 4. Chi tiết sản phẩm

* Hình ảnh sản phẩm
* Tên sản phẩm
* Giá bán
* Mô tả
* Thêm vào giỏ hàng

### 5. Giỏ hàng

* Thêm sản phẩm
* Tăng / giảm số lượng
* Xóa sản phẩm
* Tính tổng tiền
* Tính phí vận chuyển
* Miễn phí vận chuyển với đơn hàng trên 1.000.000 VNĐ

### 6. Liên hệ

* Form gửi thông tin liên hệ
* Hiển thị thông tin cửa hàng
* Thông báo gửi thành công (Demo)

---

## Cấu trúc thư mục

```text
├── index.html
├── products.html
├── product.html
├── category.html
├── cart.html
├── contact.html
│
├── style.css
│
├── app.js
├── products_data.js
├── products_page.js
├── product_page.js
├── category_page.js
├── cart_page.js
├── contact_page.js
│
└── img/
```

---

## Dữ liệu sản phẩm

Website hiện mô phỏng hơn 100 sản phẩm thuộc 4 danh mục:

| Danh mục      | Số lượng |
| ------------- | -------- |
| Điện gia dụng | 30       |
| Nhà bếp       | 30       |
| Làm mát       | 30       |
| Phụ kiện điện | 30       |

Tổng cộng: **120 sản phẩm**

---

## Hướng dẫn chạy dự án

### Cách 1: Mở trực tiếp

Mở file:

```text
index.html
```

bằng trình duyệt.

### Cách 2: Sử dụng Live Server

1. Mở thư mục bằng VS Code
2. Cài extension Live Server
3. Chuột phải vào `index.html`
4. Chọn **Open with Live Server**

---

## Mục tiêu học tập

Thông qua đề tài, sinh viên thực hành:

* Thiết kế giao diện Web
* Responsive Design
* JavaScript DOM
* Event Handling
* LocalStorage
* Tổ chức mã nguồn Front-end
* Xây dựng Website bán hàng cơ bản

---

## Thông tin sinh viên

**Họ và tên:** Trương Hoàng Hiếu

**MSSV:** 231A290055

**Ngành:** Khoa học Máy tính

**Trường:** Đại học Văn Hiến

**Học phần:** Lập Trình Web (252INT4407)

**Giảng viên:** TS. Nguyễn Quang Tấn

---

## Bản quyền

© 2026 Tiệm Điện Của Hiếu

Dự án được xây dựng phục vụ mục đích học tập và nghiên cứu trong học phần Lập Trình Web.

