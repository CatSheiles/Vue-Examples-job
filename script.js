//below are Vue basics - 5 different apps with great basic code to learn Vue

var app = new Vue({ //parse in an object to tell vue what where and how we want it to be included
    el: "#vueRoot", //el is element - defines root of vue project
    data: { //data has 2 properties name and value
        helloMessage: `${new Date().toLocaleString()}`, //get a new date to the screen!!
        //or change any jsvariable such as counters easily with a couple of lines
        message2: "hello you" //add as many lines as you want
    }
});

var app2 = new Vue({ //toggle visibility of an element
    el: "#app2",
    data: {
        visible: true
    }
});

function toggleElement() //toggle off and on the hidden element button
{
    if(app2.visible == false) app2.visible = true;
    else app2.visible = false;
}

var app3 = new Vue({ //dynamic list that you can push stuff to
    el: "#showlist",
    data: {
        todos: [
            {text: "listItem1"},
            {text: "listItem2"},
            {text: "listItem3"}
        ] //you can add an onChange function to this also maybe to add extra items
    }
});

function extraItem(textBox)
{
    app3.todos.push({text:textBox.value})
}

var app4 = new Vue({
    el: "#app4", //reactive input - remember all "vues need a # easy to link variables no need to onchance"
    data: {
       message: "Default value" 
    }
});

//app 5 components - template components as an option makes it more like react sort of
Vue.component('card', { //app5 when doing vue component the component has to be before creating app
    template: "<h1>hello</h1>"
})

var app5 = new Vue({
    el: "#app5",
})



