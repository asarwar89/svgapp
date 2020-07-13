<template>
  <div class="instruction">
    <p>SVG app enables drawing any number of shapes using the text input below. Please use this to draw circles, rectangles, polygons and ellipses.</p>
    <p>Enter each shape in a new line starting with c for circle, r for rectangle and p for polygons and e for ellipse. Sample input for each of these:</p>
    <div class="sample">
      <p class="input">
        c 60 60 50<br>
        r 100 50 100 100<br>
        p 10,100 170,120 120,180<br>
        e 120 200 60 30
      </p>
    </div>

  </div>
</template>
<style scoped>
  .instruction {
    margin: 0 auto 30px;
    max-width: 500px;
    width: 90%;
  }
  .sample * {
    box-sizing: border-box;
  }
  .input {
    padding: 10px 20px;
    text-align: left;
  }
  .input {
    background: #444444;
    border-radius: 5px;
    color: #fff;
  }
  .sample-input span {
    font-size: 12px;
  }
</style>