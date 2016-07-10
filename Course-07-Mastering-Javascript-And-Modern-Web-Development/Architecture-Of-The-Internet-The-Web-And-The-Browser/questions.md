#Questions


####Question 1

*Describe what a protocol is. Explain what the TCP/IP protocol stack is and explain its different components.*

When we speak about protocols within the context of web development, we are generally refering to **network protocols**. This is because the internet is essentially one big network and in order to communicate over the internet, there are certain rules that we must follow. Let's define a protocol in a networking context. 

	A network protocol defines the rules and conventions for communication between network devices. 

From this definition we can see that a protocol governs how devices connected to a network talk or communicate with each other. The internet, begin the largest and most complex network in the world, uses a variety of protocols to perform different tasks and to ensure that connected devices can communicate with each other as expected. TCP/IP is one of these protocols.

TCP/IP (short for Transmission Control Protocol/Internet Protocol) is one of the most common protocols on the internet and it defines a set of steps necessary to send and receive data between internet connected devices. These steps (commonly refered to as *layers*) are shown in the diagram below. For now, take a look at the diagram and afterward, we'll go into some more detail about what each layer does.  

![Imgur](http://i.imgur.com/XdwVABL.jpg)

The diagram above shows the 4 layers or stages through which data must pass in order to be sent/received over the Internet. Let's explore the purpose of each layer. 

1) Application - Encodes the data being sent. The Application layer ensures that data is sent in a format that is understandable by the recipient. Imagine a server trying to send the contents of a web page the a client's browser, the server must ensure that the data is encoded in a certain format understandable by the browser (i.e. the data being sent, needs to be an HTML encoded document).


2) Transport - Splits the data into manageable chunks, adds port number information. This layer divides the information to be sent into packet-sized chunks and attaches a number to each chunk which allows the recipient to reassemble them correctly. This layer also adds port number information to the data packets being sent so the recipient knows which port must be used to accept the data. 


3) Internet	- Adds IP addresses stating where the data is from and where it is going. This layer will add the IP address of the sender to the data packets so that the recipient will know who sent the data. This layer also adds the IP of the recipient to the data packets so they know their final destination and they don't get lost.  


4) Link - This layer adds MAC address information to the data packets to specify which hardware device the message came from, and which hardware device the message is going to.

Once the data being transmitted goes through all these layers or stages, it can be safely delivered over the Internet without fear of being lost and it also gives the recipient all the information necessary to know who sent the data and where it came from. The next time you load a web page, remember the TCP/IP protocol and the different stages that the page you are now viewing passed through to get to you. Cheers!

####Question 2

Describe the Internet Protocol and explain how its addressing system works.

Title: The Internet Protocol
Category: Networks and Network Architecture

The Internet protocol is used to indicate the location of a device on a network using TCP/IP. We can imagine the network as a street and the devices connected to that network as houses on the street. Just as each house on the street has an address like 

	#1 Main Street.

So to does each device connect to a network have an address. This address is called an IP or Internet Protocol Address. These addresses look different from the ones that we're accustomed to, but their purpose is the same. An IP address looks something like this:

	192.168.1.1

These addresses are used to send and receive data over the Internet similar to how physical addresses are used to send and receive mail. 

#####IPv4 and IPv6

IP has two versions (4 and 6) and they both look very different from each other. Let's familiarize ourselves with each version and also see why there was need for two versions in the first place. The IP that we showed above is an example of IPv4. Let's explore another example of an IPv4 address 

	190.83.176.2

We see that it is comprised of a set of numbers separated by periods. An IPv6 address looks like this 

	2001:0db8:0a0b:12f0:0000:0000:0000:0001

This version of an IP address is made up of 8 sets of four hexadecimal digits and are separated by colons. The need for IPv6 arose when the amount of IPv4 address were beginning to run out. Even though IPv4 can accommodate around 4.3 billion different addresses, the high rate of computers being connected to the Internet, the huge blocks of IP addresses being reserved by large corporations, and various other factors, caused them to run out. IPv6 aims to solve this problem by being able to accommodate trillions or numbers so we should never run out of IP Addresses again. 

To understand how the IP addressing system works, we will use IPv4. With the IPv4 address, part determines which network (network address) the data should be sent to and the other part determines which computer within that network (host address) the data should be sent to. 

Although there are different ways are setting up this network and host address, let's look at a simple example to get a general understanding of how it works. Let's say we want to send a file to a computer in a network and we send it to the following IPv4 address within that network:

	72.167.224.4

 The network administrator can define the first 3 parts (groups of numbers) as the network address and the last group of numbers as the host (destination computer) address. So the IP address is actually stating -

 - send the data to this network: 72.167.224.0
 - within that network, send it to the computer that has an address of 0.0.0.4

 This is a very simplified example of how the IP addressing system works. I encourage you to use this introduction with some extra resources to continue learning more about how IP addressing works and how it is used to transmit data over the Internet.



####Question 3

Explain the difference between a MAC address and an IP address? After you explain the difference, give an analogy to demonstrate the difference.

A MAC address (short for Media Access Control Address) is a unique identifier/label given to a machine. This address is assigned by the manufacturer and will never change. It is also known as the physical address or hardware address of that machine. When your device is connected to a network, the MAC address is used to identify your computer. 

An IP or Internet Protocol address is an identifier for your network. They are used to label your network and to specify the location of a computer on that network. IP address can be either static(they don't change) or dynamic (changes constantly).


**Mac Address vs IP Address**

The main difference between a MAC address and an IP address comes from how they are used. A MAC address can be used to identify a computer no matter what network it is currently connected to however once a computer connects to a different network, it is assigned a different IP address. So we see that the labeling is done at different levels based on the two Addressing systems - the MAC address at the physical level and the IP address at the network level. 

To expand our understanding a bit further, lets use the physical mail delivery service. You can imagine you MAC address as your physical mailbox and your IP address and your delivery address. Mail would be delivered to your delivery address and put in your mailbox. If you decided to move, you would carry your physical mailbox with you right? (I hope) So here you would have changed delivery addresses but your mailbox would be the same mailbox that you had at the old address. Mail would now be delivered to your new delivery address but be put in the same mailbox. Let's say you angered the postal gods and for some reason they banned your mailbox from ever receiving mail. It would not matter where you moved, once you had the same mailbox, you will have to suffer the sad fate of never opening your mail again. If they banned your delivery address however, you could simply move to another part of the country and receive your mail as if nothing ever happened. 

I hope this example gave you a better understanding of the difference between MAC and IP addresses. I also hope it teased your brain on how these addresses can be used for security purposes on a network.  


