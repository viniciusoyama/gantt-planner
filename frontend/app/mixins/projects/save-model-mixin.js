import Ember from 'ember';

export default Ember.Mixin.create({
    actions: {
        save() {
            let route = this;
            this.currentModel.save().then(function() {
                route.transitionTo('projects');
            }, function() {
                bootbox.alert('Failed to save the project');
            });
        },

        willTransition() {
            this._super(...arguments);
            const record = this.controller.get('model');
            if (record) {
                record.rollbackAttributes();
            }
        }
    }
});
