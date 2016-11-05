angular.module('meanhotel').controller('ProfileController', ProfileController)

function ProfileController(AuthFactory, $window, jwtHelper) {
  var vm = this
  var token = jwtHelper.decodeToken($window.sessionStorage.token)
  vm.name = token.username

  vm.isLoggedIn = function() {
    if (AuthFactory.isLoggedIn) {
      return true
    } else {
      return false
    }
  }


  console.log(token)
}
