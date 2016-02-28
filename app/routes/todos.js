import Ember from 'ember';

export default Ember.Route.extend({
    model() {
		return this.store.findAll('todo');
	},
    
    actions: {
               createTodo(newTitle) {
                 this.store.createRecord('todo',{
                   title: newTitle,
                   complete: false

                 }).save();
               },

               updateTodo(todo){
                 todo.save();
               },
        
              deleteTodo(todo){
               this.store.find('todo',todo.id).then(function (todo){
                 todo.destroyRecord();
               });
             // todo.destroyRecord();
              }

    }
});
