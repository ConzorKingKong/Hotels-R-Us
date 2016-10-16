angular.module('meanhotel').controller('register', RegisterController)

function RegisterController($http, $location) {
  var vm = this

  vm.register = function() {
  var user = {
    username: vm.username,
    password: vm.password
  }

  if (!vm.username || !vm.password) {
    vm.error = "Please add a username and a password."
  } else {
    if (vm.password !== vm.passwordRepeat) {
      vm.error = "Please make sure the passwords match"
    } else {
        $http.post('/api/users/register', user).then(function(result) {
          console.log(result)
          vm.message = "Success!"
          vm.error = ""
          window.setTimeout(function() {
            $location.path('/')
          }, 3000)
        }).catch(function(error) {
          console.log(error)
        })
      }
    }
  }
}
