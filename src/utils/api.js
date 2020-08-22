import xservice from 'yqf-xservice'
const servingClient = xservice.servingClient('https://api.yiqifei.com/servings/cors', 100008, '541a7f9b49f1b2a1')
const absDomain = "http://localhost:20446/";
export class XServer2 {
    /**
     * 调用XServer2
     *
     * @param {String}  method       方法名
     * @param {Object}  args         参数
     * @param {String}  sessionId    会话ID
     * @returns  Promise
     * @example await invokeXServer('',{},'')
     */
    static invoke = async function (method, args, sessionId = null) {
        return await servingClient.invoke(method, args, sessionId);
    }

    /**
    * 调用目的地服务器 JSON格式
    *
    * @param    {string}  method     控制器+方法名（如：/Controller/Action）
    * @param    {object}   data      方法对应参数（所有参数都无需手动JSON.stringify序列化）
    * @param    {function}   success      成功回调
    * @param    {function}   fail         失败回调
    */
    static invokeServer = (options) => {
        options.loading = options.loading || (typeof options.loading != 'boolean');
 

        let formData = new FormData();
        if (options.data) {
            for (var key in options.data) {
                var val = options.data[key];
                if (typeof val === 'object') {
                    val = JSON.stringify(val);
                }
                formData.append(key, val);
            }
        }
        console.log((options.server || absDomain) + options.method);
        fetch((options.server || absDomain) + options.method, {
            method: "POST",
            model: "cors",
            body: formData
        }).then((res) => {

            console.log("res",res);
            if (res.ok) {
                res.json().then((data) => {
                    if (data.code === 0) {
                        if (typeof options.success === 'function')
                            // 翻译转换
                        
                        options.success(data.result);
                    }
                    else if (typeof options.fail === 'function') {
                        options.fail(data.code, data.msg);
                        console.log(options.method + ":", data.msg);
                    }
                });
            }
        }).catch((err) => {
            console.log("err", err);
            if (typeof options.fail === 'function') {
                options.fail(-1, "请求失败");
            }
        });
    }

    static invokeServerAsync = async (options) => {
        options.loading = options.loading || (typeof options.loading != 'boolean');
      

        let formData = new FormData();
        if (options.data) {
            for (var key in options.data) {
                var val = options.data[key];
                if (typeof val === 'object') {
                    val = JSON.stringify(val);
                }
                formData.append(key, val);
            }
        }
        try {
            let res = await fetch((options.server || absDomain) + options.method, {
                method: "POST",
                model: "cors",
                body: formData
            });
            if (res.ok) {
                let data = await res.json();
             

                if (data.code === 0) {
                    return data.result;
                }
                else if (typeof options.fail === 'function') {
                    options.fail(data.code, data.msg);
                }
            }
            return null;
        } catch (err) {
          
            if (typeof options.fail === 'function') {
                options.fail(-1, "服务器错误");
            }
            return null;
        }
    }

}