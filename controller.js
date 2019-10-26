var app = angular.module('myApp',[])
app.controller('Democtrl', ['$scope', '$http', function ($scope, $http) {

  $scope.employee = [];
  $scope.content = [];
  $scope.Gender = ["male", "female", "others"];
  $scope.Country = ["India", "Russia", "Canada", "China", "United States"];
  $scope.State = ["Tamilnadu", "kerala", "karanataka"];
  $scope.City = ["hosur", "salem", "anekal"];
  var url = "http://localhost:50557/api/values";

  $scope.submit = true;
  $scope.update = false;
  $scope.cancel = false;
  $scope.employeeid=true;
  // $scope.employeeFirstName = true;
  // $scope.employeeLastName = true;
  // $scope.employeeDateofbirth = true;
  // $scope.employeeGender = true;
  // $scope.employeePhoneNumber = true;
  // $scope.employeeAddress = true;
  // $scope.employeeCountry = true;
  // $scope.employeeState = true;
  // $scope.employeeCity = true;
  // $scope.employeePincod = true;
  // $scope.employeeusercode = true;




  //Getting Users List
  //$http GET function
  $scope.loaddata = function (register) {
    debugger;
    $http({
      method: 'GET',
      url: url

    }).then(function (response) {
      debugger;
      $scope.content = response.data;
      



    });

  }

  $scope.loaddata();

  //Create New User
  // $scope.createUser = function(employee) {
  $scope.submitform = function (employee) {
    debugger;
    var Register = {};
    // Register.EmployeeId=0;
    Register.FirstName = $scope.employee.FirstName;
    Register.LastName = $scope.employee.LastName;
    Register.Dateofbirth = $scope.employee.Dateofbirth;
    // fun.Dateofbirth = $scope.user.Dateofbirth.date;
    //Register.Dateofbirth=new Date(employee.Dateofbirth "dd/mm/yyyy");
    Register.Gender = $scope.employee.Gender;
    Register.PhoneNumber = $scope.employee.PhoneNumber;
    Register.Address = $scope.employee.Address;
    Register.Country = $scope.employee.Country;
    Register.State = $scope.employee.State;
    Register.City = $scope.employee.City;
    Register.Pincode = $scope.employee.Pincode;
    Register.usercode = $scope.employee.usercode;
    //$http POST function
    $http({
      method: 'POST',
      url: url,
      data: Register



    }).then(function (response) {
      alert('employee has created Successfully');
    },
      function (response) {

        alert("Error. while created employee Try Again!");

      });


  }


  // //Update User
  $scope.updateform = function (employee) {

    //$http PUT function
    $http({

      method: 'PUT',
      url: "http://localhost:50557/api/values/"+ employee.EmployeeId,


    }).then(function successCallback(response) {

      alert("User has updated Successfully")

    }, function errorCallback(response) {

      alert("Error. while updating user Try Again!");

    });

  };


  //Delete User
  $scope.deleteform = function (employee) {
    debugger;

    //$http DELETE function
    $http({

      method: 'DELETE',
      url: "http://localhost:50557/api/values/" + employee.EmployeeId,

    }).then(function successCallback(response) {

      alert("User has deleted Successfully");
      var index = $scope.content.indexOf(employee);
      $scope.content.splice(index, 1);

    }, function errorCallback(response) {

      alert("Error. while deleting user Try Again!");

    });

  };

  // //Set $scope on Edit button click
  $scope.editform = function (employee) {
debugger;
    employee.Dateofbirth = new Date(employee.Dateofbirth);


    $scope.employee = employee;
    $scope.submit = false;
    $scope.update = true;
    $scope.cancel = true;
    $scope.employeeid=false;
    // $scope.employeeFirstName = false;
    // $scope.employeeLastName = false;
    // $scope.employeeDateofbirth = false;
    // $scope.employeeGender = false;
    // $scope.employeePhoneNumber = false;
    // $scope.employeeAddress = false;
    // $scope.employeeCountry = false;
    // $scope.employeeState = false;
    // $scope.employeeCity = false;
    // $scope.employeePincod = false;
    // $scope.employeeusercode = false;



  };
  //cancel UPdate
  $scope.cancelUpdate = function () {

    $scope.submit = true;
    $scope.update = false;
    $scope.cancel = false;
    $scope.employeeid=true;
    // $scope.employeeFirstName = true;
    // $scope.employeeLastName = true;
    // $scope.employeeDateofbirth = true;
    // $scope.employeeGender = true;
    // $scope.employeePhoneNumber = true;
    // $scope.employeeAddress = true;
    // $scope.employeeCountry = true;
    // $scope.employeeState = true;
    // $scope.employeeCity = true;
    // $scope.employeePincod = true;
    // $scope.employeeusercode = true;

  };

}]);
