/*!!!!!!!!!!!Do not change anything between here (the DRIVERNAME placeholder will be automatically replaced at buildtime)!!!!!!!!!!!*/
import NodeDriver from 'shared/mixins/node-driver';

// do not remove LAYOUT, it is replaced at build time with a base64 representation of the template of the hbs template
// we do this to avoid converting template to a js file that returns a string and the cors issues that would come along with that
const LAYOUT;
/*!!!!!!!!!!!DO NOT CHANGE END!!!!!!!!!!!*/

/*!!!!!!!!!!!GLOBAL CONST START!!!!!!!!!!!*/
// EMBER API Access - if you need access to any of the Ember API's add them here in the same manner rather then import them via modules, since the dependencies exist in rancher we dont want to expor the modules in the amd def
const get = Ember.get;
const set = Ember.set;
const alias = Ember.computed.alias;
const service = Ember.inject.service;
/*!!!!!!!!!!!GLOBAL CONST END!!!!!!!!!!!*/

/*!!!!!!!!!!!DO NOT CHANGE START!!!!!!!!!!!*/
export default Ember.Component.extend(NodeDriver, {
  driverName: '%%DRIVERNAME%%',
  config: alias('model.%%DRIVERNAME%%Config'),
  app: service(),

  init() {
    // This does on the fly template compiling, if you mess with this :cry:
    const decodedLayout = window.atob(LAYOUT);
    const template = Ember.HTMLBars.compile(decodedLayout, {
      moduleName: 'nodes/components/driver-%%DRIVERNAME%%/template'
    });
    set(this, 'layout', template);

    this._super(...arguments);
  },
  /*!!!!!!!!!!!DO NOT CHANGE END!!!!!!!!!!!*/

  // Write your component here, starting with setting 'model' to a machine with your config populated
  bootstrap: function () {
    // bootstrap is called by rancher ui on 'init', you're better off doing your setup here rather then the init function to ensure everything is setup correctly
    const config = get(this, 'globalStore').createRecord({
      type: '%%DRIVERNAME%%Config',
      ocpEndpoint: '',
      ocpAuthToken: '',
      ocpProjectId: '',
      ocpFlavorId: '',
      ocpImageId: '',
      ocpNetworkId: '',
      ocpPublicIp: false,
      ocpUserData: ''
    });

    set(this, 'model.%%DRIVERNAME%%Config', config);
  },

  // Add custom validation beyond what can be done from the config API schema
  validate() {
    // Get generic API validation errors
    this._super();
    const errors = get(this, 'errors') || [];
    if (!get(this, 'model.name')) {
      errors.push('Name is required');
    }

    if (!get(this, 'config.ocpEndpoint')) {
      errors.push('OCP endpoint is required');
    }
    if (!get(this, 'config.ocpAuthToken')) {
      errors.push('OCP auth token is required');
    }
    if (!get(this, 'config.ocpProjectId')) {
      errors.push('OCP project ID is required');
    }
    if (!get(this, 'config.ocpFlavorId')) {
      errors.push('OCP flavor ID is required');
    }
    if (!get(this, 'config.ocpImageId')) {
      errors.push('OCP image ID is required');
    }
    if (!get(this, 'config.ocpNetworkId')) {
      errors.push('OCP network ID is required');
    }

    // Set the array of errors for display,
    // and return true if saving should continue.
    if (get(errors, 'length')) {
      set(this, 'errors', errors);
      return false;
    }

    set(this, 'errors', null);
    return true;
  }

  // Any computed properties or custom logic can go here
});
