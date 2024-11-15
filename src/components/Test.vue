<script setup lang="ts">
import { Model } from "survey-core";
import { json } from "../../data/test_data.js";

const testSurvey = new Model(json);
</script>

<template>
   <SurveyComponent :model="testSurvey"></SurveyComponent>
</template>
