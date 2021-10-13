export default class Game {
  constructor(props) {
    this.matrix = [];
    this.fieldSize = props.fieldSize;
  }

  getMatrix() {
    return this.matrix;
  }

  setMatrix(matrix) {
    this.matrix = matrix.concat();
  }

  setRandomCellIntoMatrix() {
    // random cell value and position generate then write to matrix
    const value = Game.generateCellValue();
    while (true) {
      const position = Game.generateCellPosition(this.fieldSize);
      if (this.positionIsEmpty(position)) {
        this.matrix[position[0]][position[1]] = value;
        break;
      }
    }
  }

  static generateCellValue() {
    // generate random cell value
    let cellValue = '0';
    if ((Math.floor(1 + Math.random() * 10)) > 7) cellValue = '4';
    else cellValue = '2';

    return cellValue;
  }

  static generateCellPosition(max) {
    // generate random position on field
    const position = [];
    for (let i = 0; i < 2; i += 1) position.push(Math.round(Math.random() * (max - 1)));

    return position;
  }

  positionIsEmpty(position) {
    // check zero value of cell on position x,y
    if (this.matrix[position[0]][position[1]] === '0') return true;
    return false;
  }

  generateStartMatrix() {
    try {
      // fieldSize integer and range check
      if (!Number.isInteger(this.fieldSize)) throw new TypeError('FieldSize must be a Number');
      if (this.fieldSize < 4) throw new RangeError('FieldSize must be above or equal 4');

      // Matrix fill with zero values
      const field = [];
      for (let row = 0; row < this.fieldSize; row += 1) {
        const rowArr = [];
        for (let column = 0; column < this.fieldSize; column += 1) {
          rowArr.push('0');
        }
        field.push(rowArr.concat());
      }
      this.setMatrix(field);

      // randomize two values for field
      this.setRandomCellIntoMatrix();
      this.setRandomCellIntoMatrix();
    } catch (err) {
      console.log(err);
    }
  }
}
