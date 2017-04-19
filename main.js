//Wanted to use pure JS. So, did not use JQuery.
function postit(num) {
	//initial data
	t = document.getElementsByName("post")[0].value;
	date = new Date();
	date = date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear() + " - " + date.getHours() + ":" + date.getMinutes();
	name = document.getElementById("profile-name").value;
	document.getElementsByName("post")[0].value="";
	
	if(t.length==0)
	{
		alert("Please enter some text or link first!");
		return;
	}
	
	document.querySelector("#init-message p").style.display="None";

	if(document.getElementsByClassName("outter-wrapper").length == 0)
	{
		outterwrapper = document.createElement("div");
		outterwrapper.setAttribute("id","outter-wrapper");
		console.log("Here");
	}
	else
		outterwrapper = document.getElementsByClassName("outter-wrapper");
	
	innerwrapper = document.createElement("div");
	innerwrapper.setAttribute("class","inner-wrapper row");
	
	gaps = document.createElement("div");
	gaps.setAttribute("class","gap col-2 col-m2");
	
	//prepare the post
	posts = document.createElement("div");
	posts.setAttribute("class","posts col-8 col-m8");
	
	namep = document.createElement("p");
	namep.setAttribute("id","namep");
	namep.innerHTML = "<b>Name</b>: " + name;
	datep = document.createElement("p");
	datep.setAttribute("id", "datep");
	datep.innerHTML = "<b>Timestamp</b>: " + date;
	
	posts.appendChild(namep);
	posts.appendChild(datep);
	
	para = document.createElement("p");
	para.setAttribute("id","post-text");
	if(num==1)
		para.innerHTML = t;
	if(num==2)
	{
		img = document.createElement("img");
		img.setAttribute("src",t);
		img.setAttribute("id","post-img");
		para.appendChild(img);
	}
	posts.appendChild(para);
	
	likes = document.createElement("p");
	likes.setAttribute("class","likes");
	likes.innerHTML = 0;
	posts.appendChild(likes);
	
	likescounter = document.createElement("button");
	likescounter.innerHTML = "Like";
	likescounter.setAttribute("class","likecounter");
	likescounter.setAttribute("onclick","inc_count()");
	
	posts.appendChild(likescounter);
	
	
	//final div creation
	innerwrapper.appendChild(gaps);
	innerwrapper.appendChild(posts);
	innerwrapper.appendChild(gaps.cloneNode(true));
	
	outterwrapper.appendChild(innerwrapper);
	
	if(document.getElementsByClassName("outter-wrapper").length == 0)
		document.getElementById("feed").appendChild(outterwrapper);
	return;
}

function inc_count() {
	likes = document.getElementsByClassName("likes")[0];
	likescount = parseInt(likes.innerHTML);
	likescount += 1;
	likes.innerHTML = likescount;
	
}

/*
Bugs:
1. The likes issue. Each post should increment it's own count
*/