<script>
  import { PUBLIC_API_URL } from "$env/static/public";
  let visits = $state(0);

  const fetchVisits = async () => {
    const response = await fetch(`${PUBLIC_API_URL}/api/visits`);
    const data = await response.json();
    visits = data.visits;
  };

  $effect(() => {
    fetchVisits();
  })
</script>

<h1>Visit count: {visits}</h1>