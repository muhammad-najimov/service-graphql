"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Module = Module;

var _util = _interopRequireDefault(require("util"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _graphqlTag = _interopRequireDefault(require("graphql-tag"));

var _this4 = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function Module(options) {
  return function (classRef) {
    return (
      /*#__PURE__*/
      function (_classRef) {
        _inherits(App, _classRef);

        function App() {
          var _this;

          _classCallCheck(this, App);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this));

          if (options && _typeof(options.imports) == 'object') {
            var mods = [];
            return _possibleConstructorReturn(_this, _asyncToGenerator(
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee() {
              var readFile, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, mod, _service, exportModule;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      readFile = _util["default"].promisify(_fs["default"].readFile);
                      _iteratorNormalCompletion = true;
                      _didIteratorError = false;
                      _iteratorError = undefined;
                      _context.prev = 4;
                      _iterator = options.imports[Symbol.iterator]();

                    case 6:
                      if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                        _context.next = 23;
                        break;
                      }

                      mod = _step.value;
                      _service = new mod();
                      exportModule = {
                        resolvers: _service.resolvers
                      };

                      if (!_service.schemaUrl) {
                        _context.next = 18;
                        break;
                      }

                      _context.t0 = _graphqlTag["default"];
                      _context.next = 14;
                      return readFile(_path["default"].normalize(_service.schemaUrl), 'utf8');

                    case 14:
                      _context.t1 = _context.sent;
                      exportModule.typeDefs = (0, _context.t0)(_context.t1);
                      _context.next = 19;
                      break;

                    case 18:
                      if (_service.schema) {
                        exportModule.typeDefs = (0, _graphqlTag["default"])(_service.schema);
                      }

                    case 19:
                      mods.push(exportModule);

                    case 20:
                      _iteratorNormalCompletion = true;
                      _context.next = 6;
                      break;

                    case 23:
                      _context.next = 29;
                      break;

                    case 25:
                      _context.prev = 25;
                      _context.t2 = _context["catch"](4);
                      _didIteratorError = true;
                      _iteratorError = _context.t2;

                    case 29:
                      _context.prev = 29;
                      _context.prev = 30;

                      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                        _iterator["return"]();
                      }

                    case 32:
                      _context.prev = 32;

                      if (!_didIteratorError) {
                        _context.next = 35;
                        break;
                      }

                      throw _iteratorError;

                    case 35:
                      return _context.finish(32);

                    case 36:
                      return _context.finish(29);

                    case 37:
                      return _context.abrupt("return", mods);

                    case 38:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, null, [[4, 25, 29, 37], [30,, 32, 36]]);
            }))());
          }

          return _this;
        }

        return App;
      }(classRef)
    );
  };
}

function Constructor(prototype, options) {
  var _this$resolvers;

  var keys = Reflect.ownKeys(prototype);
  var type = options.name || prototype.constructor.name;
  this.resolvers = (_this$resolvers = {}, _defineProperty(_this$resolvers, type, {}), _defineProperty(_this$resolvers, "Query", {}), _defineProperty(_this$resolvers, "Mutation", {}), _defineProperty(_this$resolvers, "Subscription", {}), _this$resolvers);
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = keys[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var key = _step2.value;

      if (_typeof(this[key]) == 'object') {
        this.resolvers[this[key].type == 'Field' ? type : this[key].type][this[key].name] = this[key].type == 'Subscription' ? {
          resolve: function resolve(p) {
            return p;
          },
          subscribe: this[key].handler.bind(this)
        } : this[key].handler.bind(this);
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  if (options.schema) this.schema = options.schema;
  if (options.schemaUrl) this.schemaUrl = _path["default"].join(_path["default"].normalize(process.mainModule.children[1].children[1].path), options.schemaUrl);
}

var Desc = function Desc(type, name) {
  return function (t, n, d) {
    d.value = {
      handler: d.value,
      type: type,
      name: name || d.value.name
    };
  };
};

var service = function service(input) {
  return typeof input == 'function' ?
  /*#__PURE__*/
  function (_input) {
    _inherits(Service, _input);

    function Service() {
      var _this2;

      _classCallCheck(this, Service);

      _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Service).call(this));
      Constructor.call(_assertThisInitialized(_this2), input.prototype);
      return _this2;
    }

    return Service;
  }(input) : function (classRef) {
    return (
      /*#__PURE__*/
      function (_classRef2) {
        _inherits(Service, _classRef2);

        function Service() {
          var _this3;

          _classCallCheck(this, Service);

          _this3 = _possibleConstructorReturn(this, _getPrototypeOf(Service).call(this));
          Constructor.call(_assertThisInitialized(_this3), classRef.prototype, input);
          return _this3;
        }

        return Service;
      }(classRef)
    );
  };
};

var query = function query(t, n, d) {
  return typeof d != 'undefined' ? Desc.call(_this4, 'Query').call(t, t, n, d) : Desc.call(_this4, 'Query', t);
};

var mutation = function mutation(t, n, d) {
  return typeof d != 'undefined' ? Desc.call(_this4, 'Mutation').call(_this4, t, n, d) : Desc.call(_this4, 'Mutation', t);
};

var subscription = function subscription(t, n, d) {
  return typeof d != 'undefined' ? Desc.call(_this4, 'Subscription').call(_this4, t, n, d) : Desc.call(_this4, 'Subscription', t);
};

var field = function field(t, n, d) {
  return typeof d != 'undefined' ? Desc.call(_this4, 'Field').call(_this4, t, n, d) : Desc.call(_this4, 'Field', t);
};

module.exports.service = service;
module.exports.query = query;
module.exports.mutation = mutation;
module.exports.subscription = subscription;
module.exports.field = field;
module.exports.lib = {
  Module: Module,
  service: service,
  query: query,
  mutation: mutation,
  subscription: subscription,
  field: field
};