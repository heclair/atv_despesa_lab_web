import { Router } from "express";
import { DespesaController } from "../controller";


const router = Router();

// Rota para listar todos os usuários ou um específico, usando query params, por exemplo ?id=ID
//router.get("/objetivo", UserController.getUserDataById);

//router.get("/", UserController.list);

// Rota para criar um novo usuário
router.post("/", DespesaController.create);

// Rota para atualizar um usuário específico
//router.put("/", DespesaController.update);

// Rota para deletar um usuário específico
//router.delete("/", UserController.delete);

//router.put("/atualizarpeso/:id", UserController.updatePeso);

export default router;