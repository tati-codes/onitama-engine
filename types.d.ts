export enum pieces {
  "king" = 0,
  "pawn1" = 1,
  "pawn2" = 2,
  "pawn3" = 3,
  "pawn4" = 4,
}

export enum players {
  "white",
  "black"
}

export type coords = [number, number]

export interface card {
  id: number
  name: string
  moves: coords[]
}

export interface move {
  piece: pieces
  card: card["id"]
  dest: coords
}

export interface player {
  color: players,
  cards: [card["id"], card["id"]]
  pieces: {
    [key in pieces]: piece 
  }
}

export interface piece {
  id: pieces
  pos: coords
}

export interface state {
  "players": {
    [key in players]: player
  }
  turn: players
  swap_card: card["id"]
  moves: move[]
}