#Project Assignments

#### Question 1

The image below shows the tokens for the given HTML. 

![Imgur](http://i.imgur.com/YMuF3qX.jpg)

The given HTML is not malformed. After inspecting the code, we see that each HTML element is opened and closed properly. After manually parsing the code and drawing the tokens, we also see that each element and the data inside them appears as expected. 


#### Question 2

We go through 3 of each type if HTTP status code (if three exists) below and examine what they do. 

**1XX**

100 Continue

This status code signals to the client that it should continue with its request. It acts as a sort of confirmation that everything is good with the request so far i.e the request has not been rejected by the server, and the client should continue sending that request. If the request has already been completed, this status code can be ignored. 



101 Switching Protocols

Some HTTP requests may hit the server with a header field that contains an Upgrade message. An example of an upgrade message would be to switch to a newer version of HTTP for that connection. Consider a request hitting the server using the HTTP 1.0 protocol however, its upgrade message may ask the server to switch the protocol to HTTP 1.1 if possible. Once the server permits the switching of protocols like this, it will return a 101 status code allow the protocol to be switched to HTTP 1.1 for the duration of the request. 



**2XX**


200 OK

The 200 OK HTTP status code means that the request to the server has succeeded. 
The information returned with the response is dependent on the method used in the request, for example:

GET an entity corresponding to the requested resource is sent in the response;

HEAD the entity-header fields corresponding to the requested resource are sent in the response without any message-body;

POST an entity describing or containing the result of the action;

TRACE an entity containing the request message as received by the end server.


204 No Content

This status code is returned when a request is sent to the server however the request is not meant to change the currently active document view on the client's end. An example of a request that doesn't change the document view would be a request to update the meta information of the currently active page. Since this request should never contain a message body, it is always terminated after the first empty line after the header fields.  



205 Reset Content

There are some cases where the client sends a request to the server and the server fulfills the request but the document view (client side) that sent the request needs to be reset. A classic example of this is when an HTML form is submitted, and the fields are reset to contain no data. This reseting of the document view on the client's end is the HTTP 205 status code in action. It resets the document view once the request has been accepted by the server.




**3XX**

301 Moved Permanently

This HTTP status code means that the resource requested by the client has been permanently moved and has been assigned  new URI. This status code returns the new URI of the requested resource and future requests should use the returned URI instead of the old one. 


302 Found

This HTTP status code means that the resource requested by the client has been temporarily moved and assigned a new URI. This status code returns the new temporary URI of the requested resource however, since this resource has only been moved temporarily, future requests should use the original URI in case the resource was moved back to its initial location.




305 Use Proxy

This HTTP status code indicates that the requested resource must be accessed through the proxy given in the Location field. The client is expected to use this proxy for future requests. 



**4XX**

400 Bad Request

This HTTP status code means that the request could not be understood by the server because of incorrect syntax. The client shouldn't repeat the request without modifying it first. 

401 Unauthorized

This status code indicates that the request require authentication. If the request does not contain any authentication information, the client will receive the 401 status code. If the request has authentication information but it incorrect, the client will also receive the 401 status code.


404 Not Found

This HTTP status code is returned when the server has not found anything matching the requested URI and there is no information on whether the resources was permanently or temporarily moved. This status code is commonly used when the server does not wish to reveal exactly why the request has been refused, or when no other response is applicable.



**5XX**

500 Internal Server Error

The server encountered an unexpected condition which prevented it from fulfilling the request.


502 Bad Gateway

Sometimes a server can act as a gateway to get information hosted on other servers that are connected to it. If a server that is acting as a gateway receives an error while requesting a resource from one of its connected servers, the 502 HTTP status code is returned. 



503 Service Unavailable

If a server is currently overloaded or undergoing some sort of maintenance and is unable to handle a request, the 503 HTTP status code can be returned. This status code is optional since the server can just opt to refuse the connection altogether. This code implies the the server will be available again after its down time and can also be used to send the amount of expected downtime back to the client. 


#### Question 3

DNS Record Type - HINFO	

Full form - Host Information 			

Description	- The HINFO DNS record specifies the host / server's type of CPU and operating system.	

Example - 

	owner-name ttl  class   rr      Hardware        OS
                	IN      HINFO   PC-Intel-700mhz "Redhat Linux 7.1"


DNS Record Type - ISDN

Full form - Integrated Services Digital Network			

Description	- The ISDN DNS maps a domain name to an ISDN (Integrated Services Digital Network) telephone number.	

Example - 

	owner 			ttl 	class    isdn_address sub_address
	example.com     3600	IN   	 491234567890  


DNS Record Type - NS

Full form - Authoritative Name Server			

Description	- The NS DNS records identify the DNS servers responsible for a zone. A DNS zone is the part of a domain for which an individual DNS server is responsible. Each zone should contain a primary and secondary NS record which can be used to transfer the DNS. 

Example - 

	owner-name     ttl  class   rr     target-name
	example.com.        IN      NS     ns1.example.com.


DNS Record Type - PTR	

Full form - Domain Name Pointer			

Description	- PTR DNS records are primarily used as "reverse records" - to map IP addresses to domain names (reverse of A-records and AAAA-records).	

Example - 

	NAME							TTL		TYPE	DATA/SYSTEM
	10.27/1.168.192.in-addr.arpa.	1800	PTR		mail.example.com.


DNS Record Type - SOA

Full form - Start Of Authority		

Description	- A start of authority (SOA) record is information stored in a domain name system (DNS) zone about that zone and about other DNS records.

Example - 

	owner-name  	ttl 	class 	rr    name-server 		email-addr
	example.com.    		IN    	SOA   ns.example.com. 	hostmaster.example.com.


#### Question 4

**Ring Topology**

This type of network is created when each computer is connected to another computer with the last one being connected to the first. Each computer in the network also has two neighbours. 

![Imgur](http://i.imgur.com/fF037AT.jpg)

Advantages

1) Cheap to install and expand

2) Transmitting data is not affected by high traffic since only computers that have tokens can transmit data

Disadvantages

1) Adding or deleting computers pauses network activity.

2) If one computer fails then the whole network will be down

3) Troubleshooting is difficult



**Tree Topology**

This type of network has one root node and all other nodes are connected to it making a hierarchy. This type of network should have at least three levels to the hierarchy.

![Imgur](http://i.imgur.com/6fln3z6.jpg)

Advantages 

1) Easy to add more computers

2) Easy to detect errors

3) Easy to manage and maintain

Disadvantages

1) Expensive to setup

2) If the central hub fails, the entire network fails

3) Requires a lot of cables


**Bus Topology**	

In this type of network, every computer and network device is connect to a single cable. 

![Imgur](http://i.imgur.com/kGLJroC.jpg)

Advantages

1) Cheap to setup

2) Easy to understand

3) Best used for small networks

Disadvantages

1) If the main cable fails then the entire network fails

2) The cable has a limited length

3) If the network traffic is heavy the the performance is negatively affected