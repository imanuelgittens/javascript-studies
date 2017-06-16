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
				this.$clearSelection = this.$el.find('.clear-selection');
			},
			bindEvents: function(){
				this.$userlist.on('click', '.user', this.handleUserClick.bind(this));
				this.$userlist.on('user-selected', '.user', this.handleUserSelected.bind(this));
				this.$userlist.on('user-deselected', '.user', this.handleUserDeselected.bind(this));
				this.$clearSelection.on('click', this.handleClearSelection.bind(this));
			},
			render: function(){
				var usersObject = this; //get correct version of this
				$.ajax({
					url: 'data/users.json'
				})
					.done(function(data){
						$.each(data, function(index, value){
							var userString = '<div class="col-md-4 user-wrapper">';
							if(value.address){
								userString += '<div class="panel panel-default user has-address">';
							}else{
								userString += '<div class="panel panel-default user">';
							}
							userString += '<h5 class="panel-heading user__name">'+value.name+'</h5>';
							userString += '<div class="panel-body">';
							userString += '<p>Email: '+value.email+'</p>';
							userString += '</div>';
							userString += '</div>';
							userString += '</div>';

						  usersObject.$userlist.append(userString);
						});
						usersObject.users = data; //after rendering store the results of ajax request
						usersObject.sortUsersByAddress();
					})
					.fail(function(){
						console.log('failure');
					});
			},
			renderSelected: function(userElement, index){
				var $selectedUserDetails = userElement.find('.panel-body');
				var extraDetailsString = '<div class="extra-details">';
				extraDetailsString += '<p>Phone: '+this.users[index].phone+'</p>';
				extraDetailsString += '<p>Email: '+this.users[index].email+'</p>';
				if(this.users[index].address){
					extraDetailsString += '<p>Street: '+this.users[index].address.street+'</p>';
					extraDetailsString += '<p>Suite: '+this.users[index].address.suite+'</p>';
					extraDetailsString += '<p>City: '+this.users[index].address.city+'</p>';
					extraDetailsString += '<p>Zip Code: '+this.users[index].address.zipcode+'</p>';
				}
				extraDetailsString += '<p>Website: '+this.users[index].website+'</p>';
				extraDetailsString += '</div>';
				$selectedUserDetails.append(extraDetailsString);
			},
			renderDeselected: function(userElement, index){
				var $extraDetails = userElement.find('.extra-details');
				$extraDetails.remove();
			},
			handleUserClick: function(event){
				var $target = $(event.target);
				var $selectedUser = $target.closest('.user');
				if(!$selectedUser.hasClass('selected')){
					$selectedUser.trigger('user-selected');
				}else{
					$selectedUser.trigger('user-deselected');
				}
				
			},
			handleClearSelection: function(){
				var $users = this.$userlist.find('.user-wrapper');
				$.each($users, function(index, value){
					var $user = $(value).find('.user');
					if($user.hasClass('selected')){
						$user.trigger('click');
					}
				});
			},
			handleUserSelected: function(event){
				var $target = $(event.target);
				var $selectedUser = $target.closest('.user');
				$selectedUser.addClass('selected');
				$selectedUser.removeClass('panel-default');
				$selectedUser.addClass('panel-primary');

				var $selectedUserWrapper = $target.closest('.user-wrapper');
				
				var $userlist = $target.closest('.users__list').children();
				var selectedUserIndex = $userlist.index($selectedUserWrapper);
				this.renderSelected($selectedUserWrapper, selectedUserIndex);
			},
			handleUserDeselected: function(event){
				var $target = $(event.target);
				var $selectedUser = $target.closest('.user');
				$selectedUser.removeClass('selected');
				$selectedUser.addClass('panel-default');
				$selectedUser.removeClass('panel-primary');

				var $selectedUserWrapper = $target.closest('.user-wrapper');
				var $userlist = $target.closest('.users__list').children();
				var selectedUserIndex = $userlist.index($selectedUserWrapper);
				this.renderDeselected($selectedUserWrapper, selectedUserIndex);
			},
			sortUsersByAddress: function(){
				var $users = this.$userlist.find('.user');

				$users.sort(function(a, b){
					return a-b;
				})
			}
		};

		users.init();

	});
})(jQuery);