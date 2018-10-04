import ServiceType from './ServiceType';

var ServiceSelection = function() {
  return {
    selectType: function(currentPhoto, installing, finishing, repairing) {
      switch(currentPhoto) {
          case installing:
              return ServiceType().installing()
          case finishing:
              return ServiceType().finishing()
          case repairing:
              return ServiceType().repairing()
          default:
              console.log(this.state.currentPhoto)
        }
    }
  }
}

export default ServiceSelection;
