import {http} from "./http"
import "./websocket/client";
import "./websocket/admin";

http.listen(3333, () => console.log('Server is running on port 3333'));

/**
 * GET = Buscas
 * POST = Criação (INSERT on db)
 * PUT = Alteração (ALTER TABLE or UPDATE)
 * DELETE = Deletar
 * PATCH = Alterar info específica
 */
