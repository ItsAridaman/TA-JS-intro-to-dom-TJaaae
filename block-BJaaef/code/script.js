
let mainn=document.querySelector(".main-div");

got.houses.forEach((house)=>
{
let box=document.createElement("div");
let imagebox=document.createElement("div");
let image=document.createElement("img");
image.src=house.people.forEach((ppl)=>ppl.image);
imagebox.append(image);
// let span=document.createElement("span");
// span.innerText=house.people.forEach((ppl)=>ppl.name);
// imagebox.append(span);
box.append(imagebox);
// let h=document.createElement("h");
// h.innerText=house.people.forEach((ppl)=>ppl.description);
// box.append=(h);
// let learnMore=documnet.createElement("div");
// let a=document.createElement("a");
// a.innerText="Learn more";
// learnMore.append(a);
// box.append(learnMore);
mainn.append(box);
}
)