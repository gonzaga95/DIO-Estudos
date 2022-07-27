const campoWriteTask = document.querySelector("#campoWriteTask");
const addTask = document.querySelector("#addTask");
const taskList = document.querySelector("#taskList");

addTask.addEventListener("submit", function (click) {
    taskList.insertAdjacentHTML(
        "beforeend",
        `
        <li>${campoWriteTask.value} <input type="checkbox" name="checkTask"></li>
        `
    );

    click.preventDefault();
});
