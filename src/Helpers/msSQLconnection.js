const Connection = require('tedious').Connection;
const Request = require('tedious').Request;

// Create connection to database
const config = {
  server: 'localhost',
  authentication: {
      type: 'default',
      options: {
          userName: 'SA',
          password: 'mySecret123'
      }
  },
  options: {
      database: 'CrisisGuide2',
      connectTimeout: 1000,
      port: 5100,
      trustServerCertificate: true
  }
}
const connection = new Connection(config);

export function storedProcExec(storedProc, storedProcParams) {
  let result;
  
  connection.connect(function(err) {
    var request = new Request(storedProc,
      function(err) {
        if (err) {
          console.log(err);
        }
  
        connection.close();
      });
  
      storedProcParams.forEach((inputParameter) => {
      request.addParameter(inputParameter.paramName, inputParameter.dtype, inputParameter.val);
    })
  
    request.on('row', function(columns) {
      
      columns.forEach(function(column) {
          if (column.value === null) {
              result += 'NULL';
          } else {
              result += column.metadata.colName + ": " + column.value + " ";
              console.log(column.metadata.colName + ": " + column.value + " ")
          }
      });
    });
  
    connection.callProcedure(request);

    //return result;
  });
}

