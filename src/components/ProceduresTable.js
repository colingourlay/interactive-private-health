const { h, Component } = require('preact');
const { FORMATS, LINKS } = require('./App.config');
const styles = require('./ProceduresTable.css');

module.exports = ({ procedures, columns }) => (
  <table>
    <thead>
      <tr>{[<td />].concat(columns.map(column => <th>{column[1]}</th>))}</tr>
    </thead>
    <tbody>
      {procedures.map(procedure => (
        <tr>
          {[
            <th>
              {procedure.name}
              {procedure.description && <div className={styles.description}>{procedure.description}</div>}
            </th>
          ].concat(
            columns.map(column => (
              <td>{column[2] ? FORMATS[column[2]](procedure[column[0]]) : procedure[column[0]]}</td>
            ))
          )}
        </tr>
      ))}
    </tbody>
  </table>
);
