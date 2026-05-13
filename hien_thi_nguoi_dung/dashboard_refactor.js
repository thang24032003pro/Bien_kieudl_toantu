function getUserDashboard(user) {
    const displayName = (user.profile && user.profile.name) || "Guest";

    const avatarImg = (user.profile && user.profile.avatar) || "default-avatar.png";

    const adminPanel = user.isLoggedIn 
        ? (user.role === "ADMIN" ? "--- OPEN ADMIN PANEL ---" : "No Access") 
        : "Please Login";

    const statusColor = user.status === "active" ? "green" : "gray";

    console.log("------------------------------------------");
    console.log(`Welcome, ${displayName}`);
    console.log(`Avatar: ${avatarImg}`);
    console.log(`Status Color: ${statusColor}`);
    console.log(`Action: ${adminPanel}`);
    console.log("------------------------------------------");
}

getUserDashboard({ isLoggedIn: true, role: "ADMIN", status: "active", profile: { name: "Hoàng", avatar: "my-pic.jpg" } }); // Case chuẩn
getUserDashboard({ isLoggedIn: true, role: "USER" }); // Case thiếu profile hoàn toàn (Không sập)
getUserDashboard({ isLoggedIn: false, profile: { name: "" } }); // Case tên rỗng