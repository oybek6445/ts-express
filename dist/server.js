"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const bookRoutes_1 = __importDefault(require("./routes/bookRoutes"));
dotenv_1.default.config();
let expressApp = (0, express_1.default)();
expressApp.use(express_1.default.json());
const PORT = 3000;
expressApp.use('/', bookRoutes_1.default);
expressApp.listen(PORT, () => {
    console.log(`server ${PORT}da ishga tushdi`);
});
