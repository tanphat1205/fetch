fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(data => {
    console.log("Danh sách bài viết:", data);
  })
  .catch(error => console.error("Lỗi:", error));
