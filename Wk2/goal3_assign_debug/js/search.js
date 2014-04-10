//Dao Villar 4/7/14
//Programming for Web Apps Section 1
//Wk2 -- Debug V2


// 14 total errors found
// Create privatized scope using a self-executing function
(function(){
	
	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
	var resultsDIV = document.getElementById("results"),
		searchInput = document.forms[0].search,
		currentSearch = ''
	;
	
	// Validates search query
	var validqte = function(query){
		
		// Trim whitespace from start and end of search query
		while(query.charAt(0) == " "){ // (Error 1) == was needed instead of = 
			query = query.substring(1, query.length);
		} // (Error 2) there was a semicolon existing here removed it
		while(query.charAt(query.length-1) == " "){
			query = query.substring(0, query.length-1);
        } // (Error 3) there was semicolon here removed it, and added the closing bracket for the while loop
		
		// Check search length, must have 3 characters
		if(query.length < 3){
			alert("Your search query is too small, try again."); // (Error 4) added missing ending double quote
			
			// (DO NOT FIX THE LINE DIRECTLY BELOW)
			searchInput.focus();
			return;
		}  // (Error 5) there was semicolon here removed it
		
		search(query);
	};
	
	// Finds search matches
	var search = function(query){  // (Error 6) added function start curly bracket 
		
		// split the user's search query string into an array
		var queryArray = query.split(" "); // (Error 7) previously join() was being used and now replaced join with split

		// array to store matched results from database.js
		var results = [];

		// loop through each index of db array
		for(var i=0, j=db.length; i<j; i++){
		
			// each db[i] is a single video item, each title ends with a pipe "|"
			// save a lowercase variable of the video title
			var dbTitleEnd = db[i].indexOf('|');
			var dbItem = db[i].toLowerCase().substring(0, dbTitleEnd);

			// loop through the user's search query words
			// save a lowercase variable of the search keyword
			for(var ii=0, jj=queryArray.length; ii<jj; ii++){
				var qItem = queryArray[ii].toLowerCase();
				
				// is the keyword anywhere in the video title?
				// If a match is found, push full db[i] into results array
				var compare = dbItem.indexOf(qItem);
				if(compare !== -1){
					results.push(db[i]);
				} // (Error 8) there was semicolon here removed it
            } // (Error 9) there was semicolon here removed it, and addded the closing bracket for the while loop
        } // (Error 10) there was semicolon here removed it, and addded the closing bracket for the while loop
		
		results.sort();

		// Check that matches were found, and run output functions
		if(results.length == 0){ // (Error 11) == was needed instead of = 
			noMatch();
		}else{
			showMatches(results);
		} // (Error 12) there was semicolon here removed it
	};
	
	// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
	var noMatch = function(){
		var html = ''+
			'<p>No Results found.</p>'+
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>'
		;
		resultsDIV.innerHTML = html;
	};
	
	// Put matches into page as paragraphs with anchors
	var showMatches = function(results){
		
		// THE NEXT 4 LINES ARE CORRECT.
		var html = '<p>Results</p>', 
			title, 
			url
		;

		// loop through all the results search() function
		for(var i=0, j=results.length; i<j; i++){
		
			// title of video ends with pipe
			// pull the title's string using index numbers
			var titleEnd = results[i].indexOf('|');
			title = results[i].substring(0, titleEnd);
			
			// pull the video 