angular.module('meanhotel').controller('HotelsController', HotelsController)


function HotelsController(hotelDataFactory) {
    var vm = this
    vm.title = 'Hotels R Us'
    hotelDataFactory.hotelList().then(function(res) {
        vm.hotels = res.data
      })
  }
