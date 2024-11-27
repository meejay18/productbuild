import { Request, Response } from "express";
import noteModel from "../../model/notesModel/noteModel";

export const createNote = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { title, content, createdBy, createdAt, category } = req.body;

    const note = await noteModel.create({
      title,
      content,
      createdBy,
      createdAt,
      category,
    });

    return res.status(201).json({
      message: "note successfully created ",
      data: note,
      status: 201,
    });
  } catch (error: any) {
    return res.status(404).json({
      message: "error creating note",
      data: error.message,
    });
  }
};

export const deleteNote = async (req: Request, res: Response) => {
  try {
    const { noteId } = req.params;

    const deletedNote = await noteModel.findByIdAndDelete(noteId);

    if (!deletedNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    return res.status(200).json({
      message: "Note deleted successfully",
    });
  } catch (error: any) {
    return res.status(500).json({
      message: "Error deleting note",
      error: error.message,
    });
  }
};
