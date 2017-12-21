define(['exports', 'react', 'create-react-class', '../../../../components/icon-settings', '../../../../components/navigation'], function (exports, _react, _createReactClass, _iconSettings, _navigation) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react2 = _interopRequireDefault(_react);

	var _createReactClass2 = _interopRequireDefault(_createReactClass);

	var _iconSettings2 = _interopRequireDefault(_iconSettings);

	var _navigation2 = _interopRequireDefault(_navigation);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	function _toConsumableArray(arr) {
		if (Array.isArray(arr)) {
			for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
				arr2[i] = arr[i];
			}

			return arr2;
		} else {
			return Array.from(arr);
		}
	}

	var sampleSearchCategories = [{
		id: 'search_results',
		label: 'Search Results',
		items: [{ id: 'top', label: 'Top Results' }, { id: 'accounts', label: 'Accounts' }, { id: 'contacts', label: 'Contacts' }, { id: 'opportunities', label: 'Opportunities' }, { id: 'leads', label: 'Leads' }, { id: 'groups', label: 'Groups' }, { id: 'files', label: 'Files' }, { id: 'dashboards', label: 'Dashboards' }, { id: 'reports', label: 'Reports' }, { id: 'feeds', label: 'Feeds' }]
	}, {
		id: 'external_results',
		label: 'External Results',
		items: [{ id: 'app_one', label: 'App One' }, { id: 'app_two', label: 'App Two' }, { id: 'app_three', label: 'App Three' }]
	}];

	var Example = (0, _createReactClass2.default)({
		displayName: 'NavigationExample',

		getInitialState: function getInitialState() {
			return {
				selectedId: 'top'
			};
		},
		render: function render() {
			var _this = this;

			return _react2.default.createElement(
				_iconSettings2.default,
				{ iconPath: '/assets/icons' },
				_react2.default.createElement(
					'div',
					{ style: { width: '320px', backgroundColor: '#FAFAFB' } },
					_react2.default.createElement(_navigation2.default, {
						id: 'sample-navigation',
						variant: 'shade',
						categories: sampleSearchCategories,
						selectedId: this.state.selectedId,
						onSelect: function onSelect(event, data) {
							_this.setState({ selectedId: data.item.id });
							if (_this.props.action) {
								var dataAsArray = Object.keys(data).map(function (key) {
									return data[key];
								});
								_this.props.action('onSelect').apply(undefined, [event, data].concat(_toConsumableArray(dataAsArray)));
							} else if (console) {
								console.log('[onSelect] (event, data)', event, data);
							}
						}
					})
				)
			);
		}
	});

	exports.default = Example;
});