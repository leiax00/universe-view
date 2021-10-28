const auth = { toHomeList: [ '/login' ] };

auth.hasPermission = function(to) {
  return true;
};

// 必须鉴权通过该方法才有意义: hasPermission() && toHome()
auth.toHome = function(to) {
  return this.toHomeList.some(item => (item.path || item) === to.path);
};

auth.roleChanged = function() {
  return false;
};

auth.withEach = function(to, from, next) {
  this.to = to;
  this.from = from;
  this.next = next;
  return this;
};

auth.tryTo = function() {
  if (auth.roleChanged()) {
    // todo: 角色改变时, 重新加载动态路由及其他资源
  }
  if (auth.hasPermission(this.to) && !auth.toHome(this.to)) {
    this.next();
    return;
  }
  this.next({ path: '/' });
};

export default auth;