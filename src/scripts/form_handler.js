import { display_weather } from "./fetch.js"

const form = document.getElementById("form");
const input = document.getElementById('location')

function form_submit(event) {
  event.preventDefault();
  display_weather(input.value, 'metric')
  input.value = ''
}

export function get_city() {
    form.addEventListener("submit", form_submit)
}