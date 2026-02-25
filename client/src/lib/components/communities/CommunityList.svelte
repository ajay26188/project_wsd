<script>
  import { useCommunityState } from "$lib/states/communityState.svelte.js";

  let communityState = useCommunityState();
</script>

<ul>
  {#each communityState.communities as community}
    <li>
      <a href={`/communities/${community.id}`}>{community.name}</a>
      <p>{community.description}</p>
      <button onclick={() => communityState.removeCommunity(community.id)}>Remove</button>
    </li>
  {/each}
</ul>
