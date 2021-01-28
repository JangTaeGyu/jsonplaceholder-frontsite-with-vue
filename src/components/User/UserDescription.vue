<template>
  <section class="description">
    <p><code>GET https://jsonplaceholder.typicode.com/users</code> 호출하여 User 데이터를 조회</p>
    <p>키워드(이름: username, name)와 일치 하는 User 필터</p>
    <p><code>GET https://jsonplaceholder.typicode.com/users/{user_id}</code> Show Details 클릭해서 User 상세 정보를 Modal 로 노출</p>
  </section>
</template>

<script>
export default {
  name: 'UserDescription',
};
</script>
