"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const server_1 = require("../server");
const createNew = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const condition = joi_1.default.object({
        boardId: joi_1.default.string().required(),
        title: joi_1.default.string().required().min(1).max(255).trim(),
    });
    try {
        yield condition.validateAsync(req.body, { abortEarly: false });
        next();
    }
    catch (error) {
        res
            .status(server_1.StatusCode.ERROR)
            .json({ error: new Error(error).message });
    }
});
const update = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const condition = joi_1.default.object({
        title: joi_1.default.string().min(1).max(255).trim(),
    });
    try {
        yield condition.validateAsync(req.body, {
            abortEarly: false,
            allowUnknown: true,
        });
        next();
    }
    catch (error) {
        res
            .status(server_1.StatusCode.ERROR)
            .json({ error: new Error(error).message });
    }
});
exports.ColumnValidation = { createNew, update };
