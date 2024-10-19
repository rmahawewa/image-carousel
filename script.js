let carousel = {
    id: "",
    name: "",
    time_in_seconds: "5",
    images: [
        {
            id: "001",
            name: "pic001",
            url: "./src/img_one.jpg",
        },
        {
            id: "002",
            name: "pic002",
            url: "./src/img_two.jpg",
        },
        {
            id: "003",
            name: "pic003",
            url: "./src/img_three.jpg",
        },
        {
            id: "004",
            name: "pic004",
            url: "./src/img_four.jpg",
        },
        {
            id: "005",
            name: "pic005",
            url: "./src/img_five.jpg",
        },
    ],
}

function create_array(image_object){
    let image_array = [];
    let display = 0;

    for(let obj of image_object){
        display = image_object.indexOf(obj) === 0 ? 1 : 0;
                
        let new_obj = {
            id: obj.id,
            name: obj.name,
            url: obj.url,
            display: display,
        };
        image_array.push(new_obj);
    }

    let change_display_status = (direction) => {
        console.log("direction: " + direction);
        let index = image_array.findIndex((element) => element.display === 1);
        let new_indx = (direction.localeCompare("left") === 0) && (index === 0) ? (image_array.length-1) : ((direction.localeCompare("right") === 0) && (index === (image_array.length-1)) ? 0 : (direction.localeCompare("left") === 0 ? (index - 1): (direction.localeCompare("right") === 0 ? (index + 1) : direction)));
        
        image_array[index].display = 0;
        image_array[new_indx].display = 1;
        return image_array;
    }

    return {image_array, change_display_status};
}

let new_img_array = create_array(carousel.images);
let img_array = new_img_array.image_array;

function create_carousel(obj_array){
    let object = obj_array.find((element) => element.display === 1);

    let image_div = document.querySelector("#subdiv");
    let image = '<img id='+ object.id +' name='+ object.name +' src='+ object.url +' style="width: 70vw; height: 40vw;" />';
    image_div.innerHTML = image;
}

function slide_points(array){
    let obj_array = array.image_array;
    let create = () => {
        let group = "";
        for(let obj of obj_array){
            let index = obj_array.indexOf(obj);
            let point = '<div id='+ index +' class="point_btns" style="background-color: gray; width: 1rem; height:1rem; border-radius: 1rem;"></div>';
            group += point;
        }
        let content = document.querySelector(".slide_dots");
        content.innerHTML = group;
    }

    let select = (index) => {        
        let image_array = array.change_display_status(index);
        console.log(image_array);
        create_carousel(image_array);
    }

    return {create, select};
}

let pointed_slide = slide_points(new_img_array);
pointed_slide.create();

let points = document.querySelectorAll(".point_btns");
points.forEach((point) => point.addEventListener("click", function(){
    // console.log("test");
    let index = point.getAttribute("id");
    // console.log(index);
    pointed_slide.select(index);
    points.forEach((p) => p.setAttribute("style", "background-color: gray; width: 1rem; height:1rem; border-radius: 1rem;"));
    
    // point.style
    point.setAttribute("style", "background-color: #4b5563; width: 1rem; height:1rem; border-radius: 1rem;");
}))

create_carousel(img_array);

function update_image(direction){
    let img_array = new_img_array.image_array;
    

    let new_image_arr = new_img_array.change_display_status(direction); 
    
    create_carousel(new_image_arr);

    // setTimeout(update_image("left"), 1000);
}

let left_button = document.querySelector(".left");
left_button.addEventListener("click", function(){
    
    update_image("left");
});

let right_button = document.querySelector(".right");
right_button.addEventListener("click", function(){    
    update_image("right");
});

// update_image("left");