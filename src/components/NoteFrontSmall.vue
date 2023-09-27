<script setup lang="ts">
import { ref } from "vue";
import rgbHex from "rgb-hex";
const props = defineProps(["noteColor", ""]);
const noteColor = ref<String>(props.noteColor);
</script>

<template>
  <div
    style="
      width: 192px;
      height: 300px;
      background: #e2ecf5;
      border: 1px #5e6a94 solid;
    "
    :style="{ background: '#' + noteColor }"
  >
    <div style="width: 14px; height: 298px; background: #85a4d1">
      <div style="width: 100%; height: 100%; position: relative">
        <div
          style="
            width: 132px;
            height: 0px;
            left: 60px;
            top: 65px;
            position: absolute;
            border: 1px #5e6a94 solid;
          "
        ></div>
        <div
          style="
            width: 7.65px;
            height: 2px;
            left: 183.39px;
            top: 65px;
            position: absolute;
            background: #5e6a94;
          "
        ></div>
        <div
          style="
            width: 132px;
            height: 0px;
            left: 60px;
            top: 104px;
            position: absolute;
            border: 1px #5e6a94 solid;
          "
        ></div>
        <div
          style="
            width: 7.65px;
            height: 2px;
            left: 183.39px;
            top: 103px;
            position: absolute;
            background: #5e6a94;
          "
        ></div>
        <div
          style="
            width: 132px;
            height: 0px;
            left: 60px;
            top: 184px;
            position: absolute;
            border: 1px #5e6a94 solid;
          "
        ></div>
        <div
          style="
            width: 132px;
            height: 0px;
            left: 60px;
            top: 192px;
            position: absolute;
            border: 1px #5e6a94 solid;
          "
        ></div>
        <div
          style="
            width: 132px;
            height: 0px;
            left: 60px;
            top: 200px;
            position: absolute;
            border: 1px #5e6a94 solid;
          "
        ></div>
        <div
          style="
            width: 132px;
            height: 0px;
            left: 60px;
            top: 208px;
            position: absolute;
            border: 1px #5e6a94 solid;
          "
        ></div>
        <div
          style="
            width: 132px;
            height: 0px;
            left: 60px;
            top: 216px;
            position: absolute;
            border: 1px #5e6a94 solid;
          "
        ></div>
        <div
          style="
            width: 132px;
            height: 0px;
            left: 60px;
            top: 224px;
            position: absolute;
            border: 1px #5e6a94 solid;
          "
        ></div>
        <div
          style="
            position: absolute;
            top: 0px;
            width: 162px;
            height: 27px;
            left: 20px;
            top: 238px;
            font-size: 24px;
            font-family: Zen Maru Gothic;
            font-weight: 400;
            line-height: 30px;
            word-wrap: break-word;
            color: #85a4d1;
          "
        >
          感想ノート
        </div>
        <div style="width: 100%; height: 100%; position: relative">
          <div
            style="
              width: 54px;
              height: 9px;
              left: 20px;
              top: 269px;
              position: absolute;
              border: 1px #5e6a94 solid;
            "
          ></div>
          <div
            style="
              width: 8px;
              height: 9px;
              left: 66px;
              top: 269px;
              position: absolute;
              background: #5e6a94;
            "
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style module lang="scss">
.aaa {
  color: colorVal;
}
</style>

