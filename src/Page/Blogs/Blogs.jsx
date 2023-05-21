const Blogs = () => {
  return (
    <div className="p-8">
      <h2 className="mb-5 font-bold">
        Q:1- What is an access token and refresh token? How do they work and
        where should we store them on the client-side?
      </h2>
      <h4 className="mb-5 font-medium">
        Ans: A refresh token just helps you re-validate a user without them
        having to re-enter their login credentials multiple times. The access
        token is re-issued, provided the refresh token is a valid one requesting
        permission to access confidential resources.The server communicates with
        the authentication device, like a ring, key, phone, or similar device.
        After verification, the server issues a token and passes it to the user.
        Storage: The token sits within the users browser while work
        continues.Store it in local browser storage. ... Store it in a cookie in
        client side, it can be safer than local browser storage.
      </h4>
      <h2 className="mb-5 font-bold"> Q:2- Compare SQL and NoSQL databases?</h2>
      <h4 className="mb-5 font-medium">
        Ans: SQL databases are vertically scalable, while NoSQL databases are
        horizontally scalable. SQL databases are table-based, while NoSQL
        databases are document, key-value, graph, or wide-column stores. SQL
        databases are better for multi-row transactions, while NoSQL is better
        for unstructured data like documents or JSON.
      </h4>
      <h2 className="mb-5 font-bold">
        Q:3- What is express js? What is Nest JS?
      </h2>
      <h4 className="mb-5 font-medium">
        Ans: NestJS provides a more structured and opinionated approach, which
        can make it easier to build complex APIs with proper separation of
        concerns. Express, on the other hand, is more lightweight and flexible,
        which makes it a popular choice for simple or small-scale APIs.
      </h4>
      <h2 className="mb-5 font-bold">
        Q:4- What is MongoDB aggregate and how does it work?
      </h2>
      <h4 className="mb-5 font-medium">
        Ans: Aggregation is a way of processing a large number of documents in a
        collection by means of passing them through different stages. The stages
        make up what is known as a pipeline. The stages in a pipeline can
        filter, sort, group, reshape and modify documents that pass through the
        pipeline.
      </h4>
    </div>
  );
};

export default Blogs;
