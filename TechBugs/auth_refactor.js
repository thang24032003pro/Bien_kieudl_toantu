function checkDiscount(userRole, voucherCode, orderTotal) {
    if (userRole === "ADMIN") return "Admin: Giảm giá đặc biệt 50%";

    if (userRole === "VIP" && voucherCode === true) {
        return orderTotal >= 500 ? "VIP: Giảm giá 30%" : "VIP: Đơn hàng chưa đủ 500k để giảm giá";
    }
    if (userRole === "VIP" && voucherCode !== true) return "VIP: Cần có mã Voucher hợp lệ";

    if (orderTotal >= 1000) return "Member: Đơn hàng lớn, giảm giá 10%";

    return "Khách hàng thường: Không có giảm giá";
}

