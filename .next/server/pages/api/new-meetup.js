"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/new-meetup";
exports.ids = ["pages/api/new-meetup"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/new-meetup.js":
/*!*********************************!*\
  !*** ./pages/api/new-meetup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    console.log(\"connection1\");\n    const data = req.body;\n    console.log(\"connection2\");\n    // store in the database\n    const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(\"mongodb+srv://Admin-krishna:iO4KVeK4qWJfGDRd@cluster0.yaob0.mongodb.net/meetups?retryWrites=true&w=majority\");\n    const db = client.db();\n    const meetupsCollections = db.collection(\"meetups\");\n    const result = await meetupsCollections.insertOne(data);\n    console.log(result);\n    client.close(); // to close the database\n    res.status(201).json({\n        message: \"meetup inserted\"\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBb0M7QUFFckIsZUFBZUMsUUFBUUMsR0FBRyxFQUFDQyxHQUFHO0lBQ3pDQyxRQUFRQyxHQUFHLENBQUM7SUFDWixNQUFNQyxPQUFPSixJQUFJSyxJQUFJO0lBQ3JCSCxRQUFRQyxHQUFHLENBQUM7SUFFWix3QkFBd0I7SUFFeEIsTUFBTUcsU0FBUyxNQUFNUixnREFBV0EsQ0FBQ1MsT0FBTyxDQUFDO0lBQ3pDLE1BQU1DLEtBQUtGLE9BQU9FLEVBQUU7SUFFcEIsTUFBTUMscUJBQXFCRCxHQUFHRSxVQUFVLENBQUM7SUFFekMsTUFBTUMsU0FBUyxNQUFNRixtQkFBbUJHLFNBQVMsQ0FBQ1I7SUFDbERGLFFBQVFDLEdBQUcsQ0FBQ1E7SUFDWkwsT0FBT08sS0FBSyxJQUFJLHdCQUF3QjtJQUN4Q1osSUFBSWEsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztRQUFDQyxTQUFRO0lBQWlCO0FBRW5EIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWNvdXJzZS8uL3BhZ2VzL2FwaS9uZXctbWVldHVwLmpzPzczOTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNb25nb0NsaWVudH0gZnJvbSBcIm1vbmdvZGJcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEscmVzKXtcbiAgICBjb25zb2xlLmxvZyhcImNvbm5lY3Rpb24xXCIpXG4gICAgY29uc3QgZGF0YSA9IHJlcS5ib2R5O1xuICAgIGNvbnNvbGUubG9nKFwiY29ubmVjdGlvbjJcIik7XG5cbiAgICAvLyBzdG9yZSBpbiB0aGUgZGF0YWJhc2VcblxuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXCJtb25nb2RiK3NydjovL0FkbWluLWtyaXNobmE6aU80S1ZlSzRxV0pmR0RSZEBjbHVzdGVyMC55YW9iMC5tb25nb2RiLm5ldC9tZWV0dXBzP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eVwiKTtcbiAgICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xuXG4gICAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb25zID0gZGIuY29sbGVjdGlvbihcIm1lZXR1cHNcIik7XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbnMuaW5zZXJ0T25lKGRhdGEpO1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgY2xpZW50LmNsb3NlKCk7IC8vIHRvIGNsb3NlIHRoZSBkYXRhYmFzZVxuICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHttZXNzYWdlOlwibWVldHVwIGluc2VydGVkXCJ9KVxuXG59XG5cbiJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImJvZHkiLCJjbGllbnQiLCJjb25uZWN0IiwiZGIiLCJtZWV0dXBzQ29sbGVjdGlvbnMiLCJjb2xsZWN0aW9uIiwicmVzdWx0IiwiaW5zZXJ0T25lIiwiY2xvc2UiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/new-meetup.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/new-meetup.js"));
module.exports = __webpack_exports__;

})();