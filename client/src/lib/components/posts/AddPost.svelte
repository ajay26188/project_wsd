<script>
  import { usePostState } from "$lib/states/postState.svelte.js";
  
  let { communityId } = $props();
  let postState = usePostState();

  let postTitle = $state("");
  let postContent = $state("");

  const addPost = () => {
    postState.addPost(communityId, { title: postTitle, content: postContent });
    postTitle = "";
    postContent = "";
  };
  
</script>

<input type="text" bind:value={postTitle} placeholder="Post title" />
<input type="text" bind:value={postContent} placeholder="Post content" />
<button onclick={addPost}>Add Post</button>
