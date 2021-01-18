<template>
  <div>
    <h1>{{ library.fullname }}</h1>
    <router-link to="/" tag="button" class="btn">Назад</router-link>
    <hr />
    <ul class="list">
      <li class="list__item">
        <p class="list__title">Библиотек:</p>
        <span class="list__number">{{ library.libraries }}</span>
      </li>
      <li class="list__item">
        <p class="list__title">Компьютеров:</p>
        <span class="list__number">{{ library.computers }}</span>
      </li>
      <li class="list__item">
        <p class="list__title">Посещений:</p>
        <span class="list__number">{{ library.visits }}</span>
      </li>
      <li class="list__item">
        <p class="list__title">Работников:</p>
        <span class="list__number">{{ library.employees }}</span>
      </li>
      <li class="list__item">
        <p class="list__title">Бюджет:</p>
        <span class="list__number">{{ library.funds_budget }} &#8381;</span>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: "Library",
  components: {},
  computed: {
    library() {
      return this.$store.getters.libraryById(+this.$route.params.id);
    },
  },
};
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 40px;
}
.list__item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  min-width: 200px;
  min-height: 200px;
  border-radius: 50%;
  border: 10px #26a69a solid;
  padding: 10px;
}
.list__title {
  font-size: 1.5rem;
  line-height: 110%;
  margin: 1.0933333333rem 0 0.656rem 0;
}
.list__number {
  font-weight: bold;
  font-size: 30px;
}
@media screen and (max-width: 490px) {
  .list {
    justify-content: center;
  }
}
</style>