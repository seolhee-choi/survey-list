<script lang="ts" setup>
import { Model } from "survey-core";
import { json } from "../../data/test_data.js";

const survey = new Model({});
survey.JSON = json;
</script>

<template>
  <h1>나와라</h1>
<!--  <p> {{ survey }}</p>-->
  <TestComponent :model="survey"></TestComponent>
</template>
