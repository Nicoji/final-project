<template>
  <div>
    <div id="filters">
      <div id="sub-categories">
        <p>Sub categories</p>
        <ul>
          <li v-for="(subCategorie, index) in subCategories" :key="index" @click="selectSubCat" >
            {{ subCategorie }} #{{ index }}
          </li>
        </ul>
      </div>
      <div id="price-range">
        <input type="range" name="price" id="price" v-model="price" />
      </div>

      <div id="label">
        <p>Label</p>
        <ul>
          <li v-for="(label, index) in labels" :key="index" @click="selectLabel">
            {{ label.name }}
          </li>
        </ul>
      </div>

      <div id="brand">
        <p>Brand</p>
        <ul>
          <li v-for="(brand, index) in brands" :key="index" @click="selectBrand">{{ brand }}</li>
        </ul>
      </div>
    </div>
    <div id="show-filter">
      <p>Showing filters</p>
      <div id="show-sub-categories">Sub categorie filter is {{ subCat }} </div>
      <div id="show-price">Price filter is {{ price }} </div>
      <div id="show-label">Label filter is {{ label }}  </div>
      <div id="show-brand">Brand filter is {{ brand }} </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Filters",
  data() {
    return {
      subCat: "",
      price: 50,
      label: "",
      brand: "",
      subCategories: ["Jessica", "Julien", "Laura", "Niko", "Thibault", "Bebew", "Manon", "Carla", "Maeva", "Benjamin", "Océane" ],
      labels: [
        { name: "Natoo" },
        { name: "Norman" },
        { name: "McFly" },
        { name: "Tibo" },
        { name: "Michou" },
      ],
      brands: ["Toyota", "Mitsubishi", "Renault", "Audi", "Smart"],
    };
  },
  methods:{
    selectSubCat(event) {
      this.subCat = event.target.innerText;
    },
    selectLabel(event) {
      this.label = event.target.innerText;
    },
    selectBrand(event) {
      this.brand = event.target.innerText;
    },
  },
  components: {},
};
</script>

<style>
#filters {
  border: solid 1px blue;
  width: max-content;
}
p {
  border: solid 1px red;
}
li {
  border: dotted 2px green;
  text-align: left;
  padding : 2px;
  margin: 1px;
}

li:hover {
  background-color: lightblue;
  cursor: pointer;
}
</style>