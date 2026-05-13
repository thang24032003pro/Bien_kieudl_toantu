function checkLogin(inputPassword, storedPassword, userRole) {
     if (inputPassword !== storedPassword) {
        console.log("Mật khẩu sai!");
        return; 
    }

    console.log("Đăng nhập thành công!");
    if (userRole === "admin") {
        console.log("Chào mừng quản trị viên.");
    } else if (userRole === "editor") {
        console.log("Chào mừng biên tập viên.");
    } else {
        console.log("Chào mừng thành viên.");
    }
}

console.log("--- Test Case lỗi cũ (0 vs '0') ---");
checkLogin(0, "0", "admin"); // Kết quả mong đợi: Mật khẩu sai!

console.log("--- Test Case đăng nhập đúng ---");
checkLogin("Bank123!", "Bank123!", "admin");