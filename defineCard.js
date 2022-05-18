/*
You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):

('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'



*/

const defineSuit = (card) => {
  card = card.substr(-1);
  if (card === "♣") {
    return "clubs";
  } else if (card === "♦") {
    return "diamonds";
  } else if (card === "♥") {
    return "hearts";
  } else if (card === "♠") {
    return "spades";
  }
};
