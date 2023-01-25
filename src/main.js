import "./assets/scss/main.scss";

document.querySelector("#app").innerHTML = `
 <h1>Hello World</h1>
 <button type="button" class="btn btn-primary">Primary</button>

 <div class="w-25">
 <div class="bg-primary ratio" style="--bs-aspect-ratio: 50%;">
 <div>2x1</div>
 </div>
 
 <div class="bg-danger ratio ratio-4x3">
 <div>4x3, then 2x1</div>
 </div>
 </div>
`;
