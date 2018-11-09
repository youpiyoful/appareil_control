export class AppareilService{

    appareils = [
    {
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      name: 'Télévision',
      status: 'allumé'
    },
    {
      name: 'Ordinateur',
      status: 'allumé'
    }
  ];

  switchOnOne(i: number) {
    this.appareils[i].status = 'allumé';
  }

  switchOnOff(i: number) {
    this.appareils[i].status = 'éteint';
  }

  switchOnAll() {
    for(let appareil of this.appareils) {
      appareil.status = 'allumé';
    }
  }

  switchOffAll() {
    for(let appareil of this.appareils) {
      appareil.status = 'éteint';
    }
  }
}
