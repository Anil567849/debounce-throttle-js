



const normal_div = document.querySelector('.n_count');
const throttle_div = document.querySelector('.t_count');
const debounce_div = document.querySelector('.d_count');


let n_cnt = 0;
let t_cnt = 0;
let d_cnt = 0;
let isScrolling = true;


// Default Behaviour 
const normalCount = () => {
    n_cnt++;
    normal_div.innerHTML = `Normal Count: ${n_cnt}`;
}


// Throttling: Throttling is a method to make sure a function only runs once every certain amount of time, no matter how many times it's triggered. Unlike debounce, throttling keeps the function running at a steady pace. It's useful for things like scrolling, where you want the function to keep running but not too often.

// Example: Imagine you're scrolling through Instagram. Throttling is used to control how often new posts are loaded as you scroll. Instead of checking for new posts every millisecond, it checks at a steady interval, like every 200 milliseconds 
const throttleCount = () => {

    // it will run function after 1 second until event is firing
    if (isScrolling === true) {
        t_cnt++;
        throttle_div.innerHTML = `Throttle Count: ${t_cnt}`;
        isScrolling = false;
        setTimeout(() => {
           isScrolling = true;
        }, 1000)

    }
}

// Debounce: It makes sure that the function only runs after a certain amount of time has passed since the last time it was triggered. If the event happens again before that time is up, the timer resets. This is good for handling things like typing in a search box, where you don't want the function to run every time a key is pressed.

// Example: When i stop typing in search box after 1000 milliseconds show my result 
let interval;
const  debounceCount = () => {
    clearTimeout(interval);
    // When i stop some-event then this function will run 
    interval = setTimeout(() => {
        d_cnt++;
        debounce_div.innerHTML = `Debounce Count: ${d_cnt}`;
    },1000)
}



const showCount = () => {
    normalCount();
    throttleCount();
    debounceCount();
}