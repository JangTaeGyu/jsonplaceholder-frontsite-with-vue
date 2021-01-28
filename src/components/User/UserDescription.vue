<template>
  <section class="description">
    <p><code>GET https://jsonplaceholder.typicode.com/users</code> 호출 하여 User 데이터를 노출 하시오.</p>
    <p>키워드(이름: username, name)와 일치 하는 User 데이터를 노출 하시오.</p>
    <p>Show Details 클릭해서 Modal 노출 하시오.</p>
    <p>Modal 노출 전 <code>GET https://jsonplaceholder.typicode.com/users/{user_id}</code> 호출 하여 User 데이터를 조회 하시오.</p>
  </section>
</template>

<script>
export default {
  name: 'UserDescription',
};
</script>
