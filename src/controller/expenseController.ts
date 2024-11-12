import ExpenseModel from '../models/ExpenseModel'; // Importando o modelo
import { Request, Response } from "express";


class DespesaController {
  // Método para criar uma despesa
  static async create(req: Request, res: Response) {
    const { description, amount, date } = req.body;

    try {
      // Validação simples dos campos
      if (!description || !amount || !date) {
        return res.status(400).json({
          success: false,
          message: 'Descrição, valor e data são obrigatórios.',
        });
      }

      // Criação do novo documento
      const expense = new ExpenseModel({
        description,
        amount,
        date,
      });

      // Salvando a despesa no banco de dados
      await expense.save();

      // Retornando sucesso
      return res.status(201).json({
        success: true,
        message: 'Despesa criada com sucesso!',
        data: expense,
      });
    } catch (error) {
      // Tratamento de erro
      return res.status(500).json({
        success: false,
        message: 'Erro ao criar despesa.',
      
      });
    }
  }
}

export default DespesaController;
