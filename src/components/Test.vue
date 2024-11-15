<script setup lang="ts">
import { Model } from "survey-core";
import { json } from "../../data/test_data.js";
import { onMounted } from "vue";

const testSurvey = new Model(json);

onMounted(() => {
  //조건 1
  testSurvey.getQuestionByName("QuestionRadiogroup7").visibleIf = "{QuestionRadiogroup5} == 'Item 4'";

  //조건 2
  testSurvey.onComplete.add((sender) => {
    if (sender.getValue("QuestionRadiogroup5") !== "Item 4") {
      sender.completedHtml = "Custom Thank you message for not selecting Item 4.";
    }
  })
})
</script>

<template>
   <SurveyComponent :model="testSurvey"></SurveyComponent>
</template>
