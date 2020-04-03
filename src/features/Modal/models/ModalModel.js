import { observable, action } from 'mobx';


class CModalModel {
  @observable isOpened = false;

  @action show = (title, component, componentProps) => {
    this.isOpened = true;
    this.title = title;
    this.component = component;
    this.componentProps = componentProps;
  }

  @action hide = () => {
    this.isOpened = false;
  }

  @observable title = null;

  @observable component = null;

  @observable componentProps = null;
}

export const ModalModel = new CModalModel();
