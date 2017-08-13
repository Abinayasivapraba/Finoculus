app.controller('GroupController',['$http','GroupService','$scope','$rootScope','$cookieStore','$location',
     function($http,GroupService,$scope,$rootScope,$cookieStore,$location){
	    console.log("GroupController...")
	    this.group={
	    	groupid:'',
	    	groupname:'',
	    	creatorid:'',
	    	date:''
	    };
	    this.groups=[];
	    
	    this.createGroup=function(group)
	    {
	    console.log("creating a group");
	    GroupService.createGroup(group)
	    
	    	.then(
	    	function(d)
	    	{   
	    		this.group=d;
	    		alert("Group Created successfully")
	    	$location.path("/")	
	    	
	    	},
	    	function(errResponse){
	    		console.log("Error while creating group")
	    		alert("Login to create a group")
	    		$location.path("/login")	
	    	}
	    	);
	    };
	    this.create=function(group) {
	    {
	    	console.log("Group Creation...");
	    	this.createGroup(this.group);
	    }
	    this.viewGroup=function()
	    {
	    	console.log("fetch groups of users")
	    	console.log("fetchAllGroups!")
			GroupService.viewGroup()
			.then(
					function(d) 
					{
						this.groups=d;
						if(this.groups.length==0)
						{
							alert("There Are No Groups To Display")
						}
						$rootScope.groups=d;
						console.log(this.groups)
						
						alert("Thank You Groups Fetched Successfully!!!")
						$location.path('/viewGroup')
					},
					function(errResponse) 
					{
							console.error('Error while Fetching Groups.');
				});
			
	    };
	    this.add=function()
	    {
	    	console.log("Display All Groups");
	    	this.viewGroup();
	    	
	    }
	    this.viewGroupById=function(group){
	    	console.log("Groups By Id function being called")
	    	GroupService.viewGroupById(group)
	    	.then(
	    			function(d)
	    			{
	    				this.group=d;
	    				$rootScope.group=d;
	    				console.log(this.group)
	    				alert("Groups Fetched Successfully")
	    				$location.path("viewGroupById")
	    			},
	    			function(errResponse)
	    			{
	    				console.error("Error in fetching groups")
	    			
	    				
	    			});
	    };
	    this.displayById=function(group)
	    {
	    	console.log("Displaying Groups By id",this.group.groupid);
	    	this.viewGroupById(this.group.groupid);
	    }
	    	
	    
	    
	    
	    
	    
	    };
}])