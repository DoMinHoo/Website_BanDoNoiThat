# Website_BanDoNoiThat

## 🛋️ Giới thiệu

**Website_BanDoNoiThat** là hệ thống thương mại điện tử chuyên về bán đồ nội thất, gồm:

- Website cho khách hàng
- Trang quản trị cho admin
- Backend API

Dự án hướng tới trải nghiệm mua sắm hiện đại, tiện lợi, dễ sử dụng và dễ quản lý.

---

## 🏗️ Kiến trúc & Công nghệ sử dụng

### Frontend (Client & Admin)

- **ReactJS** (TypeScript)
- **Vite** (build tool)
- HTML, CSS, JavaScript
- **Axios** (giao tiếp API)
- **React Router** (quản lý route động)
- Quản lý trạng thái, xác thực người dùng, responsive UI

### Backend

- **Node.js**, **Express.js**
- **MongoDB** (quản lý dữ liệu)
- **JWT** (xác thực & phân quyền)
- **Multer** (upload file)
- **Winston** (ghi log)

### Khác

- **Bootstrap** (giao diện)
- **ESLint** (kiểm tra code)
- Cấu trúc **RESTful API**
- Quản lý môi trường với `.env`
- Hệ thống seed dữ liệu, upload, logs

---

## ✨ Tính năng nổi bật

- Xem, tìm kiếm, lọc và xem chi tiết sản phẩm nội thất
- Đăng ký, đăng nhập, quản lý tài khoản người dùng
- Thêm sản phẩm vào giỏ hàng, đặt hàng trực tuyến
- Quản lý đơn hàng cho người dùng và quản trị viên
- Trang quản trị: quản lý sản phẩm, đơn hàng, người dùng, khuyến mãi, banner, đánh giá, vật liệu, biến thể sản phẩm
- Responsive, hỗ trợ đa thiết bị
- API bảo mật, phân quyền rõ ràng
- Hỗ trợ upload hình ảnh sản phẩm, banner
- Ghi log hoạt động hệ thống

---

## 📁 Cấu trúc thư mục

```
client/     # Giao diện người dùng chính (React, Vite)
admin/      # Trang quản trị (React, Vite)
backend/    # API server (Node.js, Express, MongoDB)
uploads/    # Lưu trữ file upload (hình ảnh, banner)
logs/       # Ghi log hệ thống
```

---

## 🚀 Hướng dẫn cài đặt

1. **Clone repository về máy:**

   ```bash
   git clone <repository-url>
   ```

2. **Cài đặt dependencies cho từng phần:**

   ```bash
   cd client && npm install
   cd ../admin && npm install
   cd ../backend && npm install
   ```

3. **Cấu hình file `.env` cho backend** (MongoDB URI, JWT secret, ...)

4. **Khởi động từng phần:**

   ```bash
   # Terminal 1
   cd backend && npm run dev

   # Terminal 2
   cd client && npm run dev

   # Terminal 3
   cd admin && npm run dev
   ```

5. **Truy cập website tại:**
   - Giao diện khách hàng: [http://localhost:5173](http://localhost:5173)
   - Trang quản trị: [http://localhost:5174](http://localhost:5174)
   - API backend: [http://localhost:5000](http://localhost:5000)

---

## 🤝 Đóng góp

Mọi đóng góp, báo lỗi hoặc ý kiến xây dựng vui lòng gửi qua **Issues** hoặc **Pull Request** trên GitHub.

---
