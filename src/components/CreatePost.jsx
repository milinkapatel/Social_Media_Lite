import { Form, redirect } from "react-router-dom";
import styles from "./CreatePost.module.css";
const CreatePost = () => {
  // const { addPost } = useContext(PostListContext);

  return (
    <Form method="POST" className={styles.createPost}>
      <div className="mb-3">
        <label htmlFor="userID" className="form-label">
          User ID
        </label>
        <input
          type="text"
          className="form-control"
          id="userId"
          name="userId"
          placeholder="user ID"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          placeholder="How are you feeling today..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          rows="4"
          className="form-control"
          id="body"
          name="body"
          placeholder="Describe your feelings"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reaction" className="form-label">
          Reactions
        </label>
        <input
          type="number"
          className="form-control"
          id="reaction"
          name="reactions"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          #Hashtags...
          <span style={{ fontWeight: "lighter" }}>
            (Enter hashtags with space in between)
          </span>
        </label>
        <input type="text" className="form-control" id="tags" name="tags" />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
  );
};

export async function createPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  postData.userId = Number(postData.userId);
  postData.reactions = Number(postData.reactions);
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post);
    });

  return redirect("/home");
}
export default CreatePost;
