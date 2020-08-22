const utils = {
    stringHelper: {
        // 去掉首尾空格 
        trim: function (s) {
            if (s == null) {
                return '';
            }
            if (typeof (s) == 'string') {
                return (s || '').trim();
            }
            return s.toString();
        },
        isNullOrEmpty: function (s) {
            return s == null || s == '';
        },
        isNullOrWhiteSpace: function (s) {
            return this.trim(s) == ''
        },
        zeropadding: function (s) {
            s = s.toString()
            return s.replace(/^(\d)$/, "0$1")
        },
        // 检测是否是邮箱
        checkIsEmail: function (s) {
            return /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(s);
        },
        // 检测是否是数字
        checkIsNumeric: function (s) {
            return /\d+/.test(s);
        },
        // 检测是否是正金额类型（最多两位小数位）
        checkIsDecimal: function (s) {
            return /^[0-9]+(\.[0-9]{1,2})?$/.test(s);
        },
        // 检测是否是英文字母
        checkIsEn: function (s) {
            return /^[a-zA-Z\/ ]{2,20}$/.test(s);
        },
        // 检测是否是手机号码
        checkIsMobile: function (s) {
            return /^\d{8,}$/.test(s);
        }
    }
}

export default utils