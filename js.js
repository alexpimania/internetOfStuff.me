function makeLink() {
      var email = document.getElementById("email").value;
      var cc = document.getElementById("cc").value;
      var bcc = document.getElementById("bcc").value;
      var subject = document.getElementById("subject").value;
      var body = document.getElementById("body").value;
      var link = "mailto:" + email + "?CC=" + cc + "&BCC=" + bcc + "&subject=" + subject + "&body=" + body;
      document.getElementById("link").href = link;
      var target = document.getElementById('link');
      var wrap = document.createElement('div');
      wrap.appendChild(target.cloneNode(true));
      document.getElementById("result").value = wrap.innerHTML;
      console.log(wrap.innerHTML);
      var boxlist = ["email", "cc", "bcc", "subject", "body"];
      for (var i = 0; i < boxlist.length; i++) {
        document.getElementById(boxlist[i]).value = "";
      }
    }
  window.onload = function() {
    function updateFeed() 
    {
        var feedImage = document.getElementById("feed");
        feedImage.src = feedImage.src.split("?")[0] + "?currentTime=" + new Date().getTime();
    }
    function updateCat()
    {
      var catImage = document.getElementById("cat");
      catImage.src="http://thecatapi.com/api/images/get?format=src&type=gif&currentTime=" + new Date().getTime();
    }
    
    function checkLikes()
    {
      var name = prompt("Do you like cats? (y/n)");
      if (name === null)
      {
        updateCat();
        setInterval(updateCat, 10000);
        var likesCats = "True";
      }
      else if (name.toLowerCase().indexOf("y") != -1 || name.toLowerCase().indexOf("yes") != -1)
      {
        updateCat();
        setInterval(updateCat, 10000);
        var likesCats = "True";
      }
      else if (name.toLowerCase().indexOf("n") != -1 || name.toLowerCase().indexOf("no") != -1)
      {
        var likesCats = "False";
      }
      else
      {
        updateCat();
        setInterval(updateCat, 10000);
        var likesCats = "True";
      }
      return likesCats;
    }
    var likesCats = checkLikes();
    var req = new XMLHttpRequest();
      req.onreadystatechange = function() {
            if (req.readyState == 4 && req.status == 200)
            {
                  document.getElementById("voteScores").innerHTML = '<span style="color: orange; font-weight: bold;">Your opinion has been recorded:<br>' + req.responseText.split(",")[0] + '% percent of people said they liked cats!</span>';
            }
      }
      req.open("GET", "http://220.244.56.8:81/?likesCats=" + likesCats, true);
      req.send();
    updateFeed();
    setInterval(updateFeed, 20000);
  }
