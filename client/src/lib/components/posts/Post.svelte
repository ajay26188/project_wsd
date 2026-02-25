<script>
  let { communityId, postId } = $props();

  import { usePostState } from "$lib/states/postState.svelte.js";

  let postState = usePostState();

  let post = postState.getPost(communityId, postId);
  console.log("Post:", post);
  console.log(typeof postId);
  console.log("Post ID:", postId);

  console.log("Community ID:", communityId);

</script>

{#if post}
  <h1>{post.title}</h1>
  <p>{post.content}</p>
{:else}
  <p>Loading...</p>
{/if}