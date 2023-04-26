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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnController = void 0;
const server_1 = require("../server");
const column_service_1 = require("../services/column.service");
const createNew = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield column_service_1.ColumnService.createNew(req.body);
        res.status(server_1.StatusCode.OK).json(result);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(server_1.StatusCode.SERVER_ERROR).json({ error: error.message });
        }
        else {
            res
                .status(server_1.StatusCode.SERVER_ERROR)
                .json({ error: "An unknown error occurred." });
        }
    }
});
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield column_service_1.ColumnService.update(id, req.body);
        res.status(server_1.StatusCode.OK).json(result);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(server_1.StatusCode.SERVER_ERROR).json({ error: error.message });
        }
        else {
            res
                .status(server_1.StatusCode.SERVER_ERROR)
                .json({ error: "An unknown error occurred." });
        }
    }
});
exports.ColumnController = { createNew, update };
