/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"

I want to search a string and pull the domain name out and return a new string
I would have to loop through the length of the string
If I see anything between www. and .com parse that out of the string
then return it

I would split the string >>> '"https":"//" "www" " ." " nba" ." "com"'
then join then new elements
best approach is regex with the replace method

*/
const domainName = (url) => {
  return url.replace(/.+\/\/|www.|\..+/g, "");
};

console.log(domainName("www.zombie-bites.com"));
