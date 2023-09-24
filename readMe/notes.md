CDN (Content Delivery Network)
..............................
* It is a network of geogrraphically  distributed servers and data centers designed to deliver the web content
* CDNs work by catching or storing copies of the website content on multiple servers located in the multiple locations around the world.

benifits of CDN 
................
* fatser loading times
* security
* global reach
* improved website performance

How CDN works 
..............
* Content distribution 
* sever selection
* content delivery 
* catching

........................................................................................................................


<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>

what is crossorigin attribute?

* crossorigin is an attribute that is used for controlling how a web browser handles cross-origin requests when fetching the script file specified in the src attribute.

The crossorigin attribute can take the following values:

anonymous: 
* This is the default value if the crossorigin attribute is not specified. With crossorigin="anonymous"
* With crossorigin="anonymous", the browser makes the request for the resource, but it doesn't send any user credentials (such as cookies or HTTP authentication) along with the request. 


use-credentials:
* When crossorigin="use-credentials" is set, the browser includes user credentials (such as cookies) with the cross-origin request if the requesting site has permission to access the resource. 


* In your example, crossorigin is set to an empty value, which is equivalent to crossorigin="anonymous". It means that the browser will fetch the React script from the specified URL without sending any user credentials along with the request. This is typically what you would use for fetching publicly available resources like React from a CDN.

* If you were making requests to a resource on a different domain that requires authentication, you might use crossorigin="use-credentials" and ensure that the server hosting the resource is configured to allow your origin to access it with credentials.