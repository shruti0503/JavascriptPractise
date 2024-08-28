// Callback Hell refers to a situation in JavaScript where callbacks are nested within other callbacks several levels deep,
//  making the code hard to read and maintain. 
//  This often occurs when dealing with multiple asynchronous operations that depend on each other,
//   such as reading files, making API requests, or handling user input in sequence.


// Imagine you have to fetch user data, then fetch posts by that user, and finally,
//  fetch comments on those posts. Each fetch depends on the completion of the previous one:


// Simulating asynchronous API calls with setTimeout
function fetchUser(userId, callback) {
    setTimeout(() => {
      console.log('Fetched user:', userId);
      callback({ userId: userId, name: 'John Doe' });
    }, 1000);
  }
  
function fetchPosts(user, callback) {
setTimeout(() => {
    console.log('Fetched posts for user:', user.name);
    callback([
    { postId: 1, title: 'Post 1' },
    { postId: 2, title: 'Post 2' }
    ]);
}, 1000);
}
  
function fetchComments(post, callback) {
setTimeout(() => {
    console.log('Fetched comments for post:', post.title);
    callback([
    { commentId: 1, content: 'Great post!' },
    { commentId: 2, content: 'Very informative!' }
    ]);
}, 1000);
}
  
  // The callback hell
fetchUser(1, (user) => {
fetchPosts(user, (posts) => {
    fetchComments(posts[0], (comments) => {
    console.log('Comments:', comments);
    // More nested callbacks can follow here, leading to deeper levels of nesting...
    });
});
});

// Problems with Callback Hell:
// Readability: The nested structure makes the code difficult to read and understand.
// Maintainability: Adding more functionality or handling errors becomes cumbersome.
// Error Handling: Managing errors in deeply nested callbacks can get very complex.

// Solutions to Callback Hell:
// Promises: Use Promises to handle asynchronous operations more cleanly.
// Async/Await: Use async/await syntax to write asynchronous code that looks synchronous.
// Modularization: Break down code into smaller, reusable functions to flatten the nesting.

  
// Simulating asynchronous API calls with Promises
function fetchUser(userId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Fetched user:', userId);
        resolve({ userId: userId, name: 'John Doe' });
      }, 1000);
    });
  }
  
  function fetchPosts(user) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Fetched posts for user:', user.name);
        resolve([
          { postId: 1, title: 'Post 1' },
          { postId: 2, title: 'Post 2' }
        ]);
      }, 1000);
    });
  }
  
  function fetchComments(post) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Fetched comments for post:', post.title);
        resolve([
          { commentId: 1, content: 'Great post!' },
          { commentId: 2, content: 'Very informative!' }
        ]);
      }, 1000);
    });
  }
  
  // Using Promises to avoid callback hell
  fetchUser(1)
    .then((user) => fetchPosts(user))
    .then((posts) => fetchComments(posts[0]))
    .then((comments) => console.log('Comments:', comments))
    .catch((error) => console.error('Error:', error));
  