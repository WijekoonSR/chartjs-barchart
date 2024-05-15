"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var BarChart = function BarChart(_ref) {
  var label = _ref.label,
    onClick = _ref.onClick;
  return /*#__PURE__*/_react["default"].createElement("button", {
    onClick: onClick
  }, label);
};
var _default = exports["default"] = BarChart;
