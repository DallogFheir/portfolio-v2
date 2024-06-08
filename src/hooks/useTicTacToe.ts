import { useEffect, useRef, useMemo, useCallback } from "react";

const BORDER_CSS = "border-bottom: 1px solid white;";
const COMMAND_STYLE = "font-weight: bold; color: #b98eff";
const CORNERS = [
  [0, 0],
  [0, 2],
  [2, 0],
  [2, 2],
];
const O_SYMBOL = "O";
const X_SYMBOL = "X";
const TEXTS = {
  and: "and",
  board: "Here's the current state of the board.",
  choose: "Type the letter of the field you choose.",
  commandBoard: "board",
  commandPlay: "play",
  commandScores: "scores",
  commands:
    "Type %cscores%c to see the scores and %cboard%c to see the current state of the game.",
  cpuWonAgain: "I won! Again...",
  cpuWonFirst: "I won!",
  doingGreat: "You're doing great 😂",
  dontWantToPlayAgain: "I'm not playing with you, cheater.",
  draw: "Nice, you managed to tie with me.",
  haveSingular: "has",
  havePlural: "have",
  noScoresYet: "No scores yet...",
  play: "play",
  playAgain: 'If you want to play again, type "play" into the console.',
  pluralSuffix: "s",
  prettyGood: "Pretty good 😉",
  scores:
    "Current scores: I won {{computer}}, there {{draw}}, you won {{user}}.",
  seeScores: 'To see scores, type "scores" into the console.',
  taken: "This field is already taken!",
  timeSingular: "time",
  timePlural: "times",
  unexpectedError: "Unexpected error happened. Please try again later.",
  userWon: "THIS SHOULD NEVER HAPPEN! How did you do this, cheater?",
  welcome: "Wanna play tic-tac-toe?",
  yourMove: "Your move!",
};

function useTicTacToe() {
  const board = useMemo(
    () => [
      ["A", "B", "C"],
      ["D", "E", "F"],
      ["G", "H", "I"],
    ],
    []
  );

  const ticTacToe = useRef(board.map((row) => [...row]));
  const winCount = useRef({
    computer: 0,
    user: 0,
    draw: 0,
  });

  const printBoard = useCallback(() => {
    const styles = [BORDER_CSS];
    const board =
      "%c" +
      ticTacToe.current
        .map((row, rowIdx) =>
          row
            .map((cell, cellIdx) => {
              let color = "gray";
              switch (cell) {
                case X_SYMBOL: {
                  color = "rgb(218, 51, 51)";
                  break;
                }
                case O_SYMBOL: {
                  color = "rgb(38, 187, 38)";
                  break;
                }
              }

              let style = `color: ${color};`;
              if (rowIdx !== 2) {
                style += BORDER_CSS;
              }
              styles.push(style);

              let res = `%c${cell}`;
              if (cellIdx === 0) {
                res = " " + res;
              } else if (cellIdx === 2) {
                res += " ";
              }

              res += "%c";
              styles.push(
                rowIdx === 2 || (rowIdx === 1 && cellIdx === 2)
                  ? ""
                  : BORDER_CSS
              );

              return res;
            })
            .join(" | ")
        )
        .join("\n");

    console.log(board, ...styles);
  }, [ticTacToe]);

  const makeComputerMove = useCallback(() => {
    let cellIdxs = null;
    let possibleOpponentWin = null;
    let possibleFork = null;
    const possibleForkCells = new Map();
    const possibleOpponentForks: Set<string> = new Set();
    const possibleOpponentForkCells = new Set();

    const array012 = [0, 1, 2];
    const linesAsArrays = [
      ...array012.map((idx) => [Array(3).fill(idx), [...array012]]),
      ...array012.map((idx) => [[...array012], Array(3).fill(idx)]),
      [[...array012], [...array012]],
      [[...array012], [2, 1, 0]],
    ];

    const linesIdxs = linesAsArrays.map((lineAsArray) =>
      lineAsArray[0].map((el, idx) => [el, lineAsArray[1][idx]])
    );

    linesIdxs.every((lineIdx) => {
      const line = lineIdx.map(
        ([rowIdx, colIdx]) => ticTacToe.current[rowIdx][colIdx]
      );

      const computerSymbolIdxs = line
        .map((symbol, idx) => {
          if (symbol === O_SYMBOL) {
            return idx;
          }

          return null;
        })
        .filter((el) => el !== null);
      const opponentSymbolCount = line.filter(
        (symbol) => symbol === X_SYMBOL
      ).length;
      const emptyIdxs = line
        .map((symbol, idx) => {
          if (symbol !== X_SYMBOL && symbol !== O_SYMBOL) {
            return idx;
          }

          return null;
        })
        .filter((el) => el !== null);

      if (computerSymbolIdxs.length === 2 && emptyIdxs.length === 1) {
        cellIdxs = lineIdx[emptyIdxs[0]!];
        return false;
      }

      if (opponentSymbolCount === 2 && emptyIdxs.length === 1) {
        possibleOpponentWin = lineIdx[emptyIdxs[0]!];
      } else if (computerSymbolIdxs.length === 1 && emptyIdxs.length === 2) {
        emptyIdxs.every((emptyIdx, emptyIdxIdx) => {
          const forkCellIdxs = lineIdx[emptyIdx!];
          const forkCell = `${forkCellIdxs[0]},${forkCellIdxs[1]}`;

          if (possibleForkCells.has(forkCell)) {
            possibleFork = forkCellIdxs;
            return false;
          }

          const theOtherEmptyIdx = lineIdx[emptyIdxs[1 - emptyIdxIdx]!];
          possibleForkCells.set(forkCell, theOtherEmptyIdx);
          return true;
        });
      } else if (opponentSymbolCount === 1 && emptyIdxs.length === 2) {
        emptyIdxs.every((emptyIdx) => {
          const forkCellIdxs = lineIdx[emptyIdx!];
          const forkCell = `${forkCellIdxs[0]},${forkCellIdxs[1]}`;

          if (possibleOpponentForkCells.has(forkCell)) {
            possibleOpponentForks.add(forkCell);
          }

          possibleOpponentForkCells.add(forkCell);
          return true;
        });
      }

      return true;
    });

    if (cellIdxs === null) {
      if (possibleOpponentWin !== null) {
        cellIdxs = possibleOpponentWin;
      } else if (possibleFork !== null) {
        cellIdxs = possibleFork;
      } else if (possibleOpponentForks.size === 1) {
        cellIdxs = [...possibleOpponentForks][0].split(",");
      } else if (possibleOpponentForks.size > 1) {
        [...possibleForkCells.entries()].every(
          ([possibleForkCell, theOtherEmptyCell]) => {
            if (!possibleOpponentForks.has(possibleForkCell)) {
              cellIdxs = theOtherEmptyCell;
              return false;
            }

            return true;
          }
        );
      } else if (
        ticTacToe.current[1][1] !== O_SYMBOL &&
        ticTacToe.current[1][1] !== X_SYMBOL
      ) {
        cellIdxs = [1, 1];
      } else {
        let emptyCorner = null;
        const isInCorner = CORNERS.every((corner) => {
          const [rowIdx, colIdx] = corner;

          if (ticTacToe.current[rowIdx][colIdx] === X_SYMBOL) {
            const oppositeRowIdx = rowIdx === 0 ? 2 : 0;
            const oppositeColIdx = colIdx === 0 ? 2 : 0;

            if (
              ticTacToe.current[oppositeRowIdx][oppositeColIdx] !== X_SYMBOL &&
              ticTacToe.current[oppositeRowIdx][oppositeColIdx] !== O_SYMBOL
            ) {
              cellIdxs = [oppositeRowIdx, oppositeColIdx];
              return false;
            }
          } else if (ticTacToe.current[rowIdx][colIdx] !== O_SYMBOL) {
            emptyCorner = corner;
          }

          return true;
        });

        if (isInCorner) {
          if (emptyCorner !== null) {
            cellIdxs = emptyCorner;
          } else {
            const sides = [
              [0, 1],
              [1, 0],
              [1, 2],
              [2, 1],
            ];

            sides.every((side) => {
              const [rowIdx, colIdx] = side;

              if (
                ticTacToe.current[rowIdx][colIdx] !== X_SYMBOL &&
                ticTacToe.current[rowIdx][colIdx] !== O_SYMBOL
              ) {
                cellIdxs = side;
                return false;
              }

              return true;
            });
          }
        }
      }
    }

    const [rowIdx, colIdx] = cellIdxs!;
    ticTacToe.current[Number(rowIdx)][Number(colIdx)] = O_SYMBOL;
  }, [ticTacToe]);

  const formatScore = (key: string, score: number) =>
    key === "draw"
      ? `${
          score === 1 ? TEXTS.haveSingular : TEXTS.havePlural
        } been %c${score}%c draw${score === 1 ? "" : TEXTS.pluralSuffix}`
      : `%c${score}%c ${score === 1 ? TEXTS.timeSingular : TEXTS.timePlural}`;

  const printScores = useCallback(() => {
    const scores = winCount.current;

    const scoresText = Object.entries(scores).reduce(
      (scoresText, [key, score]) =>
        scoresText.replace(`{{${key}}}`, formatScore(key, score)),
      TEXTS.scores
    );

    const cssStyle = "color: rgb(255, 166, 0); font-weight: bold;";
    console.log(scoresText, cssStyle, "", cssStyle, "", cssStyle, "");
  }, []);

  let addVariables: ((reset?: boolean) => void) | null = null;
  const cleanUpAfterGame = useCallback(() => {
    printScores();
    addVariables?.(true);
    Object.defineProperty(window, TEXTS.commandPlay, {
      configurable: true,
      get() {
        ticTacToe.current = board.map((row) => [...row]);
        printBoard();
        console.log(TEXTS.choose);
        addVariables?.();
        return TEXTS.yourMove;
      },
    });

    return TEXTS.playAgain;
  }, [board, addVariables, printBoard, printScores]);

  addVariables = useCallback(
    (reset = false) => {
      board.forEach((row, rowIdx) =>
        row.forEach((cell, cellIdx) => {
          if (reset || ticTacToe.current[rowIdx][cellIdx] !== cell) {
            // @ts-expect-error custom property
            delete window[cell];
          } else {
            Object.defineProperty(window, cell, {
              configurable: true,
              get() {
                const isWon = () => {
                  const winner = checkWinner();
                  if (winner !== null) {
                    if (winner === X_SYMBOL) {
                      Object.defineProperty(window, TEXTS.play, {
                        configurable: true,
                        get() {
                          return TEXTS.playAgain;
                        },
                      });
                      // @ts-expect-error custom property
                      delete window.scores;
                      // @ts-expect-error custom property
                      delete window.board;
                      throw new Error(TEXTS.userWon);
                    }

                    console.log(
                      winCount.current.computer === 0
                        ? TEXTS.cpuWonFirst
                        : TEXTS.cpuWonAgain
                    );

                    winCount.current.computer++;

                    return true;
                  }

                  return false;
                };

                const isDraw = () => {
                  if (
                    ticTacToe.current.every((row) =>
                      row.every(
                        (cell) => cell === X_SYMBOL || cell === O_SYMBOL
                      )
                    )
                  ) {
                    console.log(TEXTS.draw);
                    winCount.current.draw++;
                    return true;
                  }

                  return false;
                };

                ticTacToe.current[rowIdx][cellIdx] = X_SYMBOL;

                if (isWon() || isDraw()) {
                  return cleanUpAfterGame();
                }
                makeComputerMove();
                printBoard();
                if (isWon() || isDraw()) {
                  return cleanUpAfterGame();
                }
                addVariables?.();
                return TEXTS.yourMove;
              },
            });
          }
        })
      );
    },
    [board, makeComputerMove, printBoard, addVariables, cleanUpAfterGame]
  );

  const checkWinner = () => {
    const isWon = (line: string[]) =>
      new Set(line).size === 1 &&
      (line[0] === X_SYMBOL || line[0] === O_SYMBOL);

    for (const row of ticTacToe.current) {
      if (isWon(row)) {
        return row[0];
      }
    }

    for (let i = 0; i < 3; i++) {
      const col = Array(3)
        .fill(null)
        .map((_, j) => ticTacToe.current[j][i]);

      if (isWon(col)) {
        return col[0];
      }
    }

    const diag1 = Array(3)
      .fill(null)
      .map((_, i) => ticTacToe.current[i][i]);
    if (isWon(diag1)) {
      return diag1[0];
    }

    const diag2 = [
      ticTacToe.current[2][0],
      ticTacToe.current[1][1],
      ticTacToe.current[0][2],
    ];
    if (isWon(diag2)) {
      return diag2[0];
    }

    return null;
  };

  const printedWelcome = useRef(false);
  useEffect(() => {
    if (!printedWelcome.current) {
      console.log(TEXTS.welcome);
      printBoard();
      addVariables?.();

      printedWelcome.current = true;
    }
  }, [printedWelcome, printBoard, addVariables]);

  useEffect(() => {
    const scoresFn = () => {
      const { computer, draw, user } = winCount.current;

      if ([computer, draw, user].every((score) => score === 0)) {
        return TEXTS.noScoresYet;
      }

      printScores();

      return winCount.current.computer >= 2 * winCount.current.draw
        ? TEXTS.doingGreat
        : TEXTS.prettyGood;
    };
    const boardFn = () => {
      printBoard();

      return TEXTS.board;
    };

    // @ts-expect-error custom property
    delete window.scores;
    // @ts-expect-error custom property
    delete window.board;

    Object.defineProperty(window, TEXTS.commandBoard, {
      configurable: true,
      get: boardFn,
    });
    Object.defineProperty(window, TEXTS.commandScores, {
      configurable: true,
      get: scoresFn,
    });

    const commands = [
      TEXTS.commandBoard,
      TEXTS.commandPlay,
      TEXTS.commandScores,
    ];

    const availableCommands = commands.filter((command) =>
      Object.prototype.hasOwnProperty.call(window, command)
    );
    if (availableCommands.length > 0) {
      const formattedCommands = availableCommands.map(
        (command) => `%c${command}%c`
      );

      let commandString = formattedCommands.slice(0, -1).join(", ");
      if (commandString.length > 0) {
        if (availableCommands.length > 2) {
          commandString += ",";
        }

        commandString += " ";
        commandString += TEXTS.and;
        commandString += " ";
      }
      commandString += formattedCommands.at(-1);

      const message = TEXTS.commands;

      const styles: string[] = [];
      Array(availableCommands.length)
        .fill(null)
        .forEach(() => {
          styles.push(COMMAND_STYLE);
          styles.push("");
        });

      console.log(message, ...styles);
    }
  }, [printBoard, printScores]);
}

export default useTicTacToe;
