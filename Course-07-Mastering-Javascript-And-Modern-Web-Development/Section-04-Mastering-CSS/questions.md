#Questions

####Question 1

**Explain how the TCP connection-establishment procedure, called the '3-way handshake,' works. Describe each step of this procedure.**

**Title:** The 3-Way Handshake: Establishing TCP connections

**Category:** Transmission Control Protocol (TCP) and Universal Datagram Protocol (UDP)

The Transmission Control Protocol (TCP) is a connection oriented protocol. This means that in order for two devices to communicate with each other via TCP, a connection must first be established between them. This connection is established via a process known as a **three way handshake**. But what exactly is this *three way handshake* and how how does it work? We answer these questions in the paragraphs below. 

To make our understanding of TCP easier, let's replace two computers trying to communicate with each other with two humans - Freddie and Eva. Now, let's imagine a typical conversation -

	Freddie: Hi Eva, how are you?
	Eva: I'm fine, and you?
	Freddie: Good to hear. I'm fine as well; going for a jog, care to join me?
	...

Let's break down what happened in this conversation. 


1)Freddie initiated the communication by asking Eva a question.

2)Eva replied to Freddie and asked a question of he own.

3)Freddie then responded based on Eva's response and continued talking.

Both parties now continue their happy conversation.


We find that computers follow a somewhat similar pattern when communicating via TCP. However, in order to emulate two persons having a conversation, they must first setup a connection to each other using the *three way handshake*. This allows both computers to "talk" or more accurately, it allows both computers to **send** and **receive** data from the other. 

In order to establish this connection the TCP protocol uses a series of Synchronization requests (SYN) and Acknowledgment requests (ACK). Here is how it works: 

Computer A wants to communicate with Computer B using TCP:

Computer A sends a SYN request to Computer B. This SYN request basically tells Computer B - hey, I want to communicate with you using a particular number. (N.B. this is actually a randomly generated number known as an **Initial Sequence Number**). 

Computer then sends a SYN request of its own plus a ACK request. Computer B's ACK is saying - I acknowledge that you want to communicate with me using this Initial Sequence Number. The SYN request says - I'll communicate with you using this Initial Sequence Number. 

Computer A then sends a final ACK request saying - OK gotcha. I know the Initial Sequence Number you want to use to communicate. 

	Computer A ------SYN------> Computer B
	Computer A <---SYN-ACK----- Computer B
	Computer A ------ACK------> Computer B

Now that the two computers are aware of the Sequence Number that the other is using to communicate, a connection is established and they can now both "talk" or send/receive data from the other. 

That's it for the three way handshake. It is basically establishes the initial connection needed for two computers to send and receive data to and from each other using TCP.  

####Question 2

**Describe what a style guide is. Explain some of the problems having a style guide solves and the scenarios in which a style guide is most appropriate.**

A style guide is a single resource that contains all the components (basic and complex) of a software application along with syntax used to create them. It adds stability to the software development process and offers developers a structured, reusable and easily accessible tool that adds a number of benefits to the development process. SOme of these benefits include -

Consistency in design - For big projects, teams are usually split between front and back end developers. If now style guide is in place, the front end developers may be building something that works completely different from what the back-end developers envision or expect. The back end developers may also build elements that don't conform to the design of the front and this is obviously a problem. We want uniformity throughout our applications and the best way to achieve this is with a style guide. With this guide in place, the different teams both work with the same components for all parts or the application.

Better Communication between development teams - Change is unavoidable. Many times, during the development process, we may recognize that we didn't account for a particular features or something additional is required for our software to work properly and things need to change. If this change isn't communicated well, it results in inconsistencies. To mitigate this, we can make changes to the style guide instead of the application itself. Since the style guide is the central resource for all components of the application, any change there can be easily communicated to everyone involved in the development process. 

Reuseability of Components - Style guide components can be used and re-used as long as they meet the requirements. Most software applications have many components in common (they are just styled differently), so a big advantage of having a style guide is the ability to adapt the same components to new projects without having to build them from scratch. 

Improved Testing - Style guides define components from their most basic form, all the way up to complex structures. If one component isn't behaving as expected, we can use the style guide to break the component down into its most basic elements, fix the problem and reconstruct the component with relative ease.


Style guides are best used for big projects with large development teams. Even though building one involves a lot of work, the effort definitely pays off in the end. If your team is small and strapped for resources then building a style guide might not be the best option and you may want to consider alternative methodologies.  




