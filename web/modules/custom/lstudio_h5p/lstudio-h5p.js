H5P.externalDispatcher.on('xAPI', function (event) {
  parent.postMessage(JSON.stringify(event.data.statement),"*")
  //console.log(JSON.stringify(event.data.statement));
});