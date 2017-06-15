(function($){
	$(document).ready(function(){

		var users = {
			users: [],
			init: function(){
				this.cacheDom();
				this.render();
				this.bindEvents();
			},
			cacheDom: function(){
				this.$el = $('.users');
				this.$userlist = this.$el.find('.users__list');
			},
			bindEvents: function(){
				this.$userlist.on('click', '.user', this.handleUserClick.bind(this));
				this.$userlist.on('user-selected', '.user', this.handleUserSelected.bind(this));
				this.$userlist.on('user-deselected', '.user', this.handleUserDeselected.bind(this));
			},
			render: function(){
				var usersObject = this; //get correct version of this
				$.ajax({
					url: 'data/users.json'
				})
					.done(function(data){
						$.each(data, function(index, value){
							var userString = '<div class="col-md-4 user-wrapper">';
							userString += '<div class="panel panel-default user">';
							userString += '<h5 class="panel-heading user__name">'+value.name+'</h5>';
							userString += '<div class="panel-body">';
							userString += '<p>Email: '+value.email+'</p>';
							userString += '';
							userString += '';
							userString += '';
							userString += '';
							userString += '';
							userString += '';
							userString += '';
							userString += '';
							userString += '';
							userString += '</div>';
							userString += '</div>';
							userString += '</div>';

						  usersObject.$userlist.append(userString);
						});
						usersObject.users = data; //after rendering store the results of ajax request
					})
					.fail(function(){
						console.log('failure');
					});
			},
			renderSelected: function(userElement, index){
				var $selectedUserDetails = userElement.find('.panel-body');
				var extraDetailsString = '<p>Phone: '+this.users[index].phone+'</p>';
				$selectedUserDetails.append(extraDetailsString);
			},
			handleUserClick: function(event){
				var $target = $(event.target);
				var $selectedUser = $target.closest('.user');

				if(!$selectedUser.hasClass('selected')){
					$selectedUser.addClass('selected');
					$selectedUser.removeClass('panel-default');
					$selectedUser.addClass('panel-primary');
					$selectedUser.trigger('user-selected');
				}else{
					$selectedUser.removeClass('selected');
					$selectedUser.addClass('panel-default');
					$selectedUser.removeClass('panel-primary');
					$selectedUser.trigger('user-deselected');
				}
				
			},
			handleUserSelected: function(event){
				var $target = $(event.target);
				var $selectedUser = $target.closest('.user-wrapper');
				var $userlist = $target.closest('.users__list').children();
				var selectedUserIndex = $userlist.index($selectedUser);
				this.renderSelected($selectedUser, selectedUserIndex);
				//console.log(selectedUserIndex);
			},
			handleUserDeselected: function(){
				console.log('user delected!');
			}
		};

		users.init();

	});
})(jQuery);