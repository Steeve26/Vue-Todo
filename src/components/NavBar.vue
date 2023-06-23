<script>
import { RouterLink } from "vue-router";
export default {};
</script>

<template>
  <nav>
    <a href="/">
      <div class="headerTitle">
        <img alt="Vue logo" src="https://vuejs.org/images/logo.png" />
        <h2>Vuedo</h2>
      </div>
    </a>
    <ul>
      <li>
        <RouterLink to="/">home</RouterLink>
      </li>
      <li>
        <RouterLink to="/about">about</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 2rem;
  background: #dfdfdf;
  font-family: outfit;
  height: 60px;
}
.headerTitle {
  display: flex;
  gap: 0 1rem;
  font-family: Outfit;
}
.headerTitle img {
  width: 60px;
  height: 90%;
  margin-block: auto;
}
nav ul {
  display: flex;
  align-items: center;
  gap: 0 2rem;
  list-style: none;
  text-transform: capitalize;
  height: 100%;
  margin: 0;
}
nav ul li {
  height: 100%;
}
nav a {
  text-decoration: none;
  color: black;
  transition-duration: 0.2s;
  height: 100%;
  display: flex;
  align-items: center;
  outline: transparent;
}
nav li:hover a,
nav li a:focus {
  color: #41b883;
}
@media screen and (max-width: 450px) {
  nav {
    padding-inline: 1rem;
  }
  .headerTitle {
    gap: 0 5px;
    font-size: 0.8rem;
  }
  .headerTitle img {
    width: 50px;
    height: 75%;
  }
}
</style>
