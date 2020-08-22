const stringHelper = {
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
    guidToString: function (s) {
        return (s || '').replace(/-/g, "")
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
    },
    // 构建用户头像（目前支持 180;120;80;50;30 五个版本的大小）
    buildUserFaceUrl: function (path, version) {
        const url = "https://img2.yiqifei.com";
        if (this.isNullOrWhiteSpace(path)) {
            return url + "/face.png";
        }
        if (this.isNullOrWhiteSpace(version)) {
            return url + path;
        }
        return `${url + path}!${version}`
    }
}

export default stringHelper