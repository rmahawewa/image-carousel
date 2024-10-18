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

    let change_display_status = (index, direction) => {
        let new_indx = (direction.localeCompare("left") === 0) && (index === 0) ? (image_array.length-1) : ((direction.localeCompare("right") === 0) && (index === (image_array.length-1)) ? 0 : (direction.localeCompare("left") === 0 ? (index - 1): (direction.localeCompare("right") === 0 ? (index + 1) : index)));
        
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

function slide_points(obj_array){

    let create = () => {
        console.log(obj_array);
        let group = "";
        for(let obj of obj_array){
            let index = obj_array.indexOf(obj);
            let point = '<div id='+ index + ' class="point_btns" style="background-color: gray; width: 1rem; height:1rem; border-radius: 1rem;"></div>';
            group += point;
        }
        let content = document.querySelector(".slide_dots");
        content.innerHTML = group;
    }

    let select = (index) => {
        let image_array = obj_array.change_display_status(index, "");
        create_carousel(image_array);
    }

    return {create, select};
}

let pointed_slide = slide_points(img_array);
pointed_slide.create();

let point_container = document.querySelector(".slide_dots");
point_container.addEventListener("click", (e) => {
    if(e.target.getAttribute("class") !== null && e.target.getAttribute("class").localeCompare("point_btns") == 0){
        let index = e.target.getAttribute("id");
        pointed_slide.select(index);
    }
});

create_carousel(img_array);

function update_image(direction){
    let img_array = new_img_array.image_array;
    let display_element = img_array.findIndex((element) => element.display === 1);
    

    let new_image_arr = new_img_array.change_display_status(display_element, direction); 
    
    create_carousel(new_image_arr);
}

let left_button = document.querySelector(".left");
left_button.addEventListener("click", function(){
    
    update_image("left");
});

let right_button = document.querySelector(".right");
right_button.addEventListener("click", function(){    
    update_image("right");
});