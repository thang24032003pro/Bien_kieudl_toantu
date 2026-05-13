function getUserDashboard(user) {
    // 1. Dùng Short-circuit: Nếu có user.profile.name thì lấy, không thì lấy "Guest"
    const displayName = (user.profile && user.profile.name) || "Guest";

    // 2. Tránh lỗi 'Cannot read property of null' bằng cách kiểm tra vế trái với &&
    const avatarImg = (user.profile && user.profile.avatar) || "default-avatar.png";

    // 3. Tối ưu quyền truy cập: Ưu tiên ADMIN -> Member -> Please Login
    const adminPanel = user.isLoggedIn 
        ? (user.role === "ADMIN" ? "--- OPEN ADMIN PANEL ---" : "No Access") 
        : "Please Login";

    // 4. Toán tử 3 ngôi thay cho if-else dài dòng
    const statusColor = user.status === "active" ? "green" : "gray";

    console.log("------------------------------------------");
    console.log(`Welcome, ${displayName}`);
    console.log(`Avatar: ${avatarImg}`);
    console.log(`Status Color: ${statusColor}`);
    console.log(`Action: ${adminPanel}`);
    console.log("------------------------------------------");
}

// --- KIỂM THỬ VỚI CÁC TRƯỜNG HỢP DỊ THƯỜNG (QA TEST) ---
getUserDashboard({ isLoggedIn: true, role: "ADMIN", status: "active", profile: { name: "Hoàng", avatar: "my-pic.jpg" } }); // Case chuẩn
getUserDashboard({ isLoggedIn: true, role: "USER" }); // Case thiếu profile hoàn toàn (Không sập)
getUserDashboard({ isLoggedIn: false, profile: { name: "" } }); // Case tên rỗng