app.controller('UserController',['$http','UserService','$scope','$rootScope','$cookieStore','$location',
     function($http,UserService,$scope,$rootScope,$cookieStore,$location){
	    console.log("UserController...")
	    this.user={
	    	userid:'',
	    	username:'',
	    	password:'',
	    	role:''
	    }
	    this.currentuser={
	    	userid:'',
	    	username:'',
	    	password:'',
	    	role:''
	    }
	    this.createUser=function(user)
	    {
	    console.log("creating a user");
	    UserService.createUser(user)
	    
	    	.then(
	    	function(d)
	    	{
	    	$location.path("/")	
	    	},
	    	function(errResponse){
	    		console.log("Error while creating user")
	    	}
	    	);
	    };
	    this.submit=function(user) {
	    {
	    	console.log("User Created");
	    	this.createUser(this.user);
	    }
	    this.reset();
	    };
	    this.reset=function(){
	    	this.user={
	    			userid:'',
	    	    	username:'',
	    	    	password:'',
	    	    	role:''
	    			
	    	};
	    	$scope.myForm.$setPristine();
	    };
	    
	    this.validateUser=function(user){
	    	console.log("Validating User..")
	    	UserService.validateUser(user)
	    	.then
	    	(
	    		function(d)	{
	    			user=d;
	    			if(user.errorcode==200)
	    				{
	    				if(user.role=="admin")
	    				{
	    				alert("You are admin")
	    				
	    				}
	    			$rootScope.currentuser=user;
	    			$cookieStore.put('currentuser',user)
	    			alert("Successful Login")
	    			$location.path("/")
	    	}
	    			else
	    				{
	    				user.userid="",
	    				user.password=""
	    					alert("Invalid Credetials..Please try again..")
	    					$location.path("/login")
	    				}
	    		},
	    				
	    function(errResponse)
		{
			alert("Invalid Credentials...Please Try Again")
			$location.path("/login")
			console.error("user not logged in")
			
		}
		);
};

	    	
this.login=function() {
	{
		console.log("Validating user login",this.user);
		this.validateUser(this.user);
		
	}
};
	this.logout=function(){
	{
		console.log("validating user logout");
      $rootScope.currentuser={};
	  $cookieStore.remove('currentuser')
	  UserService.UserLogout()
	   $location.path("/")
		
	}
	};

	
	
	   
  
















}])                            
