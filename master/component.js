"use strict";

define("nodes/components/driver-ocp/component", ["exports", "shared/mixins/node-driver"], function (exports, _nodeDriver) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  const LAYOUT = "PHNlY3Rpb24gY2xhc3M9Imhvcml6b250YWwtZm9ybSI+CiAgPGRpdiBjbGFzcz0iY29udGFpbmVyLWZsdWlkIj4KICAgIHt7IS0tIFRoaXMgbGluZSBzaG93cyB0aGUgZHJpdmVyIHRpdGxlIHdoaWNoIHlvdSBkb24ndCBoYXZlIHRvIGNoYW5nZSBpdCAtLX19CiAgICA8ZGl2IGNsYXNzPSJvdmVyLWhyIj48c3Bhbj57e2RyaXZlck9wdGlvbnNUaXRsZX19PC9zcGFuPjwvZGl2PgoKICAgIHt7I2FjY29yZGlvbi1saXN0IHNob3dFeHBhbmRBbGw9ZmFsc2UgYXMgfCBhbCBleHBhbmRGbiB8IH19CiAgICAgIHt7I2FjY29yZGlvbi1saXN0LWl0ZW0KICAgICAgICB0aXRsZT0iMS4gQVBJIEFjY2VzcyIKICAgICAgICBkZXRhaWw9IkNvbmZpZ3VyZSBPQ1AgR3JhcGhRTCBlbmRwb2ludCBhbmQgdG9rZW4iCiAgICAgICAgZXhwYW5kT25Jbml0PXRydWUKICAgICAgICBleHBhbmQ9KGFjdGlvbiBleHBhbmRGbikKICAgICAgfX0KICAgICAgICA8ZGl2IGNsYXNzPSJyb3ciPgogICAgICAgICAgPGRpdiBjbGFzcz0iY29sIHNwYW4tMTIiPgogICAgICAgICAgICA8bGFiZWwgY2xhc3M9ImFjYy1sYWJlbCI+T0NQIEdyYXBoUUwgRW5kcG9pbnQKICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0iZmllbGQtcmVxdWlyZWQgZW1iZXItdmlldyI+Kjwvc3Bhbj4KICAgICAgICAgICAgPC9sYWJlbD4KICAgICAgICAgICAge3tpbnB1dCB0eXBlPSJ0ZXh0IgogICAgICAgICAgICAgIGNsYXNzPSJmb3JtLWNvbnRyb2wiCiAgICAgICAgICAgICAgdmFsdWU9Y29uZmlnLm9jcEVuZHBvaW50CiAgICAgICAgICAgIH19CiAgICAgICAgICAgIDxwIGNsYXNzPSJoZWxwLWJsb2NrIj5FeGFtcGxlOiBodHRwczovL29jcC5leGFtcGxlLmNvbS92Mi9ncmFwaHFsPC9wPgogICAgICAgICAgPC9kaXY+CiAgICAgICAgPC9kaXY+CgogICAgICAgIDxkaXYgY2xhc3M9InJvdyI+CiAgICAgICAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi0xMiI+CiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz0iYWNjLWxhYmVsIj5PQ1AgQXV0aCBUb2tlbgogICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJmaWVsZC1yZXF1aXJlZCBlbWJlci12aWV3Ij4qPC9zcGFuPgogICAgICAgICAgICA8L2xhYmVsPgogICAgICAgICAgICB7e2lucHV0IHR5cGU9InBhc3N3b3JkIgogICAgICAgICAgICAgIGNsYXNzPSJmb3JtLWNvbnRyb2wiCiAgICAgICAgICAgICAgdmFsdWU9Y29uZmlnLm9jcEF1dGhUb2tlbgogICAgICAgICAgICB9fQogICAgICAgICAgICA8cCBjbGFzcz0iaGVscC1ibG9jayI+UHJvdmlkZSB0aGUgdG9rZW4gdXNlZCBieSB0aGUgbm9kZSBkcml2ZXI8L3A+CiAgICAgICAgICA8L2Rpdj4KICAgICAgICA8L2Rpdj4KICAgICAge3svYWNjb3JkaW9uLWxpc3QtaXRlbX19CgogICAgICB7eyNhY2NvcmRpb24tbGlzdC1pdGVtCiAgICAgICAgdGl0bGU9IjIuIEluc3RhbmNlIFNldHRpbmdzIgogICAgICAgIGRldGFpbD0iRGVmaW5lIHByb2plY3QsIGltYWdlLCBmbGF2b3IsIGFuZCBuZXR3b3JrIElEcyIKICAgICAgICBleHBhbmRPbkluaXQ9dHJ1ZQogICAgICAgIGV4cGFuZD0oYWN0aW9uIGV4cGFuZEZuKQogICAgICB9fQogICAgICAgIDxkaXYgY2xhc3M9InJvdyI+CiAgICAgICAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi02Ij4KICAgICAgICAgICAgPGxhYmVsIGNsYXNzPSJhY2MtbGFiZWwiPlByb2plY3QgSUQKICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0iZmllbGQtcmVxdWlyZWQgZW1iZXItdmlldyI+Kjwvc3Bhbj4KICAgICAgICAgICAgPC9sYWJlbD4KICAgICAgICAgICAge3tpbnB1dCB0eXBlPSJ0ZXh0IgogICAgICAgICAgICAgIGNsYXNzPSJmb3JtLWNvbnRyb2wiCiAgICAgICAgICAgICAgdmFsdWU9Y29uZmlnLm9jcFByb2plY3RJZAogICAgICAgICAgICB9fQogICAgICAgICAgPC9kaXY+CiAgICAgICAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi02Ij4KICAgICAgICAgICAgPGxhYmVsIGNsYXNzPSJhY2MtbGFiZWwiPkZsYXZvciBJRAogICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJmaWVsZC1yZXF1aXJlZCBlbWJlci12aWV3Ij4qPC9zcGFuPgogICAgICAgICAgICA8L2xhYmVsPgogICAgICAgICAgICB7e2lucHV0IHR5cGU9InRleHQiCiAgICAgICAgICAgICAgY2xhc3M9ImZvcm0tY29udHJvbCIKICAgICAgICAgICAgICB2YWx1ZT1jb25maWcub2NwRmxhdm9ySWQKICAgICAgICAgICAgfX0KICAgICAgICAgIDwvZGl2PgogICAgICAgIDwvZGl2PgoKICAgICAgICA8ZGl2IGNsYXNzPSJyb3ciPgogICAgICAgICAgPGRpdiBjbGFzcz0iY29sIHNwYW4tNiI+CiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz0iYWNjLWxhYmVsIj5JbWFnZSBJRAogICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJmaWVsZC1yZXF1aXJlZCBlbWJlci12aWV3Ij4qPC9zcGFuPgogICAgICAgICAgICA8L2xhYmVsPgogICAgICAgICAgICB7e2lucHV0IHR5cGU9InRleHQiCiAgICAgICAgICAgICAgY2xhc3M9ImZvcm0tY29udHJvbCIKICAgICAgICAgICAgICB2YWx1ZT1jb25maWcub2NwSW1hZ2VJZAogICAgICAgICAgICB9fQogICAgICAgICAgPC9kaXY+CiAgICAgICAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi02Ij4KICAgICAgICAgICAgPGxhYmVsIGNsYXNzPSJhY2MtbGFiZWwiPk5ldHdvcmsgSUQKICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0iZmllbGQtcmVxdWlyZWQgZW1iZXItdmlldyI+Kjwvc3Bhbj4KICAgICAgICAgICAgPC9sYWJlbD4KICAgICAgICAgICAge3tpbnB1dCB0eXBlPSJ0ZXh0IgogICAgICAgICAgICAgIGNsYXNzPSJmb3JtLWNvbnRyb2wiCiAgICAgICAgICAgICAgdmFsdWU9Y29uZmlnLm9jcE5ldHdvcmtJZAogICAgICAgICAgICB9fQogICAgICAgICAgPC9kaXY+CiAgICAgICAgPC9kaXY+CgogICAgICAgIDxkaXYgY2xhc3M9InJvdyI+CiAgICAgICAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi0xMiI+CiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz0iYWNjLWxhYmVsIj5BbGxvY2F0ZSBQdWJsaWMgSVA8L2xhYmVsPgogICAgICAgICAgICA8ZGl2IGNsYXNzPSJjaGVja2JveCI+CiAgICAgICAgICAgICAgPGxhYmVsPnt7aW5wdXQgdHlwZT0iY2hlY2tib3giIGNoZWNrZWQ9Y29uZmlnLm9jcFB1YmxpY0lwfX0gQWxsb2NhdGUgcHVibGljIElQPC9sYWJlbD4KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA8L2Rpdj4KICAgICAgICA8L2Rpdj4KCiAgICAgICAgPGRpdiBjbGFzcz0icm93Ij4KICAgICAgICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTEyIj4KICAgICAgICAgICAgPGxhYmVsIGNsYXNzPSJhY2MtbGFiZWwiPkNsb3VkLUluaXQgVXNlciBEYXRhIChyYXcgb3IgYmFzZTY0KTwvbGFiZWw+CiAgICAgICAgICAgIHt7aW5wdXQtdGV4dGFyZWEKICAgICAgICAgICAgICBjbGFzcz0iZm9ybS1jb250cm9sIgogICAgICAgICAgICAgIHJvd3M9NgogICAgICAgICAgICAgIHZhbHVlPWNvbmZpZy5vY3BVc2VyRGF0YQogICAgICAgICAgICB9fQogICAgICAgICAgICA8cCBjbGFzcz0iaGVscC1ibG9jayI+UHJvdmlkZSBjbG91ZC1pbml0IHRleHQgb3IgYmFzZTY0IHZhbHVlPC9wPgogICAgICAgICAgPC9kaXY+CiAgICAgICAgPC9kaXY+CiAgICAgIHt7L2FjY29yZGlvbi1saXN0LWl0ZW19fQogICAge3svYWNjb3JkaW9uLWxpc3R9fQoKICAgIHt7IS0tIFRoaXMgZm9sbG93aW5nIGNvbnRhaW5zIHRoZSBOYW1lLCBMYWJlbHMgYW5kIEVuZ2luZSBPcHRpb25zIGZpZWxkcyAtLX19CiAgICA8ZGl2IGNsYXNzPSJvdmVyLWhyIj4KICAgICAgPHNwYW4+e3t0ZW1wbGF0ZU9wdGlvbnNUaXRsZX19PC9zcGFuPgogICAgPC9kaXY+CgogICAge3tmb3JtLW5hbWUtZGVzY3JpcHRpb24KICAgICAgbW9kZWw9bW9kZWwKICAgICAgbmFtZVJlcXVpcmVkPXRydWUKICAgICAgcm93Q2xhc3M9InJvdyBtYi0xMCIKICAgIH19CgogICAge3tmb3JtLXVzZXItbGFiZWxzCiAgICAgIGluaXRpYWxMYWJlbHM9bGFiZWxSZXNvdXJjZS5sYWJlbHMKICAgICAgc2V0TGFiZWxzPShhY3Rpb24gJ3NldExhYmVscycpCiAgICAgIGV4cGFuZD0oYWN0aW9uIGV4cGFuZEZuKQogICAgfX0KCiAgICB7e2Zvcm0tbm9kZS10YWludHMKICAgICAgbW9kZWw9bW9kZWwKICAgICAgZXhwYW5kPShhY3Rpb24gZXhwYW5kRm4pCiAgICB9fQoKICAgIHt7Zm9ybS1lbmdpbmUtb3B0cwogICAgICBtYWNoaW5lPW1vZGVsCiAgICAgIHNob3dFbmdpbmVVcmw9c2hvd0VuZ2luZVVybAogICAgfX0KCiAgICB7eyEtLSBUaGlzIGNvbXBvbmVudCBzaG93cyBlcnJvcnMgcHJvZHVjZWQgYnkgdmFsaWRhdGUoKSBpbiB0aGUgY29tcG9uZW50IC0tfX0KICAgIHt7dG9wLWVycm9ycyBlcnJvcnM9ZXJyb3JzfX0KCiAgICB7eyEtLSBUaGlzIGNvbXBvbmVudCBzaG93cyB0aGUgQ3JlYXRlIGFuZCBDYW5jZWwgYnV0dG9ucyAtLX19CiAgICB7e3NhdmUtY2FuY2VsIHNhdmU9InNhdmUiIGNhbmNlbD0oYWN0aW9uICJjYW5jZWwiKX19CiAgPC9kaXY+Cjwvc2VjdGlvbj4K";
  const get = Ember.get;
  const set = Ember.set;
  const alias = Ember.computed.alias;
  const service = Ember.inject.service;
  exports.default = Ember.Component.extend(_nodeDriver.default, {
    driverName: 'ocp',
    config: alias('model.ocpConfig'),
    app: service(),
    init() {
      const decodedLayout = window.atob(LAYOUT);
      const template = Ember.HTMLBars.compile(decodedLayout, {
        moduleName: 'nodes/components/driver-ocp/template'
      });
      set(this, 'layout', template);
      this._super(...arguments);
    },
    bootstrap: function () {
      const config = get(this, 'globalStore').createRecord({
        type: 'ocpConfig',
        ocpEndpoint: '',
        ocpAuthToken: '',
        ocpProjectId: '',
        ocpFlavorId: '',
        ocpImageId: '',
        ocpNetworkId: '',
        ocpPublicIp: false,
        ocpUserData: ''
      });
      set(this, 'model.ocpConfig', config);
    },
    validate() {
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
      if (get(errors, 'length')) {
        set(this, 'errors', errors);
        return false;
      }
      set(this, 'errors', null);
      return true;
    }
  });
});;
"use strict";

define("ui/components/driver-ocp/component", ["exports", "nodes/components/driver-ocp/component"], function (exports, _component) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});