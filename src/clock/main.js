class MyClock extends HTMLElement {
  static styles = `
  <style>
  // ...
  // Some Styles
  // ...
  </style>
  `;
  get template() {
    return `
      ${MyClock.styles}
      <div id="clock"></div>
      `;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = this.template;
    this.init();
  }

  init() {
    const setTime = () => {
      const localeTimeString = new Date().toLocaleTimeString();
      const [hour, minutes] = localeTimeString.split(":"); // Extract the hour and minutes parts

      this.shadowRoot.getElementById("clock").innerHTML = `${hour}:${
        minutes < 10 ? "" : ""
      }${minutes}`;
    };
    setTime();
    setInterval(() => {
      setTime();
    }, 1000);
  }
}

customElements.define("my-clock", MyClock);
