import TodoStore from "./js/TodoStore";
import TodoView from "./js/TodoView";

const store = new TodoStore();
const view = new TodoView(store);
view.init();
