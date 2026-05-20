# Hướng Dẫn Hình Ảnh - Bài Thuyết Trình Công Đoàn Việt Nam

## Các Hình Ảnh Background (Nền)

Các hình ảnh nền được sử dụng trong các section chính:

### 1. **hero-bg.jpg** - Hero Section
- **Vị trí**: `/public/images/hero-bg.jpg`
- **Nội dung**: Công nhân đoàn kết, nâng tay lên trong sự thống nhất
- **Sử dụng**: Trang chủ (Hero section)
- **Chi tiết**: Công nhân với mũ bảo hiểm, môi trường công nghiệp, biểu hiện quyết tâm

### 2. **workers-bg.jpg** - Theory Section
- **Vị trí**: `/public/images/workers-bg.jpg`
- **Nội dung**: Công nhân học tập lý luận Mác, môi trường giáo dục
- **Sử dụng**: Phần 1 - Cơ sở lý luận
- **Chi tiết**: Thư viện, công nhân đọc sách, cảnh học tập

### 3. **world-bg.jpg** - World Unions Section
- **Vị trí**: `/public/images/world-bg.jpg`
- **Nội dung**: Bản đồ thế giới, công nhân từ các nước khác nhau
- **Sử dụng**: Phần 2 - Các mô hình công đoàn trên thế giới
- **Chi tiết**: Cách mạng công nghiệp Anh, công nhân Trung Quốc, phong trào quốc tế

### 4. **vietnam-bg.jpg** - Vietnam Union Section
- **Vị trị**: `/public/images/vietnam-bg.jpg`
- **Nội dung**: Công đoàn Việt Nam, Tôn Đức Thắng, cờ đảng
- **Sử dụng**: Phần 3 - Công đoàn Việt Nam
- **Chi tiết**: Công nhân Việt, tính cách đoàn kết, yếu tố văn hóa

### 5. **modern-work-bg.jpg** - Status Section
- **Vị trí**: `/public/images/modern-work-bg.jpg`
- **Nội dung**: Nhà máy hiện đại, công nghệ tự động hóa, công nhân với thiết bị
- **Sử dụng**: Phần 4 - Thực trạng & Dẫn chứng thực tế
- **Chi tiết**: Công nghiệp 4.0, dây chuyền tự động, cô nhân bảo vệ

---

## Các Hình Ảnh Minh Họa (Inline Images)

### 1. **workers-unity.jpg** - Sự Đoàn Kết
- **Vị trí**: `/public/images/workers-unity.jpg`
- **Nội dung**: Công nhân từ nhiều dân tộc khác nhau ôm tay nhau
- **Sử dụng**: Phần 1 - Tại sao công nhân cần công đoàn?
- **Kích thước trong code**: 320px cao (h-80)
- **Chi tiết**: Đa dạng giới tính, công việc, biểu hiện tích cực

### 2. **labor-rights.jpg** - Quyền Lao Động
- **Vị trị**: `/public/images/labor-rights.jpg`
- **Nội dung**: Công nhân biểu tình, tài liệu hợp đồng, cân công bằng
- **Sử dụng**: Phần 4 - Thành tựu (Achievements)
- **Kích thước trong code**: 320px cao (h-80)
- **Chi tiết**: Biểu tình hòa bình, quyền lợi lao động, tài liệu pháp lý

### 3. **skills-training.jpg** - Đào Tạo Kỹ Năng
- **Vị trí**: `/public/images/skills-training.jpg`
- **Nội dung**: Lớp học đào tạo, công nhân học kỹ năng mới
- **Sử dụng**: Phần Kết Luận - Những điểm chính cần nhớ
- **Kích thước trong code**: 320px cao (h-80)
- **Chi tiết**: Giáo viên dạy, máy tính, phát triển kỹ năng

### 4. **history-timeline.jpg** - Lịch Sử Phong Trào
- **Vị trì**: `/public/images/history-timeline.jpg`
- **Nội dung**: Dòng thời gian phong trào lao động, công nhân từ các thời kỳ
- **Sử dụng**: Phần 2 - Các mô hình công đoàn trên thế giới
- **Kích thước trong code**: 384px cao (h-96)
- **Chi tiết**: Tiến hóa phong trào, từ cũ đến mới, lịch sử

### 5. **community-support.jpg** - Hỗ Trợ Cộng Đồng
- **Vị trị**: `/public/images/community-support.jpg`
- **Nội dung**: Công nhân giúp đỡ nhau, gia đình, hoạt động hỗ trợ
- **Sử dụng**: Phần 3 - Vai trò của công đoàn Việt Nam
- **Kích thước trong code**: 384px cao (h-96)
- **Chi tiết**: Tương tế, gia đình, hoạt động từ thiện

---

## Cách Sử Dụng

### Thay Đổi Hình Ảnh
Nếu bạn muốn thay đổi bất kỳ hình ảnh nào:

1. **Để thay bằng hình của riêng bạn:**
   - Lưu hình ảnh của bạn vào `/public/images/`
   - Cập nhật đường dẫn trong code (ví dụ: `/images/your-image.jpg`)

2. **Các file component chứa hình ảnh:**
   - `components/presentation/theory-section.tsx` - workers-unity.jpg
   - `components/presentation/vietnam-union-section.tsx` - community-support.jpg
   - `components/presentation/status-section.tsx` - labor-rights.jpg
   - `components/presentation/world-unions-section.tsx` - history-timeline.jpg
   - `components/presentation/conclusion-section.tsx` - skills-training.jpg

### Thêm Hình Ảnh Mới
Để thêm hình ảnh mới vào phần khác:

```tsx
<div className="rounded-2xl overflow-hidden border border-border mb-8">
  <img
    src="/images/your-image.jpg"
    alt="Mô tả hình ảnh"
    className="w-full h-80 object-cover"
  />
</div>
```

---

## Thông Tin Hữu Ích

### Kích Thước Hình Ảnh
- **h-80**: 320px cao (sử dụng cho hình inline nhỏ)
- **h-96**: 384px cao (sử dụng cho hình timeline/lớn)
- **Tất cả**: Chiều rộng 100% (w-full)
- **Object cover**: Hình sẽ lấp đầy không gian mà không bị biến dạng

### Styling
- **Border**: `border border-border` - viền theo theme
- **Rounded**: `rounded-2xl` - góc tròn mượt mà
- **Margin bottom**: `mb-8` - khoảng cách phía dưới

---

## Tổng Kết

✅ **5 Hình Ảnh Background** - Được sử dụng làm nền cho các phần chính
✅ **5 Hình Ảnh Inline** - Được nhúng vào nội dung để minh họa
✅ **Tất cả hình ảnh** - Là ảnh thực tế chất lượng cao, phù hợp với chủ đề

Bạn có thể thay đổi bất kỳ hình ảnh nào bằng cách cập nhật đường dẫn file hoặc thay thế tệp trong thư mục `/public/images/`.
