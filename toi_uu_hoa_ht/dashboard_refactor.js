function showWelcome(user) {
    const name = (user && user.name) || "Khách";
    const badge = (user && user.isVip) && "*" || "";

    console.log(`Chào mừng ${name} ${badge}`);
}


function renderDashboard(user) {
    const action = (user && user.role === "admin") && "Mở bảng Quản trị";

    const statusColor = user.status === "online" ? "green" : "gray";

    console.log(`Hành động: ${action || "Không có quyền"}`);
    console.log(`Màu trạng thái: ${statusColor}`);
}

showWelcome({ name: "Hoàng", isVip: true }); 
renderDashboard({ role: "admin", status: "online" }); 