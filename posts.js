import h from "./create-element.js";
import getPosts from "./api.js";

getPosts().then(result => {
    console.log(result);
});
