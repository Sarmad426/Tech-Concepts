# Web Sockets, HTTP Polling, and SSE: A Detailed Documentation

## Table of Contents

- [Web Sockets, HTTP Polling, and SSE: A Detailed Documentation](#web-sockets-http-polling-and-sse-a-detailed-documentation)
  - [Table of Contents](#table-of-contents)
  - [Introduction to Web Sockets](#introduction-to-web-sockets)
  - [Web Sockets vs. HTTP](#web-sockets-vs-http)
  - [HTTP Polling](#http-polling)
    - [Types of Polling](#types-of-polling)
    - [Advantages of Polling](#advantages-of-polling)
    - [Drawbacks of Polling](#drawbacks-of-polling)
  - [Server-Sent Events (SSE)](#server-sent-events-sse)
    - [Advantages of SSE](#advantages-of-sse)
    - [Disadvantages of SSE](#disadvantages-of-sse)
  - [Use Cases](#use-cases)
    - [Use Cases for Web Sockets](#use-cases-for-web-sockets)
    - [Use Cases for HTTP Polling](#use-cases-for-http-polling)
    - [Use Cases for SSE](#use-cases-for-sse)
  - [Conclusion](#conclusion)
  - [Practical Project](#practical-project)

## Introduction to Web Sockets

Web Sockets provide a full-duplex communication channel over a single, long-lived TCP connection. They are designed to be implemented in web browsers and servers but can be used by any client or server application.

Key features:

- **Full-Duplex Communication**: Allows data to be sent and received simultaneously.
- **Persistent Connection**: The connection remains open, reducing overhead from repeated handshakes.
- **Low Latency**: Enables real-time data exchange with minimal delay.

## Web Sockets vs. HTTP

| Feature             | HTTP                | Web Sockets        |
|---------------------|---------------------|--------------------|
| Protocol            | Request-Response    | Full-Duplex        |
| Connection Lifetime | Short-lived         | Persistent         |
| Latency             | Higher due to overhead| Low               |
| Overhead            | High (headers with each request)| Low (initial handshake only)|
| Use Case            | Document retrieval, APIs | Real-time applications, chat apps |

## HTTP Polling

Polling is a technique where a client repeatedly requests data from the server at regular intervals.

### Types of Polling

1. **Short Polling**:
   - Client sends a request to the server at regular intervals.
   - Server responds immediately with the available data.
   - Example: Fetching new emails every 30 seconds.

2. **Long Polling**:
   - Client sends a request to the server.
   - Server holds the request open until new data is available or a timeout occurs.
   - Once the server responds, the client immediately sends another request.
   - Example: Chat applications before the advent of Web Sockets.

### Advantages of Polling

- **Simple Implementation**: Easy to implement on both client and server sides.
- **Compatibility**: Works with existing HTTP infrastructure and proxies.

### Drawbacks of Polling

- **Inefficiency**: Frequent requests can lead to unnecessary data transfer and increased server load.
- **Latency**: Short polling can have noticeable delays, and long polling can be inefficient in maintaining open connections.
- **Scalability**: High-frequency polling can strain server resources and network bandwidth.

## Server-Sent Events (SSE)

Server-Sent Events (SSE) enable servers to push real-time updates to clients over a single, long-lived HTTP connection.

### Advantages of SSE

- **Simple Implementation**: Uses standard HTTP, easy to implement.
- **Automatic Reconnection**: Built-in support for automatic reconnection.
- **Text-Based Format**: Data is sent as text, reducing complexity.

### Disadvantages of SSE

- **Unidirectional**: Only the server can send data to the client, not vice versa.
- **Limited Browser Support**: Not supported by all browsers, especially older ones.
- **Resource Intensive**: Keeping many connections open can be resource-intensive.

## Use Cases

### Use Cases for Web Sockets

- **Real-Time Applications**: Chat applications, live sports updates, multiplayer games.
- **Collaboration Tools**: Real-time document editing, whiteboards.
- **Financial Tickers**: Stock price updates, cryptocurrency exchanges.

### Use Cases for HTTP Polling

- **Data Fetching**: Regularly updating news feeds or weather information.
- **Legacy Systems**: Systems that cannot use Web Sockets due to compatibility issues.
- **Simple Applications**: Where real-time updates are not critical, such as checking for new emails.

### Use Cases for SSE

- **Live Feeds**: News feeds, social media updates.
- **Notifications**: Server push notifications, real-time alerts.
- **Monitoring Dashboards**: Real-time system or application monitoring.

## Conclusion

Web Sockets, HTTP Polling, and SSE each provide unique advantages and are suitable for different use cases. Web Sockets excel in scenarios requiring low latency and bi-directional communication. HTTP Polling is simple and compatible with most systems, though it may be less efficient. SSE offers an easy way to push real-time updates to clients but is unidirectional and has limited browser support.

## Practical Project

I have also created a practical project using `Express.js` and `ws` npm library. You can check it here. [Web Sockets project](./server/). Read the `Readme` to know how to run the project.
