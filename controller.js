var app = angular.module('myApp', []);
app.controller('Democtrl', function ($scope) {

  $scope.employee = {

  };
  $scope.employees=[];
  $scope.gender = ["male", "female", "others"];
  $scope.country = ["India", "Russia", "Canada", "China", "United States"];
  $scope.state = ["Tamilnadu", "kerala", "karanataka"];


  $scope.submitform = function () {
    
 var newItem={
   'firstname':$scope.employee.firstname,
   'lastname':$scope.employee.lastname,
   'dateofbirth':$scope.employee.dateofbirth,
   'phonenumber':$scope.employee.PhoneNumber, 
   'gender':$scope.employee.gender, 
   'address1':$scope.employee.address1,
   'address2':$scope.employee.address2,
   'address3':$scope.employee.address3,
   'country':$scope.employee.country,
   'state':$scope.employee.state,
   'pincode':$scope.employee.pincode,
   'employeecode':$scope.employee.employeecode,

 };
 $scope.employees.push(newItem);
}


});


