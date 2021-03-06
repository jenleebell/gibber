import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  message: DS.hasMany('message', {async: true})
});
