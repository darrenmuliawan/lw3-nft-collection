"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _Users_darrenmuliawan_Desktop_Projects_solidity_learnweb3_collection_my_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_darrenmuliawan_Desktop_Projects_solidity_learnweb3_collection_my_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_darrenmuliawan_Desktop_Projects_solidity_learnweb3_collection_my_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! web3modal */ \"./node_modules/web3modal/dist/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants */ \"./constants/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_constants__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    // walletConnected keep track of whether the user's wallet is connected or not\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false), walletConnected = ref[0], setWalletConnected = ref[1];\n    // presaleStarted keeps track of whether the presale has started or not\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false), presaleStarted = ref1[0], setPresaleStarted = ref1[1];\n    // presaleEnded keeps track of whether the presale ended\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false), presaleEnded = ref2[0], setPresaleEnded = ref2[1];\n    // loading is set to true when we are waiting for a transaction to get mined\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false), loading = ref3[0], setLoading = ref3[1];\n    // checks if the currently connected MetaMask wallet is the owner of the contract\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false), isOwner = ref4[0], setIsOwner = ref4[1];\n    // tokenIdsMinted keeps track of the number of tokenIds that have been minted\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(\"0\"), tokenIdsMinted = ref5[0], setTokenIdsMinted = ref5[1];\n    // Create a reference to the Web3 Modal (used for connecting to Metamask) which persists as long as the page is open\n    var web3ModalRef = (0,react__WEBPACK_IMPORTED_MODULE_6__.useRef)();\n    var abi = _constants__WEBPACK_IMPORTED_MODULE_5__.CONTRACT_ABI.abi;\n    var getProviderOrSigner = function() {\n        var _ref = _asyncToGenerator(_Users_darrenmuliawan_Desktop_Projects_solidity_learnweb3_collection_my_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var needSigner, provider, web3Provider, chainId, signer, _args = arguments;\n            return _Users_darrenmuliawan_Desktop_Projects_solidity_learnweb3_collection_my_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        needSigner = _args.length > 0 && _args[0] !== void 0 ? _args[0] : false;\n                        _ctx.next = 3;\n                        return web3ModalRef.current.connect();\n                    case 3:\n                        provider = _ctx.sent;\n                        web3Provider = new ethers__WEBPACK_IMPORTED_MODULE_7__.providers.Web3Provider(provider);\n                        _ctx.next = 7;\n                        return web3Provider.getNetwork();\n                    case 7:\n                        chainId = _ctx.sent.chainId;\n                        if (!(chainId !== 4)) {\n                            _ctx.next = 11;\n                            break;\n                        }\n                        window.alert('not connected to Rinkeby');\n                        throw new Error(\"not connected to Rinkeby\");\n                    case 11:\n                        if (!needSigner) {\n                            _ctx.next = 14;\n                            break;\n                        }\n                        signer = web3Provider.getSigner();\n                        return _ctx.abrupt(\"return\", signer);\n                    case 14:\n                        return _ctx.abrupt(\"return\", web3Provider);\n                    case 15:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getProviderOrSigner() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var presaleMint = function() {\n        var _ref = _asyncToGenerator(_Users_darrenmuliawan_Desktop_Projects_solidity_learnweb3_collection_my_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var signer, whitelistContract;\n            return _Users_darrenmuliawan_Desktop_Projects_solidity_learnweb3_collection_my_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return getProviderOrSigner(true);\n                    case 3:\n                        signer = _ctx.sent;\n                        whitelistContract = new ethers__WEBPACK_IMPORTED_MODULE_7__.Contract(_constants__WEBPACK_IMPORTED_MODULE_5__.NFT_CONTRACT_ADDRESS, abi, signer);\n                        _ctx.next = 10;\n                        break;\n                    case 7:\n                        _ctx.prev = 7;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0);\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    7\n                ]\n            ]);\n        }));\n        return function presaleMint() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var publicMint = function() {\n        var _ref = _asyncToGenerator(_Users_darrenmuliawan_Desktop_Projects_solidity_learnweb3_collection_my_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _Users_darrenmuliawan_Desktop_Projects_solidity_learnweb3_collection_my_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function publicMint() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var connectWallet = function() {\n        var _ref = _asyncToGenerator(_Users_darrenmuliawan_Desktop_Projects_solidity_learnweb3_collection_my_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _Users_darrenmuliawan_Desktop_Projects_solidity_learnweb3_collection_my_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function connectWallet() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var startPresale = function() {\n        var _ref = _asyncToGenerator(_Users_darrenmuliawan_Desktop_Projects_solidity_learnweb3_collection_my_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _Users_darrenmuliawan_Desktop_Projects_solidity_learnweb3_collection_my_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function startPresale() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var checkIfPresaleStarted = function() {\n        var _ref = _asyncToGenerator(_Users_darrenmuliawan_Desktop_Projects_solidity_learnweb3_collection_my_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _Users_darrenmuliawan_Desktop_Projects_solidity_learnweb3_collection_my_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function checkIfPresaleStarted() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var checkIfPresaleEnded = function() {\n        var _ref = _asyncToGenerator(_Users_darrenmuliawan_Desktop_Projects_solidity_learnweb3_collection_my_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _Users_darrenmuliawan_Desktop_Projects_solidity_learnweb3_collection_my_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function checkIfPresaleEnded() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var getOwner = function() {\n        var _ref = _asyncToGenerator(_Users_darrenmuliawan_Desktop_Projects_solidity_learnweb3_collection_my_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _Users_darrenmuliawan_Desktop_Projects_solidity_learnweb3_collection_my_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getOwner() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var getTokenIdsMinted = function() {\n        var _ref = _asyncToGenerator(_Users_darrenmuliawan_Desktop_Projects_solidity_learnweb3_collection_my_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _Users_darrenmuliawan_Desktop_Projects_solidity_learnweb3_collection_my_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getTokenIdsMinted() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var renderButton = function() {};\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \"Crypto Devs\"\n                    }, void 0, false, {\n                        fileName: \"/Users/darrenmuliawan/Desktop/Projects/solidity/learnweb3-collection/my-app/pages/index.js\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Whitelist-Dapp\"\n                    }, void 0, false, {\n                        fileName: \"/Users/darrenmuliawan/Desktop/Projects/solidity/learnweb3-collection/my-app/pages/index.js\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/darrenmuliawan/Desktop/Projects/solidity/learnweb3-collection/my-app/pages/index.js\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/darrenmuliawan/Desktop/Projects/solidity/learnweb3-collection/my-app/pages/index.js\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().title),\n                                children: \"Welcome to Crypto Devs!\"\n                            }, void 0, false, {\n                                fileName: \"/Users/darrenmuliawan/Desktop/Projects/solidity/learnweb3-collection/my-app/pages/index.js\",\n                                lineNumber: 99,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().description),\n                                children: \"Its an NFT collection for developers in Crypto.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/darrenmuliawan/Desktop/Projects/solidity/learnweb3-collection/my-app/pages/index.js\",\n                                lineNumber: 100,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().description),\n                                children: [\n                                    tokenIdsMinted,\n                                    \"/20 have been minted\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/darrenmuliawan/Desktop/Projects/solidity/learnweb3-collection/my-app/pages/index.js\",\n                                lineNumber: 103,\n                                columnNumber: 11\n                            }, this),\n                            renderButton()\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/darrenmuliawan/Desktop/Projects/solidity/learnweb3-collection/my-app/pages/index.js\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().image),\n                            src: \"./cryptodevs/0.svg\"\n                        }, void 0, false, {\n                            fileName: \"/Users/darrenmuliawan/Desktop/Projects/solidity/learnweb3-collection/my-app/pages/index.js\",\n                            lineNumber: 109,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/darrenmuliawan/Desktop/Projects/solidity/learnweb3-collection/my-app/pages/index.js\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/darrenmuliawan/Desktop/Projects/solidity/learnweb3-collection/my-app/pages/index.js\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"footer\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().footer),\n                children: \"Made with ❤ by Crypto Devs\"\n            }, void 0, false, {\n                fileName: \"/Users/darrenmuliawan/Desktop/Projects/solidity/learnweb3-collection/my-app/pages/index.js\",\n                lineNumber: 113,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/darrenmuliawan/Desktop/Projects/solidity/learnweb3-collection/my-app/pages/index.js\",\n        lineNumber: 91,\n        columnNumber: 5\n    }, this));\n};\n_s(Home, \"n6VbK2xde9uqmwLOmBgBOByktGk=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEI7QUFDRTtBQUNnQjtBQUNLO0FBQ2xCO0FBQ2dDO0FBQ1A7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0MsUUFBUSxDQUFDYSxJQUFJLEdBQUcsQ0FBQzs7SUFDOUIsRUFBOEU7SUFDOUUsR0FBSyxDQUF5Q0YsR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssR0FBckRHLGVBQWUsR0FBd0JILEdBQWUsS0FBckNJLGtCQUFrQixHQUFJSixHQUFlO0lBQzdELEVBQXVFO0lBQ3ZFLEdBQUssQ0FBdUNBLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLEdBQW5ESyxjQUFjLEdBQXVCTCxJQUFlLEtBQXBDTSxpQkFBaUIsR0FBSU4sSUFBZTtJQUMzRCxFQUF3RDtJQUN4RCxHQUFLLENBQW1DQSxJQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxHQUEvQ08sWUFBWSxHQUFxQlAsSUFBZSxLQUFsQ1EsZUFBZSxHQUFJUixJQUFlO0lBQ3ZELEVBQTRFO0lBQzVFLEdBQUssQ0FBeUJBLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLEdBQXJDUyxPQUFPLEdBQWdCVCxJQUFlLEtBQTdCVSxVQUFVLEdBQUlWLElBQWU7SUFDN0MsRUFBaUY7SUFDakYsR0FBSyxDQUF5QkEsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssR0FBckNXLE9BQU8sR0FBZ0JYLElBQWUsS0FBN0JZLFVBQVUsR0FBSVosSUFBZTtJQUM3QyxFQUE2RTtJQUM3RSxHQUFLLENBQXVDQSxJQUFhLEdBQWJBLCtDQUFRLENBQUMsQ0FBRyxLQUFqRGEsY0FBYyxHQUF1QmIsSUFBYSxLQUFsQ2MsaUJBQWlCLEdBQUlkLElBQWE7SUFDekQsRUFBb0g7SUFDcEgsR0FBSyxDQUFDZSxZQUFZLEdBQUdkLDZDQUFNO0lBQzNCLEdBQUssQ0FBQ2UsR0FBRyxHQUFHbkIsd0RBQWdCO0lBRTVCLEdBQUssQ0FBQ29CLG1CQUFtQjs0TkFBRyxRQUFRLFdBQXNCLENBQUM7Z0JBQXhCQyxVQUFVLEVBQ3JDQyxRQUFRLEVBQ1JDLFlBQVksRUFHVkMsT0FBTyxFQU9QQyxNQUFNOzs7O3dCQVptQkosVUFBVSx3REFBRyxLQUFLOzsrQkFDNUJILFlBQVksQ0FBQ1EsT0FBTyxDQUFDQyxPQUFPOzt3QkFBN0NMLFFBQVE7d0JBQ1JDLFlBQVksR0FBRyxHQUFHLENBQUMzQiwwREFBc0IsQ0FBQzBCLFFBQVE7OytCQUc5QkMsWUFBWSxDQUFDTSxVQUFVOzt3QkFBekNMLE9BQU8sYUFBUEEsT0FBTzs4QkFDWEEsT0FBTyxLQUFLLENBQUM7Ozs7d0JBQ2ZNLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLENBQTBCO3dCQUN2QyxLQUFLLENBQUMsR0FBRyxDQUFDQyxLQUFLLENBQUMsQ0FBMEI7OzZCQUd4Q1gsVUFBVTs7Ozt3QkFDTkksTUFBTSxHQUFHRixZQUFZLENBQUNVLFNBQVM7cURBQzlCUixNQUFNOztxREFFUkYsWUFBWTs7Ozs7O1FBQ3JCLENBQUM7d0JBaEJLSCxtQkFBbUI7Ozs7SUFrQnpCLEdBQUssQ0FBQ2MsV0FBVzs0TkFBRyxRQUFRLFdBQUksQ0FBQztnQkFFdkJULE1BQU0sRUFDTlUsaUJBQWlCOzs7Ozs7K0JBREZmLG1CQUFtQixDQUFDLElBQUk7O3dCQUF2Q0ssTUFBTTt3QkFDTlUsaUJBQWlCLEdBQUcsR0FBRyxDQUFDeEMsNENBQVEsQ0FDcENJLDREQUFvQixFQUNwQm9CLEdBQUcsRUFDSE0sTUFBTTs7Ozs7O3dCQUlSVyxPQUFPLENBQUNDLEdBQUc7Ozs7Ozs7Ozs7O1FBRWYsQ0FBQzt3QkFaS0gsV0FBVzs7OztJQWNqQixHQUFLLENBQUNJLFVBQVU7NE5BQUcsUUFBUSxXQUFJLENBQUM7Ozs7Ozs7O1FBRWhDLENBQUM7d0JBRktBLFVBQVU7Ozs7SUFJaEIsR0FBSyxDQUFDQyxhQUFhOzROQUFHLFFBQVEsV0FBSSxDQUFDOzs7Ozs7OztRQUVuQyxDQUFDO3dCQUZLQSxhQUFhOzs7O0lBSW5CLEdBQUssQ0FBQ0MsWUFBWTs0TkFBRyxRQUFRLFdBQUksQ0FBQzs7Ozs7Ozs7UUFFbEMsQ0FBQzt3QkFGS0EsWUFBWTs7OztJQUlsQixHQUFLLENBQUNDLHFCQUFxQjs0TkFBRyxRQUFRLFdBQUksQ0FBQzs7Ozs7Ozs7UUFFM0MsQ0FBQzt3QkFGS0EscUJBQXFCOzs7O0lBSTNCLEdBQUssQ0FBQ0MsbUJBQW1COzROQUFHLFFBQVEsV0FBSSxDQUFDOzs7Ozs7OztRQUV6QyxDQUFDO3dCQUZLQSxtQkFBbUI7Ozs7SUFJekIsR0FBSyxDQUFDQyxRQUFROzROQUFHLFFBQVEsV0FBSSxDQUFDOzs7Ozs7OztRQUU5QixDQUFDO3dCQUZLQSxRQUFROzs7O0lBSWQsR0FBSyxDQUFDQyxpQkFBaUI7NE5BQUcsUUFBUSxXQUFJLENBQUM7Ozs7Ozs7O1FBRXZDLENBQUM7d0JBRktBLGlCQUFpQjs7OztJQUl2QixHQUFLLENBQUNDLFlBQVksR0FBRyxRQUN2QixHQUQ2QixDQUFDLENBRTNCO0lBRUQsTUFBTSw2RUFDSEMsQ0FBRzs7d0ZBQ0R0RCxrREFBSTs7Z0dBQ0Z1RCxDQUFLO2tDQUFDLENBQVc7Ozs7OztnR0FDakJDLENBQUk7d0JBQUNDLElBQUksRUFBQyxDQUFhO3dCQUFDQyxPQUFPLEVBQUMsQ0FBZ0I7Ozs7OztnR0FDaERDLENBQUk7d0JBQUNDLEdBQUcsRUFBQyxDQUFNO3dCQUFDQyxJQUFJLEVBQUMsQ0FBYzs7Ozs7Ozs7Ozs7O3dGQUVyQ1AsQ0FBRztnQkFBQ1EsU0FBUyxFQUFFNUQscUVBQVc7O2dHQUN4Qm9ELENBQUc7O3dHQUNEVSxDQUFFO2dDQUFDRixTQUFTLEVBQUU1RCxzRUFBWTswQ0FBRSxDQUF1Qjs7Ozs7O3dHQUNuRG9ELENBQUc7Z0NBQUNRLFNBQVMsRUFBRTVELDRFQUFrQjswQ0FBRSxDQUVwQzs7Ozs7O3dHQUNDb0QsQ0FBRztnQ0FBQ1EsU0FBUyxFQUFFNUQsNEVBQWtCOztvQ0FDL0JzQixjQUFjO29DQUFDLENBQ2xCOzs7Ozs7OzRCQUNDNkIsWUFBWTs7Ozs7OztnR0FFZEMsQ0FBRzs4R0FDRFksQ0FBRzs0QkFBQ0osU0FBUyxFQUFFNUQsc0VBQVk7NEJBQUVrRSxHQUFHLEVBQUMsQ0FBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7O3dGQUl6REMsQ0FBTTtnQkFBQ1AsU0FBUyxFQUFFNUQsdUVBQWE7MEJBQUUsQ0FFbEM7Ozs7Ozs7Ozs7OztBQUdOLENBQUM7R0E3R3VCVyxJQUFJO0tBQUpBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCB7IENvbnRyYWN0LCBwcm92aWRlcnMsIHV0aWxzIH0gZnJvbSAnZXRoZXJzJztcbmltcG9ydCBXZWIzTW9kYWwgZnJvbSAnd2ViM21vZGFsJztcbmltcG9ydCB7IE5GVF9DT05UUkFDVF9BRERSRVNTLCBDT05UUkFDVF9BQkkgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgLy8gd2FsbGV0Q29ubmVjdGVkIGtlZXAgdHJhY2sgb2Ygd2hldGhlciB0aGUgdXNlcidzIHdhbGxldCBpcyBjb25uZWN0ZWQgb3Igbm90XG4gIGNvbnN0IFt3YWxsZXRDb25uZWN0ZWQsIHNldFdhbGxldENvbm5lY3RlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIC8vIHByZXNhbGVTdGFydGVkIGtlZXBzIHRyYWNrIG9mIHdoZXRoZXIgdGhlIHByZXNhbGUgaGFzIHN0YXJ0ZWQgb3Igbm90XG4gIGNvbnN0IFtwcmVzYWxlU3RhcnRlZCwgc2V0UHJlc2FsZVN0YXJ0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAvLyBwcmVzYWxlRW5kZWQga2VlcHMgdHJhY2sgb2Ygd2hldGhlciB0aGUgcHJlc2FsZSBlbmRlZFxuICBjb25zdCBbcHJlc2FsZUVuZGVkLCBzZXRQcmVzYWxlRW5kZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAvLyBsb2FkaW5nIGlzIHNldCB0byB0cnVlIHdoZW4gd2UgYXJlIHdhaXRpbmcgZm9yIGEgdHJhbnNhY3Rpb24gdG8gZ2V0IG1pbmVkXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgLy8gY2hlY2tzIGlmIHRoZSBjdXJyZW50bHkgY29ubmVjdGVkIE1ldGFNYXNrIHdhbGxldCBpcyB0aGUgb3duZXIgb2YgdGhlIGNvbnRyYWN0XG4gIGNvbnN0IFtpc093bmVyLCBzZXRJc093bmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgLy8gdG9rZW5JZHNNaW50ZWQga2VlcHMgdHJhY2sgb2YgdGhlIG51bWJlciBvZiB0b2tlbklkcyB0aGF0IGhhdmUgYmVlbiBtaW50ZWRcbiAgY29uc3QgW3Rva2VuSWRzTWludGVkLCBzZXRUb2tlbklkc01pbnRlZF0gPSB1c2VTdGF0ZShcIjBcIik7XG4gIC8vIENyZWF0ZSBhIHJlZmVyZW5jZSB0byB0aGUgV2ViMyBNb2RhbCAodXNlZCBmb3IgY29ubmVjdGluZyB0byBNZXRhbWFzaykgd2hpY2ggcGVyc2lzdHMgYXMgbG9uZyBhcyB0aGUgcGFnZSBpcyBvcGVuXG4gIGNvbnN0IHdlYjNNb2RhbFJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBhYmkgPSBDT05UUkFDVF9BQkkuYWJpO1xuXG4gIGNvbnN0IGdldFByb3ZpZGVyT3JTaWduZXIgPSBhc3luYyAobmVlZFNpZ25lciA9IGZhbHNlKSA9PiB7XG4gICAgY29uc3QgcHJvdmlkZXIgPSBhd2FpdCB3ZWIzTW9kYWxSZWYuY3VycmVudC5jb25uZWN0KCk7XG4gICAgY29uc3Qgd2ViM1Byb3ZpZGVyID0gbmV3IHByb3ZpZGVycy5XZWIzUHJvdmlkZXIocHJvdmlkZXIpO1xuXG4gICAgLy8gdGhyb3cgYW4gZXJyb3IgaWYgdXNlciBpcyBub3QgY29ubmVjdGVkIHRvIFJpbmtlYnkgbmV0d29ya1xuICAgIGNvbnN0IHsgY2hhaW5JZCB9ID0gYXdhaXQgd2ViM1Byb3ZpZGVyLmdldE5ldHdvcmsoKTtcbiAgICBpZiAoY2hhaW5JZCAhPT0gNCkge1xuICAgICAgd2luZG93LmFsZXJ0KCdub3QgY29ubmVjdGVkIHRvIFJpbmtlYnknKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vdCBjb25uZWN0ZWQgdG8gUmlua2VieVwiKTtcbiAgICB9XG5cbiAgICBpZiAobmVlZFNpZ25lcikge1xuICAgICAgY29uc3Qgc2lnbmVyID0gd2ViM1Byb3ZpZGVyLmdldFNpZ25lcigpO1xuICAgICAgcmV0dXJuIHNpZ25lcjtcbiAgICB9XG4gICAgcmV0dXJuIHdlYjNQcm92aWRlcjtcbiAgfVxuXG4gIGNvbnN0IHByZXNhbGVNaW50ID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBzaWduZXIgPSBhd2FpdCBnZXRQcm92aWRlck9yU2lnbmVyKHRydWUpO1xuICAgICAgY29uc3Qgd2hpdGVsaXN0Q29udHJhY3QgPSBuZXcgQ29udHJhY3QoXG4gICAgICAgIE5GVF9DT05UUkFDVF9BRERSRVNTLFxuICAgICAgICBhYmksXG4gICAgICAgIHNpZ25lclxuICAgICAgKVxuICAgICAgXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHB1YmxpY01pbnQgPSBhc3luYyAoKSA9PiB7XG5cbiAgfVxuXG4gIGNvbnN0IGNvbm5lY3RXYWxsZXQgPSBhc3luYyAoKSA9PiB7XG5cbiAgfVxuXG4gIGNvbnN0IHN0YXJ0UHJlc2FsZSA9IGFzeW5jICgpID0+IHtcblxuICB9XG5cbiAgY29uc3QgY2hlY2tJZlByZXNhbGVTdGFydGVkID0gYXN5bmMgKCkgPT4ge1xuXG4gIH1cblxuICBjb25zdCBjaGVja0lmUHJlc2FsZUVuZGVkID0gYXN5bmMgKCkgPT4ge1xuXG4gIH1cblxuICBjb25zdCBnZXRPd25lciA9IGFzeW5jICgpID0+IHtcblxuICB9XG5cbiAgY29uc3QgZ2V0VG9rZW5JZHNNaW50ZWQgPSBhc3luYyAoKSA9PiB7XG5cbiAgfVxuXG4gIGNvbnN0IHJlbmRlckJ1dHRvbiA9ICgpID0+IHtcblxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DcnlwdG8gRGV2czwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJXaGl0ZWxpc3QtRGFwcFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5XZWxjb21lIHRvIENyeXB0byBEZXZzITwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgICBJdHMgYW4gTkZUIGNvbGxlY3Rpb24gZm9yIGRldmVsb3BlcnMgaW4gQ3J5cHRvLlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgICAge3Rva2VuSWRzTWludGVkfS8yMCBoYXZlIGJlZW4gbWludGVkXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge3JlbmRlckJ1dHRvbigpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmltYWdlfSBzcmM9XCIuL2NyeXB0b2RldnMvMC5zdmdcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XG4gICAgICAgIE1hZGUgd2l0aCAmIzEwMDg0OyBieSBDcnlwdG8gRGV2c1xuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiSW1hZ2UiLCJzdHlsZXMiLCJDb250cmFjdCIsInByb3ZpZGVycyIsInV0aWxzIiwiV2ViM01vZGFsIiwiTkZUX0NPTlRSQUNUX0FERFJFU1MiLCJDT05UUkFDVF9BQkkiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwiSG9tZSIsIndhbGxldENvbm5lY3RlZCIsInNldFdhbGxldENvbm5lY3RlZCIsInByZXNhbGVTdGFydGVkIiwic2V0UHJlc2FsZVN0YXJ0ZWQiLCJwcmVzYWxlRW5kZWQiLCJzZXRQcmVzYWxlRW5kZWQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImlzT3duZXIiLCJzZXRJc093bmVyIiwidG9rZW5JZHNNaW50ZWQiLCJzZXRUb2tlbklkc01pbnRlZCIsIndlYjNNb2RhbFJlZiIsImFiaSIsImdldFByb3ZpZGVyT3JTaWduZXIiLCJuZWVkU2lnbmVyIiwicHJvdmlkZXIiLCJ3ZWIzUHJvdmlkZXIiLCJjaGFpbklkIiwic2lnbmVyIiwiY3VycmVudCIsImNvbm5lY3QiLCJXZWIzUHJvdmlkZXIiLCJnZXROZXR3b3JrIiwid2luZG93IiwiYWxlcnQiLCJFcnJvciIsImdldFNpZ25lciIsInByZXNhbGVNaW50Iiwid2hpdGVsaXN0Q29udHJhY3QiLCJjb25zb2xlIiwibG9nIiwicHVibGljTWludCIsImNvbm5lY3RXYWxsZXQiLCJzdGFydFByZXNhbGUiLCJjaGVja0lmUHJlc2FsZVN0YXJ0ZWQiLCJjaGVja0lmUHJlc2FsZUVuZGVkIiwiZ2V0T3duZXIiLCJnZXRUb2tlbklkc01pbnRlZCIsInJlbmRlckJ1dHRvbiIsImRpdiIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJjbGFzc05hbWUiLCJtYWluIiwiaDEiLCJkZXNjcmlwdGlvbiIsImltZyIsImltYWdlIiwic3JjIiwiZm9vdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});