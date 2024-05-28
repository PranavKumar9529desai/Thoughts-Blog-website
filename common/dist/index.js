"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const z = __importStar(require("zod"));
const hasUppercase = (str) => /[A-Z]/.test(str);
const hasLowercase = (str) => /[a-z]/.test(str);
const hasNumber = (str) => /\d/.test(str);
const hasSymbol = (str) => /[!@#$%^&*]/.test(str);
const SignupInput = z.object({
    email: z.string().email('Invliad email format'),
    username: z.string().min(3, "Username must have atleast 3 letters"),
    password: z.string()
        .min(6, "Password must be of minimum of 6 letters")
}).refine((value) => {
    hasUppercase(value.password) &&
        hasLowercase(value.password) &&
        hasNumber(value.password) &&
        hasSymbol(value.password),
        'Password must contain uppercase, lowercase, numbers, and symbols';
});
const SigninInput = z.object({
    email: z.string().email('Invliad email format'),
    password: z.string()
        .min(6, "Password must be of minimum of 6 letters")
}).refine((value) => hasUppercase(value.password) &&
    hasLowercase(value.password) &&
    hasNumber(value.password) &&
    hasSymbol(value.password), 'Password must contain uppercase, lowercase, numbers, and symbols');
const CreatePostInput = z.object({
    title: z.string().min(7, "Invalid title ,title atlest have 7 words"),
    content: z.string().min(50, "Invalid description, description atleast have 50 words"),
    author: z.string(),
});
const UpdatePostInput = z.object({
    title: z.string().min(7, "Invalid title ,title atlest have 7 words"),
    content: z.string().min(50, "Invalid description, description atleast have 50 words"),
    author: z.string().optional(),
});
