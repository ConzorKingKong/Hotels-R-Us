angular.module('meanhotel').controller('HotelController', HotelController)

function HotelController($route, $routeParams, hotelDataFactory, AuthFactory, $window, jwtHelper) {
  var vm = this
  var id = $routeParams.id
  hotelDataFactory.hotelDisplay(id).then(function(res) {
      vm.hotel = res.data
      vm.stars = _getStarRating(res.data.stars)
    })

  function _getStarRating(rating) {
    return new Array(rating)
  }

  vm.isLoggedIn = function() {
    if (AuthFactory.isLoggedIn) {
      return true
    } else {
      return false
    }
  }

  vm.addReview = function() {

    var token = jwtHelper.decodeToken($window.sessionStorage.token)
    var username = token.username

    var postData = {
      name: username,
      rating: vm.rating,
      review: vm.review
    }

    if(vm.reviewForm.$valid) {
      hotelDataFactory.postReview(id, postData).then(function(res) {
        if(res.status === 200) {
          $route.reload()
        }
      }).catch(function(err) {
        console.log(err)
      })
    } else {
      vm.isSubmitted = true
    }
  }
}
