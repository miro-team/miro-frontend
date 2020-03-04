import { observable, action, computed } from 'mobx';


class CAppModel {
    @observable processes = [];

    @action addProcess = (processName) => {
      this.processes.push(processName);
    }

    @action removeProcess = (processName) => {
      if (!this.processes.includes(processName)) {
        throw new Error('Process not exists');
      }
      this.processes = this.processes.filter((name) => name !== processName);
    }
}

export const AppModel = new CAppModel();
