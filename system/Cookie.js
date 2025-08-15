'use strict';

class Cookie {
    
    constructor() {
    }
    
    static cookies = [];
    
    static setCookie(cookie) {
        console.log(cookie);
        Cookie.cookies.push = cookie;
    }
    
    static getCookie() {
        console.log("getCookie Method");
        console.log(Cookie.cookies[0])
        
    }

    static deleteCookie() {
        

    }


} // CookieHelp Class

export default Cookie;