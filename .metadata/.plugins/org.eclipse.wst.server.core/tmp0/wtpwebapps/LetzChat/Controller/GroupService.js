app.service('GroupService',['$http','$q','$rootScope',function($http,$q,$rootScope){
	
console.log("GroupService....")
var BASE_URL='http://localhost:8085/LetzChatBE/'
	return{
	createGroup:function(group)
	{
		console.log("Group Creation");
		return $http.post(BASE_URL+'AddGroup',group)
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
  
	
    viewGroup: function(){
	
	console.log("ViewGroups Function Being Called")
        return $http.get(BASE_URL+'/GroupList')
                .then(
                        function(response){
                            return response.data;
                        }, 
                        function(errResponse){
                            console.error('Error while fetching all groups please try again');
                            return $q.reject(errResponse);
                        }
                );
		},
	 viewGroupById: function(group){
			
			console.log("ViewGroups By UserId Function Being Called")
		        return $http.get(BASE_URL+'/GroupById',group)
		                .then(
		                        function(response){
		                            return response.data;
		                        }, 
		                        function(errResponse){
		                            console.error('Error while fetching all groups please try again');
		                            return $q.reject(errResponse);
		                        }
		                );
				}
}
	
	
}])