# Chorus-Lapilli

Chorus-Lapilli is a game similar to TicTacToe with some unique rules. After the first three moves, players must move their existing pieces to an adjacent empty square. Additionally, if a player occupies the center square and has three pieces on the board, they must either win or vacate the center square on the next move.

## How to Play

- Clone the repository: `git clone https://github.com/TanmayJDesai/Chorus-Lapilli.git`
- Navigate to the project directory: `cd Chorus-Lapilli`
- Install dependencies: `npm install`
- Run the application: `npm start`

## Game Rules

1. Players take turns making moves by clicking on the squares.
2. After the first three moves, players must move an existing piece to an adjacent empty square.
3. If a player occupies the center square and has three pieces on the board, they must either win or vacate the center square on the next move.

## Code Structure

- The game logic is implemented in `index.js`.
- React components `Square`, `Board`, and `Game` handle rendering and user interactions.
- Various helper functions (`calculateWinner`, `CanIMoveThereNext`, etc.) assist in game logic.

## Additional Information

- This project was created using React.
- The code includes comments for better understanding.
- Feel free to explore and modify the code to add new features or improve existing ones.

## License

This project is licensed under the [MIT License](LICENSE).
