//举例：权限管理，不同用户能访问的页面是不一样的，根据不同的角色赋予不同的权限。
//简单工厂模式  es5
function UserFactory(role) {
    function User(role, pages) {
        this.role = role
        this.pages = pages
    }
    switch (role) {
        case "superadmin":
            return new User("superadmin", ["home", "user-manage", "right-manage", "news-manage"])
            break;
        case "admin":
            return new User("admin", ["home", "user-manage", "news-manage"])
            break;
        case "editor":
            return new User("editor", ["home", "news-manage"])
            break;
        default:
            throw new Error("参数错误")
    }
}

var user = UserFactory("editor")