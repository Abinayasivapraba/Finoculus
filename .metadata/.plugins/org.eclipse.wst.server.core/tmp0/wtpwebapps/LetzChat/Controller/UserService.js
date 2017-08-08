app.service('UserService',['$http','$q','$rootScope',function($http,$q,$rootScope){
	
console.log("UserService....")
var BASE_URL='http://localhost:8085/LetzChatBE/'
	return{
	createUser:function(user)
	{
		console.log("User Creation");
		return $http.post(BASE_URL+'AddUser',user)
		.then(
				
		function(response){
			return response.data;
		},
		function(errResponse)
		{
			return $reject(errResponse);
		}
		
		);
	},


validateUser: function(user) {
	console.log("Inside UserValidation")
	return $http.post(BASE_URL+'/ValidateUserCredentials', user)
	.then(
            function(response){
            	console.log("function response")
                return response.data;
            }, 
            function(errResponse){
                console.error('Error while validating user');
                return $q.reject(errResponse);
            }
    );
},
UserLogout: function(user) {
	console.log("Inside UserValidation")
	return $http.get(BASE_URL+'/ValidateUserLogout', user)
	.then(
            function(response){
            	console.log("Logout Function")
                return response.data;
            }, 
            function(errResponse){
                console.error('Error in user logout');
                return $q.reject(errResponse);
            }
    );
},
};



	
	
	
	

                           
                           
                           
                           
                           
                           
                           
                           
                           
                           
                           
                           




} ])