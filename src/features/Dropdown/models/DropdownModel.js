import { observable, action } from 'mobx';


class CDropdownModel {
    @observable isOpened = false;

    @action show = () => {
      this.isOpened = true;
    }

    @action hide = () => {
      this.isOpened = false;
    }
}

export const DropdownModel = new CDropdownModel();
