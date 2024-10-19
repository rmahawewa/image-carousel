function html_structure(){
    let structure = (object) => {
        outer_container: [
            {
                element: "div",
                class: "container image-carousel",
                values: "",
                inner_container1:[
                    {
                        element: "div",
                        style: "display: flex; flex-direction: column; justify-content: center;",
                        inner_container2:[
                            {
                                element: "div",
                                id: "subdiv",
                                style: "display: flex; justify-content: center;",
                                child_element1: [
                                    {
                                        element: "img",
                                        id:object.id,
                                        name:object.name,
                                        src:object.url,
                                        style: "width: 70vw; height: 40vw;",
                                    }
                                ],
                            }
                        ],
                        inner_container3:[
                            {
                                element: "div",
                                class: "arrows",
                                style: "display: flex; align-items: center; justify-content: center; position: absolute;top: 45%;gap: 60%;width: 100%;",
                                child_element2: [
                                    {
                                        element: "button",
                                        class: "left",
                                        style: "width: 1rem;height: 5rem;display: flex;justify-content: center;align-items: center;opacity: 0.5;font-size: medium;font-weight: bolder; color: grey;",
                                        innerHTML: "<",                                        
                                    }
                                ],
                                child_element3: [
                                    {
                                        element: "button",
                                        class: "right",
                                        style: "width: 1rem;height: 5rem;display: flex;justify-content: center;align-items: center;opacity: 0.5;font-size: medium;font-weight: bolder; color: grey;",
                                        innerHTML: ">",                                        
                                    }
                                ],
                            }
                        ],
                    }
                ],
            }            

        ]
    };
}