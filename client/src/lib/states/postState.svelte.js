import { browser } from "$app/environment";

const POSTS_KEY = "posts";
let initialPosts = {
  1: [
    { id: 1, title: "OOP with JavaScript" },
  ],
  2: [
    { id: 1, title: "You all know exactly who I am", content: "Say my name" },
    { id: 2, title: "He told me you .... him", content: "No, I am your father" },
    { id: 3, title: "Do not cite the deep magic to me, Witch", content: "I was there when it was written." },
  ],
};

if (browser && localStorage.getItem(POSTS_KEY) != null) {
  initialPosts = JSON.parse(localStorage.getItem(POSTS_KEY));
}

let postState = $state(initialPosts);

const savePosts = () => {
  localStorage.setItem(POSTS_KEY, JSON.stringify(postState));
};

const usePostState = () => {
  return {
    get posts() {
      return postState;
    },
    getPost(communityId, postId) {
      return (postState[communityId] ?? []).find((p) => p.id === postId);
    },
    addPost: (communityId, post) => {
      const list = postState[communityId] ?? [];
      const newPost = { ...post, id: list.length + 1 };
      postState = { ...postState, [communityId]: [...list, newPost] };
      savePosts();
    },
    removePost: (communityId, postId) => {
      postState = {
        ...postState,
        [communityId]: postState[communityId].filter((p) => p.id !== postId),
      };
      savePosts();
    },
  };
};

export { usePostState };