function passwordChecker(password) {
    if (password.length < 8) return false;
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) return false;
    if (!/\d/.test(password)) return false;
    if (/IPL/i.test(password)) return false;
    return true;
}
