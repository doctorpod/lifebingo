const application = window.Stimulus.Application.start();

application.register(
  "card",
  class extends window.Stimulus.Controller {
    static get targets() {
      return [];
    }

    connect() {
      console.log("connected: ", this);
    }

    showOrHideOptionButton() {}

    addSelectOption(option, element) {}

    enableOrDisableOption(event) {}

    clearFilterSearch() {}
  }
);
