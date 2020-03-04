import { observable, action } from 'mobx';


class CModalModel {
    @observable isOpened = false;

    @action show = () => {
      this.isOpened = true;
    }

    @action hide = () => {
      this.isOpened = false;
    }
}

export const ModalModel = new CModalModel();
