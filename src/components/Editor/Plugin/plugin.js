import { createApp } from "vue";
import BlackBoard from "../../BlackBoard";

const teste = createApp(BlackBoard);

class SimpleImage {
  constructor({ data, api, config, readOnly, block }) {
    this.component = null;
    this.board = null;
    this.wrapper = null;
    this.data = data;
  }

  static get toolbox() {
    return {
      title: "Black Board",
      icon: '<svg width="17" height="15" viewBox="0 0 336 276" xmlns="http://www.w3.org/2000/svg"><path d="M291 150V79c0-19-15-34-34-34H79c-19 0-34 15-34 34v42l67-44 81 72 56-29 42 30zm0 52l-43-30-56 30-81-67-66 39v23c0 19 15 34 34 34h178c17 0 31-13 34-29zM79 0h178c44 0 79 35 79 79v118c0 44-35 79-79 79H79c-44 0-79-35-79-79V79C0 35 35 0 79 0z"/></svg>',
    };
  }

  render() {
    this.wrapper = document.createElement("div");
    this.wrapper.id = "black-board";
    this.component = teste;

    setTimeout(() => {
      this.board = this.component.mount("#black-board");
      let flow = this.data;
      this.board.flowProps = this.data;
    }, 1000);
    return this.wrapper;
  }

  save(blockContent) {
    // in the component have a function that returns the required data.
    return this.board.getData();
  }
}

export default SimpleImage;
