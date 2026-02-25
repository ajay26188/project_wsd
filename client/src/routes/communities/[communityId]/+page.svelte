<script>
  import { page } from "$app/state";

  import Community from "$lib/components/communities/Community.svelte";

  import PostList from "$lib/components/posts/PostList.svelte";
  import AddPost from "$lib/components/posts/AddPost.svelte";

  let communityId = $derived(parseInt(page.params.communityId));
</script>

<Community communityId={communityId} />
<PostList communityId={communityId} />
<AddPost communityId={communityId} />
