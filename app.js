const isReachable = require('is-reachable');

var ipList = ['104.152.209.58', '104.194.249.219', '1.2.3.4', '5.1.2.3', '104.152.209.58'];
var dailyping = [];
const pingIP = async () => {
    for (var i = 0; i < ipList.length; i++) {
      var alive = await isReachable(`http://${ipList[i]}:6688`);
      var flag=0;
      if(alive){
        flag=1;
      }
      let obj = { "IPAddress": ipList[i], "Alive": alive, "flag":flag };
      dailyping.push(obj);
    }
    console.log("dailyping", dailyping)
}

const calcReputation = async () => {
  var ipList = ['104.152.209.58', '104.194.249.219', '1.2.3.4', '5.1.2.3', '104.152.209.58'];
  var noofdays = [30, 25, 14, 5, 0];
  var listofitems = []
  for (i = 0; i < ipList.length; i++) {
    const result = await ping.promise.probe(ipList[i], {
      timeout: 3,
      extra: ["-i", "2"],
    });
    var totaldays = noofdays[i] / 30;
    var reputation = totaldays * 5;
    let obj = { "IPAddress": ipList[i], "Alive": result.alive, "Reputation": reputation };
    listofitems.push(obj);
  }
  console.log("listofitems", listofitems)
}

pingIP();