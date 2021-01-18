<template>
  <div>
    <h1>Библиотеки</h1>
    <div class="row">
      <div class="input-field col s2">
        <select ref="select" v-model="filter">
          <option value="" disabled selected>Фильтр по...</option>
          <option value="region">по региону</option>
          <option value="count">по кол-ву библиотек</option>
        </select>
      </div>

      <div class="input-field col s3">
        <input placeholder="Поиск по области" type="text" v-model="region" />
      </div>
    </div>

    <hr />
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Название</th>
          <th>Регион</th>
          <th>Кол-во библиотек</th>
          <th>Подробнее</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="library of filteredLibraries" :key="library.order">
          <td>{{ library.order }}.</td>
          <td>{{ library.fullname }}</td>
          <td>{{ library.territory }}</td>
          <td>{{ library.libraries }}</td>
          <td>
            <router-link
              tag="button"
              :to="'/library/' + library.order"
              class="btn btn-small"
              >Информация</router-link
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import M from "materialize-css";
export default {
  data() {
    return {
      filter: null,
      region: "",
    };
  },
  name: "List",
  components: {},
  mounted() {
    M.FormSelect.init(this.$refs.select);
  },
  computed: {
    libraries() {
      return this.$store.getters.libraries;
    },
    filteredLibraries() {
      const sorted = this.libraries.slice().sort((prev, next) => {
        if (!this.filter) {
          return this.libraries;
        }
        if (this.filter === "count") {
          return next.libraries - prev.libraries;
        }
        if (this.filter === "region") {
          if (prev.territory < next.territory) return -1;
          if (prev.territory < next.territory) return 1;
        }
      });
      if (!this.region) {
        return sorted;
      } else {
        return sorted.filter((l) => {
          return l.territory.toLowerCase().includes(this.region.toLowerCase());
        });
      }
    },
  },
};
</script>
