import { observable, action } from 'mobx';


class CPreloaderModel {
    @observable isDisplayed = true;

    @action show = () => {
      this.isDisplayed = true;
    }

    @action hide = () => {
      this.isDisplayed = false;
    }
}

export const PreloaderModel = new CPreloaderModel();
