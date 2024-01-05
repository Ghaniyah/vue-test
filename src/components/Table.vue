<template>
<h2>HTML Table</h2>

<table>
  <tr>
    <th>Id</th>
    <th>Name</th>
  </tr>
  <tr v-for="item in items" :key="item.id">
    <td>
        {{ item.id }}
    </td>
    <td>
        {{ item.name }}
    </td>
  </tr>
</table>
</template>

<style>
    table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
    }

    td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
    }

    tr:nth-child(even) {
    background-color: #dddddd;
    }
</style>

<script>
export default {
    props: ['items']
}
</script>