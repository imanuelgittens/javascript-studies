#Exercises	

####Exercise 1

1)

In a routerless network -

	n = 100
	K(n) = n(n-1)/2
	     = 100(99)/2
	     = 4950

So we would need 4950 cables to make up a complete routerless network. 

Creating the same network with a single router as a hub would require 100 cables since each 
computer would just need to be connected to the router. 

2)

For this use case, a circuit switching network would be the best solution. This application requires reliability (provided by circuit switching networks) since the data needs to be sent to the server at a very specific rate. The application also needs to be uninterrupted for days at a time and this further solidifies the need for a reliable connection. 

3)

The packet switching network would be best used for this application since it does not require a high level of reliability. Data is sent in small chunks and its delivery is not time sensitive which means that the data can split up, sent on the network, and reassembled without worrying about the length of time taken. 


####Exercise 2

1) The user interacts with the application layer the most because this layer contains high level protocols like HTTP, SMTP and POP. A good example of HTTP in use is when users visit a website. Let's say they type `google.com` into their browser search bar. What they are actually doing is using the HTTP protocol to fetch or 'GET' the contents of google's website to be loaded onto the page. Also, every time someone sends or receives an email, the SMTP or POP protocol is being used. 

2)

TODO - *We defined the meaning of protocol at the start of this section. List any four key elements of a protocol. Feel free to use examples to strengthen your explanations.*


A protocol is an agreed-upon format that devices on a network utilize to share messages. It is, in essence, the language of the network.

3)

Responsibilities of the Application layer include -

- Displaying data or the results of a request to end users
- Accepting and processing user input

Responsibilities of the Transport Layer include -
- ensuring messages are sent and received reliably
- break apart messages for sending and re-assembling them for delivery. 

[Diagram TODO]

####Exercise 3

1)

2 ^ 16  or 65536 numbers can be represented using 16 bits. 

With a 16 bit prefix, we have the remaining 16 bits to work with for devices on a subnet. This means that we can theoretically have 65536 devices on the subnet. It is not recommended to have an address with all 0s or 1s however, so we must subtract 2 from this number

	65536 - 2 = 65534

So we can have 65534 devices on a subnet with a 16 bit prefix. 

With a 20 bit prefix we have 32 - 20 (or 12) bits to work with. This means that we can have 2 ^ 12 devices theoretically. Just like above, we need t subtract 2 for the case of all 0s and all 1s

	4096 - 2 = 4094

With a prefix of 20 bits, we can have 4094 devices of the subnet. 

2)

The address 10.1.1.50 is a private IP address as specified in the RFC 1918. Any IP address between 10.0.0.0 and 10.255.255.255 is private. See details on page 3 [here](https://tools.ietf.org/html/rfc1918)

3)

The smallest theoretically possible IP address is 0.0.0.0 and the largest is 255.255.255.255

####Exercise 4

moderndeveloper.com A record 

	id 23978
	opcode QUERY
	rcode NOERROR
	flags QR RD RA
	;QUESTION
	moderndeveloper.com. IN A
	;ANSWER
	moderndeveloper.com. 21599 IN A 72.2.116.221
	;AUTHORITY
	;ADDITIONAL

www.moderndeveloper.com A record

	id 59625
	opcode QUERY
	rcode NOERROR
	flags QR RD RA
	;QUESTION
	www.moderndeveloper.com. IN A
	;ANSWER
	www.moderndeveloper.com. 19297 IN A 70.32.104.226
	;AUTHORITY
	;ADDITIONAL

qa.moderndeveloper.com A record

	id 43069
	opcode QUERY
	rcode NOERROR
	flags QR RD RA
	;QUESTION
	qa.moderndeveloper.com. IN A
	;ANSWER
	qa.moderndeveloper.com. 21599 IN CNAME production-lb-507305590.us-east-1.elb.amazonaws.com.
	production-lb-507305590.us-east-1.elb.amazonaws.com. 59 IN A 54.236.104.40
	production-lb-507305590.us-east-1.elb.amazonaws.com. 59 IN A 52.200.86.224
	;AUTHORITY
	;ADDITIONAL

learn.moderndeveloper.com A record

	id 64310
	opcode QUERY
	rcode NOERROR
	flags QR RD RA
	;QUESTION
	learn.moderndeveloper.com. IN A
	;ANSWER
	learn.moderndeveloper.com. 21599 IN CNAME moderndeveloper.firebaseapp.com.
	moderndeveloper.firebaseapp.com. 599 IN CNAME s-cert-8.firebaseapp.com.
	s-cert-8.firebaseapp.com. 599 IN A 157.52.65.17
	s-cert-8.firebaseapp.com. 599 IN A 157.52.97.17
	;AUTHORITY
	;ADDITIONAL

CNAME records are used in qa.morderndeveloper.com to point production-lb-507305590.us-east-1.elb.amazonaws.com to qa.moderndeveloper.com

CNAME records are also used to point moderndeveloper.firebaseapp.com to learn.moderndeveloper.com

2) The name servers for the .com top level domains are

	com. 1123 IN NS b.gtld-servers.net.
	com. 1123 IN NS c.gtld-servers.net.
	com. 1123 IN NS d.gtld-servers.net.
	com. 1123 IN NS i.gtld-servers.net.
	com. 1123 IN NS h.gtld-servers.net.
	com. 1123 IN NS k.gtld-servers.net.
	com. 1123 IN NS l.gtld-servers.net.
	com. 1123 IN NS f.gtld-servers.net.
	com. 1123 IN NS m.gtld-servers.net.
	com. 1123 IN NS a.gtld-servers.net.
	com. 1123 IN NS e.gtld-servers.net.
	com. 1123 IN NS j.gtld-servers.net.
	com. 1123 IN NS g.gtld-servers.net.

The name servers for the top level .us domains are 

	us. 16235 IN NS k.cctld.us.
	us. 16235 IN NS e.cctld.us.
	us. 16235 IN NS f.cctld.us.
	us. 16235 IN NS b.cctld.us.
	us. 16235 IN NS c.cctld.us.
	us. 16235 IN NS a.cctld.us.

The name servers for the top level .tt domains are

	tt. 21599 IN NS ns3.nic.mx.
	tt. 21599 IN NS pch.nic.tt.
	tt. 21599 IN NS ripe.nic.tt.
	tt. 21599 IN NS sns-pb.isc.org.


3) We can use the browser address bar to test if a domain name is case sensitive. If we enter GOOGLE.COM and google.com, they both go to the same web page so this leads to the conclusion that domain names are case insensitive. 


####Exercise 5

1) DNS using UDP over TCP because of the speed associated with UDP. We expect DNS requests to be handled quickly so it uses UDP to avoid all the over of SYN, SYN-ACK and ACK used by the TCP protocol. 

2) TCP's 3 way handshake is used to ensure that a connection is established. This connection guarantees that any information from the sender is delivered the receiver. 

The server must do the SYN-ACK to inform the client about the socket through which the data will be sent. Once the client knows which socket to connect to, it sends a final ACK and data transfer can begin. 

3) Protocols such as RTP can adjust the rate at which they display received data to give them enough time to make another request for lost packets. The protocol knows when packets are lost based on packet header information so in the case of video the user may experience a lag while the protocol makes requests for lost packets.


####Exercise 6

1) The 403 Forbidden HTTP response code will be shown when a user is trying to access a protected resource on a server.

2) For this case, only one HTTP session is need to get all the information required however 4 total requests need to be made within that one session. Three requests for the images and one for the CSS stylesheet. 

3) 

Create - We can use the POST HTTP method to create new resources on the server
Read - We can use the GET HTTP method to read data from the server
Update - We can use the PUT HTTP method to update resources on the server
Delete - We can use the DELETE HTTP method to delete resources on the server

####Exercise 7

1) The tokens for this HTML code are -

	<html>, <head>, <title>, My Homepage, </title>, </head>, <body>, <h1>, About Me, </h1>, <img>, </body>, </html>

![Imgur](http://i.imgur.com/LokxSWV.jpg)

2)

	<html>
	  <body>
	    </div>
	    <h1><p>My bad HTML</h1></p>
	    <br>
	  </body>
	  </br>
	</html>

The above code is malformed because -

- there is a closing div without an opening div
- the h1 and p tags are closed int he wrong order

The chrome browser does display the HTML as expected however. 

####Exercise 8

1) The page is re-painted when we scroll and whenever we click on things. There is also some recursive painting when the page is loaded. It seems that every time an element on the page moves or is interacted with, the browser need to re-paint either the page or the element that is being acted upon.

2) When we set the position on an HTML element as **fixed**, we remove it from the normal document flow. FOr this reason, adjusting the size or position of a fixed position element will not affect the other element in the normal document flow.  