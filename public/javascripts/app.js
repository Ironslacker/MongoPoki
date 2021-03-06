var app = window.angular.module('app', [])

app.factory('pokemonFetcher', pokemonFetcher)
app.controller('mainCtrl', mainCtrl)

function pokemonFetcher ($http) {

  var API_ROOT = 'pokemon'
  return {
    post: function (formData) {
      return $http
         .post(API_ROOT,formData)
         .then(function (resp) {
           console.log("Post worked");
         })
    },
    get: function () {
      return $http
        .get(API_ROOT)
        .then(function (resp) {
          return resp.data
        })
    }
  }
}

function mainCtrl ($scope, pokemonFetcher) {

  $scope.pokemon = [];

  $scope.addPoki = function() {
      var formData = {name:$scope.Name,avatarUrl:$scope.Url};
      console.log(formData);
      pokemonFetcher.post(formData); // Send the data to the back end
      $scope.pokemon.push(formData); // Update the model
    }

  pokemonFetcher.get()
    .then(function (data) {
      $scope.pokemon = data
    });

}
