import React from 'react';

const Blogs = () => {
  return (
    <div>
      <h1>This is Blogs page</h1>
      <h3>1.What's the Different Between js and node.js?</h3>
      <p>Answer:JavaScript is a programming language, which runs in web browsers. Whereas Node.js is an interpreter or running environment for JavaScript, which holds a lot of requiring libraries and all. JavaScript is basically one standard defining programming language; it can run any browser with a default browser running environment. It is a very strong language normally used for a web application on any verification or any specific business logic.Node.js also holds a lot of relative libraries, which we normally use in javascript for general purpose programming language. It is actually a kind of environment or interpreter that can represent JavaScript or run any javascript program. It mainly helps us execute some non-blocking operation like some operating system special information like certificate details or hardware details; we may use node js on the same, which help us do it, and JavaScript normal programming will not help us on the same.</p>
      <h3>2.When should you use node.js and when should use mongodb</h3>
      <p>Answer:When creating a database, you can choose to set it up locally or in the cloud. For example, you can spin up an installation on localhost manually of MongoDB by downloading and installing MongoDB. That said, a manual installation comes with ongoing maintenance and upkeep costs. As an application developer, I prefer to avoid as much manual work as possible, so I tend to shy away from manual installation.For cloud offerings, there is MongoDB Atlas, the database-as-a-service offering from MongoDB. It is platform-agnostic, allowing you to create database clusters on AWS, Azure, and Google Cloud, and scaling is as simple as clicking a button. They also made it easy to get started, with a free M0 tier. The total time from signup to having a created database was less than five minutes for me.</p>
      <h3>3.What's the different between sql and nosql database?</h3>
      <p>Answer:
        1.SQL databases are relational, NoSQL databases are non-relational.
        2.SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.
        3.SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
        4.SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.
        5.SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
      </p>
    </div>
  );
};

export default Blogs;