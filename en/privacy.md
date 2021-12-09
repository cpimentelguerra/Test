---
title: Privacy Policy
date: "2021-10-27T00:00:00+01:00"
draft: false
share: false
commentable: false
editable: false

# Optional header image (relative to `static/media/` folder).
header:
  caption: ""
  image: ""
---



My website does not host third-party cookies and hosts three first-party cookies just to generally understand the audience of the website. The cookies are from Google Analytics.

You do not know what cookies are? You would like to learn more details? More information below.
Cookies Intro
What is a cookie?

A cookie is a small text file that a server (website) passes to a client (your computer) through your web browser (most likely Chrome). This small text file is then stored on your computer. The browser may store the cookie and send it with later requests.

A cookie is not a program. It doesn’t perform a function. It’s just text. You can open and read cookies with a basic word processor. The two most common types of cookies are first-party cookies and third-party cookies. Before arriving to that, we first need to understand how are cookies generated, and how they are shared and with whom.
How are cookies generated?

When you open a website, you send an HTTP request to a server, which replies with a response. After receiving an HTTP request, a server can send one or more Set-Cookie headers with the response. The browser usually stores the cookie and sends it with requests made to the same server inside a Cookie HTTP header.

For example, this instructs the server sending headers to tell the client to store a pair of cookies

HTTP/2.0 200 OK
Content-Type: text/html
Set-Cookie: yummy_cookie=choco
Set-Cookie: tasty_cookie=strawberry

[page content]

What do cookies do?

Once a cookies is stored in your browser, with every subsequent request to the server, the browser sends all previously stored cookies back to the server using the Cookie header.

GET /sample_page.html HTTP/2.0
Host: www.example.org
Cookie: yummy_cookie=choco; tasty_cookie=strawberry

There are restrictions to which cookies get sent to which servers. More details below.
Cookies Content

A cookie has the following attributes:

    Expires
    Max-Age
    SameSite
    Domain
    Path
    HTTPOnly
    Secure

How long are cookies stored?

The Expires and Max-Age attributes define the lifetime of a cookie: how long a cookie is stored in your browser.

    Expires indicates the maximum lifetime of the cookie. If unspecified, the cookie becomes a session cookie. A session finishes when the client shuts down, after which the session cookie is removed.
    Max-Age indicates the number of seconds until the cookie expires. A zero or negative number will expire the cookie immediately. If both Expires and Max-Age are set, Max-Age has precedence.

Who are my cookes sent to?

The SameSite, Domain and Path attributes define the scope of a cookie: what URLs the cookies should be sent to.

    The SameSite attribute controls whether or not a cookie is sent with cross-origin requests, providing some protection against cross-site request forgery attacks.

    The Domain attribute specifies which hosts can receive a cookie. If unspecified, the attribute defaults to the same host that set the cookie, excluding subdomains. If Domain is specified, then subdomains are always included. Therefore, specifying Domain is less restrictive than omitting it. However, it can be helpful when subdomains need to share information about a user. For example, if you set Domain=mozilla.org, cookies are available on subdomains like developer.mozilla.org.

    The Path attribute indicates a URL path that must exist in the requested URL in order to send the Cookie header.

Are my cookies safe?

The HTTPOnly and Secure attributes help protecting your cookies from malicious server and client attacks, respectively.

    Setting the HTTPOnly attribute makes sure that no client-side scripts are not allowed to access the cookie, i.e. no app or program on your machine can read your cookies. This protects cookies from Cross Site Scripting attacks that can be used to steal cookies with the help of client-side scripts.

    The Secure attribute makes sure that the cookie will only be sent with requests made over an encrypted connection and an attacker won’t be able to steal cookies by sniffing. Sniffing can be defined as passively reading data that is being transmitted. In order to overcome this problem, we encrypt data before transmission. Encryption of data ensures that any potential attacker who sniffs traffic will not be able to steal clear text data, thus ensuring their safety.

Cookies Purpose

Cookies are mainly used for three purposes:

    Session management
        Logins, shopping carts, game scores, or anything else the server should remember
        E.g. you add something to che cart (without logging in!) and when you come back the cart is not empty? That’s a session management cookie!
    Personalization
        User preferences, themes, and other settings
        E.g. you put a website in dark mode and when you come back is still dark? That’s a personalization cookie!
    Tracking
        Recording and analyzing user behavior
        You search for a product and on a different website you see an ad for it? That’s a tracking cookie!

First-Party Cookies

Session management and personalization cookies cookies are always first-party cookies. Few people have problems with first-party cookies because they’re typically used to store information that could be useful to enhance the user experience later on. Some example of information and its purpose are:

    Logins: so that you don’t have to log in every website every time you visit them
    Searches: so that you get suggesions for past searches
    Settings: so that you don’t have to change them every time
    Game scores: so that you can compare your new scores to the old ones

Third Party Cookies

Tracking cookies are almost always third-party cookies. They collect and share user data through networks of websites, often without the user’s consent. These networks aggregate and sync countless data points. In the end, they know more about you than you expect.

Look at it like this: You visit three websites - A, B, and C. On website A, you take some action that signals you want to buy running shoes. On website B, you do something that indicates you are a man (maybe you browse the men’s section). On website C, you see an ad for men’s running shoes, even though you haven’t given that site any information yet. You wouldn’t expect Website C to know anything about you, but the cookies saved on your computer from other websites provide it with plenty of information.

As cookie use became sophisticated, users became less comfortable. The first time you browse for a product on Amazon and then see an ad for it on Facebook is unsettling. It’s a clear sign that your Internet habits aren’t as anonymous as you thought.
Regulation

Legislation or regulations that cover the use of cookies include:

    The General Data Privacy Regulation (GDPR) in the European Union
    The ePrivacy Directive in the EU
    The California Consumer Privacy Act

These regulations have global reach. They apply to any site on the World Wide Web that users from these jurisdictions access (the EU and California, with the caveat that California’s law applies only to entities with gross revenue over 25 million USD, among things).
GDPR

The General Data Protection Regulation (GDPR) and ePrivacy Directive are the strongest examples of this. These EU laws treat cookies as “personal data,” which makes them subject to regulation. Any website that serves EU residents must collect consent from users before serving any non-essential cookies to the user’s device.
Others

The EU’s efforts to protect personal data ignited a global trend, and that’s changing the data privacy landscape. Other jurisdictions have passed or are working on passing their own data privacy initiatives.

    The California Consumer Privacy Act (CCPA) gives California residents the right to know the types of personal information organizations collect about them and the right to prohibit the sale of their personal information to other parties. (It’s a big law with other data security measures as well.)
    The Brazilian General Data Protection Law (LGPD) is an entirely new legal framework in Brazil to protect personal information. Users must consent to the use of third-party cookies when data is transferred.
    The Vermont Act 171 of 2018 Data Broker Regulation requires data brokers (businesses that collect and sell data on individuals they don’t have a relationship with) to register with the state, provide users with an opt-out mechanism, and comply with a list of security requirements.
    The Stop Hacks and Improve Electronic Data Security (SHIELD) Act creates a definition for privacy information, encompassing many of the data points typically stored within cookies.
    India, Chile, and New Zealand are working on similar data privacy laws.

Sources

    Using HTTP cookies
    How cookies work, and how to conduct a cookie audit


<script type="text/javascript">
var cpm = {};
(function(h,u,b){
var d=h.getElementsByTagName("script")[0],e=h.createElement("script");
e.async=true;e.src='https://cookiehub.net/c2/f4678606.js';
e.onload=function(){u.cookiehub.load(b);}
d.parentNode.insertBefore(e,d);
})(document,window,cpm);
</script>