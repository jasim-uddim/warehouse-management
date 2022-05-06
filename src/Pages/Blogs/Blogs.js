import React from "react";

const Blogs = () => {
  return (
    <div className="p-5">
      <h1>Difference between javascript and nodejs?</h1>
      <p>
        Javascript is a programming language that is used for writing scripts on
        the website
      </p>
      <p>NodeJS is a Javascript runtime environment.</p>
      <p>Javascript can only be run in the browsers</p>
      <p>We can run Javascript outside the browser with the help of NodeJS.</p>
      <p> It is basically used on the client-side</p>
      <p>It is mostly used on the server-side</p>
      <h1>When should you use nodejs and when should you use mongodb?</h1>
      <p>
        Any project needs a programming environment and a runtime library that
        offers you basic programming tools/support and can compile and/or
        interpret your code. Nodejs is such as tool for the Javascript
        programming language. There are other similar tools for other languages
        such as Python, Java, PHP, C#, C++, Go, etc... So, if you want to write
        some kind of stand-alone program or server in Javascript, then you can
        use nodejs for it.
      </p>
      <p>
        If your application needs the ability to persistently store data in a
        way that you can efficiently query or update it later, then you would
        typically use some form of database. There are dozens of popular
        databases. MongoDB is one such database. MariaDB, MySql, CouchDB,
        DynamoDB (on AWS), Postgres are examples of other databases. Different
        databases have different strengths (things they are best at) and
        different ways of using them so it's a whole different question to
        choose the right/best database for what you're doing.
      </p>
      <h1>Differences between sql and nosql databases?</h1>
      <h4>The five critical differences between SQL vs NoSQL are:</h4>
      <p>1.SQL databases are relational, NoSQL databases are non-relational.</p>
      <p>
        2.SQL databases use structured query language and have a predefined
        schema. NoSQL databases have dynamic schemas for unstructured data.
      </p>
      <p>
        3.SQL databases are vertically scalable, while NoSQL databases are
        horizontally scalable.
      </p>
      <p>
        4.SQL databases are table-based, while NoSQL databases are document,
        key-value, graph, or wide-column stores.
      </p>
      <p>
        5.SQL databases are better for multi-row transactions, while NoSQL is
        better for unstructured data like documents or JSON
      </p>
      <h1> What is the purpose of jwt and how does it work?</h1>
      <p>
        JWT, or JSON Web Token, is an open standard used to share information
        between two parties securely — a client and a server. In most cases,
        it’s an encoded JSON containing a set of claims and a signature. It’s
        usually used in the context of other authentication mechanisms like
        OAuth, OpenID to share user-related information. It’s also a popular way
        to authenticate/authorize users in a microservice architecture. JWT
        authentication is a token-based stateless authentication mechanism. It
        is popularly used as a client-side-based stateless session, this means
        the server doesn’t have to completely rely on a data store (or) database
        to save session information. JWTs can be encrypted, but they are
        typically encoded & signed. We will be focusing on Signed JWTs. The
        purpose of Signed JWT is not to hide the data but to ensure the
        authenticity of the data. And that is why it’s highly recommended to use
        HTTPS with Signed JWTs.
      </p>
    </div>
  );
};

export default Blogs;
