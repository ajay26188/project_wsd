<script>
  import { page } from "$app/state";
  import Post from "$lib/components/posts/Post.svelte";

  let communityId = $derived(parseInt(page.params.communityId));
  let postId = $derived(parseInt(page.params.postId));
</script>   

<Post communityId={communityId} postId={postId} />
