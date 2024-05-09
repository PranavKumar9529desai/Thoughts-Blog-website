"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = __importDefault(require("zod"));
const hasUppercase = (str) => /[A-Z]/.test(str);
const hasLowercase = (str) => /[a-z]/.test(str);
const hasNumber = (str) => /\d/.test(str);
const hasSymbol = (str) => /[!@#$%^&*]/.test(str);
const SignupInput = zod_1.default.object({
    email: zod_1.default.string().email('Invliad email format'),
    password: zod_1.default.string()
        .min(6, "Password must be of minimum of 6 letters")
}).refine((value) => hasUppercase(value.password) &&
    hasLowercase(value.password) &&
    hasNumber(value.password) &&
    hasSymbol(value.password), 'Password must contain uppercase, lowercase, numbers, and symbols');
const signinInput = zod_1.default.object({
    email: zod_1.default.string().email('Invliad email format'),
    password: zod_1.default.string()
        .min(6, "Password must be of minimum of 6 letters")
}).refine((value) => hasUppercase(value.password) &&
    hasLowercase(value.password) &&
    hasNumber(value.password) &&
    hasSymbol(value.password), 'Password must contain uppercase, lowercase, numbers, and symbols');
const createPostInput = zod_1.default.object({
    title: zod_1.default.string().min(7, "Invalid title"),
    content: zod_1.default.string(),
    author: zod_1.default.string(),
});
const updatePostInput = zod_1.default.object({
    title: zod_1.default.string().min(7, "Invalid title"),
    content: zod_1.default.string(),
    author: zod_1.default.string().optional(),
});
