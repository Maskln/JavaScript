//Write a script that parses an URL address given in the format: [protocol]://[server]/[resource] and extracts from it the [protocol], [server] and [resource] elements.
//Return the elements in a JSON object.

var url = 'http://telerikacademy.com/Courses/Courses/Details/239',
    serverIndex = url.indexOf("://"),
    resIndex = url.substr(serverIndex + 3).indexOf("/") + serverIndex + 3,
    protocol = url.substr(0, serverIndex),
    server =  url.substr(serverIndex + 3, resIndex - serverIndex - 3),
    resource =  url.substr(resIndex),

     obj = { 'Protocol': protocol,
            'Server': server,
            'Resource': resource
     };

console.log(obj);