##Exercises

#####Exercise 1

Question 1)

    document.cookies = 'cookie_test=my_cookie';
    
Question 2)

    var now = new Date();
    now.setYear(now.getFullYear() + 1);
    document.cookies = 'expires_cookie=my_cookie;expires=' + now;
    
Question 3)

    document.cookies = 'my_cookie=test_cookie;secure';
    
Question 4)

    document.cookies = 'cookie1=logged_in';
    document.cookies = 'cookie2=subscribed';
    
Question 5)

    document.cookies = 'cookie1=logged_in;cookie2=subscribed';
    var cookiesObj = {};
    
    function cookieToObject(){
      var cookies = document.cookies;
      var cookiesArray = cookies.split(';');
      var i, j;
      for(i = 0; i < cookiesArray.length; i++){
        var singleCookie = cookiesArray[i].split('=');
        cookiesObj[singleCookie[0]] = singleCookie[1];
      }
      
      console.log(cookiesObj);
    }
    
    cookieToObject();

#####Exercise 2

Question 1)

    localStorage.setItem('item', 'data');
    
Question 2)

See answer on codepen [here](https://codepen.io/imanuelgittens/pen/VbKEdL)

Question 3)

    sessionStorage.setItem('firstName', JSON.stringify({ name: 'Imanuel' }));

    